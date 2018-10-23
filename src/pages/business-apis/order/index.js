import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import "./order-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {ApiDocsComponent} from "../../../components/business-apis/documentation/api-docs.component";
import {ApiPricingComponent} from "../../../components/business-apis/pricing/api-pricing.component";
import {Footer} from "../../../components/shared/footer/footer";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {ApiRelatedApisComponent} from "../../../components/business-apis/related-apis/related-apis.component";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

const docsItems = t => [
    {
        title: t("apis.order.page.docs.item-1.title"),
        desc: t("apis.order.page.docs.item-1.desc"),
    },
    {
        title: t("apis.order.page.docs.item-2.title"),
        desc: t("apis.order.page.docs.item-2.desc"),
    }
];

const endpoints = t => [
    {
        url: "/orders?advancedFulfillment=true",
        desc: t("apis.order.page.docs.endpoints.item-1")
    },
    {
        url: "/orders/{id}",
        desc: t("apis.order.page.docs.endpoints.item-2")
    },
    {
        url: "/orders",
        desc: t("apis.order.page.docs.endpoints.item-3")
    }
];

@translate("business-apis")
export default class OrderApiPage extends Component {

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
            <div className="km-order-api-page">
                <Helmet title={t("apis.order.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.order.page.title")}
                    paragraphs={[t("apis.order.page.para")]}
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.order.page.how-it-works.title")}>
                    <p>{t("apis.order.page.how-it-works.para")}</p>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.order.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}

                                <div className="endpoints">
                                    <h3>{t("apis.order.page.docs.endpoints.title")}</h3>
                                    {endpoints(t).map((endpoint, index) => (
                                        <div key={index} className="endpoint-item">
                                            <span className="code">{endpoint.url}</span>
                                            <span className="desc">{endpoint.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.order.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.order.pricing-desc")}
                    itemDesc={"Kumuluz Order API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.order.tag")).filter(api => api.id !== "order")
                }/>

                {/*<ApiUseCasesComponent useCases={[*/}
                {/*t("apis.order.page.usecases.item-1"),*/}
                {/*"#",*/}
                {/*t("apis.order.page.usecases.item-2"),*/}
                {/*"#",*/}
                {/*t("apis.order.page.usecases.item-3")*/}
                {/*]}/>*/}

                <Footer social/>
            </div>
        );
    }
}
