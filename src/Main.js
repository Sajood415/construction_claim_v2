import React from 'react'
import { useState } from 'react';
import Web3 from 'web3';
import { Link, useNavigate } from 'react-router-dom';

import bg from './civil.png';


const Main = () => {
    let navigate = useNavigate();
    const [isConnected, setIsConnected] = useState(false);
    const [accountAddress, setAccountAddress] = useState('');

    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload();
        navigate("/");
    })

    const detectCurrentProvider = () => {
        let provider;
        if (window.ethereum) {
            provider = window.ethereum;
        } else if (window.web3) {
            // eslint-disable-next-line
            provider = window.web3.currentProvider;
        } else {
            console.log(
                'Non-Ethereum browser detected. You should consider trying MetaMask!'
            );
        }
        return provider;
    };

    const onConnect = async () => {
        try {
            const currentProvider = detectCurrentProvider();
            if (currentProvider) {
                if (currentProvider !== window.ethereum) {
                    console.log(
                        'Non-Ethereum browser detected. You should consider trying MetaMask!'
                    );
                }
                await currentProvider.request({ method: 'eth_requestAccounts' });
                const web3 = new Web3(currentProvider);

                const userAccount = await web3.eth.getAccounts();
                const account = userAccount[0];
                setAccountAddress(account);
                setIsConnected(true)

                if (userAccount.length === 0) {
                    console.log('Please connect to meta mask');
                }
            }
        } catch (err) {
            console.log(
                'There was an error fetching your accounts. Make sure your Ethereum client is configured correctly.'
            );
        }
    };

    return (
        <div className="App-header">
            {!isConnected && (
                <div className='bgImg' style={{ backgroundImage: `url(${bg})` }}>
                    <div>
                        <button className="button" onClick={onConnect}>
                            Connect to MetaMask
                        </button>
                    </div>
                </div>
            )}
            {isConnected && (
                <header>
                    <nav className="navbar">
                        <div className="accountAdd">
                            <span>Account number:  </span>
                            {accountAddress}
                        </div>
                    </nav>

                    <div className='body'>
                        <div className='roleButton'>
                            <Link className='mainRoleButton' style={{ color: 'white' }} to="/admin" state={{ accountAddress }}>Admin</Link>
                            <Link className='mainRoleButton' style={{ color: 'white' }} to="/contractor" state={{ accountAddress }}>Contractor</Link>
                            <Link className='mainRoleButton' style={{ color: 'white' }} to="/consultant" state={{ accountAddress }}>Consultant</Link>
                            <Link className='mainRoleButton' style={{ color: 'white' }} to="/client" state={{ accountAddress }}>Client</Link>
                        </div>
                    </div>
                </header>
            )
            }
        </div>
    )
}

export default Main;
