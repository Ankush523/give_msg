import logo from './logo.svg';
import GetAccount from './hooks/GetAccount';
import './App.css';

function App() {
  return (
    <div className='App' >
      <br/>
      <label className='text-black font-mono text-[20px] bg-pink-300 
       p-3 w-[fit-content] rounded-xl mt-4 ml-4 bg-indigo-500 shadow-lg shadow-indigo-500/50'> Current Wallet : {GetAccount()}</label>
      <br/>
    </div>
  );
}

export default App;