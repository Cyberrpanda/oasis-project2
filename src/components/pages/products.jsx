import { useState, useEffect } from 'react';

export default function Products() {
  const [visibleProducts, setVisibleProducts] = useState(12);
  const [cartItems, setCartItems] = useState([]);

  
  const gamingProducts = [
    {
      id: 1,
      name: "PlayStation 5 Digital Edition",
      price: "$399.99",
      category: "Console",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      discount: 10,
      tags: ["Limited Stock", "Exclusive"]
    },
    {
      id: 2,
      name: "Xbox Series X",
      price: "$499.99",
      category: "Console",
      image: "https://images.unsplash.com/photo-1621259182978-fbf832e8ee87?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      stock: "In Stock",
      tags: ["4K Gaming", "1TB SSD"]
    },
    {
      id: 3,
      name: "Nintendo Switch OLED",
      price: "$349.99",
      category: "Console",
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.7,
      discount: 5,
      tags: ["Portable", "Family"]
    },
    {
      id: 4,
      name: "RTX 4090 Gaming PC",
      price: "$2,999.99",
      category: "Gaming PC",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      tags: ["High-End", "Custom Built"]
    },
    {
      id: 5,
      name: "Razer BlackWidow V4 Pro",
      price: "$229.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1541140532154-b024d705b90a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.6,
      discount: 15,
      tags: ["Mechanical", "RGB"]
    },
    {
      id: 6,
      name: "Logitech G Pro X Superlight",
      price: "$149.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.7,
      tags: ["Wireless", "Esports"]
    },
    {
      id: 7,
      name: "SteelSeries Arctis Nova Pro",
      price: "$349.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1585298723687-64866b3ee7e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      stock: "Last Few",
      tags: ["Wireless", "Noise Cancelling"]
    },
    {
      id: 8,
      name: "Call of Duty: Modern Warfare III",
      price: "$69.99",
      category: "Games",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.5,
      discount: 20,
      tags: ["New Release", "Pre-Order"]
    },
    {
      id: 9,
      name: "Spider-Man 2 Collector's Edition",
      price: "$229.99",
      category: "Games",
      image: "https://images.unsplash.com/photo-1534423861386-85a16f5d13fd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      tags: ["Exclusive", "Collector's"]
    },
    {
      id: 10,
      name: "NVIDIA 49 Ultrawide Monitor",
      price: "$1,599.99",
      category: "Monitors",
      image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      tags: ["4K", "240Hz"]
    },
    {
      id: 11,
      name: "Secretlab Titan Evo 2023",
      price: "$549.99",
      category: "Gaming Chairs",
      image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.7,
      discount: 12,
      tags: ["Ergonomic", "Premium"]
    },
    {
      id: 12,
      name: "Elgato Stream Deck+",
      price: "$199.99",
      category: "Streaming",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.6,
      tags: ["Streaming", "Content Creation"]
    },
    {
      id: 13,
      name: "PlayStation VR2",
      price: "$549.99",
      category: "VR",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.7,
      tags: ["Virtual Reality", "PS5"]
    },
    {
      id: 14,
      name: "Final Fantasy XVI Deluxe",
      price: "$99.99",
      category: "Games",
      image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      discount: 10,
      tags: ["JRPG", "Exclusive"]
    },
    {
      id: 15,
      name: "Custom Gaming Desk RGB",
      price: "$699.99",
      category: "Setup",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.6,
      tags: ["Custom", "RGB Lighting"]
    },
    {
      id: 16,
      name: "GameCube Controller (Smash Edition)",
      price: "$89.99",
      category: "Retro",
      image: "https://images.unsplash.com/photo-1562612543-4cb1e3c5d0b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      stock: "Rare",
      tags: ["Retro", "Tournament"]
    },
    {
      id: 17,
      name: "Steam Deck 1TB",
      price: "$649.99",
      category: "Handheld",
      image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.7,
      tags: ["Portable PC", "Handheld"]
    },
    {
      id: 18,
      name: "Gaming Laptop RTX 4080",
      price: "$2,499.99",
      category: "Gaming Laptop",
      image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      discount: 8,
      tags: ["High-Performance", "Portable"]
    },
    {
      id: 19,
      name: "Collector's Artbook: Elden Ring",
      price: "$79.99",
      category: "Merchandise",
      image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      tags: ["Collectible", "Limited"]
    },
    {
      id: 20,
      name: "8BitDo Ultimate Controller",
      price: "$69.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.6,
      tags: ["Multi-Platform", "Wireless"]
    },
    {
      id: 21,
      name: "Gaming Mousepad XL RGB",
      price: "$49.99",
      category: "Accessories",
      image: "https://images.unsplash.com/photo-1593305841991-05c297ba4575?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.5,
      discount: 25,
      tags: ["Extended", "RGB"]
    },
    {
      id: 22,
      name: "Zelda: Tears of the Kingdom CE",
      price: "$129.99",
      category: "Games",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.9,
      tags: ["Nintendo", "Collector's"]
    },
    {
      id: 23,
      name: "Racing Simulator Cockpit",
      price: "$1,299.99",
      category: "Sim Racing",
      image: "https://images.unsplash.com/photo-1598974357801-cbca100e5d10?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.8,
      tags: ["Professional", "Full Setup"]
    },
    {
      id: 24,
      name: "Gaming Headset Stand RGB",
      price: "$39.99",
      category: "Setup",
      image: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400&q=80",
      rating: 4.4,
      tags: ["Accessory", "RGB"]
    }
  ];

  const loadMoreProducts = () => {
    setVisibleProducts(prev => prev + 12);
  };

  const displayedProducts = gamingProducts.slice(0, visibleProducts);

  
  function addTocart(product) {
    setCartItems(prevCart => {
    const existingItem = prevCart.find(item => item.id === product.id);

    if (existingItem) {
      return prevCart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      return [...prevCart, { ...product, quantity: 1}];
    }
  });
  }

  function calculateTotal() {
    return cartItems.reduce((total, item)  =>  {
      const numericPrice = parseFloat(Stringitem.price.replace(/[^0-9.-]+/g, ""));
      return total + (numericPrice * item.quantity);
    }, 0).toFixed(2);
  }

  function removeItem(product) {
    setCartItems(prevCart => prevCart.filter(item => item.id !== product.id));
  }

  useEffect(() => {
    const savedCart = localStorage.getItem('myUserCart');
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('myUserart' , JSON.stringify(cartItems));
  }, [cartItems]);


  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-base font-semibold mb-2" style={{ color: '#193cb8' }}>
            GAMING GEAR COLLECTION
          </h2>
          <p className="text-4xl font-bold text-gray-900 mb-4">
            Premium Gaming Products
          </p>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From cutting-edge consoles to professional esports gear, discover everything a gamer needs.
          </p>
        </div>

        {/* Product Filter/Category Bar */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button className="px-5 py-2 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:scale-105"
            style={{ backgroundColor: '#193cb8' }}>
            All Products
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            Consoles
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            Games
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            Accessories
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            PC Gaming
          </button>
          <button className="px-5 py-2 rounded-full bg-gray-200 font-medium text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:scale-105">
            Collectibles
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {displayedProducts.map((product) => (
            <div 
              key={product.id}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 hover:border-[#193cb8]/20"
            >
              {/* Discount Badge */}
              {product.discount && (
                <div className="absolute top-4 left-4 z-10">
                  <div className="bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                    -{product.discount}%
                  </div>
                </div>
              )}

              {/* Stock Status Badge */}
              {product.stock && (
                <div className={`absolute top-4 right-4 z-10 ${product.stock === 'Rare' ? 'bg-yellow-500' : 'bg-green-500'} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                  {product.stock}
                </div>
              )}

              {/* Product Image */}
              <div className="relative overflow-hidden h-56">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="px-5 py-3 rounded-full bg-white text-gray-900 font-semibold shadow-lg transform -translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
              </div>

              {/* Product Details */}
              <div className="p-5">
                {/* Category */}
                <div className="mb-2">
                  <span className="text-xs font-semibold tracking-wider" style={{ color: '#193cb8' }}>
                    {product.category.toUpperCase()}
                  </span>
                </div>

                {/* Product Name */}
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-[#193cb8] transition-colors duration-300 line-clamp-2">
                  {product.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {product.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">{product.rating}/5</span>
                </div>

                {/* Price and Action */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{product.price}</p>
                    {product.discount && (
                      <p className="text-sm text-gray-500 line-through">
                        ${(parseFloat(product.price.replace(/[^0-9.-]+/g, "")) * 1.1).toFixed(2)}
                      </p>
                    )}
                  </div>
                  <button 
                    onClick={() => addTocart (product)} className="px-5 py-2 rounded-full font-semibold text-white transition-all duration-300 hover:shadow-lg hover:scale-105 active:scale-95"
                    style={{ backgroundColor: '#193cb8' }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>

              {/* Hover Icon */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="h-10 w-10 rounded-full bg-white shadow-md flex items-center justify-center">
                  <svg className="h-5 w-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        {visibleProducts < gamingProducts.length && (
          <div className="text-center mt-16">
            <button
              onClick={loadMoreProducts}
              className="group inline-flex items-center px-8 py-4 rounded-full font-bold text-white transition-all duration-300 hover:shadow-2xl hover:scale-105"
              style={{ 
                backgroundColor: '#193cb8',
                backgroundImage: 'linear-gradient(135deg, #193cb8 0%, #2a4fd9 100%)'
              }}
            >
              <span>Load More Products</span>
              <svg 
                className="ml-3 h-5 w-5 transition-transform duration-300 group-hover:translate-y-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <p className="mt-4 text-sm text-gray-500">
              Showing {displayedProducts.length} of {gamingProducts.length} gaming products
            </p>
          </div>
        )}
      </div>
    </section>
  );
}