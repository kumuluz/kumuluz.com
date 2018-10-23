import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./fulfillment-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {ApiUseCasesComponent} from "../../../components/business-apis/use-cases/use-cases.component";
import {Footer} from "../../../components/shared/footer/footer";
import {UnorderedListComponent} from "../../../components/shared/export.shared.components";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {ApiRelatedApisComponent} from "../../../components/business-apis/related-apis/related-apis.component";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

const docsItems = t => [
    {
        title: t("apis.fulfillment.page.docs.item-1.title"),
        desc: t("apis.fulfillment.page.docs.item-1.desc"),
    },
    {
        title: t("apis.fulfillment.page.docs.item-2.title"),
        desc: t("apis.fulfillment.page.docs.item-2.desc"),
    },
    {
        title: t("apis.fulfillment.page.docs.item-3.title"),
        desc: t("apis.fulfillment.page.docs.item-3.desc"),
    },
    {
        title: t("apis.fulfillment.page.docs.item-4.title"),
        desc: t("apis.fulfillment.page.docs.item-4.desc"),
    }
];

const endpoints = t => [
    {
        url: "/sessions",
        desc: t("apis.fulfillment.page.docs.endpoints.item-1")
    },
    {
        url: "/sessions/{id}",
        desc: t("apis.fulfillment.page.docs.endpoints.item-2")
    },
    {
        url: "/sessions/{id}/actions",
        desc: t("apis.fulfillment.page.docs.endpoints.item-3")
    },
    {
        url: "/sessions/{id}/calculate_earliest_pickup_time",
        desc: t("apis.fulfillment.page.docs.endpoints.item-4")
    },
    {
        url: "/carts/{id}/propose_change",
        desc: t("apis.fulfillment.page.docs.endpoints.item-5")
    },
    {
        url: "/carts/{id}/session_changes",
        desc: t("apis.fulfillment.page.docs.endpoints.item-6")
    },
    {
        url: "/carts/{id}/accept_change",
        desc: t("apis.fulfillment.page.docs.endpoints.item-7")
    },
    {
        url: "/carts/{id}/revisions",
        desc: t("apis.fulfillment.page.docs.endpoints.item-8")
    },
    {
        url: "/applications",
        desc: t("apis.fulfillment.page.docs.endpoints.item-9")
    },
    {
        url: "/device_tokens",
        desc: t("apis.fulfillment.page.docs.endpoints.item-10")
    },
    {
        url: "/live_feed",
        desc: t("apis.fulfillment.page.docs.endpoints.item-11")
    },
    {
        url: "/webhooks",
        desc: t("apis.fulfillment.page.docs.endpoints.item-12")
    }
];

@translate("business-apis")
export default class FulfillmentApiPage extends Component {

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
            <div className="km-fulfillment-api-page">
                <Helmet title={t("apis.fulfillment.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.fulfillment.page.title")}
                    paragraphs={[
                        t("apis.fulfillment.page.para-1"),
                        t("apis.fulfillment.page.para-2")
                    ]}
                    paragraphsOrientation={"column"}
                />
                <ApiHowItWorksComponent title={t("apis.fulfillment.page.how-it-works.title")}>
                    <p>{t("apis.fulfillment.page.how-it-works.para-1")}</p>
                    <p>{t("apis.fulfillment.page.how-it-works.para-2")}</p>
                    <p>{t("apis.fulfillment.page.how-it-works.para-3")}</p>
                    <p>{t("apis.fulfillment.page.how-it-works.para-4")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.fulfillment.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.fulfillment.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.fulfillment.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.fulfillment.pricing-desc")}
                    itemDesc={"Kumuluz Fulfillment API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.fulfillment.tag")).filter(api => api.id !== "fulfillment")
                }/>

                <ApiUseCasesComponent useCases={[
                    <div key="usecase-1">
                        <p>{t("apis.fulfillment.page.usecases.item-1.para")}</p>
                        <UnorderedListComponent rows={1} fontColor={"black"} items={[
                            t("apis.fulfillment.page.usecases.item-1.items.item-1"),
                            t("apis.fulfillment.page.usecases.item-1.items.item-2"),
                            t("apis.fulfillment.page.usecases.item-1.items.item-3")
                        ]}/>
                    </div>,
                    "#",
                    t("apis.fulfillment.page.usecases.item-2")
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
