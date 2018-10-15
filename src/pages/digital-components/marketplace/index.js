import React, {Component} from "react";
import {translate} from "react-i18next";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import {CompNavigationComponent} from "../../../components/digital-components/navigation/comp-navigation.component";
import marketplaceLogo from "../../../assets/images/digital-platform/marketplace.svg";
import {CompHeaderComponent} from "../../../components/digital-components/header/comp-header.component";
import {CompProductGridComponent} from "../../../components/digital-components/product-grid/comp-product-grid.component";
import {Footer} from "../../../components/shared/footer/footer";

import "./kumuluz-marketplace-page.scss";
import {Helmet} from "react-helmet";

@translate("digital-platform")
export default class KumuluzMarketplacePage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kumuluz-marketplace-page">
                <Helmet title={t("components.marketplace.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-marketplace"} products={digitalPlatformProducts(t)}/>

                <CompHeaderComponent image={marketplaceLogo} title={"Kumuluz<strong>Marketplace</strong>"}
                                     items={[]}
                                     subtitle={t("components.marketplace.header.subtitle")} />

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-10">
                            <h1 className="text-center coming-soon">{t("components.marketplace.coming-soon")}</h1>
                        </div>
                    </div>
                </div>

                <div className="divider-container">
                    <div className="divider"/>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h3 className="prod-grid-title">{t("components.marketplace.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>

            </div>
        );
    }
}
