"use client"
import React, { Fragment, useState, useRef, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useUserData } from "@/app/state/UserData";
import Label from "./Label";
import Image from "next/image";
import { PenLine } from 'lucide-react';
import axios from "axios";
import { useQueryClient } from '@tanstack/react-query';
import { Ring } from "@uiball/loaders";

interface EditProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function EditProfile({ isOpen, closeModal }: EditProps) {
   const queryClient = useQueryClient();
  const { userdata } = useUserData()
  const [ image, setImage ] = useState<File | null>(null)
  const [ preview, setPreview ] = useState<string>('')
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [ form, setForm ] = useState({
    username: '',
    faveKdrama: '',
    watching: '',
    bio: ''
  })
  const cloudinary = process.env.NEXT_PUBLIC_CLOUDINARY || ''

  const handleSubmit = (userId: string) => async(e: React.FormEvent<HTMLFormElement>) => {  
    e.preventDefault()
    let url = ''
    setLoading(true)

      if(image) {
        try {
           //Converting to blob object
          const formData = new FormData()
          formData.append("file", image)
          formData.append('upload_preset', 'AnnyeongDrama');
  
          //sending and getting url from cloudinary
          const cloudinary_response = await axios.post(cloudinary, formData)
          url = cloudinary_response.data.secure_url
        } catch (error) {
          console.error("Try error: ", error)
        }
      }

      try {
        const newData = {
          userId: userId,
          username: form.username,
          faveKdrama: form.faveKdrama,
          watching: form.watching,
          bio: form.bio,
          ProfileImg: url
        } 

        const response = await axios.post("http://localhost:5000/api/user/update", newData, { withCredentials: true })
        closeModal(); 
        queryClient.invalidateQueries({ queryKey: ['Verification'] });

        if(response.data.message === "Update successfully") {
          setTimeout(() => {
            setLoading(false); 
          }, 1000);
        }

      } catch (error) {
        console.error("Try error: ", error)
        setLoading(false);
      }
      
  }
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <>
    {loading && (
      <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-50 z-50">
        <div className="flex flex-col items-center">
          <Ring size={35} lineWeight={5} speed={2} color="blue" />
        </div>
      </div>
    )}

    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="font-mono leading-6 text-gray-900 font-semibold text-xl"
                >
                  Edit Profile
                </Dialog.Title>
                <div className="mt-7 flex">
                    <div className='w-16 h-16 overflow-hidden relative rounded-full place-items-center'>
                        <Image
                            fill
                            src={preview || preview || userdata[0].ProfileImg || "/user_profile_placeholder.jpg"} 
                            alt='user profile'
                            loading='lazy'
                            placeholder='blur'
                            blurDataURL='/placeholder.png'
                        />
                    </div>
                    <div className="flex flex-col justify-between">
                        <p className="text-sm ml-2 text-gray-500">Change profile picture*</p>
                        <input type="file" accept="image/*" className="hidden" onChange={handleFileChange} ref={fileInputRef}/>
                        <PenLine size={16} className="-ml-3 hover:cursor-pointer" color="black" onClick={()=>  fileInputRef.current?.click()}/>
                    </div>
                </div>
                {userdata.map((user, index)=> (
                    <div className="mt-2" key={`${user.Username}-${index}`}>
                        <form action="/new/data" className="flex flex-col gap-2" onSubmit={handleSubmit(user._id)}>
                            <Label htmlFor="username" type="text" name="username" id="username" placeholder={user.Username} value={form.username} onchange={handleChange}>
                                Username
                            </Label>

                            <Label htmlFor="faveKdrama" type="text" name="faveKdrama" id="faveKdrama" placeholder={user.FaveKdrama} value={form.faveKdrama} onchange={handleChange}>
                                Favorite Kdrama
                            </Label>

                            <Label htmlFor="watching" type="text" name="watching" id="watching" placeholder={user.Watching ? user.Watching : 'e.g Study group'} value={form.watching} onchange={handleChange}>
                               Currently Watching
                            </Label>

                             <div>
                               <p>Add Bio</p>
                               <textarea name="bio" id="bio" className="w-full text-sm h-24 resize-none border p-2 outline-none rounded-lg" placeholder={`${user.AboutMe ? user.AboutMe : 'I love this web app'}`} value={form.bio} onChange={handleChange}></textarea>
                             </div>
        
                            <div className="w-full flex gap-2 mt-5">
                                <button className="w-full rounded-lg py-2 bg-white text-black border hover:bg-blue-600 hover:text-white font-semibold" type="button"  onClick={closeModal}>Cancel</button>
                                <button className="w-full rounded-lg py-2 bg-black text-white font-semibold" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                ))}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
    </>
  );
}
