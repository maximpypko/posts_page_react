import { Router, Route, Switch,  BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useState, useEffect, useRef } from 'react';
import { getRequest, searchRequest, rangeRequest } from "./utils/request";
import { IdRequest, url }   from './utils/enums';
import PostPage from './posts/containers/PostPage';
import AlbumsPage from './albums/containers/AlbumsPage';
import DetailedPost from './posts/containers/DetailedPost';
import Context  from './Context';

function WrapperPostPage() {
  const [activePage, setActivePage] = useState(url.urlPosts);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [amountPosts, setAmountPosts] = useState(6);
  const [amountPaginationItems, setAmountPaginationCount] = useState(null);
  const [order, setOrder] = useState('asc');
  const [isViewWithPictures, setIsViewWithPictures] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [linkPost, setLinkPosts] = useState(false);
  const [identifier, setIdentifier] = useState(IdRequest.normal);
  const [likedPosts, setLikedPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState({});
  const [hiddenElements, setHiddenElements] = useState(false);
  const [timeRequest, setTimeRequest] = useState(false);
  const [range, setRange] = useState(false);
  const [likedAlbums, setLikedAlbums] = useState([]);
  const formValue = useRef();

  useEffect(() => {
    if (identifier === IdRequest.normal) {

      getRequest(activePage, currentPage, amountPosts, order)
        .then(response => {
          if (formValue.current) formValue.current.reset();
          setHiddenElements(false);
          activePage === url.urlPosts ? setPosts(response.data) : setAlbums(response.data);
          const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
          setAmountPaginationCount(newAmountPaginationItems);
        })
    }
  }, [amountPosts, order, currentPage, identifier, linkPost, activePage]);
  
  useEffect(() => {
    if (identifier === IdRequest.search)
      
      searchRequest(activePage, formValue.current[0].value, amountPosts, currentPage, order)
        .then(response => {

          if (response) {
            if (response.data.length === 0) {
              activePage === url.urlPosts ? setPosts(false) : setAlbums(false);
              setTimeRequest(false);
            }
            if (response.data.length > 0) {
              setHiddenElements(false);
              setTimeRequest(false);
              activePage === url.urlPosts ? setPosts(response.data) : setAlbums(response.data);
              const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
              setAmountPaginationCount(newAmountPaginationItems);
            }
          }
        })
  }, [amountPaginationItems, amountPosts, currentPage, order, identifier, timeRequest, activePage]);
  
  useEffect(() => {
    if (identifier === IdRequest.buttonLoadMore && range) {
      setRange(false);
      rangeRequest(activePage, formValue.current[0].value, amountPosts, currentPage, order)
        .then(response => {
          setIdentifier('')
          setTimeRequest(false);
          activePage === url.urlPosts ?
            setPosts([...posts, ...response]) :
            setAlbums([...albums, ...response])
        })
    }
  }, [amountPosts, currentPage, order, identifier, posts, range, activePage, albums]);

  return (
    {
      posts,
      setPosts,
      albums,
      setAlbums,
      amountPosts,
      setAmountPosts,
      amountPaginationItems,
      setAmountPaginationCount,
      order,
      setOrder,
      isViewWithPictures,
      setIsViewWithPictures,
      currentPage,
      setCurrentPage,
      linkPost,
      setLinkPosts,
      identifier,
      setIdentifier,
      likedPosts,
      setLikedPosts,
      selectedPost,
      setSelectedPost,
      hiddenElements,
      setHiddenElements,
      timeRequest,
      setTimeRequest,
      range,
      setRange,
      activePage,
      setActivePage,
      likedAlbums,
      setLikedAlbums,
      formValue
    }
  )
}

const history = createBrowserHistory();

export default function App() {

  return (
    <Context.Provider value={WrapperPostPage()}>
      <Router history={history}>
        <BrowserRouter>
          <Switch>
            <Route
              path='/'
              exact
              component={PostPage}
            />
            <Route
              path='/albums'
              component={AlbumsPage}
            />
            <Route
              path='/post/:id'
              component={DetailedPost}
            />
          </Switch>
        </BrowserRouter>
      </Router>            
    </Context.Provider>
  )
}