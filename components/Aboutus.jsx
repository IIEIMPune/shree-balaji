import Image from 'next/image';
import SEO from './SEO';
const Aboutus = () => {
  return (
    <>
      <SEO
        title="Shree Balaji Exim"
        keywords="Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment 
      mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery,
      import export businesses, export-import, construction machinery, import exports "
        description= "Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001."
      />
      <section className="bg-sky-50 w-full">
        <div className="container mx-auto  py-12">
          <div className="flex flex-wrap lg:flex-nowrap">
            <div className="w-full lg:w-1/2 flex justify-center">
              <div
                data-aos="fade-up"
                className="relative w-full h-[35vh] md:h-[50vh] mt-5 overflow-hidden"
              >
                <Image
                  src="/about.jpg"
                  alt="About us main image"
                  width={1200} height={100}
                  objectFit="cover"
                />
              </div>
            </div>
            <div
              data-aos="fade-up"
              className="w-full lg:w-1/2 flex flex-col justify-start md:py-8 px-6"
            >
              <h2 className="text-2xl md:text-3xl text-customYellow mt-8 md:mt-0  mb-4 font-serif italic">
                Welcome to Shree Balaji Exim
              </h2>
              <p className="mb-4 text-[18px] text-justify">
                <span className='font-bold'>Shree Balaji Exim</span>  
                -
                Building Excellence through the export of heavy construction machineries through out the world.
              </p>
              <p className="mb-4 text-[18px] text-justify">
                Shree Balaji Group founded in 1960 by Shri N. G. Banaginwar, 
                swiftly rose to prominence as one of India's leading trading 
                firms.In 1990, the business entered a new era under the visionary
                 leadership of CEO Rammdas Banaginwar.
              </p>
              <p className="mb-4 text-[18px] text-justify">
                Drawing on his unmatched expertise in the export-import trade, 
                he established Export Import Business in 2001.
                Today, Shree Balaji Exim stands as a global leader, 
                renowned for being a top eximpreneur of heavy building 
                construction machinery throughout the world.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Aboutus;
