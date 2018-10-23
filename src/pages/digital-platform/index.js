import React, {Component} from "react";
import PropType from "prop-types";
import {Helmet} from "react-helmet";
import {translate} from "react-i18next";

import "./digital-platform-page.scss";
import digitalPlatformCube from "../../assets/images/digital-platform-cube.png";
import {ArrowDividerComponent, ArrowPointerComponent} from "../../components/shared/export.shared.components";
import {DigitalPlatformComponent} from "../../components/index-page/export";
import {Footer} from "../../components/shared/footer/footer";
import {BLOG_URL} from "../../content/constants";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

@translate("digital-platform")
export default class DigitalPlatformPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }

    render() {
        const {t} = this.props;
        return (
            <div className="km-digital-platform-page">
                <Helmet title={t("meta.title")}/>

                <div className="container-fluid header">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-9 col-md-4 col-lg-2 header-image">
                            <img src={digitalPlatformCube}/>
                        </div>
                        <div className="col-9 col-md-4">
                            <h1>{t("header.title")}</h1>
                            <h2>{t("header.subtitle")}</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid dark-blue-section">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"white"} corner={1}/>
                        </div>
                        <div className="col-10 col-xl-6">
                            <div className="row flex-column mt-4">
                                <div className="col-10">
                                    <h1 className="text-center">{t("digit-strategy.title")}</h1>
                                    <p className="text-center">{t("digit-strategy.subtitle-1")}</p>
                                    <p className="text-center">{t("digit-strategy.subtitle-2")}:</p>
                                </div>
                                <div className="col-10">
                                    <ArrowPointerComponent direction={"down"}/>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-10">
                                    <DigitalPlatformComponent linkToBlog={true} noHeader={true} noButton={true}/>
                                </div>
                                <div className="col-10">
                                    <ArrowPointerComponent direction={"down"}/>
                                </div>
                                <div className="col-10">
                                    <h2 className="text-center">{t("digit-platform.title")}</h2>
                                </div>
                                <div className="col-10 button-area">
                                    <a href={BLOG_URL} target="_blank" rel="noreferrer noopener"
                                        className="btn btn-primary">{t("digit-platform.learn-more")}</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"white"} corner={3}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row justify-content-center what-can-section">
                        <div className="col-9 col-xl-6">
                            <div className="row">
                                <div className="col-10">
                                    <h2 className="text-center">{t("what-can.title")}</h2>
                                </div>
                                <div className="col-10 col-md-5 left-side">
                                    <p>{t("what-can.left.para-1")}</p>
                                    <p>{t("what-can.left.para-2")}</p>
                                    <p>{t("what-can.left.para-3")}</p>
                                </div>
                                <div className="col-10 col-md-5">
                                    <p>{t("what-can.right.para-1")}</p>
                                    <p>
                                        <strong>{t("what-can.right.para-2.strong")}:</strong>&#160;{t("what-can.right.para-2.text")}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer contact/>
            </div>
        );
    }
}
