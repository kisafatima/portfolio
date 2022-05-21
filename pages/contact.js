import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router';
import Link from 'next/link'

function Contact() {
    
    const router = useRouter();
    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target.elements[0].value)
        router.push('/thankyou')
    // let mandrill = require('node-mandrill')('ce7b744c3e9745432bd8b5c141a36d90-us13');
    
    // mandrill('/messages/send', {
    //     message: {
    //         to: [{email: 'kisafatima.09@gmail.com', name: 'Jim Rubenstein'}],
    //         from_email: 'you@domain.com',
    //         subject: "Hey, what's up?",
    //         text: "Hello, I sent this message using mandrill."
    //     }
    // }, function(error, response)
    // {
    //     //uh oh, there was an error
    //     if (error) console.log( JSON.stringify(error) );
    
    //     //everything's good, lets see what mandrill said
    //     else console.log(response);
    // });


    }
    return (
    <div className={styles.contactpage}>
        <h3 > I’m excited to learn about your project. <br /> Ready to get started?</h3>
        <Card className={styles.mycard}>
    
    <Form 
    onSubmit={e=>{handleSubmit(e)}}
    >
      <Row className={styles.sutitle} >
       <div>CONTACT</div>
       </Row>
      <hr></hr>

    <Form.Group className="mb-3" controlId="formGridEmail">
      <Form.Label>Name</Form.Label>
      <Form.Control type="name"  required />
    </Form.Group>

    <Form.Group className="mb-3" controlId="formGridName">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email"  required />
    </Form.Group>

    <Row className="mb-3">
    <Form.Group as={Col} controlId="formGrid">
      <Form.Label>Type of project</Form.Label>
      <Form.Select defaultValue={"Select"} style={{fontSize: "14px"}}  name="Gender" required>
      <option value="Select" disabled> </option>
        <option >Website</option>
        <option>Progressive Web App</option>
        <option>Mobile App</option>
      </Form.Select>
    </Form.Group>
    <Form.Group as={Col} controlId="formGrid">
      <Form.Label>Budget</Form.Label>
      <Form.Select defaultValue={"Select"} style={{fontSize: "14px"}}  name="Gender" required>
      <option value="Select" disabled> </option>
        <option >$100-$500</option>
        <option>$500-$1000</option>
        <option>$1000+</option>
      </Form.Select>
    </Form.Group>
    </Row>

    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
      <Form.Label  >Additional Details</Form.Label>
      <Form.Control as="textarea" rows={3} required   
      
      />
  
    </Form.Group>
  

<div className="d-grid gap-2 mb-3">
 <Button className={styles.button} style={{backgroundColor:'hsl(236, 32%, 26%)'}}  type="submit">
   Submit
  </Button>
  </div>

<Row className="mb-3">
  <Col md={{  offset: 4 }}>
  
    </Col>
    </Row>

</Form> 
</Card>
   
    </div>
        )
  }
  
  export default Contact;