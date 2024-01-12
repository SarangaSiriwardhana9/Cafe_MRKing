import React from 'react';
import { useState, useEffect } from 'react';
import Cards from '../../components/Cards';
import HomeCards from '../../components/HomeCards';

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOption, setSortOption] = useState('default');
  const [curentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);


  // Loading data
  useEffect(() => {
    // Fetch data from backend
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:6001/menu');
        const data = await response.json();
        //console.log(data)
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.log('Error fetching data', error);
      }
    };
    // Call the function
    fetchData();
  }, []);

  // Filtering data based on category
  const filterItems = (category) => {
    const filtered = category === 'all' ? menu : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Show all data
  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory('all');
    setCurrentPage(1);
  };

  // Sorting data
  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    // Logic
    switch (option) {
      case 'A-Z':
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'Z-A':
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'low-high':
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  // Pagination logic
  const indexOfLastItem = curentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);



  return (
    <div className=''>
      {/* Menu banner */}
      <div className="section-container mt-20 bg-gradient-to-r menu-background bg-white">
        <div className="  py-30 flex flex-col md:flex-row-reverse justify-between items-center gap-6">

          {/* component */}
          <div className='md:w-1/2  '>
            <img src='/menuChef3.png' alt='banner' className='w-full h-[500px] mb-6' />
            <div className='flex flex-col md:flex-row items-center justify-around -mt-14 gap-4'>
            </div>
          </div>
          {/* Text */}
          <div className='md:w-1/2 space-y-7 px-4'>
            <div className='  rounded-3xl shadow-xl  p-8 px-10 bg-simpleLightYellow'>
              
              <p className='text-gray-600 mt-4'>
             <span className=' text-2xl'>"</span> <span className=' text-lg'> Welcome to MRKing, your ultimate culinary destination in Sri Lanka! Explore our enticing menu crafted by our talented lady chef, where you can easily browse, sort, and add delectable dishes to your cart for a seamless online ordering experience. Indulge in a symphony of flavors right at your fingertips!</span> <span className='text-2xl'>"</span>
              </p>
           
            </div>
          </div>





        </div>
      </div>

      {/* Menu Shop Section */}
      <div className=" section-container">
        {/* Filtering and Sorting */}


        <div className='flex flex-row justify-between items-center md:items-start gap-8 mt-6 flex-wrap'>
          {/* Buttons */}
          <div className=''>
            <button
              onClick={showAll}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-700 py-2 rounded-full shadow-2xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'all' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              All
            </button>
            <button
              onClick={() => filterItems('rice')}
              className={`w-24 mr-2 bg-yellow-200 text-slate-700  px-4 py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'rice' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Rice
            </button>
            <button
              onClick={() => filterItems('kottu')}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-700  py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'kottu' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Kottu
            </button>
            <button
              onClick={() => filterItems('burger')}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-700  py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'burger' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Burger
            </button>
            <button
              onClick={() => filterItems('noodles')}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-700 py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'noodles' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Noodles
            </button>
            <button
              onClick={() => filterItems('dessert')}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-600  py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'dessert' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Desserts
            </button>
            <button
              onClick={() => filterItems('drinks')}
              className={`w-24 mr-2 px-4 bg-yellow-200 text-slate-600  py-2 rounded-full shadow-xl hover:shadow-none hover:bg-green-600 transition-all duration-300 ${selectedCategory === 'drinks' ? 'bg-yellow-300  text-black' : ''
                }`}
            >
              Drinks
            </button>
          </div>

          {/* Sorting */}
          <div className="relative">
            <select
              onChange={(e) => handleSortChange(e.target.value)}
              className="appearance-none text-black px-7 py-2 rounded-full shadow-xl  transition-all duration-300   bg-yellow-300  bordor-none focus:outline-none  focus:border-transparent "
            >
              <option value="default" disabled selected >
                Sort by
              </option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-high">Price: Low to High</option>
              <option value="high-low">Price: High to Low</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
              <svg
                className="w-5 h-5 fill-current text-gray-700"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 12a1 1 0 01-.7-.29l-4-4a1 1 0 111.41-1.42L10 9.17l3.29-3.3a1 1 0 111.42 1.42l-4 4a1 1 0 01-.71.29z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>


          {/* Product card */}
          <div className="grid ml-8 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-12 ">
            {currentItems.map((item) => (
              <Cards key={item._id} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className='flex bg-white justify-center my-8' >
        {
          Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map((_, index) => (
            <button key={index} onClick={() => paginate(index + 1)}
              className={`px-4 mb-5 gap-6 py-2 rounded-full shadow-xl hover:shadow-none hover:bg-yellow-400 transition-all duration-300 ${curentPage === index + 1 ? 'bg-yellow-300  text-black' : ''
                }`}
            >

              {index + 1}
            </button>
          ))
        }
      </div>



    </div>
  );
};

export default Menu;