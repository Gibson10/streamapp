import Image from "next/image";

const PresaleSection = () => (
    <section id="presale" className="hidden py-12 px-4 bg-black text-white md:flex flex-row items-center justify-center w-full">
        <div className="flex flex-row items-center justify-center w-full">
            <div className="w-fit flex flex-col justify-center">
                <h2 className="text-5xl leading-10 font-extrabold italic uppercase">Presale</h2>
                <p className="mt-3 font-normal text-base text-grey-4 w-[31rem]">The first opportunity to purchase $STREAM token is through our Fair-Launch Presale that will be held on PinkSale.</p>
                <div className="flex flex-row items-center w-full divide-x divide-grey-7 mt-12 -translate-x-5">
                    {['100 Sol:SoftCap', '48Hours:Duration', '24/08/2025 2PM:Presale Date and Time', '28/08/2025:Launch on Raydium'].map((item) => (
                        <div key={item} className="flex flex-col px-5 py-2">
                            <span className="capitalize font-normal !text-base text-white">
                                {item.split(':')[1]}
                            </span>
                            <p className="font-bold text-white !text-3xl mt-3">
                                {item.split(':')[0]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <Image src="assets/img/flag-bg-circle.svg" alt="flag" width={0} height={0} className="w-1/4" />
        </div>
        {/* <div>
            <div className="bg-black-1 rounded-full w-72 h-72 flex items-center justify-center" />
            <Image src="assets/img/flag.svg" alt="flag" width={0} height={0} className="w-[98%]" />
        </div> */}
    </section>
);

export default PresaleSection;
