import {ethers, BigNumber} from 'ethers';
import  projectNemesis from '../../../artifacts/contracts/ProjectNemesis.sol/ProjectNemesis.json';

const projectNemesisAddress = "0xc04E3C546Ae2A78A916C5D97B86d542b50DDdcA5"
const mintAmount = 1;

export async function handleMint0() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
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
}

export async function handleMint1() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint1(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint2() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint2(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint3() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint3(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint4() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint4(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint5() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint5(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint6() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint6(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint7() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint7(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint8() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint8(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint9() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint9(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint10() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint10(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

export async function handleMint11() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            projectNemesisAddress,
            projectNemesis.abi,
            signer
        );
        try {
            const response = await contract.mint11(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.001 * mintAmount).toString()),
            });
            console.log('response: ', response);
        } catch (err) {
            console.log('error: ', err)
        }
    }
}

