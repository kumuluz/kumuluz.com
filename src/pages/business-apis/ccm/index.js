import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import {Helmet} from "react-helmet";
import {ApiHeaderComponent} from "../../../components/business-apis/header/api-header.component";
import {
    ApiDocsComponent,
    ApiHowItWorksComponent,
    ApiPricingComponent, ApiRelatedApisComponent,
    ApiUseCasesComponent
} from "../../../components/business-apis/export";
import {UnorderedListComponent} from "../../../components/shared/unordered-list/unordered-list.component";
import ccmDemo from "../../../assets/images/digital-platform/ccm-demo.jpg";

import "./ccm-api-page.scss";
import {Footer} from "../../../components/shared/footer/footer";

import ccmUseCase1 from "../../../assets/images/digital-platform/ccm-usecase1.jpg";
import ccmUseCase2 from "../../../assets/images/digital-platform/ccm-usecase2.jpg";
import ccmUseCase3 from "../../../assets/images/digital-platform/ccm-usecase3.jpg";
import ccmUseCase4 from "../../../assets/images/digital-platform/ccm-usecase4.jpg";
import ccmUseCase5 from "../../../assets/images/digital-platform/ccm-demo.jpg";
import ccmUseCase6 from "../../../assets/images/digital-platform/ccm-usecase6.jpg";
import ccmUseCase7 from "../../../assets/images/digital-platform/ccm-usecase7.jpg";
import ccmUseCase8 from "../../../assets/images/digital-platform/ccm-usecase8.jpg";
import {businessApisList} from "../../../content/business-apis/business-apis";

const docsItems = t => [
    {
        title: t("apis.ccm.page.docs.item-1.title"),
        desc: t("apis.ccm.page.docs.item-1.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-2.title"),
        desc: t("apis.ccm.page.docs.item-2.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-3.title"),
        desc: t("apis.ccm.page.docs.item-3.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-4.title"),
        desc: t("apis.ccm.page.docs.item-4.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-5.title"),
        desc: t("apis.ccm.page.docs.item-5.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-6.title"),
        desc: t("apis.ccm.page.docs.item-6.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-7.title"),
        desc: t("apis.ccm.page.docs.item-7.desc"),
    },
    {
        title: t("apis.ccm.page.docs.item-8.title"),
        desc: t("apis.ccm.page.docs.item-8.desc"),
    }
];

@translate("business-apis")
export default class CCMApiPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-ccm-api-page">
                <Helmet title={t("apis.ccm.page.title") + " - Kumuluz"}/>
                <ApiHeaderComponent title={t("apis.ccm.page.title")}
                    paragraphs={
                        [
                            t("apis.ccm.page.subtitle-1"),
                            t("apis.ccm.page.subtitle-2")
                        ]
                    }
                    paragraphsOrientation={"column"}
                />

                <ApiHowItWorksComponent title={t("apis.ccm.page.how-it-works.title")}
                    subtitle={t("apis.ccm.page.how-it-works.subtitle")}>
                    <div>
                        <UnorderedListComponent fontColor={"white"} rows={3} items={[
                            t("apis.ccm.page.how-it-works.list.item-1"),
                            t("apis.ccm.page.how-it-works.list.item-2"),
                            t("apis.ccm.page.how-it-works.list.item-3"),
                            t("apis.ccm.page.how-it-works.list.item-4"),
                            t("apis.ccm.page.how-it-works.list.item-5"),
                            t("apis.ccm.page.how-it-works.list.item-6"),
                            t("apis.ccm.page.how-it-works.list.item-7"),
                            t("apis.ccm.page.how-it-works.list.item-8"),
                            t("apis.ccm.page.how-it-works.list.item-9")
                        ]}/>
                    </div>
                    <div className="image-center mt-5">
                        <img src={ccmDemo}/>
                    </div>
                </ApiHowItWorksComponent>

                <ApiDocsComponent
                    headerSection={
                        <div/>
                    }
                    bodySection={
                        <div className="docs-body row justify-content-center">
                            <div className="col-10 mt-5">
                                <h2>{t("apis.ccm.page.docs.title")}</h2>

                                {docsItems(t).map((doc, index) => (
                                    <div key={index}>
                                        <h4>{doc.title}</h4>
                                        <p>{doc.desc}</p>
                                    </div>
                                ))}
                            </div>
                            {/*<div className="col btn-area">*/}
                            {/*<button className="btn btn-primary">{t("apis.ccm.page.docs.view")}</button>*/}
                            {/*</div>*/}
                        </div>}
                />

                <ApiPricingComponent
                    price={"1.000"}
                    pricePer={t("apis.pricing-per-container")}
                    desc={t("apis.ccm.pricing-desc")}
                    itemDesc={"Kumuluz CCM API"}
                />

                <ApiRelatedApisComponent apis={
                    businessApisList(t).filter(api => api.tag === t("apis.ccm.tag")).filter(api => api.id !== "ccm")
                }/>

                <ApiUseCasesComponent useCases={[
                    <div className="container food" key="usecase-1">
                        <div className="row justify-content-between">
                            <div className="col-10 col-lg-7">
                                <p>{t("apis.ccm.page.usecases.food.para-1")}</p>
                                <img src={ccmUseCase1}/>
                            </div>
                            <div className="col-10 col-lg-3">
                                <img src={ccmUseCase2}/>
                            </div>
                        </div>
                        <div className="row justify-content-between align-items-center mt-5">
                            <div className="col-10 col-lg-3 mob-ord-2">
                                <img src={ccmUseCase3}/>
                            </div>
                            <div className="col-10 col-lg-7 mob-ord-1">
                                <p>{t("apis.ccm.page.usecases.food.para-2")}</p>
                            </div>
                        </div>
                    </div>,
                    "#",
                    <div className="container fashion" key="usecase-2">
                        <div className="row">
                            <div className="col-10">
                                <p>{t("apis.ccm.page.usecases.fashion.para-1")}</p>
                                <img src={ccmUseCase5}/>
                            </div>
                        </div>
                        <div className="row justify-content-between mt-5 align-items-center">
                            <div className="col-10 col-lg-6 text-left">
                                <p>{t("apis.ccm.page.usecases.fashion.para-2")}</p>
                            </div>
                            <div className="col-10 col-lg-3">
                                <img src={ccmUseCase4}/>
                            </div>
                        </div>
                    </div>,
                    "#",
                    <div className="container events" key="usecase-3">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-10 col-lg-6 text-left">
                                <p>{t("apis.ccm.page.usecases.events")}</p>
                            </div>
                            <div className="col-10 col-lg-2">
                                <img src={ccmUseCase6}/>
                            </div>
                        </div>
                    </div>,
                    "#",
                    <div className="container transport" key="usecase-4">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-10 col-lg-6 text-left">
                                <p>{t("apis.ccm.page.usecases.transport")}</p>
                            </div>
                            <div className="col-10 col-lg-2">
                                <img src={ccmUseCase7}/>
                            </div>
                        </div>
                    </div>,
                    "#",
                    <div className="container retail" key="usecase-5">
                        <div className="row justify-content-between align-items-center">
                            <div className="col-10 col-lg-6 text-left">
                                <p>{t("apis.ccm.page.usecases.retail.para-1")}</p>
                                <p>{t("apis.ccm.page.usecases.retail.para-2")}</p>
                            </div>
                            <div className="col-10 col-lg-2">
                                <img src={ccmUseCase8}/>
                            </div>
                        </div>
                    </div>
                ]}/>

                <Footer social/>
            </div>
        );
    }
}
