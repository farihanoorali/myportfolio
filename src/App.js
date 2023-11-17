import Contact from './Components/Contact'
import { Footer } from './Components/Footer'
import { Header } from './Components/Header'
import { HeroSection } from './Components/HeroSection'
import { Projects } from './Components/Projects'
import { BuyerReviews, SellerReviews } from './Components/Reviews'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'
import { SocialMediaProfiles } from './Components/SocialMediaProfiles'

function App() {
  return (
    <div>
      <routes>
        <Header />
        <HeroSection />
        <Projects />
        <Tabs
          defaultActiveKey='profile'
          id='uncontrolled-tab-example'
          className='mb-3'
        >
          <Tab eventKey='home' title='Seller Reviews'>
            <SellerReviews />
          </Tab>
          <Tab eventKey='profile' title='Buyer Reviews'>
            <BuyerReviews />
          </Tab>
        </Tabs>
        <Contact />

        <SocialMediaProfiles />
        <Footer />
      </routes>
    </div>
  )
}

export default App
