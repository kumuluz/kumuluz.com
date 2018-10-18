import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./customer-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {ApiUseCasesComponent} from "../../../components/business-apis/use-cases/use-cases.component";
import {Footer} from "../../../components/shared/footer/footer";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {ApiRelatedApisComponent} from "../../../components/business-apis/related-apis/related-apis.component";

const docsItems = t => [
    {
        title: t("apis.customer.page.docs.item-1.title"),
        desc: t("apis.customer.page.docs.item-1.desc"),
    },
    {
        title: t("apis.customer.page.docs.item-2.title"),
        desc: t("apis.customer.page.docs.item-2.desc"),
    },
    {
        title: t("apis.customer.page.docs.item-3.title"),
        desc: t("apis.customer.page.docs.item-3.desc"),
    }
];

const endpoints = t => [
    {
        url: "/customers",
        desc: t("apis.customer.page.docs.endpoints.item-1")
    },
    {
        url: "/customers/{id}/contacts",
        desc: t("apis.customer.page.docs.endpoints.item-2")
    },
    {
        url: "/customers/{id}/addresses",
        desc: t("apis.customer.page.docs.endpoints.item-3")
    },
    {
        url: "/customers/{id}/interactions",
        desc: t("apis.customer.page.docs.endpoints.item-4")
    },
    {
        url: "/customers/{id}/loyalty_transactions",
        desc: t("apis.customer.page.docs.endpoints.item-5")
    },
    {
        url: "/customers/{id}/carts",
        desc: t("apis.customer.page.docs.endpoints.item-6")
    },
    {
        url: "/customers/{id}/orders",
        desc: t("apis.customer.page.docs.endpoints.item-7")
    },
    {
        url: "/customers/{id}/fulfillments",
        desc: t("apis.customer.page.docs.endpoints.item-8")
    },
    {
        url: "/customers/{id}/invoices",
        desc: t("apis.customer.page.docs.endpoints.item-9")
    },
    {
        url: "/customers/{id}/payments",
        desc: t("apis.customer.page.docs.endpoints.item-10")
    },
    {
        url: "/customers/{id}/subscriptions",
        desc: t("apis.customer.page.docs.endpoints.item-11")
    }
];

@translate("business-apis")
export default class CustomerApiPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-customer-api-page">
                <Helmet title={t("apis.customer.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.customer.page.title")}
                    paragraphs={[t("apis.customer.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.customer.page.how-it-works.title")}>
                    <p>{t("apis.customer.page.how-it-works.para")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.customer.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.customer.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.customer.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.customer.pricing-desc")}
                    itemDesc={"Kumuluz Customer API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.customer.tag")).filter(api => api.id !== "customer")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.customer.page.usecases.item-1"),
                    "#",
                    t("apis.customer.page.usecases.item-2")
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
