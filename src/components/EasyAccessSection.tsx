import Image from "next/image";

const EasyAccessSection = () => (
    <section className="py-12 md:px-20 bg-black text-white flex flex-col md:flex-row items-center relative overflow-hidden w-full">
        <div className="max-w-full md:max-w-lg px-8 md:px-0">
            <h6 className="font-medium text-xl mb-5 ms-1">Easy Access:</h6>
            <h2 className="text-4xl md:text-5xl leading-[3.5rem] font-extrabold uppercase italic">Your Entertainment, Anywhere, Anytime</h2>
            <p className="mt-9 text-grey-2 font-normal text-base text-balance">Our platform offers a seamless experience across all your devices. With a user-friendly interface, navigating through our library is effortless. Whether on your desktop, laptop, tablet, or smartphone, enjoy uninterrupted streaming anywhere, anytime. Dive into your favorite movies and series with ease, making entertainment truly accessible.</p>
            <button className="bg-blue-1 hover:bg-blue-1 text-white font-semibold md:ms-1 py-4 px-12 rounded text-base text-center mt-10 ml-auto">
                Download App
            </button>
        </div>
        <Image src="assets/img/app-view.svg" alt="app-view" width={0} height={0} className="hidden md:block md:absolute w-full md:w-2/3 md:h-full md:top-0 md:-right-8" />
        <Image src="assets/img/app-view-mobile.svg" alt="app-view" width={0} height={0} className="md:hidden md:absolute w-full md:w-2/3 md:h-full md:top-0 md:-right-8" />
    </section>
);

export default EasyAccessSection;
