import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const GiveTip = () => {

    const[msg,setMsg]=useState('');
    const[addr,setAddr]=useState('');

    const contract = GetContract();

    const sendmsg=async()=>{
        await contract.sample(addr,msg)
    }

    return ( 
    <div>
        <div className='flex flex-row w-[100vw] h-[fit-content] p-[20px] shadow-xl justify-between'>
            <br/>
            <label className='font-mono font-bold   w-[fit-content] p-1 px-2 py-2'>Message : </label>
            <input className='rounded-xl shadow-xl' onChange={e=>setMsg(e.target.value)} />
            <br/>
            <label className='font-mono font-bold  w-[fit-content] p-1 px-2 py-2'>Creator Address : </label>
            <input className='rounded-xl shadow-xl' onChange={e=>setAddr(e.target.value)} />
            <br/>
        </div>
        <br/>
        <div>
        <button className='font-mono w-[fit-content] bg-blue-400 bg-indigo-500  shadow-lg shadow-indigo-500/50  
                           rounded-xl mt-4 ml-4 p-1  px-4 ' onClick={sendmsg}>Give Message</button>
        </div>
    </div>
     );
}
 
export default GiveTip;