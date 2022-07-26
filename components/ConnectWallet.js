


const ConnectWallet = ({connectWalletHandler, currentAccount}) => {
    
    return (
          <div>
              <button onClick={connectWalletHandler} className='connectwalletbutton'>{currentAccount
                  ? `${currentAccount.substring(0, 4)}..........${currentAccount.substring(38, 41)}`
                  : 'Connect Wallet'}</button>
          </div>
          )
}

export default ConnectWallet