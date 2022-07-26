import {useState} from 'react';
import {ethers, BigNumber} from 'ethers';
import  projectNemesis from '../../../artifacts/contracts/ProjectNemesis.sol/ProjectNemesis.json';


const projectNemesisAddress = "0x442BB836F3Df812c29DA1cF3E1793a9110Ad2718"

const style = {
    wrapper : `flex flex-col truncate items-center border-2 border-white w-1/2`,
    title : `font-specialelite text-3xl m-5`,
    nftline: `flex flex-row justify-around w-full h-full`,
    nftcol: `flex flex-col w-1/5 h-1/5`,
    picture : `border-2 border-white w-full h-fit`,
    downloadbutton : `bg-green-300 hover:bg-green-400 rounded py-1 text-gray-800 font-specialelite text-xs m-1 px-1`,
    footer : `font-specialelite w-fit h-fit w-11/12 text-center`,
}



const NftMarketplaceDetails_1 = ({currentAccount}) => {
    const mintAmount = 1;

    async function handleMint() {
        if (window.ethereum) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
            const contract = new ethers.Contract(
                projectNemesisAddress,
                projectNemesis.abi,
                signer
            );
            try {
                const response = await contract.mint(BigNumber.from(mintAmount), {
                    value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
                });
                console.log('response: ', response);
            } catch (err) {
                console.log('error: ', err)
            }
        }
    }
    return ( 
        <div className={style.wrapper}>
            <div className={style.title}>
                Become a Contributor
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
            </div>
            <div className={style.nftline}>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
                <div className={style.nftcol}>
                    <div className={style.picture}>
                        <img src="https://gateway.pinata.cloud/ipfs/QmRRDkpJin5HShHBfgswj5xSvHWuRMv3ungtajfmP1qsVC/00.jpg"/>
                    </div>
                    <button className={style.downloadbutton} onClick={handleMint}> Contribute </button>
                </div>
            </div>
            <div className={style.footer}>
                10% of the revenue is shared 
            </div>
            <div className={style.footer}>
                among nft-contributor holders.
            </div>
        </div>
    )
}

export default NftMarketplaceDetails_1
