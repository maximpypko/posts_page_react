import { Router, Route, Switch,  BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { useState, useEffect, useRef } from 'react';
import { getRequest, searchRequest, rangeRequest } from "./utils/request";
import PostPage from './containers/PostPage';
import AlbumsPage from './containers/AlbumsPage';
import Post from './containers/Post';
import Context  from './Context';
import { IdRequest, url }   from './utils/enums';

function WrapperPostPage() {
  const [activePage, setActivePage] = useState(url.urlPosts);
  const [posts, setPosts] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [amountPosts, setAmountPosts] = useState(6);
  const [amountPaginationItems, setAmountPaginationCount] = useState(null);
  const [order, setOrder] = useState('asc');
  const [view, setView] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [linkPost, setLinkPosts] = useState(false);
  const [identifier, setIdentifier] = useState(IdRequest.normal);
  const [likedPosts, setLikedPosts] = useState([]);
  const [idElementDeleted, setIdElementDeleted] = useState(null);
  const [selectedPost, setSelectedPost] = useState({})
  const [hiddenElements, setHiddenElements] = useState(false);
  const [timeRequest, setTimeRequest] = useState(false);
  const [range, setRange] = useState(false);
  const [likedAlbums, setLikedAlbums] = useState([]);
  const formValue = useRef();

  useEffect(() => {
    if (identifier === IdRequest.normal) {

      getRequest(activePage, currentPage, amountPosts, order)
        .then(response => {
          formValue.current.value = '';
          setHiddenElements(false);
          activePage === url.urlPosts ? setPosts(response.data) : setAlbums(response.data);
          const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
          setAmountPaginationCount(newAmountPaginationItems);
        })
    }
  }, [amountPosts, order, currentPage, identifier, linkPost, activePage]);
  
  useEffect(() => {
    if (identifier === IdRequest.search)
      searchRequest(activePage, formValue.current.value, amountPosts, currentPage, order)
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
      rangeRequest(activePage, formValue.current.value, amountPosts, currentPage, order)
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
      view,
      setView,
      currentPage,
      setCurrentPage,
      linkPost,
      setLinkPosts,
      identifier,
      setIdentifier,
      likedPosts,
      setLikedPosts,
      idElementDeleted,
      setIdElementDeleted,
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
            component={Post}
          />
          </Switch>
          </BrowserRouter>
      </Router>            
      </Context.Provider>
  )
}