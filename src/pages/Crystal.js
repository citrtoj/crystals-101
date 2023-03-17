import { useParams } from 'react-router-dom';
import crystals from '../crystals.json'
import NotFound from './NotFound'

function Crystal() {
    let { id } = useParams();
    let crystal = crystals.filter( (data) => {
      return data.id === id
    } )

    if (crystal.length === 0) {
      return (<NotFound/>)
    }
    else {
      crystal = crystal[0];
      return (
          <div className='Wrapper-max-width justify-center align-center flex flex-equal-width height-100'>
            <div className="flex-column justify-center">
              <div className="Img-main-wrapper">
                <div className="Img-4-3">
                  <img src={crystal.img[0]} alt={crystal.name} />
                </div>
              </div>
            </div>
            <div className="flex-column justify-center">
              <h1>
                {crystal.name}
              </h1>
              <p>
                {crystal.desc}
              </p>
            </div>
          </div>

          
      )
    }
}

export default Crystal;
