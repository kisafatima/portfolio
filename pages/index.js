import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { FiMoon } from "react-icons/fi";
import { BsPencilSquare } from "react-icons/bs";
import { BsTwitter} from "react-icons/bs";

import { AiOutlineGithub} from "react-icons/ai";
import { RiLinkedinFill} from "react-icons/ri";
import { BsTools} from "react-icons/bs";
import { BsCodeSlash} from "react-icons/bs";
import { BsLaptop} from "react-icons/bs";
import { MdOutlineEmail} from "react-icons/md";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import Navbar from 'react-bootstrap/Navbar'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import { BsCheck2All } from "react-icons/bs";
import Link from 'next/link'



export default function Home() {
  return (
    <div >
      <Head>
        <title>Kisa Fatima</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/signi.png" style={{width:'30px'}} />
      </Head>
      <div className={styles.fullweb}>
      <div className={styles.main} >
        <div className={styles.name}>Kisa Fatima</div>
        <h1 className={styles.tagline}>Full-Stack / React Developer</h1>
      </div>
      
      <div className={styles.aboutContainer}>
      <div  className={styles.about}>
        <div className={styles.abouthead}>
        <h1 >ABOUT ME</h1>
        </div>
        <div className={styles.abouttext}>
        <p><span className={styles.fletter} >H</span>i, I am a Full-stack Developer, who cares deeply about user experience. Serious passion for web development and new technologies. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</p>
        </div>
        </div>
        <div className={styles.skills}>
    <div className={styles.flexelement1}>
      <h3 style={{margin:' 0px 0px 20px 50px'}}><BsCodeSlash /></h3>
      <h3><b>Lanuages :</b></h3>
      <h5>
        <BsCheck2All /> JavaScript (ES6)
      </h5>
      <h5>
        <BsCheck2All /> HTML
      </h5>
      <h5>
        <BsCheck2All /> CSS
      </h5>
      <h5>
        <BsCheck2All /> SQL
      </h5>
      <h5>
        <BsCheck2All /> C#
      </h5>
      <h5>
        <BsCheck2All /> C++
      </h5>
    </div>

    <div className={styles.flexelement}>
    <h3 style={{margin:' 0px 0px 20px 50px'}}><BsTools /></h3>
    <h3><b>Dev Tools :</b></h3>
      <h5>
        <BsCheck2All /> React JS
      </h5>
      <h5>
        <BsCheck2All /> Redux
      </h5>
      <h5>
        <BsCheck2All /> Bootstrap
      </h5>
      <h5>
        <BsCheck2All /> GitHub
      </h5>
      <h5>
        <BsCheck2All /> Firebase
      </h5>
      <h5>
        <BsCheck2All /> WordPress
      </h5>
      
    </div>
    
    <div className={styles.flexelement}>
    <h3 style={{margin:' 0px 0px 20px 50px'}}><BsLaptop /></h3>
    <h3><b>CS Skills :</b></h3>

      <h5>
        <BsCheck2All /> Agile Proficiency
      </h5>
      <h5>
        <BsCheck2All /> OOP
      </h5>
      <h5>
        <BsCheck2All /> Data Analysis
      </h5>
      <h5>
        <BsCheck2All /> Data Structure
      </h5>
      <h5>
        <BsCheck2All /> Debugging
      </h5>
      <h5>
        <BsCheck2All /> UI / UX
      </h5>
    </div>
  </div>
  
        </div>
     

      

      <div className={styles.edu}>
        <div>
        <Row>
          <Col md={6} xs={12}>
        <div className={styles.eduhead}>
        <h1 >EDUCATION</h1>
        </div>
        </Col>
        </Row>
      <Row >
        <Col md={1} xs={1}  className={styles.edutext}>
        <BsPencilSquare /> 
        </Col>
    <Col md={5} xs={11} className={styles.edutext}>
      
    Bachelors in Computer Science & Information Technology
    <br /><i>from <b> NED University for Engineering & Technology</b></i>
    </Col>
  </Row>
  </div>

  <div>
  <Row style={{marginTop:'50px'}}>
    <Col xs={6} md={6}></Col>
        <Col xs={12} md={6}>
        <div className={styles.coursehead}>
        <h1 >COURSES</h1>
        </div>
        </Col>
        </Row>
        
      <Row >
        <Col  md={6}></Col>
        <Col xs={1}  md={1} className={styles.edutext}>
        <AiOutlineSafetyCertificate /> 
        </Col>
    <Col xs={11} md={5} className={styles.edutext}>
      
    Responsive Web Design Certification
    <br /><i>from <b> freeCodeCamp</b></i>
    </Col>
  </Row>
  <Row >
        <Col md={6}></Col>
        <Col xs={1} md={1}   className={styles.edutext}>
        <AiOutlineSafetyCertificate /> 
        </Col>
    <Col xs={11} md={5}  className={styles.edutext}>
      
    JavaScript Algorithms and Data Structures
    <br /><i>from <b> freeCodeCamp</b></i>
    </Col>
  </Row>
  <Row >
        <Col md={6}></Col>
        <Col xs={1} md={1}   className={styles.edutext}>
        <AiOutlineSafetyCertificate /> 
        </Col>
    <Col xs={11} md={5}  className={styles.edutext}>
      
    Web & Mobile Hybrid App Development 
    <br /><i>from <b>Saylani</b></i>
    </Col>
  </Row>
  </div>
      </div>

      </div>

      <div className={styles.projectContainer}>
        <Row className={styles.projecthead}>
          <h1>PROJECTS</h1>
        </Row>


        <div className={styles.projects}>
        <div className={styles.box}> 
        
        <Image src="/images/eweb.png" alt="Ecommerce Website" layout="intrinsic" width={500} height={500} quality='100' />
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="http://smartcart.unaux.com/?i=1" passHref><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>
        
        <div className={styles.box}> 
        
        <Image src="/images/mhcollection.png" alt="MH Collection" layout="intrinsic" width={500} height={420} quality='100'/>
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="https://kisafatima.github.io/MHCollection/" passHref><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>

        <div className={styles.box}> 
        
        <Image src="/images/todo.png" alt="ToDo" layout="intrinsic" width={500} height={450} quality='100' />
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="https://todo-app-fb18b.web.app/" passHref><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>

        </div>
        <div className={styles.projects}>
        <div className={styles.box}> 
        
        <Image src="/images/calculator.png" alt="Calculator" layout="intrinsic" width={500} height={460} quality='100' />
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="https://kisafatima.github.io/Calculator/" passHref ><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>
        
        <div className={styles.box}> 
        
        <Image src="/images/tictactoe.png" alt="Tic Tac Toe" layout="intrinsic" width={500} height={460} quality='100'/>
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="https://kisafatima.github.io/TicTacToe/" passHref><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>

        <div className={styles.box}> 
        
        <Image src="/images/quiz.png" alt="Quiz" layout="intrinsic" width={500} height={450} quality='100' />
         <div className={styles.middle}>
          <a target="_blank" ><Link  href="https://kisafatima.github.io/Quiz/" passHref><div className={styles.button}>Visit Website </div></Link></a>
         </div>
        </div>

        </div>

        </div>

        <div className={styles.footer}>
        <div className={styles.contact}>
            <Col>
              <h3 style={{fontFamily: "Sriracha"}}>Start a Project </h3>
            </Col>
            <Col>
                <p>Interested in working together? We should queue up a chat.</p>
            </Col>
            <Col>
            <Link  href="/contact" passHref ><button className={styles.button}>Let's do this</button></Link>
         
              </Col>
            
        </div>

        <div className={styles.links}>
          <div>
          <Image src="/sign1.png" alt="sign" layout="intrinsic" width={500} height={150} quality='100'/>
          </div>
            <div> <h5>Living, learning, & leveling up one day at a time.</h5></div>
            <div className={styles.icons}>
                  <BsTwitter className={styles.icon} />
                 <MdOutlineEmail className={styles.icon} />
                 <RiLinkedinFill className={styles.icon} />
                 <AiOutlineGithub className={styles.icon} />
            
            </div>
        </div>
      </div>




      

    </div>
  )
}
