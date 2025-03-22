import { ApiResponseData } from "@/app/AuthProvider";
import { FC } from "react";
import Image from "next/image";
import { UserPlus } from 'lucide-react';

interface SubProfileProps {
    user: ApiResponseData | null
}

export const SubProfile: FC<SubProfileProps> = ({ user }) => {
    return (
        <div>   
            {user && user.user.length > 0 && (
                <>
                    {user.user.map((user, index) => (
                        <div key={`${user._id}-${index}`} className="px-3 py-4 text-black shadow-md rounded-xl mt-5 w-[25.625rem]">
                            <div className="flex justify-between">
                                <div className="flex items-center gap-1">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                                        <Image 
                                            src={user.ProfileImg ? user.ProfileImg : "/placeholder.png"} 
                                            alt="profile"
                                            fill
                                            loading="lazy"
                                            blurDataURL="/placeholder.png"
                                        />
                                    </div>
                                    <div className="user-details font-semibold font-poppins text-md">
                                        <p>{user.Username}</p>
                                        <p>{user.Follower} {user.Follower > 1 ? "Followers" : "Follower"}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <UserPlus size={18}/>
                                </div>
                            </div>
                            <p className="mt-5 font-semibold">Fave Kdrama: {user.FaveKdrama ? user.FaveKdrama : "No favorite drama yet"}</p>
                            <p className="mt-1 text-sm"><span className="font-bold">About {user.Username}:</span> {user.AboutMe ? user.AboutMe : "No bio yet"}</p>
                        </div>
                    ))}
                </> 
            )}
        </div>
    )
}
