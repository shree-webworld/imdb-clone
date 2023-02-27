import { Box, Image, Menu, MenuButton, MenuList,
         MenuItem, Button, Input, InputGroup, InputRightElement,
         Heading, Divider, Text, MenuGroup, Select, InputLeftElement
       } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Search from "./Search";


export default function Navbar()
{
  const router = useRouter();

  return(<>
            <Box display="flex" bg='#121212' minW='100vw' minH="4.5rem"
                 color='white' py="1rem" px="5rem" justifyContent="space-between"
            >
              <Image w="5rem" h="2.5rem" src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png'
                    alt='IMDB Logo' objectFit='contain' onClick={() => router.push('/')}
                    _hover={{cursor:"pointer"}}
              />

                    <Menu>
                      <MenuButton as={Button} leftIcon={<i className="bi bi-list"></i>} fontWeight="bold"
                                  bg="#121212" fontSize="1rem" _hover={{bg:"gray.800", color:"white" }}
                                  _active={{bg:"gray.800", color:"white" }}
                      >
                        Menu
                      </MenuButton>
                      <MenuList fontSize="1.2rem" bg="#111011">
                      <MenuGroup title='Movie' color="#F4C519" fontSize="xs" fontWeight="bold">
                      <Link href="/category/popular">
                        <MenuItem color="white" bg="#111011" _hover={{color:"#F4C519"}}>
                          Popular
                        </MenuItem>
                      </Link>

                      <Link href="/category/top_rated">
                        <MenuItem color="white" bg="#111011" _hover={{color:"#F4C519"}}>
                          Top Rated
                        </MenuItem>
                      </Link>

                      <Link href="/category/upcoming">
                        <MenuItem color="white" bg="#111011" _hover={{color:"#F4C519"}}>
                          Upcoming
                        </MenuItem>
                      </Link>
                      </MenuGroup>
                      </MenuList>
                    </Menu>

                    <Search />

                  <Heading size="sm" pt="0.5rem"  fontSize="1rem" fontWeight="bold">
                      IMDb<span style={{color:"#2B99BB"}}>Pro</span>
                  </Heading>

                  <Text color="#383939" fontSize="1.5rem" fontWeight="bold">
                      |
                  </Text>

                  <Link href="/watchlist">
                  <Heading size="sm" pt="0.5rem" color="white" fontSize="1rem">
                      <i className="bi bi-bookmark-plus-fill"></i> Watchlist
                  </Heading>
                  </Link>

                  <Button color="white" size="md" _hover={{bg:"gray.800", color:"white" }}
                          bg="#121212"  fontSize="1rem"
                  >
                      Sign In
                  </Button>

                  <Menu>
                    <MenuButton as={Button} rightIcon={<i className="bi bi-caret-down-fill"></i>}
                                bg="#121212" fontSize="1rem"
                    >
                      En
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Download</MenuItem>
                    </MenuList>
                  </Menu>

            </Box>
        </>);
}
