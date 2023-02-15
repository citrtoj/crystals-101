import Card from '../components/Card'
import img1 from '../media/rose-quartz.png'
import img2 from '../media/amethyst.png'

function Home() {
    return (
        <div className={"Wrapper-75 Home-fill-img"}>
          <div className={"Wrapper-max-width flex"}>
            <div className="flex-column">
            <h1 className='Home-title-h1'>
              Crystals 101
            </h1>
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
    )
}

export default Home;