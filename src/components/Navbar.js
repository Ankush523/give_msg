import React from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
const Navbar = () => {
    return ( 
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] bg-gradient-to-r from-indigo-500 shadow-xl justify-between '>
            <label className='font-serif text-slate-100 font-light p-2 text-center text-2xl rounded-full '>
                GIVE_TIP
            </label>
            <ConnectButton/>
        </div>

    );
}
 
export default Navbar;