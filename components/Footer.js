import {Text, Container} from '@chakra-ui/react';


export default function Footer()
{

  return(<>
            <Container minW="100vw" centerContent bg="#111011" py="0.5rem">
              <Text color="white" fontSize="1.2rem">
                Made with <i className="bi bi-heart-fill" style={{color:"red"}}></i> from Shreedhar
              </Text>
            </Container>
        </>);
}
