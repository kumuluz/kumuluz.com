import React, {Component} from "react";
import PropType from "prop-types";
import {Helmet} from "react-helmet";
import {translate} from "react-i18next";

import "./payment-api-page.scss";
import paymentApiDiagram from "../../../assets/images/apis/payment-api-diagram.svg";
import {
    ApiHowItWorksComponent,
    ApiHeaderComponent,
    ApiDocsComponent,
    ApiPricingComponent, ApiUseCasesComponent, ApiRelatedApisComponent
} from "../../../components/business-apis/export";
import {UnorderedListComponent} from "../../../components/shared/export.shared.components";
import {Footer} from "../../../components/shared/footer/footer";

import payPalLogo from "../../../assets/images/apis/payment/paypal.png";
import {businessApisList} from "../../../content/business-apis/business-apis";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";

const docsItems = t => [
    {
        title: t("apis.payment-api.page.docs.item-1.title"),
        desc: t("apis.payment-api.page.docs.item-1.desc")
    },
    {
        title: t("apis.payment-api.page.docs.item-2.title"),
        desc: t("apis.payment-api.page.docs.item-2.desc")
    },
    {
        title: t("apis.payment-api.page.docs.item-3.title"),
        desc: t("apis.payment-api.page.docs.item-3.desc")
    },
    {
        title: t("apis.payment-api.page.docs.item-4.title"),
        desc: t("apis.payment-api.page.docs.item-4.desc")
    }
];

@translate("business-apis")
export default class PaymentApiPage extends Component {

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
            <div className="km-payment-api-page">
                <Helmet title={t("apis.payment-api.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.payment-api.page.title")}
                    paragraphs={
                        [
                            t("apis.payment-api.page.subtitle-1"),
                            t("apis.payment-api.page.subtitle-2")
                        ]
                    }
                    paragraphsOrientation={"row"}
                />
                <ApiHowItWorksComponent title={t("apis.payment-api.page.how-it-works.title")}
                    subtitle={t("apis.payment-api.page.how-it-works.subtitle")}
                >
                    <div className="list-extended-margins">
                        <UnorderedListComponent fontColor={"white"} rows={3} items={[
                            t("apis.payment-api.page.how-it-works.list.item-1"),
                            t("apis.payment-api.page.how-it-works.list.item-2"),
                            t("apis.payment-api.page.how-it-works.list.item-3"),
                            t("apis.payment-api.page.how-it-works.list.item-4"),
                            t("apis.payment-api.page.how-it-works.list.item-5"),
                            t("apis.payment-api.page.how-it-works.list.item-6"),
                            t("apis.payment-api.page.how-it-works.list.item-7"),
                            t("apis.payment-api.page.how-it-works.list.item-8"),
                            t("apis.payment-api.page.how-it-works.list.item-9")
                        ]}/>
                    </div>
                    <div className="mt-5 image">
                        <img src={paymentApiDiagram}/>
                    </div>
                </ApiHowItWorksComponent>
                <ApiDocsComponent
                    headerSection={(
                        <div className="docs-header">
                            <div className="title">
                                <h5>{t("apis.payment-api.page.docs.title")}</h5>
                            </div>
                            <div className="images">
                                <img src={payPalLogo}/>
                            </div>
                        </div>
                    )}
                    bodySection={(
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.payment-api.page.docs.body.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.payment-api.page.docs.body.view")}</button>*/}
                            {/*</div>*/}
                        </div>
                    )}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.payment-api.pricing-desc")}
                    itemDesc={"Kumuluz Payment API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.payment-api.tag")).filter(api => api.id !== "payment")
                }/>

                <ApiUseCasesComponent useCases={[
                    t("apis.payment-api.page.usecases.item-1"),
                    "#",
                    t("apis.payment-api.page.usecases.item-2"),
                    "#",
                    t("apis.payment-api.page.usecases.item-3"),
                    "#",
                    t("apis.payment-api.page.usecases.item-4"),
                    "#",
                    t("apis.payment-api.page.usecases.item-5"),
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
