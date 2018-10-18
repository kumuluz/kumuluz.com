import React, {Component} from "react";
import {Helmet} from "react-helmet";
import {translate} from "react-i18next";
import PropType from "prop-types";
import Link, {push} from "gatsby-link";

import "./index-page.scss";
import {
    ArrowDividerComponent,
    ReferencesComponent,
    VideoPlayerComponent
} from "../components/shared/export.shared.components";
import digitalPlatformImage from "../assets/images/digitalPlatform.svg";
import businessApisImage from "../assets/images/businessApis.svg";
import dapiImage from "../assets/images/dapis.svg";
import kumuluzCubeImage from "../assets/images/kumuluzCube-full.svg";
import apisFullIcon from "../assets/images/Apis-LargeIcon.svg";
import openSourceImage from "../assets/images/forWho.svg";
import arrowRed from "../assets/images/arrow-red.svg";
import arrow from "../assets/images/arrow.svg";
import dukeAward from "../assets/images/duke-award.jpeg";
import euroCloud from "../assets/images/logo_Eurocloud_C.jpg";
import startupSlovenia from "../assets/images/startup-slovenia.png";
import euSkladRegionalniRazvoj from "../assets/images/EU-logo.png";
import {BLOG_URL} from "../content/constants";
import {digitalLandscapeCompetition} from "../content/index-page/digital-landscape-competition.content";
import {AppNeedsComponent, DigitalPlatformComponent} from "../components/index-page/export";
import {highlightsList} from "../content/index-page/highlights";
import {Footer} from "../components/shared/footer/footer";
import {CustomersSection} from "../components/index-page/customers-section/customers-section";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight} from "@fortawesome/free-solid-svg-icons";

@translate("index")
export default class IndexPage extends Component {

    static propTypes = {
        t: PropType.func,
        i18n: PropType.object
    };

    constructor(props) {
        super(props);
        this.state = {
            lang: props.i18n.language
        };
    }


    componentWillReceiveProps(newProps) {
        this.setState({...this.state, lang: newProps.i18n.language});
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-index-page">
                <Helmet title={t("meta.title")}/>
                <div className="eu-sklad">
                    <Link to="/e-poslovanje">
                        <img src={euSkladRegionalniRazvoj}/>
                    </Link>
                </div>

                <div className="container-fluid white-section">
                    <div className="row align-items-center flex-column header">
                        <div className="col-10 col-xl-4">
                            <h1 className="text-center"
                                dangerouslySetInnerHTML={{__html: t("header.main-title")}}/>
                        </div>
                        <div className="col-10 col-xl-4">
                            <h2 className="text-center">
                                {t("header.subtitle")}
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center header-blocks">
                        <div className="col-9 col-xl-6 flex-row">
                            <div className="row justify-content-between">
                                <div className="col-10 col-xl-5 header-block-item">
                                    <div className="block-blue-line"/>
                                    <div className="block-item-content">
                                        <div className="block-item-image">
                                            <img src={businessApisImage}/>
                                        </div>
                                        <div className="block-item-text">
                                            <div className="block-item-above-title">
                                                {t("header.tiles.left-tile.above-title")}
                                            </div>
                                            <div className="block-item-title">
                                                {t("header.tiles.left-tile.title")}
                                            </div>
                                            <div className="block-item-subtitle">
                                                {t("header.tiles.left-tile.subtitle")}
                                            </div>
                                            <div className="block-item-buttons">
                                                <button className="btn btn-primary mr-4"
                                                    onClick={() => this.digitalVideo.showVideoModal()}>
                                                    {t("header.tiles.buttons.play-video")}
                                                    <FontAwesomeIcon icon={faCaretRight}/>
                                                </button>
                                                <span onClick={() => push("/business-apis")}>
                                                    {t("header.tiles.buttons.learn-more")}
                                                    <img src={arrow}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-xl-5 header-block-item">
                                    <div className="block-blue-line"/>
                                    <div className="block-item-content">
                                        <div className="block-item-image">
                                            <img src={digitalPlatformImage}/>
                                        </div>
                                        <div className="block-item-text">
                                            <div className="block-item-above-title">
                                                {t("header.tiles.right-tile.above-title")}
                                            </div>
                                            <div className="block-item-title">
                                                {t("header.tiles.right-tile.title")}
                                            </div>
                                            <div className="block-item-subtitle">
                                                {t("header.tiles.right-tile.subtitle")}
                                            </div>
                                            <div className="block-item-buttons">
                                                <button className="btn btn-primary mr-4"
                                                    onClick={() => this.bapisVideo.showVideoModal()}>
                                                    {t("header.tiles.buttons.play-video")}
                                                    <FontAwesomeIcon icon={faCaretRight}/>
                                                </button>
                                                {this.state.lang === "en" ?
                                                    <span onClick={() => push("/digital-platform")}
                                                        style={this.state.lang !== "en" ? {display: "none"} : {}}>
                                                        {t("header.tiles.buttons.learn-more")}
                                                        <img src={arrow}/>
                                                    </span> : null}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid dark-blue-section">
                    <div className="row align-items-center flex-column content">
                        <div className="col-10 col-xl-3">
                            <h3 className="text-center">
                                {t("content.title")}
                            </h3>
                        </div>
                        <div className="col-10 col-xl-3">
                            <p className="text-center">
                                {t("content.text")}&#160;
                                <a href={BLOG_URL} target="_blank" rel="noreferrer noopener">
                                    {t("content.blog-link")}...
                                </a>
                            </p>
                        </div>
                        <div className="col-10 col-xl-6 mt-5 kumuluz-cube">
                            <img src={kumuluzCubeImage}/>
                        </div>
                        <div className="col-10 p-0 arrow-divider">
                            <ArrowDividerComponent corner={4} theme="white"/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid competition-section">
                    <div className="row justify-content-center">
                        <div className="col-10 col-xl-4">
                            <h2 className="text-center competition-title">
                                {t("digitalLandscapeCompetition.title")}
                            </h2>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6 competition-list">
                            {digitalLandscapeCompetition(t).map((comp, index) => (
                                <div className="competition-item" key={index}>
                                    <div>
                                        <img src={comp.image}/>
                                    </div>
                                    <div className="competition-item-title">
                                        {comp.title}
                                    </div>
                                    <div className="competition-item-content">
                                        {comp.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="container-fluid business-apis-section">
                    <div className="row align-items-center flex-column">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={1} theme="white"/>
                        </div>
                        <div className="col-10 col-xl-5 blue-block-section">
                            <div className="image-blue-block">
                                <img src={apisFullIcon}/>
                            </div>
                        </div>
                        <div className="col-10 col-xl-4 header">
                            <h2>{t("bapis.title")}</h2>
                            <p>
                                {t("bapis.subtitle")}
                            </p>
                        </div>
                        <AppNeedsComponent/>
                    </div>
                </div>

                <div className="container-fluid light-blue-section">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"blue"} corner={2}/>
                        </div>
                        <div className="col-10 col-xl-5 blue-block-section">
                            <div className="image-blue-block">
                                <img src={apisFullIcon}/>
                            </div>
                        </div>
                        <div className="col-10 col-lg-8 col-xl-6 p-0">
                            <DigitalPlatformComponent/>
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={3} theme={"white"}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row align-items-center flex-column">
                        <div className="col-10 col-xl-6 highlights">
                            {highlightsList(t).map((highlight, index) => (
                                <div className="highlight-item" key={index}>
                                    <div>
                                        <img src={highlight.image}/>
                                    </div>
                                    <div>
                                        {highlight.content}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-6 col-lg-3 grey-divider"/>
                    </div>
                    <div className="row justify-content-center mt-5 mb-5">
                        <div className="col-10 col-xl-6">
                            <div className="row justify-content-center">
                                <div className="col-10 col-md-5 awards-title">
                                    {t("awards.title")}:
                                </div>
                                <div className="col-10 col-md-5 awards-images">
                                    <img src={dukeAward}/>
                                    <img src={startupSlovenia}/>
                                    <img src={euroCloud}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid other-products-section">
                    <div className="row">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={2} theme={"white"}/>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6 tiles">
                            <h1>{t("other-products.title")}</h1>
                            <div className="row justify-content-between">
                                <div className="col-10 tile">
                                    <div className="tile-image">
                                        <img src={openSourceImage}/>
                                    </div>
                                    <div className="tile-content">
                                        <h5>{t("other-products.tiles.first-tile.above-title")}</h5>
                                        <h4>{t("other-products.tiles.first-tile.title")}</h4>
                                        <p>{t("other-products.tiles.first-tile.para")}</p>
                                        <div>
                                            <a href={"https://www.sunesis.si/services"} target="_blank" rel="noreferrer noopener">
                                                {t("other-products.tiles.learn-more")}
                                                <img src={arrowRed}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-5 tile tile-smaller">
                                    <div className="tile-image">
                                        <img src={openSourceImage}/>
                                    </div>
                                    <div className="tile-content">
                                        <h5>{t("other-products.tiles.second-tile.above-title")}</h5>
                                        <h4>{t("other-products.tiles.second-tile.title")}</h4>
                                        <p>{t("other-products.tiles.second-tile.para")}</p>
                                        <div>
                                            <a href={"https://ee.kumuluz.com"} target="_blank" rel="noreferrer noopener">
                                                {t("other-products.tiles.learn-more")}
                                                <img src={arrowRed}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 col-md-5 tile tile-smaller">
                                    <div className="tile-image">
                                        <img src={dapiImage}/>
                                    </div>
                                    <div className="tile-content">
                                        <h5>{t("other-products.tiles.third-tile.above-title")}</h5>
                                        <h4>{t("other-products.tiles.third-tile.title")}</h4>
                                        <p>{t("other-products.tiles.third-tile.para")}</p>
                                        <div>
                                            <a href={"https://www.kumuluz.io"} target="_blank" rel="noreferrer noopener">
                                                {t("other-products.tiles.learn-more")}
                                                <img src={arrowRed}/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={4} theme={"white"}/>
                        </div>
                    </div>
                </div>

                <CustomersSection/>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-3 grey-divider"/>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-9 col-lg-8 col-xl-6">
                            <ReferencesComponent title={t("references.title")}/>
                        </div>
                    </div>
                </div>

                <Footer contact/>

                <VideoPlayerComponent ref={ref => this.bapisVideo = ref}
                    title={t("header.tiles.right-tile.above-title")}
                    videoUrl={"https://player.vimeo.com/video/295128872"}/>
                <VideoPlayerComponent ref={ref => this.digitalVideo = ref}
                    title={t("header.tiles.left-tile.above-title")}
                    videoUrl={"https://player.vimeo.com/video/295517084"}/>
            </div>
        );
    }
}
