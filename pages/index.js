import Head from 'next/head';
import Banner from "../components/Banner";
import UpNext from "../components/UpNext";
import Trending from "../components/Trending";
import {useEffect, useState} from "react";
import axios from "axios";
import {Box, Container} from '@chakra-ui/react';


export default function Home()
{
  const api = process.env.NEXT_PUBLIC_API_KEY;
  let [movies, setMovies] = useState([]);
  let type, tag;


  const getData = async () => {
                          try
                          {
                            let res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${api}`);
                            console.log("getData - ", res);
                            setMovies(res.data.results);
                          } catch (e)
                           {
                             console.log(e);
                           }
                       }

  useEffect( ()=>{
                  getData();
                  // eslint-disable-next-line react-hooks/exhaustive-deps
            },[]);


  return (<>
      <Head>
        <title>IMDb</title>
      </Head>

        <Box display="flex" py="1rem" px="3rem" bg="#010100">
          <Banner movies={movies}/>
          <UpNext />
        </Box>

        <Trending type="tv" tag="📺 TV shows "/>

        <Trending type="movie" tag="📽 Movie of the Week "/>

        <Trending type="person" tag="Celebs"/>



  </>)
}


// imdb email powalej433@crtsec.com
//8f1406774a70f4ab94d8848d50a4d9c6
//https://api.themoviedb.org/3/movie/now_playing?api_key=8f1406774a70f4ab94d8848d50a4d9c6
