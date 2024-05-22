import {useState, useEffect} from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

<script src="http://localhost:8097"></script>
const navlinks = [{
    id: 1,
    link: "home",
    label: "Accueil"
},{
    id: 2,
    link: "skills",
    label: "Sommaire"
}
// ,{
//     id: 3,
//     link: "projects",
//     label: "Chapitres"
// }
]

export const NavBar = () =>{
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{
        const onScroll = () =>{
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
    },[])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    return(
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-nav'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    { navlinks.map(navlink => {
                        return <Nav.Link key={navlink.id} href={"#" + navlink.link} className={activeLink === navlink.link ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink(navlink.link)}>{navlink.label}</Nav.Link>
                    })}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}


