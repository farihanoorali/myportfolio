import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { Image } from '../assets/images/r1.png'

export default function Contact() {
  return (
    <>
      <h1>Drop your Details</h1>
      <div className={'mt-4 container col-6'}>
        <Form>
          <fieldset>
            <Form.Group className='mb-3'>
              <Form.Label htmlFor='disabledTextInput'>
                Enter Your Email
              </Form.Label>
              <Form.Control id='disabledTextInput' placeholder='abc@abc.com' />
            </Form.Group>
            <Button variant={'dark'} type='submit'>
              Submit
            </Button>
          </fieldset>
        </Form>
      </div>
    </>
  )
}
