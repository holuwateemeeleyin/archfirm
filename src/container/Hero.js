import "./Hero.css"
import hero_image from "../assets/6.png"

function Hero() {
  return <div className="hero__container section-margin__left section-margin__right">

    <div className="hero__container-text">
      
    <h2 className="hero__container-text__heading">
        We  <br className="bk-desktop"/> 
        Build That <br className="bk-desktop"/> 
        Last Forever <br className="bk-desktop"/> 
      </h2>
      <p className='desc'>
        Archfirm- a place where imagination and truth collides, let us help you visualize your dream.
        Aimed for the best by building with us.
      </p>

      <button > Sign Up</button>
    </div>

    <div className="hero__container-image">
      <img src={hero_image} alt='arch' style={{ width: '100%' }} className='responsive' />

    </div>
  </div>;
}

export default Hero;
