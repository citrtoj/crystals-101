//card-like view of crystals
//filtered by some tag
//either by property ("wealth", "love", etc)
//or by color ("white", "pink", etc)
//but that's just a plan for the future
//right now i'm just testing 


import img3 from '../media/esther-verdu-G3ttEY6r7J0-unsplash.jpg'

function Crystals() {
    return (
        <div>
          <div className='flex-center'>
            <div className='Wrapper-max-width flex-align-end flex-equal-width'>
              <div className='flex-column flex-center'>
                <div className="Img-wrapper-1">
                  <img src={img3} alt="crystals" />
                </div>
              </div>
              <div className="flex-column">
                <h1>
                  Test?
                </h1>
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum exercitationem aspernatur excepturi tempora officia sed! Laudantium, fugit quod. Aperiam ullam voluptatum optio sunt fugiat! Sapiente vero earum libero quos rerum. Maiores expedita alias quas? Hic temporibus corporis culpa nam dolorem nesciunt, similique ipsum veritatis, cupiditate voluptatem sequi reiciendis nisi ut.
                </p>
              </div>
            </div>
          </div>
        </div>
        
    )
}

export default Crystals;
