import React from 'react'
import {
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
export default function HeroDialog() {
    return (

        <DialogContent>
            <div className="flex flex-col items-center justify-center">
                <p className="text-2xl text-light font-medium">Signup!</p>
                <p className="text-neutral-500 text-sm pt-2.5">Enter your details</p>
                <div className="w-full mt-8 flex flex-col items-center">
                    <div className="w-[80%] mb-0.5">
                        <label className='text-neutral-400 mr-auto text-sm'>Email</label>
                    </div>
                    <input required type="email" placeholder='ansharora3839@gmail.com' className='bg-black border focus:outline-none pl-3 text-light focus:border-neutral-400 border-neutral-600 h-10 rounded-sm w-[80%] placeholder:text-neutral-600 placeholder:text-sm' />
                </div>
                <div className="w-full mt-4 flex flex-col items-center">
                    <div className="w-[80%] mb-0.5">
                        <label className='text-neutral-400 mr-auto text-sm'>Password</label>
                    </div>
                    <input required type="password" placeholder='*****' className='bg-black border focus:outline-none pl-3 text-light focus:border-neutral-400 border-neutral-600 h-10 rounded-sm w-[80%] placeholder:text-neutral-600 placeholder:text-sm' />
                </div>
                <button className="w-4/5 text-light bg-zinc-800 mt-8 py-2 rounded-md hover:opacity-90 border-neutral-500">Signup</button>
                <div className="w-[90%] flex mt-8 items-center">
                    <div className="w-[45%] h-[1px] bg-neutral-400"></div>
                    <span className="text-neutral-300 opacity-90 mx-3 text-sm font-medium">or</span>
                    <div className="w-[45%] h-[1px] bg-neutral-400"></div>
                </div>
            </div>
        </DialogContent>


    )
}
