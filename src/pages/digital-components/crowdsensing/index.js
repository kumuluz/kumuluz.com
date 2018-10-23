import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./kumuluz-crowdsensing-page.scss";
import {CompNavigationComponent} from "../../../components/digital-components/navigation/comp-navigation.component";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import {CompHeaderComponent} from "../../../components/digital-components/header/comp-header.component";
import crowdLogo from "../../../assets/images/digital-platform/crowdsensing.svg";
import {CompProductGridComponent} from "../../../components/digital-components/product-grid/comp-product-grid.component";
import {Footer} from "../../../components/shared/footer/footer";
import {Helmet} from "react-helmet";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

@translate("digital-platform")
export default class KumuluzCrowdsensingPage extends Component {

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
            <div className="km-kumuluz-crowdsensing-page">
                <Helmet title={t("components.crowdsensing.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-crowdsensing"} products={digitalPlatformProducts(t)}/>

                <CompHeaderComponent image={crowdLogo} title={"Kumuluz<strong>Crowdsensing</strong>"}
                    items={[]}
                    subtitle={t("components.crowdsensing.header.subtitle")}/>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="text-center coming-soon">{t("components.crowdsensing.coming-soon")}</h1>
                        </div>
                    </div>
                </div>

                <div className="divider-container">
                    <div className="divider"/>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h3 className="prod-grid-title">{t("components.crowdsensing.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>


            </div>
        );
    }
}
