import Image from "next/image";
import SEO from "./SEO";

function HomePage() {
    return (
        <>
            <SEO
                title="Shree Balaji Exim"
                keywords="Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment 
            mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery,
            import export businesses, export-import, construction machinery, import exports"
            description= "Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001."
            />
            <div data-aos="fade-up">
                <section className="relative w-full h-[70vh] md:h-[90vh]">
                    <Image
                        src="/images/JCB.jpg"
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        className="z-0"
                    />
                </section>
            </div>
        </>
    );
}

export default HomePage;
