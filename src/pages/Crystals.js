//page for each individual crystal
//might grab more detailed text from another dedicated JSON
//or perhaps just link to outside sources?
//maybe make it a non-scrollable full-screen page with kinda scarce information
//idk. i'll see

import { useParams } from 'react-router-dom';

import img3 from '../media/esther-verdu-G3ttEY6r7J0-unsplash.jpg'

function Crystals() {
    let { id } = useParams();
    return (
        <div>
          <div className='flex-center'>
            <div className='Wrapper-max-width flex-align-end column-on-mobile flex-equal-width'>
              <div className='flex-column flex-center'>
                <div className="Img-wrapper">
                  <img src={img3} alt="crystals" />
                </div>
              </div>
              <div className="flex-column">
                <h2>
                  { id }
                </h2>
                <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rerum voluptatibus aliquam praesentium nobis maxime velit rem possimus perferendis voluptate perspiciatis distinctio, consequatur tempore quae, quasi doloremque accusantium? Ab, vero, aperiam quibusdam veniam eos ducimus tempora corrupti corporis delectus mollitia dolorum libero. Fuga illum, non, ratione rerum eius sequi, voluptate laudantium a incidunt tempore repudiandae! At explicabo laboriosam sunt harum incidunt provident similique repudiandae temporibus dolor odit ipsum eveniet est quis perspiciatis quia suscipit, id, modi rem voluptatem maiores. Ullam, et accusamus quae fugiat architecto accusantium illum voluptates nisi officiis dicta ex ipsum illo laudantium dolorum esse nobis voluptatem maiores natus! 
                </p>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Crystals;
