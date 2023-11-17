import profileImage from '../assets/images/img2.png'
//import Carousel from 'react-bootstrap/Carousel'

export const HeroSection = () => {
  return (
    <>
      {/* <Carousel data-bs-theme='dark'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=First slide&bg=f5f5f5'
            alt='First slide'
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src='holder.js/800x400?text=Second slide&bg=eee'
            alt='Second slide'
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>

      </Carousel>  */}
      <div className='row'>
        <div className='container col-sm-12 col-md-12 col-lg-6'>
          <h1 className='text-heading'>Hi, I am Fariha Noor</h1>
          <p className='text-subheading'>Software Engineer</p>
        </div>
        <div className='container col-sm-12 col-md-12 col-lg-6'>
          <img src={profileImage} alt='' />
        </div>
      </div>
    </>
  )
}
