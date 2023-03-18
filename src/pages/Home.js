import Card from '../components/Card'
import img1 from '../media/rose-quartz.png'
import img2 from '../media/amethyst.png'
import img3 from '../media/esther-verdu-G3ttEY6r7J0-unsplash.jpg'

function Home() {
    return (
        <div>
          <div id="Home-fill-img" className="Wrapper-center">
            <div className="flex Wrapper-max-width">
              <div className="flex-column flex-justify-end">
               <h1 id='Home-title-h1'>
                  Crystals 101
                </h1>
                <hr/>
                <p>
                  Some people believe that crystals, such as quartz and obsidian, may each have specific healing properties that can benefit your mind, body, and soul.
                </p>
              </div>
              <div className="flex-column">
                <div className="Home-card-wrapper">
                  <Card img={img1}
                        name="Rose Quartz"
                        id="rose-quartz"
                        desc="sometimes referred to as the stone of love and believed to encourage love and trust"
                        tags={["pink", "love", "trust", "health"]}/>
                  <Card img={img2}
                        name="Amethyst"
                        id="amethyst"
                        desc="used for healing, purifying, and enhancing willpower"
                        tags={["purple", "health", "serenity", "cleansing", "protection"]} />
                </div>
              </div>
            </div>
          </div>
          
          <div className='flex-center'>
            <div className='Wrapper-max-width flex-align-end flex-equal-width column-on-mobile'>
              <div className='flex-column flex-center'>
                <div className="Img-wrapper">
                  <img src={img3} alt="crystals" />
                </div>
              </div>
              <div className="flex-column">
                <h2>
                  Why use healing crystals?
                </h2>
                <p>
                There are a number of different types of crystals out there. Some people believe they have healing abilities for the mind, body, and soul.

In fact, many ancient cultures — including Egypt, Greece, and China — believed that crystals have healing properties.

Some people claim that crystals promote the flow of good energy and help rid your body and mind of negative energy for physical and emotional benefits.

However, it’s important to know that there’s almost no scientific evidence to support the use of crystals. 
                </p>
              </div>
            </div>
          </div>

          <div className="Wrapper-center bg-light">
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