import Homepage from "./pages/Homepage";
import AuthProvider from "./AuthProvider";

export default function Home() {
  return <AuthProvider><Homepage /></AuthProvider>
}