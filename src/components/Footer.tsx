import Image from 'next/image';
import Link from 'next/link';

const Footer = () => (
    <footer className="flex flex-col items-center justify-center p-4 bg-black text-white w-full">
        <div className='flex flex-col md:flex-row justify-between items-center w-full md:w-4/5 gap-8 md:gap-0'>
            <div className='w-full md:w-1/2'>
                <div className='flex flex-col items-center sm:items-start py-12 sm:p-12 border border-grey-7 rounded-[1.25rem] w-full md:w-3/4'>
                    <Link href="/">
                        <Image src="assets/img/logo.svg" alt='logo' width={0} height={0} className='w-16' />
                    </Link>
                    <p className='text-base font-normal mt-16 w-2/3 text-center sm:text-start'>The Future of Impenetrable Smart Contracts</p>
                </div>
            </div>
            <div className='w-full md:w-1/2'>
                <div className='flex flex-col items-center md:items-start text-white w-full ms-auto'>
                    <span className='font-semibold text-xs uppercase'>SITEMAP</span>
                    <div className='h-px w-full mt-10 bg-gradient-to-r from-blue-4' />
                    <div className='grid md:grid-rows-2 md:grid-flow-col gap-10 mt-10'>
                        {['Our Platform', 'Our Film Library', 'Presale', 'Team', 'Roadmap'].map(n =>
                            <div key={n} className='flex flex-row items-center'>
                                <i className='arrow-top-right -scale-50 rotate-180' />
                                <Link href={`#${n.toLowerCase().split(' ').join('-')}`} className='text-base font-normal ms-3 hover:underline'>{n}</Link>
                            </div>)}
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col-reverse md:flex-row justify-between items-center w-full md:w-4/5 border border-grey-7 rounded-[1.25rem] py-5 md:py-7 px-4 md:px-10 mt-8 gap-y-4 md:gap-y-0'>
            <p className='text-base font-normal'>© 2024 Stream. All rights reserved.</p>
            <div className='flex flex-row gap-x-5 md:gap-x-0 md:justify-between items-center md:w-1/4'>
                <div className='border border-grey-7 p-3 rounded-xl'>
                    <Image src="assets/img/x.svg" alt="x" width={0} height={0} className="w-full object-cover" />
                </div>
                <div className='border border-grey-7 p-3 rounded-xl'>
                    <Image src="assets/img/insta.svg" alt="x" width={0} height={0} className="w-full object-cover" />
                </div>
                <div className='border border-grey-7 p-3 rounded-xl'>
                    <Image src="assets/img/discord.svg" alt="x" width={0} height={0} className="w-full object-cover" />
                </div>
                <div className='border border-grey-7 p-3 rounded-xl'>
                    <Image src="assets/img/fb.svg" alt="x" width={0} height={0} className="w-full object-cover" />
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
