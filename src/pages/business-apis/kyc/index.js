import React, {Component} from "react";
import {translate} from "react-i18next";
import "./kyc-api.page.scss";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {ApiHowItWorksComponent} from "../../../components/business-apis/how-it-works/api-how-it-works.component";
import {Footer} from "../../../components/shared/footer/footer";
import {ApiComingSoonComponent} from "../../../components/business-apis/export";

/*const docsItems = t => [
    {
        title: t("apis.kyc.page.docs.item-1.title"),
        desc: t("apis.kyc.page.docs.item-1.desc"),
    },
    {
        title: t("apis.kyc.page.docs.item-2.title"),
        desc: t("apis.kyc.page.docs.item-2.desc"),
    },
    {
        title: t("apis.kyc.page.docs.item-3.title"),
        desc: t("apis.kyc.page.docs.item-3.desc"),
    }
];

const endpoints = t => [
    {
        url: "/carts",
        desc: t("apis.kyc.page.docs.endpoints.item-1")
    },
    {
        url: "/carts/{id}/items",
        desc: t("apis.kyc.page.docs.endpoints.item-2")
    },
    {
        url: "/carts/{id}/update_prices",
        desc: t("apis.kyc.page.docs.endpoints.item-3")
    },
    {
        url: "/carts/{id}/items/{id}/benefit",
        desc: t("apis.kyc.page.docs.endpoints.item-4")
    },
    {
        url: "/carts/{id}/items/{id}/pricing",
        desc: t("apis.kyc.page.docs.endpoints.item-5")
    },
    {
        url: "/carts/{id}/location_availability",
        desc: t("apis.kyc.page.docs.endpoints.item-6")
    },
    {
        url: "/carts/{id}/change_location",
        desc: t("apis.kyc.page.docs.endpoints.item-7")
    }
];*/

@translate("business-apis")
export default class KycApiPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kyc-api-page">
                <Helmet title={t("apis.kyc.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.kyc.page.title")}
                                    paragraphs={[t("apis.kyc.page.para")]}
                                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.kyc.page.how-it-works.title")}>
                    <p>{t("apis.kyc.page.how-it-works.para")}</p>
                </ApiHowItWorksComponent>

                <ApiComingSoonComponent/>

                {/*<ApiDocsComponent*/}
                    {/*headerSection={*/}
                        {/*<div/>*/}
                    {/*}*/}
                    {/*bodySection={*/}
                        {/*<div className="docs-body row justify-content-center">*/}
                            {/*<div className="col-10 mt-5">*/}
                                {/*<h2>{t("apis.kyc.page.docs.title")}</h2>*/}

                                {/*{docsItems(t).map((doc, index) => (*/}
                                    {/*<div key={index}>*/}
                                        {/*<h4>{doc.title}</h4>*/}
                                        {/*<p>{doc.desc}</p>*/}
                                    {/*</div>*/}
                                {/*))}*/}

                                {/*<div className="endpoints">*/}
                                    {/*<h3>{t("apis.kyc.page.docs.endpoints.title")}</h3>*/}
                                    {/*{endpoints(t).map((endpoint, index) => (*/}
                                        {/*<div key={index} className="endpoint-item">*/}
                                            {/*<span className="code">{endpoint.url}</span>*/}
                                            {/*<span className="desc">{endpoint.desc}</span>*/}
                                        {/*</div>*/}
                                    {/*))}*/}
                                {/*</div>*/}
                            {/*</div>*/}
                            {/*<div className="col btn-area">*/}
                                {/*<button className="btn btn-primary">{t("apis.kyc.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        {/*</div>}*/}
                {/*/>*/}

                {/*<ApiPricingComponent*/}
                    {/*price={"1.000"}*/}
                    {/*pricePer={t("apis.pricing-per-container")}*/}
                    {/*desc={t("apis.kyc.pricing-desc")}*/}
                    {/*itemDesc={"Kumuluz KYC API"}*/}

                {/*/>*/}

                {/*<ApiUseCasesComponent useCases={[*/}
                    {/*t("apis.kyc.page.usecases.item-1"),*/}
                    {/*"#",*/}
                    {/*t("apis.kyc.page.usecases.item-2"),*/}
                    {/*"#",*/}
                    {/*t("apis.kyc.page.usecases.item-3")*/}
                {/*]}/>*/}

                <Footer social/>
            </div>
        );
    }
}
