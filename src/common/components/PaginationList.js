import PropTypes from 'prop-types';
import { useState, useEffect } from "react";
import { IdRequest } from '../../utils/enums';
import  Context  from '../../Context';
import { useContext } from 'react';

const PaginationList = () => {
  
  const {
    amountPaginationItems,
    currentPage,
    setCurrentPage,
    hiddenElements,
    setIdentifier,
    formValue
  } = useContext(Context)
  
  const [line, setLine] = useState([]);

  useEffect(() => {
    
    setLine(() => {
      if (amountPaginationItems <= 5) {
        return [...Array(amountPaginationItems).keys()].map(num => num + 1);
      }
      if (currentPage >= 1 && currentPage <= 3) {
        return [1, 2, 3, 4, '...', amountPaginationItems];
      }
      if (currentPage >= 4 && currentPage < amountPaginationItems - 2) {
        return [1, '...', currentPage - 1, currentPage, currentPage + 1, '...', amountPaginationItems];
      }
      if (currentPage >= amountPaginationItems - 2) {
        return [1, '...', amountPaginationItems - 3, amountPaginationItems - 2, amountPaginationItems - 1, amountPaginationItems];
      }
    })
  }, [currentPage, amountPaginationItems]);

  const jumpOver = (index) => {
    if (index === 1) {
      setCurrentPage(currentPage - 3);
    }
    if (index > 1){
      setCurrentPage(currentPage + 3);
    }
  }
  
  return (
    <>
      {hiddenElements || <ul className="uk-pagination uk-flex-center uk-flex-middle" uk-margin='true'>

        {currentPage === 1 || <li>
          <a href="/" onClick={(e) => {
            e.preventDefault();
            setCurrentPage((prev) => prev === 1 ? prev : prev - 1);
            setIdentifier(formValue.current.value ? IdRequest.search : IdRequest.normal)
          }}>
            <span uk-pagination-previous='true'></span>
          </a>
        </li>}

        {line.map((element, index) => {
          return (
            <li key={index} className={currentPage === element ? 'uk-active' : ''}>
              <a href={element} onClick={(e) => {
                e.preventDefault();
                if (Number.isInteger(+e.target.innerText)) {
                  setCurrentPage(element);
                  setIdentifier(formValue.current.value ? IdRequest.search : IdRequest.normal)
                } else {
                  jumpOver(index);
                }
              }}>{element}</a>
            </li>
          )
        })}

        {currentPage === amountPaginationItems || <li>
          <a href="/" onClick={(e) => {
            e.preventDefault()
            setCurrentPage((prev) => prev === currentPage.length ? prev : prev + 1);
            setIdentifier(formValue.current.value ? IdRequest.search : IdRequest.normal)
          }}>
            <span uk-pagination-next='true'></span>
          </a>
        </li>}
      </ul>}
    </>
  );
}

PaginationList.propTypes = {
  amountPaginationItems:PropTypes.number,
  currentPage:PropTypes.number,
  setCurrentPage: PropTypes.func,
  hiddenElements: PropTypes.bool,
  setIdentifier: PropTypes.func,
  formValue: PropTypes.object
}

export default PaginationList;