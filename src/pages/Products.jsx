import React from 'react';
import jaljeera from '../assets/drinks/jaljeera.png';
import greenApple from '../assets/drinks/greenApple.png';
import raspberry from '../assets/drinks/raspberry.png';
import kalakhata from '../assets/drinks/kalakhata.png';
import nimbuGinger from '../assets/drinks/nimbuGinger.png';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'Jaljeera',
      image: jaljeera,
      description: 'A refreshing, tangy drink with a perfect balance of spices, perfect for hot summer days.',
      link: 'https://www.jiomart.com/p/groceries/walya-s-goti-soda-ice-cream-flavor-300-ml/603035864',
    },
    {
      id: 2,
      name: 'Green Apple',
      image: greenApple,
      description: 'A crisp and fresh drink with the natural flavor of green apples, offering a sweet and tart experience.',
      link: 'https://www.jiomart.com/p/groceries/walya-s-goti-soda-ice-cream-flavor-300-ml/603035864',
    },
    {
      id: 3,
      name: 'Raspberry',
      image: raspberry,
      description: 'A fruity and sweet drink with the bold taste of ripe raspberries, ideal for any occasion.',
      link: 'https://www.jiomart.com/p/groceries/walya-s-goti-soda-ice-cream-flavor-300-ml/603035864',
    },
    {
      id: 4,
      name: 'Kalakhata',
      image: kalakhata,
      description: 'A classic Indian drink with a unique blend of spices and sweet flavors, a must-try for the adventurous.',
      link: 'https://www.jiomart.com/p/groceries/walya-s-goti-soda-ice-cream-flavor-300-ml/603035864',
    },
    {
      id: 5,
      name: 'Nimbu Ginger',
      image: nimbuGinger,
      description: 'A tangy lemon and spicy ginger drink that refreshes and revitalizes, perfect for every season.',
      link: 'https://www.jiomart.com/p/groceries/walya-s-goti-soda-ice-cream-flavor-300-ml/603035864',
    },
  ];

  return (
    <div className="bg-[#F6DCAC] py-12">
      <h2 className="text-3xl bg-white border-y-2 border-black font-bold text-center text-[#01204E] mb-12">OUR PRODUCTS</h2>
      <div className="max-w-7xl mx-auto px-4">
        

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-5 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white sm:h-full  h-1/2 flex sm:block rounded-lg shadow-lg overflow-hidden">
              <img src={product.image} alt={product.name} className="h-full flex   object-cover" />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-[#01204E]">{product.name}</h3>
                <p className="text-sm text-gray-600 mt-2">{product.description}</p>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-red-600 text-white px-6 py-2 rounded-lg font-bold text-sm transition-colors hover:bg-red-700"
                >
                  Buy Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
