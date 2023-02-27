
import { useRouter } from 'next/router';
import {Text, Box, Image, Heading, Divider} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import axios from "axios";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";




export default function Category()
{
  const router = useRouter();
  const {cat} = router.query;

  const api = process.env.NEXT_PUBLIC_API_KEY;

  let [movies, setMovies] = useState([]);

 const type = {
      popular: 'Most Popular',
      upcoming: 'Upcoming',
      top_rated: 'Top Rated'
  }

  const getCategory = async () => {
                          try
                          {
                            if(cat)
                            {
                              let res = await axios.get(`https://api.themoviedb.org/3/movie/${cat}?api_key=${api}`);
                              console.log("getCategory - ", res);
                              setMovies(res.data.results);
                            }else
                             {
                               router.push("/");
                             }
                          } catch (e)
                           {
                             console.log(e);
                           }
                       }

  useEffect( ()=>{
                  getCategory();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);



  return(<>
          <Box px="15rem" minW="100vw" bg="#010100" py="2rem">

            <Carousel autoPlay={true} autoFocus={true}  showArrows={true} showThumbs={false}
                      infiniteLoop={true} showIndicators={false} showStatus={false} width="65.5rem"
                      interval={4000}
            >
            {
              movies?.map(movie =>(
                                      <Image key={movie?.id} src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
                                                              alt="Banner"/>
                                  )
                        )
            }

            </Carousel>


          <Box bg="white" pl="3rem" py="2rem" color="gray.900" minW="65.5rem">
            <Heading size="lg">IMDb Charts 📊</Heading>
          <Text fontSize="1.2rem" py="0.5rem" fontWeight="semibold">
              {type[cat]} Movies <i className="bi bi-film"></i>
            </Text>
            <Text fontSize="1rem">As determined by IMDb users</Text>
          </Box>


          <TableContainer bg="white" h="35rem" overflowY="auto" minW="65.5rem">
            <Table variant='simple' size="sm">
            <Thead>
                  <Tr>
                    <Th>
                      <Text px="2rem" fontSize="0.9rem">Poster</Text>
                    </Th>
                    <Th>
                      <Text fontSize="0.9rem">Movie Name</Text>
                    </Th>
                    <Th>
                      <Text fontSize="0.9rem">Ratings</Text>
                    </Th>
                    <Th>
                      <Text fontSize="0.9rem">Release Date</Text>
                    </Th>
                  </Tr>
            </Thead>
              <Tbody>
              {
                movies?.map(movie=>(
                                      <Tr key={movie?.id}
                                          onClick={() => router.push(`/movie/${movie?.id}`)}
                                          cursor="pointer"
                                          _hover={{bg:"gray.200"}}>
                                      <Td>
                                        <Image src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                            boxSize="8rem" objectFit='contain'  alt="Poster"/>
                                      </Td>
                                      <Td>
                                        <Heading size="sm">{movie?.title}</Heading>
                                      </Td>
                                      <Td>
                                        <i className="bi bi-star-fill" style={{color:"#F4C519"}}></i>&nbsp;&nbsp;{movie?.vote_average}
                                      </Td>
                                      <Td>{movie?.release_date}</Td>
                                      </Tr>
                                   )
                            )
              }
              </Tbody>
            </Table>
          </TableContainer>

          </Box>

        </>);
}
