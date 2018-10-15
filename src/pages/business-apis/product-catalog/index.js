import React, {Component} from "react";
import {translate} from "react-i18next";
import {Helmet} from 'react-helmet';

import "./product-catalog-api.page.scss";
import {Footer} from "../../../components/shared/footer/footer";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";

import howItWorks from "../../../assets/images/apis/product-catalog/how-it-works.png";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {ApiUseCasesComponent} from "../../../components/business-apis/use-cases/use-cases.component";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {ApiRelatedApisComponent} from "../../../components/business-apis/related-apis/related-apis.component";

const docsItems = t => [
    {
        title: t("apis.product-catalog.page.docs.item-1.title"),
        desc: t("apis.product-catalog.page.docs.item-1.desc"),
    },
    {
        title: t("apis.product-catalog.page.docs.item-2.title"),
        desc: t("apis.product-catalog.page.docs.item-2.desc"),
    },
    {
        title: t("apis.product-catalog.page.docs.item-3.title"),
        desc: t("apis.product-catalog.page.docs.item-3.desc"),
    },
    {
        title: t("apis.product-catalog.page.docs.item-4.title"),
        desc: t("apis.product-catalog.page.docs.item-4.desc"),
    }
];

const endpoints = t => [
    {
        url: "/brands",
        desc: t("apis.product-catalog.page.docs.endpoints.item-1")
    },
    {
        url: "/channels",
        desc: t("apis.product-catalog.page.docs.endpoints.item-2")
    },
    {
        url: "/collections",
        desc: t("apis.product-catalog.page.docs.endpoints.item-3")
    },
    {
        url: "/companies",
        desc: t("apis.product-catalog.page.docs.endpoints.item-4")
    },
    {
        url: "/countries",
        desc: t("apis.product-catalog.page.docs.endpoints.item-5")
    },
    {
        url: "/locations",
        desc: t("apis.product-catalog.page.docs.endpoints.item-6")
    },
    {
        url: "/prices",
        desc: t("apis.product-catalog.page.docs.endpoints.item-7")
    },
    {
        url: "/products",
        desc: t("apis.product-catalog.page.docs.endpoints.item-8")
    },
    {
        url: "/taxes",
        desc: t("apis.product-catalog.page.docs.endpoints.item-9")
    },
    {
        url: "/translations",
        desc: t("apis.product-catalog.page.docs.endpoints.item-10")
    },
    {
        url: "/variations",
        desc: t("apis.product-catalog.page.docs.endpoints.item-11")
    }
];

@translate("business-apis")
export default class ProductCatalogApiPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-product-catalog-api-page">
                <Helmet title={t("apis.product-catalog.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.product-catalog.page.title")}
                                    paragraphs={[t("apis.product-catalog.page.para")]}
                                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.product-catalog.page.how-it-works.title")}>
                    <p>{t("apis.product-catalog.page.how-it-works.para-1")}</p>
                    <p>{t("apis.product-catalog.page.how-it-works.para-2")}</p>
                    <div className="image-center mt-4">
                        <img src={howItWorks}/>
                    </div>
                    <p className="mt-4">{t("apis.product-catalog.page.how-it-works.para-3")}</p>
                    <p>{t("apis.product-catalog.page.how-it-works.para-4")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.product-catalog.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.product-catalog.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                                {/*<button className="btn btn-primary">{t("apis.product-catalog.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.product-catalog.pricing-desc")}
                    itemDesc={"Kumuluz Product Catalog API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.product-catalog.tag")).filter(api => api.id !== "product-catalog")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.product-catalog.page.usecases.item-1"),
                    "#",
                    t("apis.product-catalog.page.usecases.item-2"),
                    "#",
                    t("apis.product-catalog.page.usecases.item-3")
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
