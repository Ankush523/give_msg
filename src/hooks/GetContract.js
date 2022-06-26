import React from 'react';
import { useContract } from 'wagmi';
import GiveTipABI from '../contracts/ABIs/GiveTipABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xd78519072c5fb615A6C6D78a930AE882C5962E96',
        contractInterface: GiveTipABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;