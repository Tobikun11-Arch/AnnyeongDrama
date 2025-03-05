import { z } from "zod";

export const signUpSchema = z.object({
    username: z.string().min(1, "Username is required"),
    faveDrama: z.string().min(1, "Favorite K-drama is required"),
    email: z.string().min(1, "Email is required").email("Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z.string().min(1, "Confirm password is required"),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
});
