import React from 'react';
import { useContract } from 'wagmi';
import CounterABI from '../contracts/ABIs/CounterABI.json'
import { useSigner } from 'wagmi';

const GetContract = () => {

    const{data:signer}=useSigner();

    const contract = useContract({
        addressOrName: '0xBf05F27Af0De4c92DAbac593Eb8b6E84D33C55C9',
        contractInterface: CounterABI,
        signerOrProvider: signer,
      })

    return contract;
}
 
export default GetContract;