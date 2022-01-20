import {Box, ScaleFade} from "@chakra-ui/react";
import NasaCard from "./NasaCard";

function PostGallery(props) {
    return (
        <ScaleFade initialScale={0.4} in={true}>
            <Box
                padding={4}
                w="100%"
                mx="auto"
                sx={{ columnCount: [1, 2, 3], columnGap: "20px" }}
            >
                {props.posts.map(post => (<NasaCard post={post}/>))}
            </Box>
        </ScaleFade>
    );
}

export default PostGallery;

