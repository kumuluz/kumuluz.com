import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import {
    CompBenefitsComponent,
    CompHeaderComponent, CompMottoComponent,
    CompNavigationComponent, CompProductGridComponent, CompUseCasesComponent
} from "../../../components/digital-components/export";
import "./kumuluz-integration-page.scss";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import integrationLogo from "../../../assets/images/digital-platform/integration.svg";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-integration.svg";
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-integration-down.svg";
import {CollapsableListComponent} from "../../../components/shared/export.shared.components";
import {ContactForm} from "../../../components/shared/contact-form/contact-form";
import {Footer} from "../../../components/shared/footer/footer";

const features = t => [
    t("components.integration.about.features.item-1"),
    t("components.integration.about.features.item-2"),
    t("components.integration.about.features.item-3"),
    t("components.integration.about.features.item-4"),
    t("components.integration.about.features.item-5"),
    t("components.integration.about.features.item-6"),
];

import transitionCloudImage from "../../../assets/images/transitionCloud.svg";
import efficiencyImage from "../../../assets/images/efficiency.svg";
import deployDatacenterImage from "../../../assets/images/deployDatacenter.svg";
import productivityIncreaseImage from "../../../assets/images/productivityIncreas.svg";
import digitalPlatformImage from "../../../assets/images/digitalPlatform.svg";
import forWhoImage from "../../../assets/images/forWho.svg";
import {Helmet} from "react-helmet";

const benefits = t => [
    {
        icon: transitionCloudImage,
        title: t("components.integration.benefits.items.item-1.title"),
        description: t("components.integration.benefits.items.item-1.desc")
    },
    {
        icon: efficiencyImage,
        title: t("components.integration.benefits.items.item-2.title"),
        description: t("components.integration.benefits.items.item-2.desc")
    },
    {
        icon: deployDatacenterImage,
        title: t("components.integration.benefits.items.item-3.title"),
        description: t("components.integration.benefits.items.item-3.desc")
    },
    {
        icon: productivityIncreaseImage,
        title: t("components.integration.benefits.items.item-4.title"),
        description: t("components.integration.benefits.items.item-4.desc")
    },
    {
        icon: digitalPlatformImage,
        title: t("components.integration.benefits.items.item-5.title"),
        description: t("components.integration.benefits.items.item-5.desc")
    },
    {
        icon: forWhoImage,
        title: t("components.integration.benefits.items.item-6.title"),
        description: t("components.integration.benefits.items.item-6.desc")
    }
];

const integrations = t => [
    t("components.integration.use-cases.integration.item-1"),
    t("components.integration.use-cases.integration.item-2")
];

const migrations = t => [
    t("components.integration.use-cases.migration.item-1"),
    t("components.integration.use-cases.migration.item-2")
];

const management = t => [
    t("components.integration.use-cases.management.item-1"),
    t("components.integration.use-cases.management.item-2")
];

@translate("digital-platform")
export default class KumuluzIntegrationPage extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kumuluz-integration-page">
                <Helmet title={t("components.integration.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-integration"} products={digitalPlatformProducts(t)}/>
                <CompHeaderComponent image={integrationLogo} title={"Kumuluz<strong>Integration</strong>"}
                    items={[
                        t("components.integration.header.items.item-1"),
                        t("components.integration.header.items.item-2"),
                        t("components.integration.header.items.item-3")
                    ]}
                    subtitle={t("components.integration.header.subtitle")}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.integration.about.about.title"),
                    section2: t("components.integration.about.features.title"),
                    section3: t("components.integration.about.info.title")
                }}
                section1={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 col-lg-5">
                                <h3>{t("components.integration.about.about.left.title")}</h3>
                                <p>
                                        Kumuluz<span className="color-integration">Integration</span>
                                        &#160;{t("components.integration.about.about.left.para-1")}
                                </p>
                                <p>{t("components.integration.about.about.left.para-2")}</p>
                            </div>
                            <div className="col-10 col-lg-5">
                                <div className="grey-box">
                                    <h4>{t("components.integration.about.about.right.title")}</h4>
                                    <CollapsableListComponent colorClazz={"color-integration"} chevron={chevron}
                                        chevronDown={chevronDown} items={[
                                            {
                                                title: t("components.integration.about.about.right.item-1.title"),
                                                desc: t("components.integration.about.about.right.item-1.desc")
                                            },
                                            {
                                                title: t("components.integration.about.about.right.item-2.title"),
                                                desc: t("components.integration.about.about.right.item-2.desc")
                                            },
                                            {
                                                title: t("components.integration.about.about.right.item-3.title"),
                                                desc: t("components.integration.about.about.right.item-3.desc")
                                            },
                                            {
                                                title: t("components.integration.about.about.right.item-4.title"),
                                                desc: t("components.integration.about.about.right.item-4.desc")
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

                <CompMottoComponent title={t("components.integration.motto.title")}
                    subtitle={t("components.integration.motto.subtitle")}/>

                <CompBenefitsComponent benefits={benefits(t)} title={t("components.integration.benefits.title")}
                    subtitle={t("components.integration.benefits.subtitle")}
                    afterText={`<strong class="color-integration">${t("components.integration.benefits.after-text.colored")}</strong> ${t("components.integration.benefits.after-text.text")}`}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.integration.use-cases.integration.title"),
                    section2: t("components.integration.use-cases.migration.title"),
                    section3: t("components.integration.use-cases.management.title")
                }}
                section1={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.integration.use-cases.integration.subtitle")}</h3>
                                {integrations(t).map((feat, index) => (
                                    <p key={index} className="checkbox orange">{feat}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                section2={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.integration.use-cases.migration.subtitle")}</h3>
                                {migrations(t).map((feat, index) => (
                                    <p key={index} className="checkbox orange">{feat}</p>
                                ))}
                            </div>
                        </div>
                    </div>
                }
                section3={
                    <div className="container-fluid">
                        <div className="row justify-content-center">
                            <div className="col-10 integrations">
                                <h3>{t("components.integration.use-cases.management.subtitle")}</h3>
                                {management(t).map((feat, index) => (
                                    <p key={index} className="checkbox orange">{feat}</p>
                                ))}
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
                            <h3 className="prod-grid-title">{t("components.integration.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>
            </div>
        );
    }
}
