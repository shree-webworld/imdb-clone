import { useRouter } from 'next/router';
import {Text, Box, Image, Heading, Divider, Center, Button, Tag, TagLabel, Flex} from '@chakra-ui/react';
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
import {useSelector, useDispatch} from "react-redux";
import {removeMovie, clearAll} from "../store/slices/watchListSlice";


export default function Watchlist()
{
   let dispatch = useDispatch();
   let movies = useSelector((state) => state.watchList);
   // console.log("movies list", movies.vote_average);

   let handleRemove = (movieId) =>{
                                       dispatch(removeMovie(movieId));
                                    }

   let handleClearAll = () =>{
                                  dispatch(clearAll());
                             }



  return(<>

    <Box px="15rem" w="100%" bg="#010100" py="2rem">

    <Box bg="white" pl="3rem" pt="1rem" pb="2.5rem" color="gray.900">
      <Heading size="lg">
        IMDb Watchlist
      </Heading>
    </Box>


    <TableContainer bg="white" h="35rem" overflowY="auto">
      <Table variant='simple' size="sm">
      <TableCaption>
        { movies.length?
          (<Button colorScheme='red' size="md" variant='solid' onClick={() => handleClearAll()}>
            Clear All
          </Button>) :
          (<Tag size="lg" variant="solid" colorScheme="red" mt="10rem" p="1rem">
            <TagLabel>
              Watchlist is empty
            </TagLabel>
          </Tag>)
        }
      </TableCaption>
      <Thead>
            <Tr>
              <Th>
                <Text px="2rem" fontSize="0.9rem">Poster</Text>
              </Th>
              <Th>
                <Text fontSize="0.9rem">Movie Name</Text>
              </Th>
              <Th display="flex">
                <Text fontSize="0.9rem">Ratings</Text>
              </Th>
              <Th>
                <Text fontSize="0.9rem">Delete</Text>
              </Th>
            </Tr>
      </Thead>
        <Tbody>
        {
          movies?.map(movie=>(
                                <Tr key={movie?.id}>
                                <Td>
                                  <Image src={`https://image.tmdb.org/t/p/original${movie?.poster_path}`}
                                      boxSize="8rem" objectFit='contain'  alt="Poster"/>
                                </Td>
                                <Td>
                                  <Heading size="sm">{movie?.title || movie?.name}</Heading>
                                </Td>
                                <Td>
                                  <i className="bi bi-star-fill" style={{color:"#F4C519"}}></i>&nbsp;&nbsp;{movie.vote_average?.toFixed(1)}
                                </Td>
                                <Td>
                                <Button color='red.600' size="md" variant='ghost' onClick={() => handleRemove(movie.id)}>
                                    <i className="bi bi-trash-fill"></i>
                                </Button>
                                </Td>
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
