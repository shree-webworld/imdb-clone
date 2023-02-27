import { useRouter } from 'next/router';
import {Text, Box, Image, Heading, Divider} from '@chakra-ui/react';
import {useEffect, useState} from "react";
import axios from "axios";
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




export default function SearchMovie()
{
  const router = useRouter();
  let {search_type, q} = router.query;


  let [movies, setMovies] = useState([]);

  const api = process.env.NEXT_PUBLIC_API_KEY;



  const getSearchMovie = async () => {
                          try
                          {
                              console.log("search-",search_type);
                              let res = await axios.get(`https://api.themoviedb.org/3/search/${search_type}?api_key=${api}&query=${q}`);
                              console.log("getSearchMovie - ", res);
                              setMovies(res.data.results);
                          } catch (e)
                           {
                             console.log(e);
                           }
                       }

  useEffect( ()=>{
                  getSearchMovie();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[search_type, q]);


  return(<>
    <Box px="15rem" w="100%" bg="#010100" py="2rem">

    <Box bg="white" pl="3rem" pt="1rem" pb="2.5rem" color="gray.900">
      <Heading size="lg">IMDb search result for &ldquo;{q}&rdquo;</Heading>
    </Box>


    <TableContainer bg="white" h="35rem" overflowY="auto">
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
                                <Tr key={movie?.id} onClick={() => router.push(`/movie/${movie?.id}`)}
                                    cursor="pointer" _hover={{bg:"gray.200"}}>
                                <Td>
                                  <Image src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                      boxSize="8rem" objectFit='contain'  alt="Poster"/>
                                </Td>
                                <Td>
                                  <Heading size="sm">{movie?.title || movie?.name}</Heading>
                                </Td>
                                <Td>
                                  <i className="bi bi-star-fill" style={{color:"#F4C519"}}></i>&nbsp;&nbsp;{movie?.vote_average}
                                </Td>
                                <Td>{movie?.release_date || movie?.first_air_date}</Td>
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
