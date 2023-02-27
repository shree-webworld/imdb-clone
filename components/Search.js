import { Box, Image, Menu, MenuButton, MenuList, FormControl,
         MenuItem, Button, Input, InputGroup, InputRightElement,
         Heading, Divider, Text, MenuGroup, Select, InputLeftElement
       } from '@chakra-ui/react';
import {useState} from "react";
import { useRouter} from 'next/router';
import {useSelector, useDispatch} from "react-redux";
import {setSelectType} from "../store/slices/selectTypeSlice";


export default function Search()
{

  const router = useRouter();
  let dispatch = useDispatch();

  let type = useSelector((state) => state.selectType);
  // console.log("type", type);


  let [searchText, setSearchText] = useState("");

  let handleInput = (e) =>{
                              router.push(`/search/${type}?q=${searchText}`);
                          }

  let handleKeyPressed = (e) =>{
                                  if(e.key === "Enter")
                                  {
                                        router.push(`/search/${type}?q=${searchText}`);
                                  }
                              }

  return(<>

    <InputGroup w="50%">
    <Select w="7rem" fontSize="0.9rem" color="gray.900"
            bg="white" borderRightRadius="none" value={type} onChange={(e)=>dispatch(setSelectType(e.target.value))}>
    <option value='movie'>
      Movie
    </option>
    <option value='tv'>
      TV
    </option>
    </Select>
    <Input size="md" placeholder="Search IMDb" type="text" color="gray.900"
           bg="white" borderLeftRadius="none" autoComplete="off" onKeyPress={(e)=>handleKeyPressed(e)}
          name="searchInput" onChange={(e)=> setSearchText(e.target.value)}/>
      <InputRightElement>
        <Button color="gray.600" size="sm" bg="white" name="searchButton" onClick={handleInput}
                _hover="white">
          <i className="bi bi-search"></i>
        </Button>
      </InputRightElement>
   </InputGroup>

        </>);
}
