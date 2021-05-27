import Context  from '../Context';
import { useState, useEffect, useContext } from 'react';


function AlbumItem({ album }) {
  const { id, title } = album;

  const {
    likedAlbums,
    setLikedAlbums
  } = useContext(Context)


  const [classButtonHeart, setClassButtonHeart] = useState('')
  
  useEffect(() => {
    setClassButtonHeart(() => likedAlbums.find(album => album.id === id) ? 'uk-text-success' : ''
    )
  }, [id, likedAlbums])

  const hendlerClickButtonHeart = () => {
 
    setLikedAlbums([...likedAlbums, album])
    setLikedAlbums(() => {
      const flag = likedAlbums.find(album => album.id === id);
      if (flag) {
        const newLikedAlbums = likedAlbums.filter(album => album.id !== id);
        return newLikedAlbums
      }else {
        return  [album, ...likedAlbums]
      }
    })
  }
  
  return (
    <div>
      <div className="uk-card uk-card-default uk-margin-medium-bottom uk-light">
        <img src="https://picsum.photos/600/400" alt="" uk-cover='uk-cover'/>
        <canvas width="600" height="400"></canvas>
        <div className="uk-overlay-primary uk-position-cover"></div>
        <div className="uk-overlay uk-overlay-primary uk-position-bottom">
          <p>{title}</p>
        </div>         
        <div className="uk-position-top-right uk-overlay">
          <button
            className = {`${classButtonHeart}`}
            uk-icon="icon: heart; ratio: 2"
            onClick={() => {
              hendlerClickButtonHeart()
            }}        
          ></button>
        </div>             
                    
      </div>                
    </div>
  )
}
export default AlbumItem;