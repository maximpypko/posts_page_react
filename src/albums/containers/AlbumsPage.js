import PropTypes from 'prop-types';
import { useContext } from 'react';
import Header from '../../common/containers/Header';
import AlbumItem from '../components/AlbumItem';
import ButtonLoadMore from '../../common/components/ButtonLoadMore';
import ServicePanel from '../../common/containers/ServicePanel';
import PaginationList from "../../common/components/PaginationList";
import Context from '../../Context';
import WarningIfNoText from '../../common/components/WarningIfNoText';

function AlbumsPage() {

  const { albums, amountPaginationItems, currentPage } = useContext(Context);

  return (
    <>
      <main className="uk-main">
        <Header />
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
                  <WarningIfNoText/>
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