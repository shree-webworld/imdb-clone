import {useEffect, useState} from "react";
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {Text, Image, Box, Container, Heading, Flex} from '@chakra-ui/react';



export default function Trending({type, tag})
{
  const api = process.env.NEXT_PUBLIC_API_KEY;
  let [movies, setMovies] = useState([]);


  const getTrending = async () => {
                          try
                          {
                            let res = await axios.get(`https://api.themoviedb.org/3/trending/${type}/week?api_key=${api}`);
                            console.log(`getTrending ${type}-`, res);
                            setMovies(res.data.results);
                          } catch (e)
                           {
                             console.log(e);
                           }
                       }

  useEffect( ()=>{
                  getTrending();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);

    let items = movies?.map(movie=>(<>
                                      <Box display="flex" alignItems="center" flexDirection="column">
                                      <Image key={movie.id} src={`https://image.tmdb.org/t/p/original${movie?.poster_path || movie?.profile_path}`}
                                                     boxSize="10rem" objectFit='contain'  alt="Poster"/>
                                      <Text fontSize="1rem" color="white" fontWeight="semibold" align="center" pt="0.5rem">
                                              {movie.name || movie.title}
                                      </Text>
                                      </Box>
                                   </>)
                            )

                            const responsive = {
                                                   0: {
                                                          items: 2,
                                                      },
                                                   568: {
                                                          items: 2,
                                                        },
                                                  1024: {
                                                           items: 4,
                                                        },
                                              };



    return(<>

      <Container maxW="100%" bg="#010100" centerContent py="1rem">
      <Heading size="lg" color="#F4C519" my="0.5rem">Trending {tag}</Heading>
      <Box w="80%" bg="#111011" my="0.5rem" py="1rem">
      <AliceCarousel
              mouseTracking
              autoPlay
              autoPlayControls={false}
              autoPlayInterval={1000}
              animationDuration={1500}
              infinite
              disableDotsControls
              disableButtonsControls
              responsive={responsive}
              items={items}
            />

          </Box>
        </Container>
        </>);
}
