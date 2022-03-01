import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import {CompNavigationComponent} from "../../../components/digital-components/navigation/comp-navigation.component";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import {CompHeaderComponent} from "../../../components/digital-components/header/comp-header.component";
import crowdLogo from "../../../assets/images/digital-platform/crowdsensing.svg";
import {
    CompProductGridComponent
} from "../../../components/digital-components/product-grid/comp-product-grid.component";
import {Footer} from "../../../components/shared/footer/footer";
import {Helmet} from "react-helmet";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";
import {CROWDSENSING_KUMULUZ_URL} from "../../../content/constants";
import crowdsensingDemo from "../../../assets/images/digital-platform/crowdsensing-demo.png";
import {CompAboutComponent} from "../../../components/digital-components/about/comp-about.component";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-crowdsensing.svg";
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-crowdsensing-down.svg";

import "./kumuluz-crowdsensing-page.scss";
import {CompMottoComponent} from "../../../components/digital-components/motto/comp-motto.component";
import {CompBenefitsComponent} from "../../../components/digital-components/benefits/comp-benefits.component";
import whatIsImage from "../../../assets/images/whatIs.svg";
import lockImage from "../../../assets/images/lockIn.svg";
import efficiencyImage from "../../../assets/images/efficiency.svg";
import datacenterImage from "../../../assets/images/deployDatacenter.svg";
import peopleImage from "../../../assets/images/forWho.svg";
import digitalPlatformImage from "../../../assets/images/digitalPlatform.svg";
import {CompUseCasesComponent} from "../../../components/digital-components/use-cases/comp-use-cases.component";
import {CheckboxListComponent} from "../../../components/shared/checkbox-list/checkbox-list.component";
import {push} from "gatsby-link";

const items = t => [
    {
        icon: whatIsImage,
        title: t("components.crowdsensing.benefits.items.item-1.title"),
        description: t("components.crowdsensing.benefits.items.item-1.desc")
    },
    {
        icon: lockImage,
        title: t("components.crowdsensing.benefits.items.item-2.title"),
        description: t("components.crowdsensing.benefits.items.item-2.desc")
    },
    {
        icon: efficiencyImage,
        title: t("components.crowdsensing.benefits.items.item-3.title"),
        description: t("components.crowdsensing.benefits.items.item-3.desc")
    },
    {
        icon: datacenterImage,
        title: t("components.crowdsensing.benefits.items.item-4.title"),
        description: t("components.crowdsensing.benefits.items.item-4.desc")
    },
    {
        icon: peopleImage,
        title: t("components.crowdsensing.benefits.items.item-5.title"),
        description: t("components.crowdsensing.benefits.items.item-5.desc")
    },
    {
        icon: digitalPlatformImage,
        title: t("components.crowdsensing.benefits.items.item-6.title"),
        description: t("components.crowdsensing.benefits.items.item-6.desc")
    }
];

export const creatingMessageItems = t => [
    t("components.crowdsensing.use-cases.creating.item-1"),
    t("components.crowdsensing.use-cases.creating.item-2"),
    t("components.crowdsensing.use-cases.creating.item-3"),
];

export const targetingSettingsItems = t => [
    t("components.crowdsensing.use-cases.targeting.item-1"),
    t("components.crowdsensing.use-cases.targeting.item-2"),
];

export const afterMessageItems = t => [
    t("components.crowdsensing.use-cases.after.item-1"),
    t("components.crowdsensing.use-cases.after.item-2"),
];

export const customersItems = t => [
    t("components.crowdsensing.about.navbar.customer.items.item-1"),
    t("components.crowdsensing.about.navbar.customer.items.item-2"),
    t("components.crowdsensing.about.navbar.customer.items.item-3"),
    t("components.crowdsensing.about.navbar.customer.items.item-4"),
    t("components.crowdsensing.about.navbar.customer.items.item-5"),
];

@translate("digital-platform")
export default class KumuluzCrowdsensingPage extends Component {
    
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
            <div className="km-kumuluz-crowdsensing-page">
                <Helmet title={t("components.crowdsensing.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-crowdsensing"} products={digitalPlatformProducts(t)}/>
                
                <CompHeaderComponent image={crowdLogo} title={"Kumuluz<strong>Crowdsensing</strong>"}
                    url={CROWDSENSING_KUMULUZ_URL}
                    items={[
                        t("components.crowdsensing.header.items.item-1"),
                        t("components.crowdsensing.header.items.item-2"),
                        t("components.crowdsensing.header.items.item-3")
                    ]}
                    subtitle={t("components.crowdsensing.header.subtitle")}/>
                
                <CompAboutComponent
                    colorClazz="color-crowdsensing"
                    chevron={chevron}
                    chevronDown={chevronDown}
                    about={{
                        title: t("components.crowdsensing.about.navbar.about.strong"),
                        content: t("components.crowdsensing.about.navbar.about.text")
                    }}
                    aboutBoxTitle={t("components.crowdsensing.about.navbar.about.box.title")}
                    aboutItems={[
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-1"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-2"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-3"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-4"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-5"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-6"),
                            desc: ""
                        },
                        {
                            title: t("components.crowdsensing.about.navbar.about.box.item-7"),
                            desc: ""
                        },
                    ]}
                    aboutTitle={t("components.crowdsensing.about.navbar.about.title")}
                    featuresTitle={t("components.crowdsensing.about.navbar.features.title")}
                    customersTitle={t("components.crowdsensing.about.navbar.customer.title")}
                    demoTitle={t("components.crowdsensing.about.navbar.demo.title")}
                    features={[
                        t("components.crowdsensing.about.navbar.features.item-1"),
                        t("components.crowdsensing.about.navbar.features.item-2"),
                        t("components.crowdsensing.about.navbar.features.item-3"),
                        t("components.crowdsensing.about.navbar.features.item-4"),
                        t("components.crowdsensing.about.navbar.features.item-5"),
                        t("components.crowdsensing.about.navbar.features.item-6"),
                        t("components.crowdsensing.about.navbar.features.item-7"),
                        t("components.crowdsensing.about.navbar.features.item-8"),
                        t("components.crowdsensing.about.navbar.features.item-9"),
                        t("components.crowdsensing.about.navbar.features.item-10"),
                        t("components.crowdsensing.about.navbar.features.item-11"),
                        t("components.crowdsensing.about.navbar.features.item-12"),
                        t("components.crowdsensing.about.navbar.features.item-13"),
                        t("components.crowdsensing.about.navbar.features.item-14"),
                        t("components.crowdsensing.about.navbar.features.item-15"),
                    ]}
                    customersComponent={<CheckboxListComponent items={customersItems(t)} checkboxColor={"#a969aa"}/>}
                    demo={
                        <div className="crowdsensing-demo">
                            <img src={crowdsensingDemo} alt="crowdsensing demo"/>
                            <div className="button">
                                <button className="btn btn-primary" onClick={this.jumpToContact}>
                                    {t("components.crowdsensing.about.navbar.demo.tryout")}
                                </button>
                            </div>
                        </div>
                    }
                />
                
                <CompMottoComponent title={t("components.crowdsensing.motto.title")}
                    subtitle={t("components.crowdsensing.motto.subtitle")}/>
                
                <CompBenefitsComponent benefits={items(t)} title={t("components.crowdsensing.benefits.title")}
                    subtitle={t("components.crowdsensing.benefits.subtitle")}
                    afterText={`<strong class="color-crowdsensing">${t("components.crowdsensing.benefits.after-text.colored")}</strong> ${t("components.crowdsensing.benefits.after-text.text")}`}/>
                
                <CompUseCasesComponent navbar={{
                    section1: t("components.crowdsensing.use-cases.creating.title"),
                    section2: t("components.crowdsensing.use-cases.targeting.title"),
                    section3: t("components.crowdsensing.use-cases.after.title")
                }}
                section1={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.crowdsensing.use-cases.creating.subtitle")}</h3>
                                <CheckboxListComponent items={creatingMessageItems(t)} checkboxColor={"#a969aa"}/>
                            </div>
                        </div>
                    </div>
                }
                section2={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.crowdsensing.use-cases.targeting.subtitle")}</h3>
                                <CheckboxListComponent items={targetingSettingsItems(t)} checkboxColor={"#a969aa"}/>
                            </div>
                        </div>
                    </div>
                }
                section3={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.crowdsensing.use-cases.after.subtitle")}</h3>
                                <CheckboxListComponent items={afterMessageItems(t)} checkboxColor={"#a969aa"}/>
                            </div>
                        </div>
                    </div>
                }
                />
    
                <div className="container-fluid mt-5 button-area">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6 d-flex justify-content-center">
                            <a className="btn btn-primary" href={CROWDSENSING_KUMULUZ_URL} target="_blank" rel="noreferrer noopener">
                                {t("components.crowdsensing.external.more")}
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
                            <h3 className="prod-grid-title">{t("components.crowdsensing.prod-grid")}</h3>
                        </div>
                    </div>
                </div>
                
                <CompProductGridComponent/>
                
                <Footer contact/>
            
            
            </div>
        );
    }
}
