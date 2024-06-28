import Image from "next/image"

const SideBar = () => {
    return <aside id="default-sidebar" className="fixed top-3 md:top-4 left-3 md:left-7 z-40 w-[95vw] md:w-24 h-20 md:h-[95vh] transition-transform" aria-label="Sidebar">
        <div className="h-full rounded-[1.25rem] py-5 md:py-8 px-4 md:px-0 bg-gradient-to-b from-grey-5 to-black flex flex-row md:flex-col md:items-center justify-between md:justify-normal">
            <Image src="assets/img/logo.svg" alt='logo' width={0} height={0} className='w-9' />
            <Image src="assets/img/menu.svg" alt='logo' width={0} height={0} className='hidden md:block w-8 mt-16' />
            <div className="hidden md:flex flex-col items-center justify-between gap-4 mt-5">
                <Image src="assets/img/explore.svg" alt='logo' width={0} height={0} className='w-8' />
                <Image src="assets/img/bookmark.svg" alt='logo' width={0} height={0} className='w-8' />
                <Image src="assets/img/notification.svg" alt='logo' width={0} height={0} className='w-8' />
                <Image src="assets/img/play.svg" alt='logo' width={0} height={0} className='w-8' />
                <Image src="assets/img/settings.svg" alt='logo' width={0} height={0} className='w-8' />

            </div>
            <Image src="assets/img/user.svg" alt='user' width={0} height={0} className='w-10 md:mt-auto' />
        </div>
    </aside>
}

export default SideBar