import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useUserData } from "@/app/state/UserData";
import Label from "./Label";

interface EditProps {
  isOpen: boolean;
  closeModal: () => void;
}

export default function EditProfile({ isOpen, closeModal }: EditProps) {
    const { userdata } = useUserData()

  return (
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
                {userdata.map((user, index)=> (
                    <div className="mt-5" key={`${user.Username}-${index}`}>
                        <form action="" className="flex flex-col gap-2" onSubmit={(e)=> e.preventDefault()}>

                            <Label htmlFor="username" type="text" name="username" id="username" placeholder={user.Username}>
                                Username
                            </Label>

                            <Label htmlFor="faveKdrama" type="text" name="faveKdrama" id="faveKdrama" placeholder={user.FaveKdrama}>
                                Favorite Kdrama
                            </Label>

                            <Label htmlFor="watching" type="text" name="watching" id="watching" placeholder={user.Watching ? user.Watching : 'e.g Study group'}>
                               Currently Watching
                            </Label>
        
                            <div className="w-full flex gap-2 mt-5">
                                <button className="w-full rounded-lg py-2 bg-white text-black border hover:bg-blue-600 hover:text-white font-semibold" onClick={closeModal}>Cancel</button>
                                <button className="w-full rounded-lg py-2 bg-black text-white font-semibold">Submit</button>
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
  );
}
