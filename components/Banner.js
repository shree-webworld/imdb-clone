import {Box, Image} from '@chakra-ui/react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";



export default function Banner({movies, ...props})
{

  return(<>

          <Box w="60%">
          <Carousel autoPlay={true} autoFocus={true}  showArrows={true} showThumbs={false}
                    infiniteLoop={true} showIndicators={false} showStatus={false} width="60rem"
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
          </Box>
        </>);
}
