
const style = {
    wrapper: `flex flex-col items-center border-2 border-white w-full`, // Adjusted width to fit the carousel
    picture: `border-2 border-white w-fit h-auto m-5`, // Adjusted height to auto
    title: `font-specialelite text-4xl`,
    downloads: `flex flex-col items-center w-full`, // Changed to column for mobile and centered items
    downloadbutton: `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-2`, // Adjusted margin for buttons
    paragraphA: `font-specialelite text-xl text-justify my-2 mx-10`, // Adjusted margin for paragraphA
    paragraphB: `font-specialelite text-sm text-justify my-2 mx-10`, // Adjusted margin for paragraphB
  };
  

const projectdata = {
    projecttitle : `Nemesis`
}

function ProjectDetails_1() {
    return (
        <div className={style.wrapper}>
            <div className={style.picture}>
                <img src="images/imageproject.avif"/>
            </div>
            <div className={style.title}>
                Project : {projectdata.projecttitle}
            </div>
            <div className={style.downloads}>
                <button className={style.downloadbutton}>
                    <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>White Paper</span>
                </button>
                <button className={style.downloadbutton}>
                    <svg className="w-4 h-4 mr-2 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z"/></svg>
                    <span>Road Map</span>
                </button>
            </div>
            <div className={style.paragraphB}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam 
            </div>
            <div className={style.paragraphA}>
                Contribution size : 300 Matic 
            </div>
        </div>
    )
}

export default ProjectDetails_1
