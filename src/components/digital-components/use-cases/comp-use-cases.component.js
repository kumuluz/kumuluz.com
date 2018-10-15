import React, {Component} from "react";
import PropType from "prop-types";

import "./comp-use-cases.component.scss";

export class CompUseCasesComponent extends Component {

    static propTypes = {
        navbar: PropType.object,
        section1: PropType.object,
        section2: PropType.object,
        section3: PropType.object,
        section4: PropType.object
    };

    constructor(props) {
        super(props);
        this.changePage = this.changePage.bind(this);
        this.state = {
            activePage: ""
        }
    }

    componentDidMount() {
        this.setState({
            activePage: "section1"
        });
    }

    changePage(newPage) {
        this.setState({
            activePage: newPage
        });
    }

    render() {
        const {section1, section2, section3, section4, navbar, expandNavbar} = this.props;
        const showSection1 = this.state.activePage === "section1";
        const showSection2 = this.state.activePage === "section2";
        const showSection3 = this.state.activePage === "section3";
        const showSection4 = this.state.activePage === "section4";

        const section4IsUndefinedStyle = navbar.section4 ? {} : {display: "none"};
        const section3IsUndefinedStyle = navbar.section3 ? {} : {display: "none"};

        const only2Sections = !navbar.section3 && !navbar.section4;
        const twoSectionsWidthStyle = only2Sections ? {width: "30%"} : {};

        return (
            <div className="km-comp-use-cases-component">
                <div className="container-fluid">
                    {/************* NAVIGATION *************/}
                    <div className="row justify-content-center">
                        <div className={"col-9 menu " + (expandNavbar ? "col-xl-8" : "col-xl-6")}>
                            <div className="menu-item" style={twoSectionsWidthStyle} onClick={() => this.changePage("section1")}>
                                <span>
                                    <span>
                                        {navbar.section1}
                                    </span>
                                    <span className={"underline" + (showSection1 ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" style={twoSectionsWidthStyle} onClick={() => this.changePage("section2")}>
                                <span>
                                    <span>
                                        {navbar.section2}
                                    </span>
                                    <span className={"underline" + (showSection2 ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" style={section3IsUndefinedStyle} onClick={() => this.changePage("section3")}>
                                <span>
                                    <span>
                                        {navbar.section3}
                                    </span>
                                    <span className={"underline" + (showSection3 ? " active" : "")}/>
                                </span>
                            </div>
                            <div className="menu-item" style={section4IsUndefinedStyle} onClick={() => this.changePage("section4")}>
                                <span>
                                    <span>
                                        {navbar.section4}
                                    </span>
                                    <span className={"underline" + (showSection4 ? " active" : "")}/>
                                </span>
                            </div>
                        </div>
                    </div>
                    {/************** SECTION1 *****************/}
                    <div className="row justify-content-center section"
                         style={showSection1 ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {section1}
                        </div>
                    </div>
                    {/************ SECTION2 ***********/}
                    <div className="row justify-content-center section"
                         style={showSection2 ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {section2}
                        </div>
                    </div>
                    {/*************** SECTION3 *****************/}
                    <div className="row justify-content-center section"
                         style={showSection3 ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {section3}
                        </div>
                    </div>
                    {/*************** SECTION4 *****************/}
                    <div className="row justify-content-center section"
                         style={showSection4 ? {display: "flex"} : {display: "none"}}>
                        <div className="col-9 col-xl-6">
                            {section4}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
