import LeftAnnouncement from '../components/LeftAnnouncement';
import RightAnnouncement from '../components/RightAnnouncement';
import ConnectWallet from '../components/ConnectWallet';
import ProjectDescription from '../components/ProjectDescription';
import {useState} from 'react';
import {ethers} from 'ethers';
import  projectNemesis from '../../artifacts/contracts/ProjectNemesis.sol/ProjectNemesis.json';

const projectNemesisAddress = "0xc04E3C546Ae2A78A916C5D97B86d542b50DDdcA5";

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
  const [isSold0, setIsSold0] = useState(false);
  const [isSold1, setIsSold1] = useState(false);
  const [isSold2, setIsSold2] = useState(false);
  const [isSold3, setIsSold3] = useState(false);
  const [isSold4, setIsSold4] = useState(false);
  const [isSold5, setIsSold5] = useState(false);
  const [isSold6, setIsSold6] = useState(false);
  const [isSold7, setIsSold7] = useState(false);
  const [isSold8, setIsSold8] = useState(false);
  const [isSold9, setIsSold9] = useState(false);
  const [isSold10, setIsSold10] = useState(false);
  const [isSold11, setIsSold11] = useState(false);

  async function checknft() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const isNft0Sold = await contract.nft0minted();
            setIsSold0(isNft0Sold);
            const isNft1Sold = await contract.nft1minted();
            setIsSold1(isNft1Sold);
            const isNft2Sold = await contract.nft2minted();
            setIsSold2(isNft2Sold);
            const isNft3Sold = await contract.nft3minted();
            setIsSold3(isNft3Sold);
            const isNft4Sold = await contract.nft4minted();
            setIsSold4(isNft4Sold);
            const isNft5Sold = await contract.nft5minted();
            setIsSold5(isNft5Sold);
            const isNft6Sold = await contract.nft6minted();
            setIsSold6(isNft6Sold);
            const isNft7Sold = await contract.nft7minted();
            setIsSold7(isNft7Sold);
            const isNft8Sold = await contract.nft8minted();
            setIsSold8(isNft8Sold);
            const isNft9Sold = await contract.nft9minted();
            setIsSold9(isNft9Sold);
            const isNft10Sold = await contract.nft10minted();
            setIsSold10(isNft10Sold);
            const isNft11Sold = await contract.nft11minted();
            setIsSold11(isNft11Sold);
        } catch (err) {
            console.log('error: ', err)
        }
    }
  }

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
      checknft()
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
      <ProjectDescription 
      isSold0={isSold0} 
      setIsSold0={setIsSold0}
      isSold1={isSold1} 
      setIsSold1={setIsSold1}
      isSold2={isSold2} 
      setIsSold2={setIsSold2}
      isSold3={isSold3} 
      setIsSold3={setIsSold3}
      isSold4={isSold4} 
      setIsSold4={setIsSold4}
      isSold5={isSold5} 
      setIsSold5={setIsSold5}
      isSold6={isSold6} 
      setIsSold6={setIsSold6}
      isSold7={isSold7} 
      setIsSold7={setIsSold7}
      isSold8={isSold8} 
      setIsSold8={setIsSold8}
      isSold9={isSold9} 
      setIsSold9={setIsSold9}
      isSold10={isSold10} 
      setIsSold10={setIsSold10}
      isSold11={isSold11} 
      setIsSold11={setIsSold11}
      />
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