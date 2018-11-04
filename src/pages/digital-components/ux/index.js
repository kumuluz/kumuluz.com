import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./kumuluz-ux-page.scss";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import {CompNavigationComponent} from "../../../components/digital-components/navigation/comp-navigation.component";
import uxLogo from "../../../assets/images/digital-platform/ux.svg";
import {CompHeaderComponent} from "../../../components/digital-components/header/comp-header.component";
import {CompUseCasesComponent} from "../../../components/digital-components/use-cases/comp-use-cases.component";
import {CollapsableListComponent} from "../../../components/shared/collapsable-list/collapsable-list.component";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-ux.svg";
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-ux-down.svg";
import {ContactForm} from "../../../components/shared/contact-form/contact-form";
import {CompMottoComponent} from "../../../components/digital-components/motto/comp-motto.component";
import {CompBenefitsComponent} from "../../../components/digital-components/benefits/comp-benefits.component";
import {CompProductGridComponent} from "../../../components/digital-components/product-grid/comp-product-grid.component";
import {Footer} from "../../../components/shared/footer/footer";

const features = t => [
    t("components.ux.about.features.item-1"),
    t("components.ux.about.features.item-2"),
    t("components.ux.about.features.item-3"),
    t("components.ux.about.features.item-4"),
    t("components.ux.about.features.item-5"),
    t("components.ux.about.features.item-6"),
];

import digitalPlatformImage from "../../../assets/images/digitalPlatform.svg";
import deployDatacenterImage from "../../../assets/images/deployDatacenter.svg";
import competitiveAdvantageImage from "../../../assets/images/competitiveAdv.svg";
import strategicAdvantageImage from "../../../assets/images/strategicAdv.svg";
import knowledgeImage from "../../../assets/images/knowledge.svg";
import {Helmet} from "react-helmet";
import {GoogleAnalyticsService} from "../../../components/shared/google-analytics/google-analytics.service";
import {CheckboxListComponent} from "../../../components/shared/export.shared.components";

const benefits = t => [
    {
        icon: digitalPlatformImage,
        title: t("components.ux.benefits.items.item-1.title"),
        description: t("components.ux.benefits.items.item-1.desc")
    },
    {
        icon: deployDatacenterImage,
        title: t("components.ux.benefits.items.item-2.title"),
        description: t("components.ux.benefits.items.item-2.desc")
    },
    {
        icon: competitiveAdvantageImage,
        title: t("components.ux.benefits.items.item-3.title"),
        description: t("components.ux.benefits.items.item-3.desc")
    },
    {
        icon: strategicAdvantageImage,
        title: t("components.ux.benefits.items.item-4.title"),
        description: t("components.ux.benefits.items.item-4.desc")
    },
    {
        icon: knowledgeImage,
        title: t("components.ux.benefits.items.item-5.title"),
        description: t("components.ux.benefits.items.item-5.desc")
    }
];

const components = t => [
    t("components.ux.use-cases.components.item-1"),
    t("components.ux.use-cases.components.item-2"),
    t("components.ux.use-cases.components.item-3"),
    t("components.ux.use-cases.components.item-4")
];

const integrations = t => [
    t("components.ux.use-cases.integration.item-1"),
    t("components.ux.use-cases.integration.item-2"),
    t("components.ux.use-cases.integration.item-3"),
    t("components.ux.use-cases.integration.item-4")
];

@translate("digital-platform")
export default class KumuluzUxPage extends Component {

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
            <div className="km-kumuluz-ux-page">
                <Helmet title={t("components.ux.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-ux"} products={digitalPlatformProducts(t)}/>

                <CompHeaderComponent image={uxLogo} title={"Kumuluz<strong>Ux</strong>"}
                    items={[
                        t("components.ux.header.items.item-1"),
                        t("components.ux.header.items.item-2"),
                        t("components.ux.header.items.item-3")
                    ]}
                    subtitle={t("components.ux.header.subtitle")}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.ux.about.about.title"),
                    section2: t("components.ux.about.features.title"),
                    section3: t("components.ux.about.info.title")
                }}
                section1={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-5">
                                <h3>{t("components.ux.about.about.left.title")}</h3>
                                <p dangerouslySetInnerHTML={{__html: t("components.ux.about.about.left.para")}} />
                            </div>
                            <div className="col-10 col-lg-5">
                                <div className="grey-box">
                                    <h4>{t("components.ux.about.about.right.title")}</h4>
                                    <CollapsableListComponent colorClazz={"color-ux"} chevron={chevron}
                                        chevronDown={chevronDown} items={[
                                            {
                                                title: t("components.ux.about.about.right.item-1.title"),
                                                desc: t("components.ux.about.about.right.item-1.desc")
                                            },
                                            {
                                                title: t("components.ux.about.about.right.item-2.title"),
                                                desc: t("components.ux.about.about.right.item-2.desc")
                                            },
                                            {
                                                title: t("components.ux.about.about.right.item-3.title"),
                                                desc: t("components.ux.about.about.right.item-3.desc")
                                            }
                                        ]}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                section2={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 features">
                                {features(t).map((feat, index) => (
                                    <p key={index} className="checkbox orange">{feat}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                section3={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10">
                                <div className="grey-box contact-info">
                                    <ContactForm light={false}/>
                                </div>
                            </div>
                        </div>
                    </div>
                }/>

                <CompMottoComponent title={t("components.ux.motto.title")}
                    subtitle={t("components.ux.motto.subtitle")}/>

                <CompBenefitsComponent benefits={benefits(t)} title={t("components.ux.benefits.title")}
                    subtitle={t("components.ux.benefits.subtitle")}
                    afterText={`<strong class="color-ux">${t("components.ux.benefits.after-text.colored")}</strong> ${t("components.ux.benefits.after-text.text")}`}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.ux.use-cases.components.title"),
                    section2: t("components.ux.use-cases.integration.title")
                }}
                section1={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.ux.use-cases.components.subtitle")}</h3>
                                <CheckboxListComponent items={components(t)} checkboxColor={"#eed25d"}/>
                            </div>
                        </div>
                    </div>
                }
                section2={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.integration.use-cases.migration.subtitle")}</h3>
                                <CheckboxListComponent items={integrations(t)} checkboxColor={"#eed25d"}/>
                            </div>
                        </div>
                    </div>
                }/>

                <div className="divider-container">
                    <div className="divider"/>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">
                            <h3 className="prod-grid-title">{t("components.ux.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>
            </div>
        );
    }
}
