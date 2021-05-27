import PropTypes from 'prop-types';
import { useContext } from 'react';
import Nav from './Nav';
import AlbumItem from '../components/AlbumItem';
import ButtonLoadMore from '../components/ButtonLoadMore';
import ServicePanel from './ServicePanel';
import PaginationList from "../components/PaginationList";
import Context from '../Context';
import Warning from '../components/Warning';

function AlbumsPage() {

  const { albums, amountPaginationItems, currentPage } = useContext(Context);

  return (
    <>
      <main className="uk-main">
        <Nav />
        <ServicePanel/>
        <div className="uk-section">
          <div className="uk-container uk-cover-container">  
            <div className="uk-grid uk-child-width-1-2@s uk-child-width-1-3@m">
              {
                albums ? 
                albums.map(element => {
                  return <AlbumItem
                    key={element.id}
                    album={element}
                    /> 
                }) :
                  <Warning/>
              }            
            </div>
          </div>
        </div>
        {!albums ||
              amountPaginationItems === currentPage ||
              <ButtonLoadMore/>
            }
            {!albums ||
              <PaginationList/>
            }
      </main>
    </>
  )
}

AlbumsPage.propTypes = {
  albums: PropTypes.array,
  amountPaginationItems: PropTypes.number,
  currentPage: PropTypes.number,
}

export default AlbumsPage;