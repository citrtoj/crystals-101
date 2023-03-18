import { useParams } from 'react-router-dom';
import { useState } from 'react';
import crystals from '../crystals.json'
import NotFound from './NotFound'

function Crystal() {
    let { id } = useParams();

    let [ idx, setIdx ] = useState(0);

    let crystal = crystals.filter( (data) => {
      return data.id === id
    } );

    function handleClick(event) {
      setIdx(event.target.parentElement.id.split('-')[1]);
    }

    if (crystal === undefined) {
      return (<NotFound/>)
    }
    else {
      crystal = crystal[0];
      return (
          <div className='Wrapper-max-width justify-center align-center flex flex-equal-width height-100'>
            <div className="flex-column justify-center">
              <div className="Img-main-wrapper">
                <div className="Img-4-3">
                  <img src={crystal.img[idx]} alt={crystal.name} />
                </div>
                <div className="Img-mini-list">
                  { crystal.img.map( (image, index) => {
                    return (
                      <div className="Img-square" id={'img-' + index} key={index}
                      onClick={(event) => handleClick(event)}>
                        <img src={image} alt={crystal.name + ` ${index}`} />
                      </div>
                    )
                  } ) }
                </div>
              </div>
            </div>
            <div className="flex-column justify-center">
              <h1>
                {crystal.name}
              </h1>
              <div className="tags flex">
                {crystal.tags.map( (tag) => (
                  <div className='Tag'>
                      {tag}
                    </div>)
                ) }
              </div>
              <p>
                {crystal.desc}
              </p>
              
            </div>
          </div>

          
      )
    }
}

export default Crystal;
