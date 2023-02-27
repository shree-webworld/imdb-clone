import {Text, Image, Box, Heading, Flex, VStack} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import axios from "axios";


export default function UpNext()
{

  const api = process.env.NEXT_PUBLIC_API_KEY;
  let [movies, setMovies] = useState([]);


  const getUpNext = async () => {
                          try
                          {
                            let res = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}`);
                            console.log("getUpNext - ", res);
                            setMovies(res.data.results);
                          } catch (e)
                           {
                             console.log(e);
                           }
                       }

  useEffect( ()=>{
                  getUpNext();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);



  return(<>
            <Box w="40%" pl="8rem" bgGradient='linear(to-r, #010100, #111011, #131312)'>
              <Heading size="md" color="#F4C519" ml="2rem" my="1rem">Up Next</Heading>
              {
                movies?.splice(0,3).map(movie =>(<>
                                        <Box key={movie?.id} display="flex" py="0.5rem">
                                        <Image src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                              boxSize="9rem" objectFit='contain'  alt="Poster"/>
                                      <Flex direction="column">
                                        <i className="bi bi-play-circle" style={{color:"white", fontSize:"2rem"}}></i>
                                        <Text color="white" fontSize="1.2rem" fontWeight="semi-bold">
                                          {movie?.title}
                                        </Text>
                                      <Text color="white" fontSize="1rem">Watch the Trailer</Text>
                                     </Flex>
                                        </Box>
                                    </>)
                          )
              }
            </Box>

        </>);
}
