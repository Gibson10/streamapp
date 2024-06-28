import Image from "next/image";

const CountdownSection = () => (
    <section className="py-12 px-4 bg-black text-center text-white flex flex-col items-center w-full">
        <h2 className="text-4xl md:text-5xl leading-10 italic font-extrabold uppercase mb-5 md:mb-12">Opening Soon...</h2>
        <div className="bg-blue-2 py-14 rounded-[3.75rem] md:rounded-full flex flex-col md:flex-row items-center justify-center w-full md:w-4/5 relative">
            <div className="flex flex-col md:flex-row items-center w-4/5 divide-y md:divide-x md:divide-y-0 divide-blue-3 text-center">
                {['12:days', '15:hours', '33:mins', '12:secs'].map((item) => (
                    <div key={item} className="flex flex-col px-10 md:px-20 py-2">
                        <span className="capitalize font-bold !text-xl text-white">
                            {item.split(':')[1]}
                        </span>
                        <p className="font-bold text-white !text-7xl leading-10 mt-3">
                            {item.split(':')[0]}
                        </p>
                    </div>
                ))}
            </div>
            <Image src="assets/img/ellipse.svg" alt="ellipse" width={0} height={0} className="w-16 absolute left-4 bottom-1/3 md:left-10 md:bottom-5" />
            <Image src="assets/img/ellipse.svg" alt="ellipse" width={0} height={0} className="w-10 absolute left-12 top-24 md:left-64 md:top-8" />
            <Image src="assets/img/ellipse.svg" alt="ellipse" width={0} height={0} className="w-10 absolute right-12 md:right-0 top-20 md:top-[10rem] md:left-[32rem]" />
            <Image src="assets/img/ellipse.svg" alt="ellipse" width={0} height={0} className="w-14 absolute right-6 bottom-6 md:bottom-0 md:right-56 md:top-8" />
        </div>
    </section>
);

export default CountdownSection;
