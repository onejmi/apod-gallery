import './App.css';

import {useEffect, useState} from "react";
import { retrieveApodPosts } from "./api/nasa-api";
import PostGallery from "./component/PostGallery";
import {Center, CircularProgress} from "@chakra-ui/react";
import Pagination from "@choc-ui/paginator";

function App() {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState(null);
  const [page, setPage] = useState(1);

  const daysElapsed = ((new Date()) - (new Date(1995, 6, 16))) / (24 * 60 * 60 * 1000);
  const pageCount = (daysElapsed / 18) * 10;

  const onPageChange = (page) => {
      setLoading(true);
      setPage(page);
      retrieveApodPosts(page).then((posts) => {
          setPosts(posts);
          setLoading(false);
      });
  }

  useEffect(() => {onPageChange(1)}, []);

  return (
      <div>
          {loading ? <Center h={"90vh"}>
                        <CircularProgress isIndeterminate color='blue.300' />
                     </Center> :
              <PostGallery posts={posts}/>}
          <Center marginBottom={'3vh'}>
              <Pagination
                  defaultCurrent={5}
                  total={pageCount}
                  paginationProps={{ display: "flex" }}
                  pageNeighbours={1}
                  onChange={onPageChange}
                  colorScheme={"blue"}
                  current={page}
              />
          </Center>
      </div>
  );
}

export default App;
