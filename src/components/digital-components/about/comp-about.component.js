import React, {Component} from "react";
import PropType from "prop-types";

import "./comp-about.component.scss";
import {CollapsableListComponent} from "../../shared/export.shared.components";
import chevron from "../../../assets/images/digital-platform/chevrons/chevron-api.svg";
import chevronDown from "../../../assets/images/digital-platform/chevrons/chevron-api-down.svg";

export class CompAboutComponent extends Component {

    static propTypes = {
        about: PropType.object,
        aboutTitle: PropType.string,
        aboutBoxTitle: PropType.string,
        aboutItems: PropType.array,
        features: PropType.array,
        featuresTitle: PropType.string,
        customers: PropType.object,
        customersTitle: PropType.string,
        demo: PropType.object,
        demoTitle: PropType.string
    };

    constructor(props) {
        super(props);
        this.pages = {};
        this.changePage = this.changePage.bind(this);

        this.state = {
            activePage: ""
        };
    }

    componentDidMount() {
        this.setState({
            activePage: "about"
        });
    }

    changePage(newPage) {
        this.setState({
            activePage: newPage
        });
    }

    render() {
        const {about, features, customers, demo, aboutTitle,
            customersTitle, demoTitle, featuresTitle, aboutItems, aboutBoxTitle} = this.props;
        const showAbout = this.state.activePage === "about";
        const showFeatures = this.state.activePage === "features";
        const showCustomers = this.state.activePage === "customers";
        const showDemo = this.state.activePage === "demo";

        return (
            <div className="km-comp-about-component">
                <div className="container-fluid">
                    {/************* NAVIGATION *************/}
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6 menu">
                            <div className="menu-item" onClick={() => this.changePage("about")}>
                                <span>
                                    <span>
                                        {aboutTitle}
                                    </span>
                                    <span className={"underline" + (showAbout ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" onClick={() => this.changePage("features")}>
                                <span>
                                    <span>
                                        {featuresTitle}
                                    </span>
                                    <span className={"underline" + (showFeatures ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" onClick={() => this.changePage("customers")}>
                                <span>
                                    <span>
                                        {customersTitle}
                                    </span>
                                    <span className={"underline" + (showCustomers ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" onClick={() => this.changePage("demo")}>
                                <span>
                                    <span>
                                        {demoTitle}
                                    </span>
                                    <span className={"underline" + (showDemo ? " active" : "")}/>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/************** ABOUT *****************/}
                    <div className="row justify-content-center about"
                        style={showAbout ? {display: "flex"} : {display: "none"}}
                        ref={ref => this.pages.about = ref}>
                        <div className="col-9 col-xl-6">

                            <div className="row">
                                <div className="col-10 col-lg-5">
                                    <div>
                                        <h3>{about.title}</h3>
                                    </div>
                                    <div dangerouslySetInnerHTML={{__html: about.content}}/>
                                </div>
                                <div className="col-10 col-lg-5">
                                    <div className="grey-box">
                                        <p>{aboutBoxTitle}</p>
                                        <CollapsableListComponent chevron={chevron}
                                            chevronDown={chevronDown} colorClazz={"color-api"} items={aboutItems}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/************ FEATURES ***********/}
                    <div className="row justify-content-center features"
                        style={showFeatures ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {features.map((feat, index) => (
                                <p key={index} className="checkbox orange">{feat}</p>
                            ))}
                        </div>
                    </div>
                    {/*************** CUSTOMERS *****************/}
                    <div className="row justify-content-center customers"
                        style={showCustomers ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            <h4>{customers.title}</h4>
                            <div dangerouslySetInnerHTML={{__html: customers.content}}/>
                        </div>
                    </div>
                    {/*************** DEMO *****************/}
                    <div className="row justify-content-center demo"
                        style={showDemo ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {demo}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
