import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./cart-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import howItWorks from "../../../assets/images/apis/cart/how-it-works.png";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {ApiUseCasesComponent} from "../../../components/business-apis/use-cases/use-cases.component";
import {Footer} from "../../../components/shared/footer/footer";
import {ApiRelatedApisComponent} from "../../../components/business-apis/export";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

const docsItems = t => [
    {
        title: t("apis.cart.page.docs.item-1.title"),
        desc: t("apis.cart.page.docs.item-1.desc"),
    },
    {
        title: t("apis.cart.page.docs.item-2.title"),
        desc: t("apis.cart.page.docs.item-2.desc"),
    },
    {
        title: t("apis.cart.page.docs.item-3.title"),
        desc: t("apis.cart.page.docs.item-3.desc"),
    }
];

const endpoints = t => [
    {
        url: "/carts",
        desc: t("apis.cart.page.docs.endpoints.item-1")
    },
    {
        url: "/carts/{id}/items",
        desc: t("apis.cart.page.docs.endpoints.item-2")
    },
    {
        url: "/carts/{id}/update_prices",
        desc: t("apis.cart.page.docs.endpoints.item-3")
    },
    {
        url: "/carts/{id}/items/{id}/benefit",
        desc: t("apis.cart.page.docs.endpoints.item-4")
    },
    {
        url: "/carts/{id}/items/{id}/pricing",
        desc: t("apis.cart.page.docs.endpoints.item-5")
    },
    {
        url: "/carts/{id}/location_availability",
        desc: t("apis.cart.page.docs.endpoints.item-6")
    },
    {
        url: "/carts/{id}/change_location",
        desc: t("apis.cart.page.docs.endpoints.item-7")
    }
];

@translate("business-apis")
export default class CartApiPage extends Component {

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
            <div className="km-cart-api-page">
                <Helmet title={t("apis.cart.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.cart.page.title")}
                    paragraphs={[t("apis.cart.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.cart.page.how-it-works.title")}>
                    <p>{t("apis.cart.page.how-it-works.para-1")}</p>
                    <p>{t("apis.cart.page.how-it-works.para-2")}</p>
                    <div className="image-center mt-4">
                        <img src={howItWorks}/>
                    </div>
                    <p className="mt-4">{t("apis.cart.page.how-it-works.para-3")}</p>
                    <p>{t("apis.cart.page.how-it-works.para-4")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.cart.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.cart.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.cart.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.cart.pricing-desc")}
                    itemDesc={"Kumuluz Cart API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.cart.tag")).filter(api => api.id !== "cart")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.cart.page.usecases.item-1"),
                    "#",
                    t("apis.cart.page.usecases.item-2"),
                    "#",
                    <div key="usecase-3">
                        <p>{t("apis.cart.page.usecases.item-3.para-1")}</p>
                        <p>{t("apis.cart.page.usecases.item-3.para-2")}</p>
                    </div>
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
