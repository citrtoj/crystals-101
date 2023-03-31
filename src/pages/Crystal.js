import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import crystals from '../crystals.json'
import NotFound from './NotFound'
import Navbar from '../components/Navbar';


function Crystal() {
  
  function after(count, f) {
  let noOfCalls = 0;
  return function (...rest) {
    noOfCalls = noOfCalls + 1;
    if (count === noOfCalls) {
      f(...rest);
    }
  };
}
    let { id } = useParams();

    let [ idx, setIdx ] = useState(0);
    let [ loaded, setLoaded ] = useState(0);
    let [ item, setItem ] = useState(crystals[0])
    let [ found, setFound ] = useState(1);

    const handleImgLoad = after(item.img.length, () => {
      setLoaded(1);
    })

    useEffect( () => {
      let crystal = crystals.filter( (data) => {
        return data.id === id
      } );
      if (crystal.length === 0) {
        setFound(0);
      }
      else {
        setItem(crystal[0])
      }
    }, [id])

    function handleClick(event) {
      setIdx(event.target.parentElement.id.split('-')[1]);
    }

    if (!found) {
      return (<NotFound/>)
    }

    else {
      return (
          <>
          <Navbar/>
          <div className={`${loaded ? "show" : "hide" } Filter Wrapper-max-width justify-center align-center flex flex-equal-width height-100 column-on-mobile` }>
            <div className="flex-column justify-center">
              <div className="Img-main-wrapper">
                <div className="Img-4-3">
                  <img src={item && item.img[idx]} alt={item.name} />
                </div>
                <div className="Img-mini-list">
                  {item && item.img.map( (image, index) => {
                    return (
                      <div className="Img-square" id={'img-' + index} key={index}
                      onClick={(event) => handleClick(event)} onLoad={handleImgLoad} >
                        <img src={image} alt={item.name + ` ${index}`} />
                      </div>
                    )
                  } ) }
                </div>
              </div>
            </div>
            <div className="flex-column justify-center">
              <h1>
                {item.name}
              </h1>
              <div className="tags flex">
                {item && item.tags.map( (tag) => (
                  <div className='Tag'>
                      {tag}
                    </div>)
                ) }
              </div>
              <p>
                {item.desc}
              </p>
              
            </div>
          </div>   
          </>
      )
    }
}

export default Crystal;
