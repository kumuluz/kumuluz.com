import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./kumuluz-api-page.scss";
import {
    CompAboutComponent, CompBenefitsComponent,
    CompHeaderComponent, CompMottoComponent,
    CompNavigationComponent, CompProductGridComponent, CompUseCasesComponent
} from "../../../components/digital-components/export";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import apiLogo from "../../../assets/images/digital-platform/api.svg";
import apiDemo from "../../../assets/images/digital-platform/api-demo.jpg";
import apiConfig from "../../../assets/images/digital-platform/api-config.jpg";
import apiPublishing from "../../../assets/images/digital-platform/api-publishing.jpg";
import apiDocs from "../../../assets/images/digital-platform/api-docs.jpg";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-api.svg";
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-api-down.svg";

import {CollapsableListComponent} from "../../../components/shared/export.shared.components";
import {Footer} from "../../../components/shared/footer/footer";
import strategicAdvantageImage from "../../../assets/images/strategicAdv.svg";
import whatIsImage from "../../../assets/images/whatIs.svg";
import competitiveAdvantageImage from "../../../assets/images/competitiveAdv.svg";
import transitionCloudImage from "../../../assets/images/transitionCloud.svg";
import {Helmet} from "react-helmet";
import {API_KUMULUZ_URL} from "../../../content/constants";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";
import {push} from "gatsby-link";

const items = t => [
    {
        icon: transitionCloudImage,
        title: t("components.api.benefits.items.item-1.title"),
        description: t("components.api.benefits.items.item-1.desc")
    },
    {
        icon: strategicAdvantageImage,
        title: t("components.api.benefits.items.item-2.title"),
        description: t("components.api.benefits.items.item-2.desc")
    },
    {
        icon: whatIsImage,
        title: t("components.api.benefits.items.item-4.title"),
        description: t("components.api.benefits.items.item-4.desc")
    },
    {
        icon: competitiveAdvantageImage,
        title: t("components.api.benefits.items.item-5.title"),
        description: t("components.api.benefits.items.item-5.desc")
    }
];

@translate("digital-platform")
export default class KumuluzApiPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GoogleAnalyticsService.registerPageView();
    }
    
    jumpToContact() {
        const contactForm = document.getElementById("contact-us");
        if (contactForm) {
            contactForm.scrollIntoView();
        } else {
            push("/#contact-us");
        }
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kumuluz-api-page">
                <Helmet title={t("components.api.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-api"} products={digitalPlatformProducts(t)}/>
                <CompHeaderComponent image={apiLogo} title={"Kumuluz<strong>API</strong>"}
                    url={API_KUMULUZ_URL}
                    items={[
                        t("components.api.header.items.item-1"),
                        t("components.api.header.items.item-2"),
                        t("components.api.header.items.item-3")
                    ]}
                    subtitle={t("components.api.header.subtitle")}/>
                <CompAboutComponent
                    chevron={chevron}
                    chevronDown={chevronDown}
                    colorClazz={"color-api"}
                    about={{
                        title: t("components.api.about.navbar.about.strong"),
                        content: t("components.api.about.navbar.about.text")
                    }}
                    aboutBoxTitle={t("components.api.about.navbar.about.box.title")}
                    aboutItems={[
                        {
                            title: t("components.api.about.navbar.about.box.item-1"),
                            desc: ""
                        },
                        {
                            title: t("components.api.about.navbar.about.box.item-2"),
                            desc: ""
                        },
                        {
                            title: t("components.api.about.navbar.about.box.item-3"),
                            desc: ""
                        },
                        {
                            title: t("components.api.about.navbar.about.box.item-4"),
                            desc: ""
                        }
                    ]}
                    aboutTitle={t("components.api.about.navbar.about.title")}
                    featuresTitle={t("components.api.about.navbar.features.title")}
                    customersTitle={t("components.api.about.navbar.customer.title")}
                    demoTitle={t("components.api.about.navbar.demo.title")}
                    features={[
                        t("components.api.about.navbar.features.item-1"),
                        t("components.api.about.navbar.features.item-2"),
                        t("components.api.about.navbar.features.item-3"),
                        t("components.api.about.navbar.features.item-4"),
                        t("components.api.about.navbar.features.item-5"),
                        t("components.api.about.navbar.features.item-6"),
                        t("components.api.about.navbar.features.item-7"),
                        t("components.api.about.navbar.features.item-8"),
                        t("components.api.about.navbar.features.item-9"),
                        t("components.api.about.navbar.features.item-10"),
                        t("components.api.about.navbar.features.item-11"),
                        t("components.api.about.navbar.features.item-12"),
                        t("components.api.about.navbar.features.item-13"),
                        t("components.api.about.navbar.features.item-14"),
                        t("components.api.about.navbar.features.item-15"),
                        t("components.api.about.navbar.features.item-16"),
                        t("components.api.about.navbar.features.item-17")
                    ]}
                    customers={{
                        title: t("components.api.about.navbar.customer.subtitle"),
                        content: t("components.api.about.navbar.customer.content")
                    }}
                    demo={
                        <div className="api-demo">
                            <img src={apiDemo}/>
                            <div className="button">
                                <button className="btn btn-primary" onClick={this.jumpToContact}>
                                    {t("components.api.about.navbar.demo.tryout")}
                                </button>
                            </div>
                        </div>
                    }
                />
                <CompMottoComponent title={t("components.api.motto.title")}
                    subtitle={t("components.api.motto.subtitle")}/>

                <CompBenefitsComponent benefits={items(t)} title={t("components.api.benefits.title")}
                    subtitle={t("components.api.benefits.subtitle")}
                    afterText={`<strong class="color-api">${t("components.api.benefits.after-text.colored")}</strong> ${t("components.api.benefits.after-text.text")}`}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.api.use-cases.items.config.title"),
                    section2: t("components.api.use-cases.items.docs.title"),
                    section3: t("components.api.use-cases.items.publishing.title"),
                    section4: t("components.api.use-cases.items.security.title"),
                }}
                section1={<div className="row justify-content-center">
                    <div className="col-10 col-lg-5">
                        <div className="section-content">
                            <CollapsableListComponent colorClazz="color-api" chevron={chevron}
                                chevronDown={chevronDown} items={[
                                    {
                                        title: t("components.api.use-cases.items.config.item-1.bold"),
                                        desc: t("components.api.use-cases.items.config.item-1.text")
                                    },
                                    {
                                        title: t("components.api.use-cases.items.config.item-2.bold"),
                                        desc: t("components.api.use-cases.items.config.item-2.text")
                                    },
                                    {
                                        title: t("components.api.use-cases.items.config.item-3.bold"),
                                        desc: t("components.api.use-cases.items.config.item-3.text")
                                    },
                                    {
                                        title: t("components.api.use-cases.items.config.item-4.bold"),
                                        desc: t("components.api.use-cases.items.config.item-4.text")
                                    }
                                ]}/>
                        </div>
                    </div>
                    <div className="col-10 col-lg-5">
                        <div className="section-image">
                            <img src={apiConfig}/>
                        </div>
                    </div>
                </div>}
                section2={
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-5">
                            <div className="section-content">
                                <p>
                                    {t("components.api.use-cases.items.docs.para")}
                                </p>
                                <CollapsableListComponent colorClazz="color-api" chevron={chevron}
                                    chevronDown={chevronDown} items={[
                                        {
                                            title: t("components.api.use-cases.items.docs.item-1.bold"),
                                            desc: t("components.api.use-cases.items.docs.item-1.text")
                                        },
                                        {
                                            title: t("components.api.use-cases.items.docs.item-2.bold"),
                                            desc: t("components.api.use-cases.items.docs.item-2.text")
                                        },
                                        {
                                            title: t("components.api.use-cases.items.docs.item-3.bold"),
                                            desc: t("components.api.use-cases.items.docs.item-3.text")
                                        }
                                    ]}/>
                            </div>
                        </div>
                        <div className="col-10 col-lg-5">
                            <div className="section-image">
                                <img src={apiDocs}/>
                            </div>
                        </div>
                    </div>
                }
                section3={
                    <div className="row justify-content-center">
                        <div className="col-10 col-lg-5">
                            <div className="section-content">
                                <p>
                                    {t("components.api.use-cases.items.publishing.para")}
                                </p>
                                <CollapsableListComponent colorClazz="color-api" chevron={chevron}
                                    chevronDown={chevronDown} items={[
                                        {
                                            title: t("components.api.use-cases.items.publishing.item-1.bold"),
                                            desc: t("components.api.use-cases.items.publishing.item-1.text")
                                        },
                                        {
                                            title: t("components.api.use-cases.items.publishing.item-2.bold"),
                                            desc: t("components.api.use-cases.items.publishing.item-2.text")
                                        },
                                        {
                                            title: t("components.api.use-cases.items.publishing.item-3.bold"),
                                            desc: t("components.api.use-cases.items.publishing.item-3.text")
                                        }
                                    ]}/>
                            </div>
                        </div>
                        <div className="col-10 col-lg-5">
                            <div className="section-image">
                                <img src={apiPublishing}/>
                            </div>
                        </div>
                    </div>
                }
                section4={<div className="row justify-content-center">
                    <div className="col-10"
                        dangerouslySetInnerHTML={{__html: t("components.api.use-cases.items.security.content")}}/>
                </div>}
                />
    
                <div className="container-fluid mt-5 button-area">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6 d-flex justify-content-center">
                            <a className="btn btn-primary" href={API_KUMULUZ_URL} target="_blank" rel="noreferrer noopener">
                                {t("components.api.external.more")}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="divider-container">
                    <div className="divider"/>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h3 className="prod-grid-title">{t("components.api.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>
            </div>
        );
    }
}
