import ProjectDetails_1 from '../components/projectdescription1/ProjectDetails_1';
import NftMarketplaceDetails_1 from '../components/projectdescription1/NftMarketplaceDetails_1';

const style = {
    wrapper : `flex flex-row self-center border-2 border-white mt-28 w-8/12 h-auto`,
}


const ProjectDescription = ({currentAccount}) => {
    return (
        <div className={style.wrapper}>
            <ProjectDetails_1/>
            <NftMarketplaceDetails_1 currentAccount={currentAccount}/>
        </div>
    )
}

export default ProjectDescription
