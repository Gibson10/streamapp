import Image from "next/image";

const PLATFORM_DETAILS = [
    {
        h3: 'Latest Releases & Series:',
        p: 'Stay ahead with the newest blockbusters, series, and TV shows, exclusively for our holders.'
    },
    {
        h3: 'Censorship-Resistant:',
        p: 'Explore a diverse movie and series library, securely uploaded on-chain for censorship-resistant viewing.'
    },
    {
        h3: 'Seamless across Devices:',
        p: 'Enjoy your favorite movies and shows on any device, ensuring a seamless viewing experience wherever you go.'
    }
]

const PlatformSection = () => (
    <section id="our-platform" className="md:ps-20 bg-blue-1 text-white flex flex-col items-center md:items-start md:flex-row justify-center relative w-full px-4 md:px-0 pb-16 md:pb-12 z-20">
        <div className="mt-10 md:mt-0 flex flex-col">
            <h2 className="text-5xl leading-[3.5rem] font-extrabold uppercase italic max-w-80">Our Platform</h2>
            <p className="mt-10 font-semibold max-w-[26.25rem] text-xl">Our Web3.0 platform proudly presents blockbuster films exclusively to our holders, all securely uploaded on-chain for an unparalleled viewing experience.</p>
            <Image src="assets/img/crystal.svg" alt="crystal" width={0} height={0} className="mt-10 -translate-x-7 w-56 md:w-44" />
        </div>
        <Image src="assets/img/cube.svg" alt="cube" width={0} height={0} className="-translate-y-[40%] md:z-20 w-56 ms-auto md:ms-0" />
        <div className="flex flex-col space-y-12 text-start md:ms-7">
            {PLATFORM_DETAILS.map(d => <div key={d.h3} className="flex flex-row text-base">
                <i className="check-o mt-1" />
                <div className="flex flex-col justify-center ms-3 md:ms-5 max-w-72 md:max-w-96">
                    <h3 className="text-xl font-bold">{d.h3}</h3>
                    <p>{d.p}</p>
                </div>
            </div>)}
        </div>
        <div className="absolute bottom-0 left-0 h-0 w-0 border-t-[15rem] md:border-t-[25rem] border-r-[100vw] border-l-0 border-t-blue-1 border-r-transparent translate-y-full z-10" />
    </section>
);

export default PlatformSection;
