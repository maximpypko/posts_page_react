import { useContext } from 'react';
import Context from '../Context';
import Nav from "./Nav";
import ServicePanel from "./ServicePanel";
import ButtonLoadMore from "../components/ButtonLoadMore";
import PaginationList from "../components/PaginationList";
import GridViewWithPictures from './GridViewWithPictures';
import GridViewWithoutPictures from './GridViewWithoutPictures';

export default function PostPage() {
  
  const {
    posts,
    amountPaginationItems,
    view,
    currentPage
  } = useContext(Context);

  return (
    <main className="uk-main">
      <Nav/>
      <ServicePanel />
      {
        view ?
        <GridViewWithPictures posts={posts}/> :
        <GridViewWithoutPictures posts={posts}/>
      }
      {
        !posts ||
        amountPaginationItems === currentPage ||
        <ButtonLoadMore/>
      }
      {!posts || <PaginationList/>}
    </main>
  );
}