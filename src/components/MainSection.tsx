import Image from "next/image";

const MainSection = () => (
    <section className="text-center pt-12 bg-black text-white md:ps-20 relative flex flex-col md:flex-row items-center md:items-start w-full overflow-hidden">
        <Image src="assets/img/ring.svg" alt="ring" width={0} height={0} className="md:absolute md:top-0 md:right-1/2 md:translate-y-10 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36" />
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mt-10 md:mt-0 px-10">
            <div className="flex items-center justify-between p-3 border border-grey-1 rounded-full w-fit">
                <Image src="assets/img/zap.svg" alt="zap" width={14} height={24} className="m-1" />
                <p className="font-normal leading-5 text-grey-2 text-base my-1 mx-5">Powered By <span className="uppercase text-white font-medium">$Stream</span></p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-[3.5rem] md:leading-[4.5rem] md:w-[40.625rem] text-center md:text-left mt-10 italic uppercase">Tokenized Entertainment: Embrace Freedom</h1>
            <div className="mt-14 w-fit flex flex-col md:flex-row items-center justify-center md:justify-start">
                <button className="bg-blue-1 hover:bg-blue-1 text-white font-semibold ms-1 py-4 px-12 rounded text-base text-center">
                    Open Presale
                </button>
                <ul className="flex space-x-12 font-normal text-center md:ms-12 px-6 mt-8 md:mt-0">
                    {['12:days', '15:hours', '33:mins', '12:secs'].map((item) => (
                        <li key={item} className="flex flex-col">
                            <p className="font-medium text-white !text-2xl ">
                                {item.split(':')[0]}
                            </p>
                            <span className="capitalize text-[0.5rem] mt-1 opacity-80 text-grey-3">
                                {item.split(':')[1]}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <Image src="assets/img/movies.svg" alt="movies" height={0} width={0} className="w-full z-10 hidden md:block" />
        <Image src="assets/img/movies-mobile.svg" alt="movies" height={0} width={0} className="w-full z-10 translate-y-28 md:hidden" />
        <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[15rem] md:border-b-[25rem] border-l-[100vw] border-r-0 border-b-blue-1 border-l-transparent" />
        <div className="absolute bottom-0 left-0 h-0 w-0 border-b-[15rem] md:border-b-[25rem] border-l-[100vw] border-r-0 border-b-blue-1/75 border-l-transparent z-20" />
    </section>
);

export default MainSection;
