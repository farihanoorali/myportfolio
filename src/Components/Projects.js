import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Cards from './Cards'

export const Projects = () => {
  return (
    <>
      <div className={'projects-section bg-dark text-white'}>
        <div className='container-row'>
          <div className='col-sm-12 col-lg-6 col-md-12'>
            <h1>My Projects</h1>
          </div>
          <div className='row'>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4  col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
            <div className='col-sm-12  pt-4 pb-4 col-md-6 col-lg-4 mt-4'>
              <Cards />
            </div>
          </div>
          <div className='d-flex justify-content-end mt-4 mb-4 align-content-end'>
            <button className='btn btn-lg btn-dark btn-outline-light'>
              See All Projects
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
