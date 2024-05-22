import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () =>{

    const [dropdownState, setDropdownState] = useState({
        chap1: false,
        chap2: false,
        chap3: false,
        chap4: false,
        chap5: false,
    });

    const toggleDropdown = (chap) => {
        setDropdownState((prevState) => ({
          ...prevState,
          [chap]: !prevState[chap],
        }));
    };

    return(
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Sommaire<br></br>
                            </h2>
                            <ul className="menu-links">
                                <li><Link to="/prologue">Prologue</Link></li>
                                <li><Link to="/repereschrono">Repères chronologiques</Link></li>
                                <li onClick={() => toggleDropdown("chap1")}>
                                    <a href="#chap1">Chapitre I : La famille d'André BACH</a>
                                    {dropdownState.chap1 && (
                                        <ul className="sub-menu">
                                            <li><Link to="/chapitre1parta">A.&nbsp;&nbsp;&nbsp;&nbsp;Ses ascendants de l’Est et du sud.</Link></li>
                                            <li><Link to="/chapitre1partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Ses quatre femmes et le cinéaste Georges Méliès</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li onClick={() => toggleDropdown("chap2")}>
                                    <a href="#chap2">Chapitre II : Le soldat/zouave, puis l'ancient combattant</a>
                                    {dropdownState.chap2 && (
                                        <ul className="sub-menu">
                                            <li><Link to="/chapitre2parta">A.&nbsp;&nbsp;&nbsp;&nbsp;Service militaire en Algérie et au Maroc</Link></li>
                                            <li><Link to="/chapitre2partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Dans ses "Carnets de guerre", un "chef bombardier crapouilliste"</Link></li>
                                            <li><Link to="/chapitre2partc">C.&nbsp;&nbsp;&nbsp;&nbsp;Son livre « Là-Haut » paru en 1932</Link></li>
                                            <li><Link to="/chapitre2partd">D.&nbsp;&nbsp;&nbsp;&nbsp;André Bach « aventurier » ou « homme de devoir » ?</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li onClick={() => toggleDropdown("chap3")}>
                                    <a href="#chap3">Chapitre III : Le cyclotouriste (127 130 kms parcourus entre 1921 et 1943)</a>
                                    {dropdownState.chap3 && (
                                        <ul className="sub-menu">
                                            <li><Link to="/chapitre3parta">A.&nbsp;&nbsp;&nbsp;&nbsp;Un sportif toute sa vie</Link></li>
                                            <li><Link to="/chapitre3partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Le col d’Aubisque à vélo avec un seul bras. La stèle André Bach</Link></li>
                                            <li><Link to="/chapitre3partc">C.&nbsp;&nbsp;&nbsp;&nbsp;Le journaliste sportif </Link></li>
                                            <li><Link to="/chapitre3partd">D.&nbsp;&nbsp;&nbsp;&nbsp;Les cyclotouristes béarnais fidèles à André Bach</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li onClick={() => toggleDropdown("chap4")}>
                                    <a href="#chap4">Chapitre IV : Le journaliste, editorialiste, localier, reporter</a>
                                    {dropdownState.chap4 && (
                                        <ul className="sub-menu">
                                            <li>
                                                <a href="#souschapitre1">Sous-Chapitre 1 : Le chroniqueur dans <i>"Le matin Charentais"</i> (Janvier 1932 à Juillet 1933)</a>
                                                <ul className="sub-menu">
                                                    <li><Link to="/chapitre4sc1parta">A.&nbsp;&nbsp;&nbsp;&nbsp;Les dernières nouvelles</Link></li>
                                                    <li><Link to="/chapitre4sc1partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Voyage à vélo en Bretagne l'été 1932</Link></li>
                                                </ul>
                                            </li>
                                            <li >
                                                <a href="#souschapitre2">Sous-Chapitre 2 : Le journaliste dans <i>"L'Echo Rochelais"</i> (Fevrier 1933 à Septembre 1936)</a>
                                                <ul className="sub-menu">
                                                    <li><Link to="/chapitre4sc2parta">A.&nbsp;&nbsp;&nbsp;&nbsp; Un éditorialiste engagé</Link></li>
                                                    <li><Link to="/chapitre4sc2partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Le localier fait "le Badaud"</Link></li>
                                                    <li><Link to="/chapitre4sc2partc">C.&nbsp;&nbsp;&nbsp;&nbsp;Des reportages (« 673 forçats embarqués pour la Guyane » )</Link></li>
                                                    <li><Link to="/chapitre4sc2partd">D.&nbsp;&nbsp;&nbsp;&nbsp;Quand un journal adversaire affirme qu'André Bach est juif et ivrogne</Link></li>
                                                    <li><Link to="/chapitre4sc2parte">E.&nbsp;&nbsp;&nbsp;&nbsp;Pourquoi André Bach quitte La Rochelle pour Pau en 1936</Link></li>
                                                </ul>
                                            </li>
                                            <li>
                                                <a href="#souschapitre3">Sous-Chapitre 3 : Le redacteur en chef de <i>"L'indépendant des Pyrennes"</i> à Pau d'Octobre 1936 à Août 1943</a>
                                                <ul className="sub-menu">
                                                    <li><Link to="/chapitre1parta">A.&nbsp;&nbsp;&nbsp;&nbsp;La complexité politico-électorale béarnaise</Link></li>
                                                    <li><Link to="/chapitre1parta">B.&nbsp;&nbsp;&nbsp;&nbsp;L'éditorialiste adversaire de l’Allemagne hitlérienne'</Link></li>
                                                    <li><Link to="/chapitre1parta">C.&nbsp;&nbsp;&nbsp;&nbsp;L’échotier pour Léon Bérard, les Ossalois agités</Link></li>
                                                    <li><Link to="/chapitre1parta">D.&nbsp;&nbsp;&nbsp;&nbsp;Reportages sur la montagne, Gurs, crimes de l’ogresse</Link></li>
                                                    <li><Link to="/chapitre1parta">E.&nbsp;&nbsp;&nbsp;&nbsp;1940 à 1943 : un éditorialiste « empêché » </Link></li>
                                                    <li><Link to="/chapitre1parta">F.&nbsp;&nbsp;&nbsp;&nbsp;Un récit de L’Indépendant des Pyrénées de 1888 à 1945 reste à écrire</Link></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    )}
                                </li>
                                <li onClick={() => toggleDropdown("chap5")}>
                                    <a href="#chap5">Chapitre V : Le resistant des Aout 1940, puis le déporté à Buchenwald </a>
                                    {dropdownState.chap5 && (
                                        <ul className="sub-menu">
                                            <li><Link to="/chapitre5parta">A.&nbsp;&nbsp;&nbsp;&nbsp;Qui a dénoncé André Bach à la Gestapo ?</Link></li>
                                            <li><Link to="/chapitre5partb">B.&nbsp;&nbsp;&nbsp;&nbsp;Le calvaire de sa fin de vie en mai 1945</Link></li>
                                            <li><Link to="/chapitre5partc">C.&nbsp;&nbsp;&nbsp;&nbsp;Reconnu « Résistant » qu'en 1951. Les pourquoi ?</Link></li>
                                        </ul>
                                    )}
                                </li>
                                <li><Link to="/epilogue">Epilogue : Qui était André Bach ?</Link></li>
                                <li><Link to="/refbibli">Références bibliographiques</Link></li>
                                <li><Link to="/remerciements">Remerciements</Link></li>
                            </ul>
                        </div>
                    </Col>
                </Row>

            </Container>
            <img alt="" className="background-image-left" src={colorSharp}/>
        </section>
      )

}