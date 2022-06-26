import React from 'react';
import { useContract } from 'wagmi';
import GiveTipABI from '../contracts/ABIs/GiveTipABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0x9538b8B90D5f65965CDB0d900998f7E2B75F4505',
        contractInterface: GiveTipABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;