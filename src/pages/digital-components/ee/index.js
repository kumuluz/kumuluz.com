import React, {Component} from "react";
import {translate} from "react-i18next";
import {Helmet} from "react-helmet";

import "./kumuluz-ee-page.scss";
import eeLogo from "../../../assets/images/digital-platform/ee.svg";
import mpLogo from "../../../assets/images/digital-platform/ee-mp.png";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-ee.svg"
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-ee-down.svg"
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";
import {CompNavigationComponent} from "../../../components/digital-components/navigation/comp-navigation.component";
import {CompHeaderComponent} from "../../../components/digital-components/header/comp-header.component";
import {CollapsableListComponent} from "../../../components/shared/collapsable-list/collapsable-list.component";
import {ContactForm} from "../../../components/shared/contact-form/contact-form";
import {CompUseCasesComponent} from "../../../components/digital-components/use-cases/comp-use-cases.component";
import {CheckboxListComponent} from "../../../components/shared/export.shared.components";
import {CompMottoComponent} from "../../../components/digital-components/motto/comp-motto.component";
import {CompBenefitsComponent} from "../../../components/digital-components/benefits/comp-benefits.component";
import transitionCloudImage from "../../../assets/images/transitionCloud.svg";
import efficiencyImage from "../../../assets/images/efficiency.svg";
import businessApisImage from "../../../assets/images/businessApis.svg";
import productivityIncreaseImage from "../../../assets/images/productivityIncreas.svg";
import digitalPlatformImage from "../../../assets/images/digitalPlatform.svg";
import forWhoImage from "../../../assets/images/forWho.svg";
import lockinImage from "../../../assets/images/lockIn.svg";
import strategicAdvantageImage from "../../../assets/images/strategicAdv.svg";
import knowledgeImage from "../../../assets/images/knowledge.svg";
import {CompProductGridComponent} from "../../../components/digital-components/product-grid/comp-product-grid.component";
import {Footer} from "../../../components/shared/footer/footer";

const quotes = t => {
    return [
        {
            quote: t("components.ee.about.customers.item-1.quote"),
            author: "Reza Rahman",
            authorTitle: t("components.ee.about.customers.item-1.author-title")
        },
        {
            quote: t("components.ee.about.customers.item-2.quote"),
            author: "Arun Gupta",
            authorTitle: t("components.ee.about.customers.item-2.author-title")
        },
        {
            quote: t("components.ee.about.customers.item-3.quote"),
            author: "Martijn Verburg",
            authorTitle: t("components.ee.about.customers.item-3.author-title")
        },
        {
            quote: t("components.ee.about.customers.item-4.quote"),
            author: "Harshad Oak",
            authorTitle: t("components.ee.about.customers.item-4.author-title")
        }
    ];
};

const benefits = t => {
    return [
        {
            icon: businessApisImage,
            title: t("components.ee.benefits.items.item-1.title"),
            description: t("components.ee.benefits.items.item-1.desc")
        },
        {
            icon: knowledgeImage,
            title: t("components.ee.benefits.items.item-2.title"),
            description: t("components.ee.benefits.items.item-2.desc")
        },
        {
            icon: efficiencyImage,
            title: t("components.ee.benefits.items.item-3.title"),
            description: t("components.ee.benefits.items.item-3.desc")
        },
        {
            icon: productivityIncreaseImage,
            title: t("components.ee.benefits.items.item-4.title"),
            description: t("components.ee.benefits.items.item-4.desc")
        },
        {
            icon: forWhoImage,
            title: t("components.ee.benefits.items.item-5.title"),
            description: t("components.ee.benefits.items.item-5.desc")
        },
        {
            icon: lockinImage,
            title: t("components.ee.benefits.items.item-6.title"),
            description: t("components.ee.benefits.items.item-6.desc")
        },
        {
            icon: digitalPlatformImage,
            title: t("components.ee.benefits.items.item-7.title"),
            description: t("components.ee.benefits.items.item-7.desc")
        },
        {
            icon: transitionCloudImage,
            title: t("components.ee.benefits.items.item-8.title"),
            description: t("components.ee.benefits.items.item-8.desc")
        },
        {
            icon: strategicAdvantageImage,
            title: t("components.ee.benefits.items.item-9.title"),
            description: t("components.ee.benefits.items.item-9.desc")
        }
    ];
};

const migrations = t => {
    return [
        {
            title: t("components.ee.capabilities.migration.item-1.title"),
            desc: t("components.ee.capabilities.migration.item-1.desc")
        },
        {
            title: t("components.ee.capabilities.migration.item-2.title"),
            desc: t("components.ee.capabilities.migration.item-2.desc")
        },
        {
            title: t("components.ee.capabilities.migration.item-3.title"),
            desc: t("components.ee.capabilities.migration.item-3.desc")
        },
        {
            title: t("components.ee.capabilities.migration.item-4.title"),
            desc: t("components.ee.capabilities.migration.item-4.desc")
        }
    ];
};

const dockerSupport = t => {
    return [
        {
            title: t("components.ee.capabilities.docker.item-1.title"),
            desc: t("components.ee.capabilities.docker.item-1.desc")
        },
        {
            title: t("components.ee.capabilities.docker.item-2.title"),
            desc: t("components.ee.capabilities.docker.item-2.desc")
        },
        {
            title: t("components.ee.capabilities.docker.item-3.title"),
            desc: t("components.ee.capabilities.docker.item-3.desc")
        },
        {
            title: t("components.ee.capabilities.docker.item-4.title"),
            desc: t("components.ee.capabilities.docker.item-4.desc")
        }
    ];
};

const framework = t => {
    return [
        t("components.ee.capabilities.framework.item-1"),
        t("components.ee.capabilities.framework.item-2"),
        t("components.ee.capabilities.framework.item-3"),
        t("components.ee.capabilities.framework.item-4"),
        t("components.ee.capabilities.framework.item-5"),
        t("components.ee.capabilities.framework.item-6"),
        t("components.ee.capabilities.framework.item-7"),
        t("components.ee.capabilities.framework.item-8"),
        t("components.ee.capabilities.framework.item-9"),
        t("components.ee.capabilities.framework.item-10"),
        t("components.ee.capabilities.framework.item-11"),
        t("components.ee.capabilities.framework.item-12"),
        t("components.ee.capabilities.framework.item-13"),
        t("components.ee.capabilities.framework.item-14")

    ];
};

@translate("digital-platform")
export default class KumuluzEEPage extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-kumuluz-ee-page">
                <Helmet title={t("components.ee.title") + " - Kumuluz"}/>
                <CompNavigationComponent activeTab={"color-ee"} products={digitalPlatformProducts(t)}/>
                <CompHeaderComponent image={eeLogo}
                     title={"<a href='https://ee.kumuluz.com' target='_blank'>Kumuluz<strong>EE</strong></a>"} url={"https://ee.kumuluz.com"}
                                     items={[
                                         t("components.ee.header.items.item-1"),
                                         t("components.ee.header.items.item-2"),
                                         t("components.ee.header.items.item-3")
                                     ]}
                                     subtitle={t("components.ee.header.subtitle")}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.ee.about.about.title"),
                    section2: t("components.ee.about.features.title"),
                    section3: t("components.ee.about.customers.title"),
                    section4: t("components.ee.about.info.title")
                }}
                                       section1={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10 col-lg-5">
                                                       <h3>{t("components.ee.about.about.left.title")}</h3>
                                                       <p>
                                                           Kumuluz<span className="color-ee">EE</span>
                                                           &#160;{t("components.ee.about.about.left.para-1")}
                                                       </p>
                                                       <p>{t("components.ee.about.about.left.para-2")}</p>
                                                   </div>
                                                   <div className="col-10 col-lg-5">
                                                       <div className="grey-box">
                                                           <h4>{t("components.ee.about.about.right.title")}</h4>
                                                           <CollapsableListComponent colorClazz={"color-ee"}
                                                                                     chevron={chevron}
                                                                                     chevronDown={chevronDown} items={[
                                                               {
                                                                   title: t("components.ee.about.about.right.item-1.title"),
                                                                   desc: t("components.ee.about.about.right.item-1.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.about.right.item-2.title"),
                                                                   desc: t("components.ee.about.about.right.item-2.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.about.right.item-3.title"),
                                                                   desc: t("components.ee.about.about.right.item-3.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.about.right.item-4.title"),
                                                                   desc: t("components.ee.about.about.right.item-4.desc")
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
                                                   <div className="col-10 col-lg-5">
                                                       <p>{t("components.ee.about.features.left-para")}</p>
                                                   </div>
                                                   <div className="col-10 col-lg-5">
                                                       <div className="grey-box">
                                                           <h4>{t("components.ee.about.features.right.title")}</h4>
                                                           <CollapsableListComponent colorClazz={"color-ee"}
                                                                                     chevron={chevron}
                                                                                     chevronDown={chevronDown} items={[
                                                               {
                                                                   title: t("components.ee.about.features.right.item-1.title"),
                                                                   desc: t("components.ee.about.features.right.item-1.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.features.right.item-2.title"),
                                                                   desc: t("components.ee.about.features.right.item-2.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.features.right.item-3.title"),
                                                                   desc: t("components.ee.about.features.right.item-3.desc")
                                                               },
                                                               {
                                                                   title: t("components.ee.about.features.right.item-4.title"),
                                                                   desc: t("components.ee.about.features.right.item-4.desc")
                                                               }
                                                           ]}/>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       }
                                       section3={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   {quotes(t).map((quote, index) => (
                                                       <div className="col-10 mb-4" key={index}>
                                                           <div className="quote">
                                                               {quote.quote}
                                                           </div>
                                                           <div className="quote-author">
                                                               <span>{quote.author}</span>,
                                                               <span className="author-title">{quote.authorTitle}</span>
                                                           </div>
                                                       </div>
                                                   ))}
                                               </div>

                                           </div>
                                       }
                                       section4={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10">
                                                       <div className="row">
                                                           <div className="col-10 col-lg-5">
                                                               <div className="grey-box mb-3">
                                                                   <h1>{t("components.ee.about.info.left.title")}</h1>
                                                                   <CheckboxListComponent
                                                                       title={t("components.ee.about.info.left.subtitle")}
                                                                       items={[
                                                                           t("components.ee.about.info.left.item-1"),
                                                                           t("components.ee.about.info.left.item-2")
                                                                       ]}/>
                                                               </div>
                                                               <div className="grey-box contact-info">
                                                                   <ContactForm light={false}/>
                                                               </div>
                                                           </div>
                                                           <div className="col-10 col-lg-5">
                                                               <div className="grey-box">
                                                                   <CheckboxListComponent
                                                                       title={t("components.ee.about.info.right.title")}
                                                                       items={[
                                                                           t("components.ee.about.info.right.item-1"),
                                                                           t("components.ee.about.info.right.item-2"),
                                                                           t("components.ee.about.info.right.item-3"),
                                                                           t("components.ee.about.info.right.item-4"),
                                                                           t("components.ee.about.info.right.item-5"),
                                                                           t("components.ee.about.info.right.item-6"),
                                                                           t("components.ee.about.info.right.item-7"),
                                                                           t("components.ee.about.info.right.item-8"),
                                                                           t("components.ee.about.info.right.item-9"),
                                                                           t("components.ee.about.info.right.item-10")
                                                                       ]}/>
                                                               </div>
                                                           </div>
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       }/>

                <CompMottoComponent title={t("components.ee.motto.title")}
                                    subtitle={t("components.ee.motto.subtitle")}
                                    image={mpLogo}
                />

                <CompBenefitsComponent benefits={benefits(t)} title={t("components.ee.benefits.title")}
                                       subtitle={t("components.ee.benefits.subtitle")}
                                       afterText={`<strong class="color-ee">${t("components.ee.benefits.after-text.colored")}</strong> ${t("components.ee.benefits.after-text.text")}`}/>

                <CompUseCasesComponent navbar={{
                    section1: t("components.ee.capabilities.comparison.title"),
                    section2: t("components.ee.capabilities.docker.title"),
                    section3: t("components.ee.capabilities.framework.title"),
                    section4: t("components.ee.capabilities.migration.title")
                }} expandNavbar={true}
                                       section1={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10">
                                                       <h3>{t("components.ee.capabilities.comparison.subtitle")}</h3>
                                                       <p>{t("components.ee.capabilities.comparison.para-1")}</p>
                                                       <p>
                                                           {t("components.ee.capabilities.comparison.para-2.before")}
                                                           {" "}<a href={"https://www.linkedin.com/pulse/java-ee-microservices-why-start-up-time-size-matters-matjaz-b-juric/"} target="_blank">
                                                               {t("components.ee.capabilities.comparison.para-2.link")}
                                                           </a>
                                                           {" "}
                                                           {t("components.ee.capabilities.comparison.para-2.after")}
                                                       </p>
                                                       <p>{t("components.ee.capabilities.comparison.para-3")}</p>
                                                       <table className="table mt-4">
                                                           <thead>
                                                               <tr>
                                                                   <th>Vendor</th>
                                                                   <th>Microservice</th>
                                                                   <th>JAR size (MB)</th>
                                                                   <th>Start up Time (sec)</th>
                                                               </tr>
                                                           </thead>
                                                           <tbody>
                                                               <tr>
                                                                   <td>WebSphere Liberty</td>
                                                                   <td>Session Voting</td>
                                                                   <td>35</td>
                                                                   <td>8</td>
                                                               </tr>
                                                               <tr>
                                                                   <td>Payara</td>
                                                                   <td>Session Schedule</td>
                                                                   <td>33</td>
                                                                   <td>8</td>
                                                               </tr>
                                                               <tr>
                                                                   <td>KumuluzEE</td>
                                                                   <td>Session Schedule</td>
                                                                   <td>11</td>
                                                                   <td>3</td>
                                                               </tr>
                                                           </tbody>
                                                       </table>
                                                   </div>
                                               </div>
                                           </div>
                                       }
                                       section2={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10">
                                                       <h2>{t("components.ee.capabilities.docker.subtitle")}</h2>
                                                       <div className="features">
                                                           {dockerSupport(t).map((feat, index) => (
                                                               <p key={index} className="checkbox multi-check orange">
                                                                   <strong>{feat.title}</strong>
                                                                   <span>{feat.desc}</span>
                                                               </p>
                                                           ))}
                                                       </div>
                                                   </div>
                                               </div>
                                           </div>
                                       }
                                       section3={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10 features">
                                                       {framework(t).map((feat, index) => (
                                                           <p key={index} className="checkbox orange">{feat}</p>
                                                       ))}
                                                   </div>
                                               </div>
                                           </div>
                                       }
                                       section4={
                                           <div className="container-fluid">
                                               <div className="row justify-content-center">
                                                   <div className="col-10">
                                                       <h2>{t("components.ee.capabilities.migration.subtitle")}</h2>
                                                       <div className="features">
                                                           {migrations(t).map((feat, index) => (
                                                               <p key={index} className="checkbox multi-check orange">
                                                                   <strong>{feat.title}</strong>
                                                                   <span>{feat.desc}</span>
                                                               </p>
                                                           ))}
                                                       </div>
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
                            <h3 className="prod-grid-title">{t("components.ee.prod-grid")}</h3>
                        </div>
                    </div>
                </div>

                <CompProductGridComponent/>

                <Footer contact/>
            </div>
        );
    }
}
