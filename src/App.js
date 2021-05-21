import { useState, useEffect } from 'react';
import {
  getRequest,
  searchRequest,
  rangeRequest
} from "./utils/request";
import Nav from "./containers/Nav";
import ServicePanel from "./containers/ServicePanel";
import ListPosts from "./containers/ListPosts";
import ButtonLoadMore from "./components/ButtonLoadMore";
import PaginationList from "./components/PaginationList";

export default function App() {
  const [posts, setPosts] = useState([]);
  const [amountPosts, setAmountPosts] = useState(6);
  const [amountPaginationItems, setAmountPaginationCount] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [order, setOrder] = useState('asc');
  const [view, setView] = useState(true);
  const [inputValue, setInputValue] = useState('');
  const [hiddenElements, setHiddenElements] = useState(false);
  const [linkPost, setLinkPosts] = useState(false);
  const [timeRequest, setTimeRequest] = useState(false);
  const [range, setRange] = useState(false);
  const [password, setPassword] = useState('nextPage')
  const [activeQuantity, setActiveQuantity] = useState(true)
  const [searchMessage, setSearchMessage] = useState('');
  const [switchView, setSwitchView] = useState(true);
  const [likedPosts, setLikedPosts] = useState([])
  const [idElementDeleted, setIdElementDeleted] = useState(null)

  useEffect(() => {
    if (password === 'nextPage') {
      getRequest(currentPage, amountPosts, order).then(response => {
        setHiddenElements(false);
        setPosts(response.data);
        const newAmountPaginationItems = Math.ceil(response.total / amountPosts);
        setAmountPaginationCount(newAmountPaginationItems);
      })
    }
  }, [amountPosts, order, currentPage, password, linkPost]);
  
  useEffect(() => {

    searchRequest(inputValue).then(data => {
      if (data) {
        if (data.length === 0) {
          setSearchMessage(<h1>text not found</h1>);
          setTimeRequest(false);
        }
        if (data.length > 0) {
          setHiddenElements(true);
          setPosts(data);
          setInputValue('');
          setSwitchView(true);
          setSearchMessage('')
        }
      }
    })
  }, [amountPosts, inputValue]);

  useEffect(() => {
    if (password === 'loadMore' && range) {
      setRange(false);
      rangeRequest(currentPage, amountPosts).then(response => {
        setPosts([...posts, ...response]);
      })
    }
  }, [amountPosts, currentPage, password, posts, range, idElementDeleted]);

  return (
    <>
      <main className="uk-main">
        <Nav
          setCurrentPage={setCurrentPage}
          linkPost={linkPost}
          setLinkPosts={setLinkPosts}
          setPassword={setPassword}
          setActiveQuantity={setActiveQuantity}
          setSearchMessage={setSearchMessage}
          likedPosts={likedPosts}
          setLikedPosts={setLikedPosts}
          setIdElementDeleted={setIdElementDeleted}
          setSwitchView={setSwitchView}
        />
        <div className="uk-section">
          <div className="uk-container">
            <ServicePanel
              setInputValue={setInputValue}
              timeRequest={timeRequest}
              setTimeRequest={setTimeRequest}
              setPassword={setPassword}
              setActiveQuantity={setActiveQuantity}
              setOrder={setOrder}
              setAmountPosts={setAmountPosts}
              setCurrentPage={setCurrentPage}
              activeQuantity={activeQuantity}
              view={view}
              setView={setView}
              switchView={switchView}
              setSwitchView={setSwitchView}
            />
            {searchMessage || <ListPosts
              posts={posts}
              view={view}
              setTimeRequest={setTimeRequest}
              likedPosts={likedPosts}
              setLikedPosts={setLikedPosts}
              idElementDeleted={idElementDeleted}
            />}
            {!switchView ||
              amountPaginationItems === currentPage ||
              <ButtonLoadMore
              setCurrentPage={setCurrentPage}
              currentPage={currentPage}
              hiddenElements={hiddenElements}
              timeRequest={timeRequest}
              setTimeRequest={setTimeRequest}
              setRange={setRange}
              setPassword={setPassword}
            />}
            {!switchView || <PaginationList
              amountPaginationItems={amountPaginationItems}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              hiddenElements={hiddenElements}
              setPassword={setPassword}
            />}
          </div>
        </div>
      </main>
    </>
  );
}