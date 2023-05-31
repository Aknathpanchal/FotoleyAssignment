import React, { useEffect, useState } from 'react';
import playIcon from './assets/play.png';

import play from './assets/play1.png';
import pause from './assets/pause.png';
import './App.css';


function App() {
  const images = [
    {
      url: 'https://images.unsplash.com/photo-1682364284611-b3201041f7d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      heading: 'Thar Desert',
      desc: "The Thar Desert, also known as the Great Indian Desert, is an arid region in the north-western part of the Indian subcontinent that covers an area of 200,000 km2 (77,000 sq mi) in India and Pakistan. It is the worlds 20th-largest desert, and the worlds 9th-largest hot subtropical desert.About 85% of the Thar Desert is in India, and about 15% is in Pakistan. The Thar Desert is about 4.56% of the total geographical area of India. More than 60% of the desert lies in the Indian state of Rajasthan; the portion in India also extends into Gujarat, Punjab, and Haryana. The portion in Pakistan extends into the provinces of Sindh[4] and Punjab (the portion in the latter province is referred to as the Cholistan Desert). The Indo-Gangetic Plain lies to the north, west and northeast of the Thar desert, the Rann of Kutch lies to its south, and the Aravali Range borders the desert to the east."
    },
    {
      url: 'https://images.unsplash.com/photo-1682343161292-abeebabf3e86?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      heading: 'Himalayas',
      desc: "The Himalayas, or Himalaya (/ˌhɪməˈleɪ.ə, hɪˈmɑːləjə/; Sanskrit: [ɦɪmaːlɐjɐ]; from Sanskrit himá 'snow, frost', and ā-laya 'dwelling, abode'),[3] is a mountain range in Asia, separating the plains of the Indian subcontinent from the Tibetan Plateau. The range has some of the Earth's highest peaks, including the very highest, Mount Everest; over 100 peaks exceeding elevations of 7,200 m (23,600 ft) above sea level lie in the Himalayas."
    },
    {
      url: 'https://images.unsplash.com/photo-1664488479474-bcebd1334105?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1331&q=80',
      heading: 'Kerala',
      desc: 'Kerala is a small state located on the Malabar Coast of India.01 It was formed on 1 November 1956 by combining Malayalam-speaking regions of the erstwhile regions of Cochin, Malabar, South Canara, and Travancore.0 Kerala stretches for about 360 miles along the Malabar Coast, varying in width from roughly 20 to 75 miles (30 to 120 km).'
    },
    {
      url: 'https://images.unsplash.com/photo-1599117372183-e8cd2eba770d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1158&q=80',
      heading: 'Konkan',
      desc: 'The Konkan (Konkani: कोंकण), also Concan or Kokan, is a stretch of land by the western coast of India, running from Damaon in the north to Anjediva in the south; with the Arabian Sea to the west and the Deccan plateau in the east. The hinterland east of the coast has numerous river valleys and riverine islands among the hilly slopes leading up into the tablelands of the Deccan.'
    },
    {
      url: 'https://images.unsplash.com/photo-1670779757037-6de9257f8e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80',
      heading: 'Penguin',
      desc: "The penguin is a flightless marine bird that lives only in the Southern Hemisphere. There are 18-21 species of penguins, with the majority living between latitudes 45° and 60° S, where they breed on islands. Some penguins inhabit temperate regions, while the Galapagos penguin lives at the Equator.0 Most penguins, including emperor, adélie, chinstrap, and gentoo penguins, reside in and around icy Antarctica. They have a thick layer of blubber and tightly-packed, oily feathers that are ideal for colder temperatures."
    },
  ]

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [toggleCarousel, setToggleCarousel] = useState(false);

  const handlePrev = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  useEffect(() => {
    let timer;
    if (toggleCarousel) {
      timer = setInterval(handleNext, 3000);
    }
    return () => clearInterval(timer);
  }, [handleNext]);

  const startCarousel = () => {
    setToggleCarousel(!toggleCarousel);
  };


  return (
    <>
      <div className="p-4">
      
        <div className="flex flex-col lg:flex-row gap-2 justify-between items-center lg:pt-4">
        <div className="w-full lg:w-[50%] border border-red-500">
  <img alt="img" src={images[currentImgIndex].url} className="w-full h-auto" />
</div>

  
          <div className="flex flex-col justify-center lg:w-[50%]">
          <h1 className="font-bold text-3xl text-left text-gray-700 opacity-100 leading-8">
  {images[currentImgIndex].heading}
</h1>

            <p className="text-base leading-6 text-left font-normal tracking-normal text-gray-400 opacity-100">
  {images[currentImgIndex].desc}
</p>

          </div>
        </div>
  
        <div className="mt-4 shree">
          <div className="flex justify-center items-center">
            <div className="relative flex-shrink-0 w-[50%]">

            <img alt="img" src={playIcon} className="rotate-180 w-8 md:w-12 xl:w-16 absolute left-8 top-1/2 transform -translate-y-1/2" onClick={handlePrev} />

              <div className="flex flex-row justify-center gap-4 w-full">
                {images.map((eachEle, index) => (
                  <img
                    alt={eachEle.heading}
                    src={eachEle.url}
                    className={`w-12 md:w-16 xl:w-20 ${index === currentImgIndex ? 'border-4 border-blue-400' : 'grayscale'}`}
                    key={index}
                    onClick={() => setCurrentImgIndex(index)}
                  />
                ))}
              </div>
  
              <img alt="img" src={playIcon} className="w-8 md:w-12 xl:w-16 absolute right-8 top-1/2 transform -translate-y-1/2" onClick={handleNext} />
             
            </div>
            <div className="w-[50%] flex justify-center">
              <button  onClick={startCarousel}>
                {toggleCarousel ? <img alt="img" src={pause} /> :  <img alt="img" src={play} />}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
  

}

export default App;
