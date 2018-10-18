import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./invoice-api.page.scss";
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
        title: t("apis.invoice.page.docs.item-1.title"),
        desc: t("apis.invoice.page.docs.item-1.desc"),
    },
    {
        title: t("apis.invoice.page.docs.item-2.title"),
        desc: t("apis.invoice.page.docs.item-2.desc"),
    },
    {
        title: t("apis.invoice.page.docs.item-3.title"),
        desc: t("apis.invoice.page.docs.item-3.desc"),
    }
];

const endpoints = t => [
    {
        url: "/invoice",
        desc: t("apis.invoice.page.docs.endpoints.item-1")
    },
    {
        url: "/invoice/{id}/{format}",
        desc: t("apis.invoice.page.docs.endpoints.item-2")
    }
];

@translate("business-apis")
export default class InvoicetApiPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-invoice-api-page">
                <Helmet title={t("apis.invoice.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.invoice.page.title")}
                    paragraphs={[t("apis.invoice.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.invoice.page.how-it-works.title")}>
                    <p>{t("apis.invoice.page.how-it-works.para-1")}</p>
                    <p>{t("apis.invoice.page.how-it-works.para-2")}</p>
                    <p>{t("apis.invoice.page.how-it-works.para-3")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.invoice.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.invoice.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.invoice.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.invoice.pricing-desc")}
                    itemDesc={"Kumuluz Invoice API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.invoice.tag")).filter(api => api.id !== "invoice")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.invoice.page.usecases.item-1"),
                    "#",
                    t("apis.invoice.page.usecases.item-2"),
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
