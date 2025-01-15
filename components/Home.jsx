import Image from "next/image";
import SEO from "./SEO";

function HomePage() {
    return (
        <>
            <SEO
                title="Shree Balaji Exim"
                description="Welcome to my website, this is dummy SEO."
                keywords="keyword1, keyword2"
                url='https://example.com'
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
