import React, {Component} from "react";
import PropType from "prop-types";
import {Helmet} from "react-helmet";
import {translate} from "react-i18next";

import "./e-poslovanje-page.scss";
import spiritSloveniaImage from "../../assets/images/spirit-slovenia.png";
import ministryGospodarskiRazvojImage from "../../assets/images/minist-gosp-razvoj.jpg";
import euSkladImage from "../../assets/images/eu-sklad-reg-razvoj.png";
import {Footer} from "../../components/shared/footer/footer";

@translate("e-poslovanje")
export default class EPoslovanjePage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;
        return (
            <div className="km-e-poslovanje-page">
                <Helmet title={t("meta.title")}/>
                <div className="container-fluid mt-5 mb-5">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6 p-0">

                            <div className="logos">
                                <div>
                                    <img src={spiritSloveniaImage}/>
                                </div>
                                <div>
                                    <img src={ministryGospodarskiRazvojImage}/>
                                </div>
                                <div>
                                    <img src={euSkladImage}/>
                                </div>
                            </div>
                            <div className="content">
                                <p>
                                    Naložbo sofinancirata Republika Slovenija in Evropska unija iz Evropskega sklada
                                    za regionalni razvoj.
                                </p>
                                <p>
                                    Spletna stran EKP v Sloveniji: <a href="http://www.eu-skladi.si/" rel="noreferrer noopener"
                                        target="_blank">http://www.eu-skladi.si/</a>
                                </p>
                                <p>
                                    <strong>Naziv operacije:</strong>
                                    &#160;Vzpostavitev in nadgradnja elektronskega poslovanja platforme Kumuluz
                                    <br/>
                                    <strong>Kratica operacije:</strong>
                                    &#160;e-Kumuluz
                                </p>
                                <h4>Opis operacije z namenom in cilji operacije</h4>
                                <p>
                                    Podjetje Sunesis je visokotehnološko podjetje, katerega glavni produkt je
                                    digitalna platforma Kumuluz, ki omogoča hiter in učinkovit razvoj inovativnih
                                    digitalnih rešitev in aplikacij po konceptih računalništva v oblaku,
                                    mikrostoritev, arhitekture cloud-native, APIjev in integracije naprav IoT
                                    ter velikih podatkov.
                                </p>
                                <p>
                                    Digitalna platforma Kumuluz je pozicionirana kot ključno orodje za razvoj
                                    celostnih rešitev, ki vključujejo mobilne in spletne aplikacije, oblak, poslovno
                                    logiko in APIje, ki temeljijo na skalabilnih mikrostoritvah, integracijo s
                                    senzorji, napravami IoT in zalednimi sistemi, DevOps postopki razvoja, rešitvami
                                    za marketplace, sistemi za zaznavanje potreb strank oz. prosumerjev
                                    (customer engagement) ter rešitev za zaznavanje potreb množice uporabnikov
                                    (crowd-sensing), ki so specifično prilagojene področju pametnih mest
                                    in skupnosti (Smart Cities).
                                </p>
                                <p>
                                    Platforma Kumuluz predstavlja mednarodno konkurenčno ogrodje, ki se že aktivno
                                    uporablja s strani uglednih strank v Sloveniji in regiji (predvsem Avstriji).
                                    Predstavitev in razširitev trženja platforme na tuje trge je ena naših največjih
                                    poslovnih prioritet podjetja, ki se bo izvajalo pretežno preko elektronskega
                                    poslovanja oz. digitalnih kanalov.
                                </p>
                                <p>
                                    Za potrebe trženja in prodaje platforme Kumuluz bomo v podjetju v okvivru te
                                    operacije, v sodelovanju z zunanjim izvajalcem, pripravili digitalne vsebine,
                                    s katerimi bomo nastopili na tujih trgih. Vizija podjetja je s platformo Kumuluz
                                    razširiti poslovanje na tuje trge in s tem pa povečati rast podjetja.
                                </p>
                                <h4>Digitalizacija nastopov na sejmih</h4>
                                <p>
                                    Za področje prodaje načrtujemo oblikovanje digitalnih vsebin, kot so interaktivni
                                    prikaz produktov in opis podjetja, z namenom približanja naši ciljni skupini kupcev.
                                </p>
                                <h4>Spletne strani za tuje trge in spletna trgovina</h4>
                                <p>
                                    Popolnoma na novo bomo vzpostavili spletno stran s spletno trgovino, ki bo
                                    namenjena našim kupcem. Spletna stran in spletna trgovina bosta tako v nemškem,
                                    kot tudi angleškem jeziku.
                                </p>
                                <h4>Produktno-prodajni video</h4>
                                <p>
                                    S produktno-prodajnim veideom se bo na enostavne način razložila dodana vrednost
                                    Digitalne platforme Kumuluz. Video bo izdelan v angleškem jeziku.
                                </p>
                                <h4>Krepitev kompetenc-usposabljanja</h4>
                                <p>
                                    Izvedli bomo splošna usposabljanja vodstvenega kadra področju Industrija 4.0 pri
                                    poslovanju s tujimi partnerji, potencialno tudi s predstavitvijo primera
                                    dobrih praks na področju poslovanja.
                                </p>
                                <h4>Finančna podpora</h4>
                                <p>
                                    Operacijo delno financira EU, in sicer iz Evropskega sklada za regionalni razvoj.
                                    Operacija se izvaja v okviru Operativnega programa za izvajanje evropske kohezijske
                                    politike v obdobju 2014-2020.
                                </p>
                                <h4>Rezultati operacije</h4>
                                <p>
                                    Rezultati operacije bodo uvedba e-poslovanja za inovativen produkt podjetja
                                    Kumuluz, s čimer se bo pospešila širitev na tuje trge, povečala se bo dodana
                                    vrednost podjetja, izboljšala moč blagovne znamke, prav tako pa se bo zagotovil
                                    profesionalnem mednarodni nastop na vseh področjih digitala.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer social/>
            </div>
        );
    }
}
