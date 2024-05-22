import './Pages.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from "react";
import PDFViewerComponent from '../components/PDFViewerComponent';
import Container from 'react-bootstrap/Container';
import { useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Chapitre2partB = () => {
  const [activeLink, setActiveLink] = useState('repereschrono');

  const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    useEffect(() => {
        document.body.classList.add('no-scroll'); // Ajoutez la classe no-scroll au body
        return () => {
          document.body.classList.remove('no-scroll'); // Retirez la classe no-scroll du body lorsque le composant est démonté
        };
      }, []);

const navigate = useNavigate();

    return (
      <div className="Chapitre no-scroll">
        <Navbar expand="lg">
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-nav'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/')}>Retour à l'acceuil</Nav.Link>
                    <Nav.Link href="" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/chapitre2parta')}>Chapitre précédent</Nav.Link>
                    <Nav.Link href="" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => navigate('/chapitre2partc')}>Chapitre suivant</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
          <div className="PDF-viewer-container">
			      <PDFViewerComponent
				      document={"chapitre2partb.pdf"}
			      />
		    </div>
      </div>
    );
  };
export default Chapitre2partB;
  

