import React, {Component} from "react";
import PropType from "prop-types";
import {Helmet} from "react-helmet";
import {translate} from "react-i18next";

import "./partners-page.scss";
import {ArrowDividerComponent, UnorderedListComponent} from "../../components/shared/export.shared.components";
import {Footer} from "../../components/shared/footer/footer";
import {GoogleAnalyticsService} from "../../components/shared/google-analytics/google-analytics.service";

@translate("partners")
export default class PartnersPage extends Component {

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
            <div className="km-partners-page">
                <Helmet title={t("meta.title")}/>

                <div className="container-fluid header">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6">
                            <h1 className="text-center" dangerouslySetInnerHTML={{__html: t("header.title")}}/>
                            <h2 className="text-center">{t("header.subtitle")}</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid dark-blue-section">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"white"} corner={1}/>
                        </div>
                        <div className="col-9 col-xl-6 pt-5 pb-5">
                            <div className="row align-items-center flex-column">
                                <div className="col-10">
                                    <div className="row align-items-center flex-column">
                                        <div className="col-xl-6 col-9">
                                            <h3 className="text-center">{t("our-partners.title")}</h3>
                                            <p>{t("our-partners.description")}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-10 divider-container">
                                    <div className="divider"/>
                                </div>
                                <div className="col-10">
                                    <h3 className="text-center">{t("what-we-offer.title")}</h3>
                                    <p>
                                        {t("what-we-offer.description")}
                                    </p>
                                    <UnorderedListComponent rows={2} fontColor={"white"}
                                        items={[
                                            t("what-we-offer.items.item-1"),
                                            t("what-we-offer.items.item-2"),
                                            t("what-we-offer.items.item-3"),
                                            t("what-we-offer.items.item-4"),
                                        ]}/>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme="white" corner={3}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid partners-section">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6">
                            <h2 className="text-center mt-5">{t("integration-partners.title")}</h2>
                            <p className="text-center mt-5">{t("integration-partners.summary")}</p>
                        </div>
                    </div>
                </div>

                <Footer contact/>
            </div>
        );
    }
}
