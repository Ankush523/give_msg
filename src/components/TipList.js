import React, { useState } from 'react';
import GetContract from '../hooks/GetContract';

const TipList = () => {

    const contract = GetContract();
    const[lists,setList]=useState([]);
    
    const getList=async()=>{
        var len = await contract.getCount();
        var parselist = len.toString();
        setList([]);
        for(let i=1;i<=parselist;i++){
            var list = await contract.receivemsg(i);
            setList((lists)=>[...lists,list])
        }
    }

    return ( 
        <div>
            <button className='font-mono flex ml-4 bg-blue-400 rounded-xl w-[fit-content] pl-2 pr-2 shadow-xl' onClick={getList} >Get List</button>
            {
                Object.keys(lists).map((list,index)=>(
                    <p>{lists[index].message}</p>
                ))
            }
        </div>
     );
}
 
export default TipList;