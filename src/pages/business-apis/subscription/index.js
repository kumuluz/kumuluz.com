import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./subscription-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {ApiUseCasesComponent} from "../../../components/business-apis/use-cases/use-cases.component";
import {Footer} from "../../../components/shared/footer/footer";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {ApiRelatedApisComponent} from "../../../components/business-apis/related-apis/related-apis.component";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

const docsItems = t => [
    {
        title: t("apis.subscription.page.docs.item-1.title"),
        desc: t("apis.subscription.page.docs.item-1.desc"),
    },
    {
        title: t("apis.subscription.page.docs.item-2.title"),
        desc: t("apis.subscription.page.docs.item-2.desc"),
    },
    {
        title: t("apis.subscription.page.docs.item-3.title"),
        desc: t("apis.subscription.page.docs.item-3.desc"),
    },
    {
        title: t("apis.subscription.page.docs.item-4.title"),
        desc: t("apis.subscription.page.docs.item-4.desc"),
    }
];

const endpoints = t => [
    {
        url: "/services",
        desc: t("apis.subscription.page.docs.endpoints.item-1")
    },
    {
        url: "/services/{id}/decompose",
        desc: t("apis.subscription.page.docs.endpoints.item-2")
    },
    {
        url: "/customer_facing_services/{id}/decompose",
        desc: t("apis.subscription.page.docs.endpoints.item-3")
    },
    {
        url: "/resource_facing_services/{id}/decompose",
        desc: t("apis.subscription.page.docs.endpoints.item-4")
    },
    {
        url: "/resources",
        desc: t("apis.subscription.page.docs.endpoints.item-5")
    },
    {
        url: "/subscriptions",
        desc: t("apis.subscription.page.docs.endpoints.item-6")
    },
    {
        url: "/subscriptions/{id}/consumption",
        desc: t("apis.subscription.page.docs.endpoints.item-7")
    },
    {
        url: "/subscriptions/{id}/invoice",
        desc: t("apis.subscription.page.docs.endpoints.item-8")
    }
];

@translate("business-apis")
export default class SubscriptionApiPage extends Component {

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
            <div className="km-subscription-api-page">
                <Helmet title={t("apis.subscription.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.subscription.page.title")}
                    paragraphs={[t("apis.subscription.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.subscription.page.how-it-works.title")}>
                    <p>{t("apis.subscription.page.how-it-works.para-1")}</p>
                    <p>{t("apis.subscription.page.how-it-works.para-2")}</p>
                    <p>{t("apis.subscription.page.how-it-works.para-3")}</p>
                    <p>{t("apis.subscription.page.how-it-works.para-4")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.subscription.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.subscription.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.subscription.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.subscription.pricing-desc")}
                    itemDesc={"Kumuluz Subscription API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.subscription.tag")).filter(api => api.id !== "subscription")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.subscription.page.usecases.item-1"),
                    "#",
                    <div key="usecase-2">
                        <p>{t("apis.subscription.page.usecases.item-2.para-1")}</p>
                        <p>{t("apis.subscription.page.usecases.item-2.para-2")}</p>
                    </div>
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
