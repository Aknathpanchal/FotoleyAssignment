import React, { useEffect, useState } from 'react';
import { Box, Grid, IconButton,Stack,Button } from '@mui/material';
import play from './assets/play1.png';
import pause from './assets/pause.png';
import playIcon from './assets/play.png';
import Typography from '@mui/material/Typography';

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
        <Box p={4}>
          <Box display="flex" flexDirection={{ xs: 'column', lg: 'row' }} gap={2} justifyContent="space-between" alignItems="center" pt={{ lg: 4 }}>
            <Box sx={{ width: { xs: '100%', lg: '50%' }, border: '1px solid red' }}>
              <img alt="img" src={images[currentImgIndex].url} style={{ width: '100%', height: 'auto' }} />
            </Box>
  
            <Box sx={{ width: { xs: '100%', lg: '50%' }, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', color: 'gray.700', opacity: 1, textAlign: 'left', mb: 2 }}>
                {images[currentImgIndex].heading}
              </Typography>
  
              <Typography variant="body1" sx={{ color: 'gray.400', opacity: 1, textAlign: 'left' }}>
                {images[currentImgIndex].desc}
              </Typography>
            </Box>
          </Box>
  
          <Box mt={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
              <Box sx={{ position: 'relative', width: '50%' }}>
                <img
                  alt="img"
                  src={playIcon}
                  style={{ transform: 'rotate(180deg)', width: 8, mdWidth: 12, xlWidth: 16, position: 'absolute', left: 8, top: '50%', transform: 'translateY(-50%)' }}
                  onClick={handlePrev}
                />
  
                <Stack direction="row" gap={4} sx={{ width: '100%' }}>
                  {images.map((eachEle, index) => (
                    <img
                      alt={eachEle.heading}
                      src={eachEle.url}
                      style={{
                        width: 100,
                        mdWidth: 16,
                        xlWidth: 20,
                        border: index === currentImgIndex ? '4px solid blue' : 'none',
                        filter: index === currentImgIndex ? 'none' : 'grayscale(100%)',
                      }}
                      key={index}
                      onClick={() => setCurrentImgIndex(index)}
                    />
                  ))}
                </Stack>
  
                <img
                  alt="img"
                  src={playIcon}
                  style={{ width: 8, mdWidth: 12, xlWidth: 16, position: 'absolute', right: 8, top: '50%', transform: 'translateY(-50%)' }}
                  onClick={handleNext}
                />
              </Box>
  
              <Box sx={{ width: '50%', display: 'flex', justifyContent: 'center' }}>
                <Button onClick={startCarousel}>
                  {toggleCarousel ? <img alt="img" src={pause} /> : <img alt="img" src={play} />}
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </>
    );
}

export default App;
