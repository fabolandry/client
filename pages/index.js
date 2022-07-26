import LeftAnnouncement from '../components/LeftAnnouncement';
import RightAnnouncement from '../components/RightAnnouncement';
import ConnectWallet from '../components/ConnectWallet';
import ProjectDescription from '../components/ProjectDescription';
import {useState} from 'react';


const style = {
  wrapper: `flex flex-col h-screen w-screen bg-black text-white overflow-scroll scrollbar-hide`,
  header: `flex flex-row justify-between text-white`,
  headerLeft: `flex flex-row ml-16 mt-10`,
  headerRight: `flex flex-row items-center mr-20 mt-10 border-2 border-white w-auto h-12 font-specialelite text-2xl px-3 rounded-lg bg-white text-black`,
  headerTitle: `font-specialelite text-4xl mt-6 ml-6`,
  projectDescription : `flex flex-row self-center border-2 border-white mt-28 w-8/12 h-auto`,
  launchpadCommunications : `flex flex-row justify-around mt-28 w-screen h-auto`,
  footer: `flex flex-row self-center justify-center border-t mt-12 w-8/12 h-auto`
}


export default function Home(){
  const [currentAccount, setcurrentAccount] = useState(null);
    const connectWalletHandler = async (event) => {
        event.preventDefault();
        const { ethereum } = window;
        if (!ethereum) {
          alert("Please install Metamask!");
        }
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          console.log("Found an account! Address: ", accounts[0]);
          setcurrentAccount(accounts[0]);
          console.log(currentAccount);
        } catch (err) {
          console.log(err)
        }
      }
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerLeft}>
          <img src="images/logo.jpg" />
          <div className={style.headerTitle}>Launchpad</div>
        </div>
        <div className={style.headerRight}>
        <ConnectWallet connectWalletHandler={connectWalletHandler} currentAccount={currentAccount} setcurrentAccount={setcurrentAccount}  />
        </div>
      </div>
      <ProjectDescription currentAccount={currentAccount}/>
      <div className={style.launchpadCommunications}>
        <LeftAnnouncement/>
        <RightAnnouncement/>
      </div>
      <div className={style.footer}>
        <img src="images/logo.jpg" />
      </div>
    </div>
  )
}
