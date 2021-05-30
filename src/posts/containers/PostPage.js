import { useContext } from 'react';
import Context from '../../Context';
import Header from "../../common/containers/Header";
import ServicePanel from "../../common/containers/ServicePanel";
import ButtonLoadMore from "../../common/components/ButtonLoadMore";
import PaginationList from "../../common/components/PaginationList";
import GridViewWithPictures from './GridViewWithPictures';
import GridViewWithoutPictures from './GridViewWithoutPictures';

function PostPage() {
  
  const {
    posts,
    amountPaginationItems,
    isViewWithPictures,
    currentPage
  } = useContext(Context);

  return (
    <main className="uk-main">
      <Header/>
      <ServicePanel />
      {
        isViewWithPictures ?
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
export default PostPage;