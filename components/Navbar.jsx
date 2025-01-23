// import Link from "next/link";
// import { useRouter } from "next/router";
// import Image from "next/image";
// import SEO from "./SEO";


// function Navbar() {
//     const router = useRouter();
//     return (
//         <>
//             <SEO
//             title="Shree Balaji Exim"
//             keywords="Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment 
//              mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery,
//              import export businesses, export-import, construction machinery, import exports"
//             description= "Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001."
//             />
//             <header className="bg-sky-50 text-gray-600 body-font">
//                 <div
//                     data-aos="fade-up"
//                     className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center"
//                 >
//                     <Link href='/' >
//                         <Image src='/logo-main.png' width={200} height={200} alt="Logo"
//                         />
//                         <p className="font-bold text-sm">A venture of Shree Balaji Group since 1960...</p>
//                     </Link>

//                     <nav className="md:ml-auto mt-5 md:mr-auto flex flex-wrap text-lg items-center justify-center gap-6">
//                         <Link
//                             href="/"
//                             className={`mr-5 font-bold ${router.pathname === "/" ? "text-customBlue" : "text-gray-600"
//                                 } hover:text-customBlue transition duration-300`}
//                         >
//                             Home
//                         </Link>
//                         <Link
//                             href="/about"
//                             className={`mr-5 font-bold ${router.pathname === "/about" ? "text-customBlue" : "text-gray-600"
//                                 } hover:text-customBlue transition duration-300`}
//                         >
//                             About Us
//                         </Link>
//                         <Link
//                             href="/gallery"
//                             className={`mr-5 font-bold ${router.pathname === "/gallery" ? "text-customBlue" : "text-gray-600"
//                                 } hover:text-customBlue transition duration-300`}
//                         >
//                             Gallery
//                         </Link>
//                         <Link
//                             href="/contact"
//                             className={`mr-5 font-bold ${router.pathname === "/contact" ? "text-customBlue" : "text-gray-600"
//                                 } hover:text-customBlue transition duration-300`}
//                         >
//                             Contact Us
//                         </Link>
//                     </nav>
//                     <Link href={'https://wa.me/917499837102'}>
//                         <button
//                             className="inline-flex items-center bg-transparent border border-customBlue text-customBlue font-bold py-2 px-4 focus:outline-none hover:bg-customBlue hover:text-white rounded-full transition duration-300 text-base mt-4 md:mt-0"
//                         >
//                             Get a Quote
//                             <svg
//                                 fill="none"
//                                 stroke="currentColor"
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 strokeWidth="2"
//                                 className="w-4 h-4 ml-1"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path d="M5 12h14M12 5l7 7-7 7"></path>
//                             </svg>
//                         </button>
//                     </Link>
//                 </div>
//             </header>
//         </>
//     );
// }
// export default Navbar;







import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import SEO from "./SEO";

function Navbar() {
    const router = useRouter();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <SEO
                title="Shree Balaji Exim"
                keywords="Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment 
                 mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery,
                 import export businesses, export-import, construction machinery, import exports"
                description="Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001."
            />
            <header className="bg-sky-50 text-gray-600 body-font relative z-50">
                <div className="container mx-auto flex flex-wrap p-4 items-center justify-between">
                    <Link href='/' className="flex flex-col items-center">
                        <Image src='/logo-main.png' width={140} height={140} alt="Logo" />
                        <p className="font-bold text-sm mt-2 text-gray-800">A venture of Shree Balaji Group since 1960...</p>
                    </Link>
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="inline-flex items-center p-2 ml-3 text-gray-800 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300">
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>

                    <nav
                        className={`absolute top-16 right-0 w-full bg-sky-50 md:static md:w-auto md:flex z-50 ${isOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col md:flex-row md:items-center md:gap-6 p-4 md:p-0">
                            <li>
                                <Link
                                    href="/"
                                    className={`block text-lg py-2 px-4 font-semibold ${router.pathname === "/" ? "text-customBlue" : "text-gray-600"} hover:text-customBlue transition duration-300`}
                                    onClick={() => setIsOpen(false)}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/about"
                                    className={`block text-lg py-2 px-4 font-semibold ${router.pathname === "/about" ? "text-customBlue" : "text-gray-600"} hover:text-customBlue transition duration-300`}
                                    onClick={() => setIsOpen(false)}>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/gallery"
                                    className={`block text-lg py-2 px-4 font-semibold ${router.pathname === "/gallery" ? "text-customBlue" : "text-gray-600"} hover:text-customBlue transition duration-300`}
                                    onClick={() => setIsOpen(false)}>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className={`block text-lg py-2 px-4 font-semibold ${router.pathname === "/contact" ? "text-customBlue" : "text-gray-600"} hover:text-customBlue transition duration-300`}
                                    onClick={() => setIsOpen(false)}>
                                    Contact Us
                                </Link>
                            </li>
                            <li className="md:hidden mt-4">
                                <Link href={'https://wa.me/917499837102'}>
                                    <button
                                        className="block w-full hover:bg-customBlue bg-transparent text-customBlue hover:text-white font-bold py-2 px-4 focus:outline-none rounded-full transition duration-300 text-base">
                                        Get a Quote

                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="hidden md:block">
                        <Link href={'https://wa.me/917499837102'}>
                            <button
                                className="block w-full bg-customBlue  text-white font-bold py-2 px-4 focus:outline-none rounded-full transition duration-300 text-base">
                                Get a Quote

                            </button>
                        </Link>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Navbar;
