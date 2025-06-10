import React, { useState, useEffect } from 'react';


const sliderData = [
  {
    title: 'Home Made Organic Products',
    text: '“At our core, we believe the best things are made with love — not machines...”',
    image: '/images/home.jpg'
  },
  {
    title: 'Agriculture Farming Products',
    text: 'Freshly sourced from local farms with no chemicals or additives.',
    image: '/images/farming.jpg'
  },
  {
    title: 'Agricultural machineries',
    text: 'Empowering farmers with the latest in agricultural technology.',
    image: '/images/machinery.jpg'
  },
  {
    title: 'Organic Vegetables',
    text: 'Harvested with care, our organic vegetables are fresh and nutritious.',
    image: '/images/vegetables.jpg'
  },
    {
        title: 'Organic Fruits',
        text: 'Taste the difference with our handpicked organic fruits.',
        image: '/images/fruits.jpg'
    }
    ,
    {title: 'Fresh Dairy Products',
    text: 'Pure, fresh, and organic dairy products straight from the farm.',
    image: '/images/dairy.jpg'
    }

];

const HomeSlider = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % sliderData.length);
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, []);

  const { title, text, image } = sliderData[index];

  return (
    <div
      className='homecont'
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className='home1'>{title}</h1>
      <h3>{text}</h3>
    </div>
  );
};

export default HomeSlider;
