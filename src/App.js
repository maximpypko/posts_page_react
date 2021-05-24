import { useState, useEffect, useRef } from 'react';
import {
  getRequest,
  searchRequest,
  rangeRequest
} from "./utils/request";
import Nav from "./containers/Nav";
import ServicePanel from "./containers/ServicePanel";
import ButtonLoadMore from "./components/ButtonLoadMore";
import PaginationList from "./components/PaginationList";
import GridViewWithoutPictures from './containers/GridViewWithoutPictures';
import GridViewWithPictures from './containers/GridViewWithPictures';
import { IdRequest } from './utils/enums';

export default function App() {
  const [posts, setPosts] = useState([]);
  const [amountPosts, setAmountPosts] = useState(6);
  const [amountPaginationItems, setAmountPaginationCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('asc');
  const [view, setView] = useState(true);
  const [hiddenElements, setHiddenElements] = useState(false);
  const [linkPost, setLinkPosts] = useState(false);
  const [timeRequest, setTimeRequest] = useState(false);
  const [range, setRange] = useState(false);
  const [password, setPassword] = useState(IdRequest.normal)
  const [likedPosts, setLikedPosts] = useState([])
  const [idElementDeleted, setIdElementDeleted] = useState(null)

  const formValue = useRef()

  useEffect(() => {
    if (password === IdRequest.normal) {

      getRequest(currentPage, amountPosts, order).then(response => {
        formValue.current.value = '';
        setHiddenElements(false);
        setPosts(response.data);
        const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
        setAmountPaginationCount(newAmountPaginationItems);
      })
    }
  }, [amountPosts, order, currentPage, password, linkPost]);
  
  useEffect(() => {
    if (password === IdRequest.search)
      console.log('vvv');
      searchRequest(formValue.current.value, amountPosts, currentPage, order).then(response => {

      if (response) {
        if (response.data.length === 0) {
          setPosts(false)
          setTimeRequest(false);
        }
        if (response.data.length > 0) {
          setHiddenElements(false);
          setTimeRequest(false);
          setPosts(response.data);
          const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
          setAmountPaginationCount(newAmountPaginationItems);
        }
      }
    })
  }, [amountPaginationItems, amountPosts, currentPage, order, password, timeRequest]);
  

  useEffect(() => {
    if (password === IdRequest.buttonLoadMore && range) {
      setRange(false);
      rangeRequest(formValue.current.value,amountPosts, currentPage, order ).then(response => {
        setPassword('')
        setPosts([...posts, ...response]);
      })
    }
  }, [amountPosts, currentPage, order, password, posts, range]);

  return (
    <>
      <main className="uk-main">
        <Nav
          setCurrentPage={setCurrentPage}
          linkPost={linkPost}
          setLinkPosts={setLinkPosts}
          setPassword={setPassword}
          likedPosts={likedPosts}
          setLikedPosts={setLikedPosts}
          setIdElementDeleted={setIdElementDeleted}
        />
        <div className="uk-section">
          <div className="uk-container">
            <ServicePanel
              timeRequest={timeRequest}
              setTimeRequest={setTimeRequest}
              setPassword={setPassword}
              setOrder={setOrder}
              setAmountPosts={setAmountPosts}
              setCurrentPage={setCurrentPage}
              view={view}
              setView={setView}
              ref={formValue}
            />
            {view ?
              <GridViewWithPictures
                posts={posts}
                view={view}
                setTimeRequest={setTimeRequest}
                likedPosts={likedPosts}
                setLikedPosts={setLikedPosts}
                idElementDeleted={idElementDeleted}/> :
              <GridViewWithoutPictures
                posts={posts}
                view={view}
                setTimeRequest={setTimeRequest}
                likedPosts={likedPosts}
                setLikedPosts={setLikedPosts}
                idElementDeleted={idElementDeleted}/>}
            {!posts ||
              amountPaginationItems === currentPage ||
              <ButtonLoadMore
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              hiddenElements={hiddenElements}
              timeRequest={timeRequest}
              setTimeRequest={setTimeRequest}
              setRange={setRange}
              setPassword={setPassword}
              />
            }
            {!posts ||
              <PaginationList
              amountPaginationItems={amountPaginationItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              hiddenElements={hiddenElements}
              />
            }
          </div>
        </div>
      </main>
    </>
  );
}