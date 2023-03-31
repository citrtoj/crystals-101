import Card from '../components/Card'
import img3 from '../media/esther-verdu-G3ttEY6r7J0-unsplash.jpg'
import Navbar from '../components/Navbar'
function Home() {
    return (
        
        <div className="">
          <Navbar/>
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
                  <Card img={"https://e0.pxfuel.com/wallpapers/300/910/desktop-wallpaper-rose-quartz-for-phones-and-tablet-aesthetic-crystal.jpg"}
                        name="Rose Quartz"
                        id="rose-quartz"
                        desc="sometimes referred to as the stone of love and believed to encourage love and trust"
                        tags={["pink", "love", "trust", "health"]}/>
                  <Card img={"https://images.squarespace-cdn.com/content/v1/5c59d36f9b8fe839e7009e6e/1550865327209-RBT5TR8L5HUH1G630SPQ/amethyst+brazil+%281%29.jpg?format=1500w"}
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
              <div className="flex-column flex-column-text">
                <h2>
                  Why use healing crystals?
                </h2>
                <p>
                There are plenty of types of crystals, and some people believe they have healing abilities.

In fact, many ancient cultures believed crystals have healing properties.

Some claim crystals promote energy flow and help rid your body and mind of negative energy.

However, there’s almost no scientific evidence to support their use. 
                </p>
              </div>
            </div>
          </div>

        </div>
        
    )
}

export default Home;