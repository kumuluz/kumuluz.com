import React, {Component} from "react";
import PropType from "prop-types";
import Helmet from "react-helmet";
import i18n from "./i18n";
import {translate} from "react-i18next";

import "./layout.scss";
import {NavbarComponent} from "../components/shared/navbar/navbar.component";
import favicon from "./favicon.ico";
import {CookiesComponent} from "../components/shared/export.shared.components";


@translate()
export default class PageLayout extends Component {

    static propTypes = {
        children: PropType.func,
        t: PropType.func
    };

    constructor(props) {
        super(props);
        translate.setI18n(i18n);
    }

    render() {
        const {children} = this.props;

        return (
            <div className="km-page-layout">
                <NavbarComponent/>
                <Helmet>
                    <link rel="shortcut icon" href={favicon} type="image/x-icon" />
                    <link rel="icon" href={favicon} type="image/x-icon" />
                </Helmet>
                <div className="km-layout-content">
                    {children()}
                </div>
                <CookiesComponent/>
            </div>
        );
    }
}
