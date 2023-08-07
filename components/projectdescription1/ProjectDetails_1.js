
const style = {
    wrapper : `flex flex-col items-center border-2 border-white xl:w-1/2 lg:w-1/2 md:w-full sm:w-full xs:w-full overflow-y-auto`,
    picture : `border-2 border-white w-fit h-fit m-5`,
    title : `font-specialelite text-4xl`,
    downloads : `flex xl:flex-row lg:flex-row md:flex-col sm:flex-col xs:flex-col`,
    downloadbutton : `bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center m-10`,
    paragraphA: `font-specialelite text-xl text-justify my-6 mx-16`,
    paragraphB: `font-specialelite text-sm text-justify my-3 mx-10`
}

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
