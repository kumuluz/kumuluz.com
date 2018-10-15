import React, {Component} from "react";
import Link, {push} from "gatsby-link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import {translate} from "react-i18next";

import "./navbar.component.scss";
import kumuluzLogo from "../../../assets/images/kumuluz-logo.svg";
import {navbarItems} from "../../../content/navbar/navbar-items";
import {LanguageSelector} from "../language-selector/language-selector";
import {determineScreenWidth, MOBILE_MENU_VISIBLE_BELOW} from "../../../layouts/common";


@translate("shared")
export class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        const { i18n } = this.props;
        this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
        this.closeMenuOnNavigation = this.closeMenuOnNavigation.bind(this);
        this.state = {
            language: i18n.language
        };

    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            language: nextProps.i18n.language
        });
    }

    toggleMobileMenu() {
        if (this.linkMenu.clientHeight === 0) {
            this.linkMenu.style.height = `${this.linkMenu.scrollHeight}px`;
        } else {
            this.linkMenu.style.height = "0px";
        }
    }

    closeMenuOnNavigation() {
        if (this._mobileMenuIsVisible()) {
            this.linkMenu.style.height = "0px";
        }
    }

    _mobileMenuIsVisible() {
        const screenWidth = determineScreenWidth();
        return screenWidth < MOBILE_MENU_VISIBLE_BELOW;
    }

    jumpToContact() {
        const contactForm = document.getElementById("contact-us");
        if (contactForm) {
            contactForm.scrollIntoView();
        } else {
            push("/#contact-us");
        }
    }

    renderLinkItem(item) {
        if (item.isButton) {
            return (
                <span className="btn btn-primary" onClick={() => this.jumpToContact()}>
                    {item.title}
                </span>
            );
        }

        if(item.external) {
            return (
                <a href={item.url} target="_blank">{item.title}</a>
            );
        } else {
            return (
                <Link to={item.url} onClick={this.closeMenuOnNavigation}>{item.title}</Link>
            );
        }
    }

    render() {
        const {t} = this.props;
        const {language} = this.state;

        const hideIfNotTranslatedYet = (item) => {
            return item.availableLangs !== undefined && !item.availableLangs.includes(language);
        };

        const displayedItems = navbarItems(t).filter(it => !hideIfNotTranslatedYet(it));

        return (
            <div className="km-navbar-component">
                <nav>
                    <div className="brand-container">
                        <div className="brand">
                            <Link to="/" onClick={this.closeMenuOnNavigation}>
                                <img src={kumuluzLogo} />
                            </Link>
                        </div>
                        <div className="burger-menu" onClick={this.toggleMobileMenu}>
                            <FontAwesomeIcon icon={faBars} />
                        </div>
                    </div>

                    <div className="link-container" ref={ref => this.linkMenu = ref}>
                        <div className="links">
                            {displayedItems.map((item, index) =>  (
                                <div key={index} className="link-item">
                                    {this.renderLinkItem(item)}
                                </div>
                            ))}
                        </div>
                        <div className="lang-container">
                            <LanguageSelector compact dark />
                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}
