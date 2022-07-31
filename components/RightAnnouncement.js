
const style = {
    wrapper : `flex flex-col items-center bg-[#0F0F0F]  xl:w-2/6 ld:w-2/6 md:w-full sm:w-full xs:w-full h-max`,
    title: `font-specialelite text-2xl my-8`,
    paragraphA: `font-specialelite text-xl text-justify my-6 mx-16`
}

function LeftAnnouncement() {
    return (
        <div className={style.wrapper}>
            <div className={style.title}>
                Lorem Ipsum
            </div>
            <div className={style.paragraphA}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </div>
            <div className={style.paragraphA}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </div>
            <div className={style.paragraphA}>
                Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt 
                ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam
            </div>
        </div>
    )
}

export default LeftAnnouncement
