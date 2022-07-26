
const style = {
    wrapper : `flex flex-col items-center bg-[#0F0F0F] w-2/6 h-fit`,
    title: `font-specialelite text-2xl my-6`,
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
