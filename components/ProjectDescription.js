import ProjectDetails_1 from '../components/projectdescription1/ProjectDetails_1';
import NftMarketplaceDetails_1 from '../components/projectdescription1/NftMarketplaceDetails_1';

const style = {
    wrapper : `flex md:flex-col lg:flex-row xl:flex-row sm:flex-col xs:flex-col self-center mt-28 w-10/12 h-auto border-2 border-white overflow-y-auto`,
}


const ProjectDescription = ({
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
    return (
        <div className={style.wrapper}>
            <ProjectDetails_1/>
            <NftMarketplaceDetails_1 
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
        </div>
    )
}

export default ProjectDescription
