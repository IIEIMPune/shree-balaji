import Link from 'next/link';
import React from 'react';
import SEO from './SEO';
const products = [

  { id: 1, name: "JCB", image: "/images/JCB.jpg" },
  { id: 2, name: "Bulldozer", image: "/images/bulldozer.jpg" },
  { id: 3, name: "Compactor", image: "/images/compactor.jpeg" },
  { id: 4, name: "Concrete Mixer", image: "/images/concrete-mixer.jpg" },
  { id: 5, name: "Crane", image: "/images/crane.jpeg" },
  { id: 6, name: "Asphalt Paver", image: "/images/asphalt-paver.jpg" },
];
export default function Home() {

  return (
    <>
      <SEO
        title="Shree Balaji Exim"
        keywords="Shree Balaji Exim, Shree Balaji export and import, heavy machine construction, heavy machine for construction, heavy machines for construction, heavy construction equipment 
        mechanic, heavy construction equipment types, types of heavy construction equipment, construction machinery, heavy construction machinery,
        import export businesses, export-import, construction machinery, import exports"
        description= "Shree Balaji Exim Group is founded by Shri N. G. Banaginwar. After 1990, this business is handled by CEO Rammdas Banaginwar and he established Export Import Business in year 2001."
      />
      <div data-aos="fade-up" className="min-h-screen bg-sky-50 flex items-center justify-center">
        <div className="container mx-auto p-4">
          <h1 className="text-2xl md:text-3xl text-customYellow  font-serif text-center italic mb-6">Our Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-20 gap-4">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-sky-50 rounded-lg shadow-md  overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 object-cover"
                  width={500} heigh={500}
                />
                <div className="p-4">
                  <h2 className="text-xl text-customBlue text-center font-semibold">{product.name}</h2>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <Link href={'/gallery'}
              className="text-customBlue hover:bg-customBlue hover:text-white transition duration-500 ease-out font-semibold text-lg p-2 border border-customBlue bg-transparent rounded-lg">
              View More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
