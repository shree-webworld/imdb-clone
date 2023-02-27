import { Card, CardHeader, CardBody, CardFooter,
        Image, Stack, Heading, Text, Button, Container }
        from '@chakra-ui/react';
import { useRouter } from 'next/router';
import {useEffect, useState} from "react";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {addMovie} from "../../store/slices/watchListSlice";


export default function CardDetails()
{
  const router = useRouter();
  const dispatch = useDispatch();
  let type = useSelector((state) => state.selectType);

  let {card} = router.query;

  let [movies, setMovies] = useState("");

  const api = process.env.NEXT_PUBLIC_API_KEY;

  const addToWatchList = (movies) =>{
                                        dispatch(addMovie(movies));
                                        router.push("/watchlist");
                                    }

  const getMovieCard = async () => {
                          try
                          {
                            if(card)
                            {
                              let res = await axios.get(`https://api.themoviedb.org/3/${type}/${card}?api_key=${api}`);
                              console.log("getMovieCard - ", res);
                              setMovies(res.data);
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
                  getMovieCard();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);



  return(<>
    <Container maxW="100%" bg="#111011" centerContent h="100vh" py="6rem">

    <Card
      direction={{ base: 'column', sm: 'row' }}
      overflow='hidden'
      variant='outline'
      w="65rem"
    >
      <Image
        objectFit='contain'
        maxW={{ base: '100%', md: '18rem' }}
        src={`https://image.tmdb.org/t/p/original${movies?.poster_path}`}
        alt='Poster'
        px="1rem"
        py="0.5rem"
      />

      <Stack>
        <CardBody>
          <Heading size='lg'>{movies?.title || movies?.name}</Heading>

        <Text py='2' textIndent="2rem" fontSize="1.2rem">
            {movies?.overview}
          </Text>

          <Text py='2'>
              Release Date : {movies?.release_date || movies?.first_air_date}
          </Text>


          <Text py="2">
            Runtime : {movies?.runtime} min
          </Text>


          <Text py='2'>
            Rating : <i className="bi bi-star-fill" style={{color:"#F4C519"}}></i>&nbsp;&nbsp;{movies.vote_average?.toFixed(1)}
          </Text>

        </CardBody>

        <CardFooter>
          <Button variant='outline' color='#F4C519' borderColor="#F4C519" w="10rem" mr="2rem"
                  onClick={() => router.back()} fontSize="1rem" px="1rem" fontWeight="bold"
                  _hover={{bg:"#F4C519", color:"white"}}>
            Back
          </Button>

          <Button variant='solid' color='white' bg="#F4C519" w="10rem" borderColor="#F4C519"
                  onClick={() => addToWatchList(movies)} fontSize="1rem" px="1rem"
                  _hover={{color:"#F4C519", bg:"white"}}>
            Add To Watchlist
          </Button>

        </CardFooter>
      </Stack>
    </Card>

  </Container>

  </>);

}
