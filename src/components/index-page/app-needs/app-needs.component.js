import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import {push} from "gatsby-link";

import {applicationNeeds} from "../../../content/index-page/application-needs";
import "./app-needs.component.scss";
import checkmarkImage from "../../../assets/images/checkMark.svg";


// eslint-disable-next-line no-unused-vars
const learnMoreLinks = (t) => [
    {
        isTitle: true,
        title: t("bapis.learn-more.title")
    },
    {
        title: t("bapis.learn-more.item-1"),
        url: "",
        external: false
    },
    {
        isBlock: true
    },
    {
        title: t("bapis.learn-more.item-2"),
        url: "",
        external: false
    },
    {
        isBlock: true
    },
    {
        title: t("bapis.learn-more.item-2"),
        url: "",
        external: false
    },
    {
        isBlock: true
    },
    {
        title: t("bapis.learn-more.item-3"),
        url: "",
        external: false
    },
    {
        isBlock: true
    },
    {
        title: t("bapis.learn-more.item-4"),
        url: "",
        external: false
    }
];

@translate("index")
export class AppNeedsComponent extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
    }

    renderBox(item, index) {
        if (item.isButton) {
            return (
                <span className="btn btn-primary" key={index} onClick={() => push("/business-apis")}>
                    {item.title}
                </span>
            );
        } else {
            return (
                <span key={index}>
                    <img src={checkmarkImage}/>
                    {item.title}
                </span>
            );
        }
    }

    renderLink(link, index) {
        if (link.isTitle) {
            return (
                <span key={index} className="title">{link.title}</span>
            );
        } else if (link.isBlock) {
            return (
                <span key={index} className="bullet" />
            );
        } else {
            return (
                <span key={index} className="link">
                    {link.title}
                </span>
            );
        }
    }

    render() {
        const {t} = this.props;

        return (
            <div className="col-10 col-lg-8 col-xl-6 km-app-needs-component">
                <div className="subtitle">
                    {t("bapis.needs.title")}
                </div>
                <div>
                    <div className="needs-row">
                        {applicationNeeds(t).row1.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row2.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row3.map((item, index) => this.renderBox(item, index))}
                    </div>
                    <div className="needs-row">
                        {applicationNeeds(t).row4.map((item, index) => this.renderBox(item, index))}
                    </div>
                </div>
                {/*<div className="learn-more-section">*/}
                {/*{learnMoreLinks(t).map((link, index) => {*/}
                {/*return this.renderLink(link, index)*/}
                {/*})}*/}
                {/*</div>*/}
            </div>
        );
    }
}
