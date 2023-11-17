import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

export const Header = () => {
  return (
    <>
      <Navbar expand='lg' className='bg-dark' variant={'dark'}>
        <Container>
          <Navbar.Brand className={'text-white'} href='#home'>
            Fariha Noor
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Nav.Link className={'text-white'} href='#home'>
                Projects
              </Nav.Link>

              <NavDropdown
                className={'text-white dropdown-section'}
                title='Reviews'
                id='basic-nav-dropdown'
              >
                <NavDropdown.Item href='#action/3.1'>
                  Seller Reviews
                </NavDropdown.Item>
                <NavDropdown.Item href='#action/3.2'>
                  Buyer Reviews
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className={'text-white'} href='#home'>
                Contact Us
              </Nav.Link>
              <Nav.Link className={'text-white'} href='#home'>
                Social Media Profiles
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
