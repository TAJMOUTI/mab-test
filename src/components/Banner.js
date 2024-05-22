import {useState, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/andre-bach-home.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = ()=>{
    const [loopNum, SetLoopNum] = useState(0);
    const [isDeleting, SetIsDeleting] = useState(false);
    const toRotate = ["Web Developer","Web Designer","UX/UI Designer"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random()*100);
    const period = 2000;

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();
        },delta )

        return () => {clearInterval(ticker)}

    },[text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting){
            setDelta(prevDelta => prevDelta /2);
        }

        if (!isDeleting && updatedText === fullText){
            SetIsDeleting(true);
            setDelta( period);
        }else if(isDeleting &&updatedText === ''){
            SetIsDeleting(false);
            SetLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({isVisible}) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn":""}>
                                    {/* <span className="tagline">
                                        Welcome to <br /> 
                                    </span> */}
                                    <h1>{`L’HISTOIRE D’ANDRE BACH \n (1888-1945) :\nLA VIE D’UN HOMME BOULVERSEE\nPAR DEUX GUERRES`}
                                        {/* <span className="wrap">{text}</span> */}
                                    </h1>
                                    <p>
                                    <br />André Bach est né à Paris en 1888. Il décèdera en mai 1945 à Boulay (Moselle).
                                        Jeune homme, plein de vie, il sera d’abord un « aventurier », puis un soldat / zouave très
                                        exposé dans les tranchées lors de la première guerre où il perdra un bras à Douaumont
                                        (octobre 1916). Rien ne l’empêche d’être un cyclotouriste, pour pédaler l’équivalent de
                                        plusieurs tours de France chaque année et de grimper les plus difficiles cols dont l’Aubisque
                                        (64).<br /><br />

                                        Devenu journaliste en 1932, reporter, « localier », ses éditoriaux affirmeront avec constance :
                                        « L’Allemagne voudra sa revanche, nous refera la guerre pour nous occuper ». Dès l’été
                                        1940, il commence une activité cachée de Résistant. Le 9 août 1943, la Gestapo arrête le
                                        résistant-journaliste-cycliste et le conduit au camp de concentration de Buchenwald.<br /><br />

                                        Il meurt d’épuisement sur le chemin du retour le 10 mai 1945 à l’hôpital de Boulay. Sa veuve,
                                        Germaine Bach, attendra six ans (1951) pour que l’Administration et les représentants des
                                        Résistants lui permettent d’inscrire « Résistant » sur sa tombe<br /><br />

                                        <i className="author-info">
                                            Auteur : Jean-Pierre Carlier<br />
                                            Petit-fils et filleul d’André Bach<br />
                                            Né à Pau en 1944.
                                        </i>
                                    </p>
                                    {/* <button onClick={()=>console.log(12,'connect')}>Let's coonect<ArrowRightCircle size={25}/></button> */}
                                </div>
                            }
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="Headder Img"/>
                        <i className="photo-info"><br/><br/>André Bach à vélo sur la route du col d'Aubisque, un bras amputé à Douaumont en octobre 1916</i> 
                    </Col>

                </Row>

            </Container>
        </section>
    )
}