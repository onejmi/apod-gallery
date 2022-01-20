import {Box, Center, IconButton, Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { useState } from "react";
import {isFavourite, toggleFavourite} from "../data/favourites";

function NasaCard(props) {

    const [favourite, setFavourite] = useState(isFavourite(props.post.imageUrl));

    const onLike = () => {
        toggleFavourite(props.post.imageUrl);
        setFavourite(!favourite);
    }

    return <Box
        key={props.post.date}
        d={"inline-block"}
        margin={'10px'}
        w={"100%"}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={6}
        overflow={'hidden'}>
        <Stack>
            <Box
                bg={'gray.100'}
                mt={-6}
                mx={-6}
                mb={3}
                pos={'relative'}>
                <Center>
                    <Image
                        src={props.post.imageUrl}
                        fallbackSrc='https://via.placeholder.com/500'
                        layout={'fill'}
                        alt={props.post.title}
                    />
                </Center>
            </Box>
            <Text marginTop={'40px'} fontSize={'2xl'}>{props.post.title}</Text>
            <Text marginTop={'20px'} fontSize={'1s'}>{props.post.date}</Text>
            <Text marginTop={'40px'} fontSize={'1xl'}>{props.post.description}</Text>
            <IconButton onClick={onLike} variant={'outline'} w={'30px'} aria-label={'heart'} colorScheme={'red'}
                        icon={favourite ? <AiFillHeart/> : <AiOutlineHeart/>}/>
        </Stack>
    </Box>
}

export default NasaCard;

