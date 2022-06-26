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
            <button onClick={getList} >Get List</button>
            {
                Object.keys(lists).map((list,index)=>(
                    <p>{lists[index].message}</p>
                ))
            }
        </div>
     );
}
 
export default TipList;