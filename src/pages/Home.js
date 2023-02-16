import Card from '../components/Card'
import img1 from '../media/rose-quartz.png'
import img2 from '../media/amethyst.png'
import monoline from '../media/monoline.png'
import img3 from '../media/esther-verdu-G3ttEY6r7J0-unsplash.jpg'
import img4 from '../media/edz-norton-780J1cI0Byc-unsplash.jpg'

function Home() {
    return (
        <div>
          <div className={"Wrapper-75 Home-fill-img"}>
            <div className={"Wrapper-max-width flex"}>
              <div className="flex-column flex-justify-end">
                <img src={monoline} className="monoline" alt="monoline" />
                <h1 className='Home-title-h1'>
                  Crystals 101
                </h1>
                <hr/>
                <p>
                  Some people believe that crystals, such as quartz and obsidian, may each have specific healing properties that can benefit your mind, body, and soul.
                </p>
              </div>
              <div className="flex-column">
                <div className="Card-wrapper">
                  <Card img={img1} name="Rose Quartz" >
                    <p>
                    sometimes referred to as the stone of love and believed to encourage love and trust
                    </p>
                  </Card>
                  <Card img={img2} name="Amethyst">
                    <p>
                    used for healing, purifying, and enhancing willpower
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex-center'>
            <div className='Wrapper-max-width flex-align-end flex-equal-width'>
              <div className='flex-column flex-center'>
                <div className="Img-wrapper-1">
                  <img src={img3} alt="crystals" />
                </div>
              </div>
              <div className="flex-column">
                <h1>
                  Why use healing crystals?
                </h1>
                <p>
                There are a number of different types of crystals out there. Some people believe they have healing abilities for the mind, body, and soul.

In fact, many ancient cultures — including Egypt, Greece, and China — believed that crystals have healing properties.

Some people claim that crystals promote the flow of good energy and help rid your body and mind of negative energy for physical and emotional benefits.

However, it’s important to know that there’s almost no scientific evidence to support the use of crystals. 
                </p>
              </div>
            </div>
          </div>

          <div className="Wrapper-75 bg-light flex-center">
            <div className="Wrapper-max-width">
              <div className="flex-column">
                <p>Test</p>
              </div>
            </div>
          </div>

        </div>
        
    )
}

export default Home;