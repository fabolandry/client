import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import  projectNemesis from '../../../artifacts/contracts/ProjectNemesis.sol/ProjectNemesis.json';

const projectNemesisAddress = "0x547A0E069e770275F4Fcf2EBdB456788FDE32933";
const mintAmount = 1;

const style = {
    wrapper : `flex flex-col truncate items-center border-2 border-white xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full`,
    title : `font-specialelite text-3xl mt-3 mb-1`,
    message : `font-mono italic text-sm text-green-500 mt-2 mb-2 animate-pulse w-9/12 h-1/6 text-center`,
    nftline: `flex flex-row justify-around w-full h-full`,
    nftcol: `flex flex-col w-1/5 h-1/5`,
    picture : `border-2 border-white w-full h-fit`,
    downloadbutton : `bg-green-300 hover:bg-green-400 rounded py-1 text-gray-800 font-specialelite text-xs m-1 px-1`,
    footera : `font-specialelite w-fit h-fit w-11/12 text-center`,
    footerb : `font-specialelite w-fit h-fit w-11/12 text-center mb-2`,
    soldtext : `font-specialelite text-center m-1 text-green-800`
}

const NftMarketplaceDetails_1 = ({
    isSold0, 
    setIsSold0,
    isSold1, 
    setIsSold1,
    isSold2, 
    setIsSold2,
    isSold3, 
    setIsSold3,
    isSold4, 
    setIsSold4,
    isSold5, 
    setIsSold5,
    isSold6, 
    setIsSold6,
    isSold7, 
    setIsSold7,
    isSold8, 
    setIsSold8,
    isSold9, 
    setIsSold9,
    isSold10, 
    setIsSold10,
    isSold11, 
    setIsSold11,
}) => {
    const [buttonText0, setButtonText0] = useState('Contribute');
    const [buttonText1, setButtonText1] = useState('Contribute');
    const [buttonText2, setButtonText2] = useState('Contribute');
    const [buttonText3, setButtonText3] = useState('Contribute');
    const [buttonText4, setButtonText4] = useState('Contribute');
    const [buttonText5, setButtonText5] = useState('Contribute');
    const [buttonText6, setButtonText6] = useState('Contribute');
    const [buttonText7, setButtonText7] = useState('Contribute');
    const [buttonText8, setButtonText8] = useState('Contribute');
    const [buttonText9, setButtonText9] = useState('Contribute');
    const [buttonText10, setButtonText10] = useState('Contribute');
    const [buttonText11, setButtonText11] = useState('Contribute');

    const [messageText, setMessageText] = useState('           ');
    function deletemesage () {
        setMessageText('               ')
    }
    async function handleMint0() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText0('Wait ...')
            try {
                const response = await contract.mint0(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft0Sold = await contract.nft0minted();
                console.log(isNft0Sold);
                setIsSold0(isNft0Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText0('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint1() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText1('Wait ...')
            try {
                const response = await contract.mint1(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft1Sold = await contract.nft1minted();
                console.log(isNft1Sold);
                setIsSold1(isNft1Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText1('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint2() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText2('Wait ...')
            try {
                const response = await contract.mint2(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft2Sold = await contract.nft2minted();
                console.log(isNft2Sold);
                setIsSold2(isNft2Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText2('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint3() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText3('Wait ...')
            try {
                const response = await contract.mint3(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft3Sold = await contract.nft3minted();
                console.log(isNft3Sold);
                setIsSold3(isNft3Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText3('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint4() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText4('Wait ...')
            try {
                const response = await contract.mint4(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft4Sold = await contract.nft4minted();
                console.log(isNft4Sold);
                setIsSold4(isNft4Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText4('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint5() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText5('Wait ...')
            try {
                const response = await contract.mint5(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft5Sold = await contract.nft5minted();
                console.log(isNft5Sold);
                setIsSold5(isNft5Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText5('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint6() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText6('Wait ...')
            try {
                const response = await contract.mint6(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft6Sold = await contract.nft6minted();
                console.log(isNft6Sold);
                setIsSold6(isNft6Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText6('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint7() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText7('Wait ...')
            try {
                const response = await contract.mint7(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft7Sold = await contract.nft7minted();
                console.log(isNft7Sold);
                setIsSold7(isNft7Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText7('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint8() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText8('Wait ...')
            try {
                const response = await contract.mint8(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft8Sold = await contract.nft8minted();
                console.log(isNft8Sold);
                setIsSold8(isNft8Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText8('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint9() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText9('Wait ...')
            try {
                const response = await contract.mint9(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft9Sold = await contract.nft9minted();
                console.log(isNft9Sold);
                setIsSold9(isNft9Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText9('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint10() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText10('Wait ...')
            try {
                const response = await contract.mint10(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft10Sold = await contract.nft10minted();
                console.log(isNft10Sold);
                setIsSold10(isNft10Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText10('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    async function handleMint11() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            setButtonText11('Wait ...')
            try {
                const response = await contract.mint11(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
                const isNft11Sold = await contract.nft11minted();
                console.log(isNft11Sold);
                setIsSold11(isNft11Sold);
            } catch (err) {
                console.log('error: ', err)
            }
        }
        setButtonText11('Contribute')
        setMessageText('Working please wait')
        setTimeout(deletemesage,25000)
    }
    return ( 
        <div className={style.wrapper}>
            <div className={style.title}>
                Become a Contributor
            </div>
            <div className={style.message}>
                    {messageText}
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold0 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint0}> {buttonText0} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold1 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint1}> {buttonText1} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold2 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint2}> {buttonText2} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold3 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint3}> {buttonText3} </button>
                    )}
                </div>
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold4 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint4}> {buttonText4} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold5 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint5}> {buttonText5} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold6 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint6}> {buttonText6} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold7 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint7}> {buttonText7} </button>
                    )}
                </div>
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold8 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint8}> {buttonText8} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold9 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint9}> {buttonText9} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold10 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint10}> {buttonText10} </button>
                    )}
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    { isSold11 ? (
                        <p className={style.soldtext}>SOLD</p>
                    ) : (
                        <button className={style.downloadbutton} onClick={handleMint11}> {buttonText11} </button>
                    )}
                </div>
            </div>
            <div className={style.footera}>
                10% of the revenue is shared 
            </div>
            <div className={style.footerb}>
                among nft-contributor holders.
            </div>
        </div>
    )
}

export default NftMarketplaceDetails_1
