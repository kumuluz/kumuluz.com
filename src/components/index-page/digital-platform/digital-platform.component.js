import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import Link, {push} from "gatsby-link";

import "./digital-platform.component.scss";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";

@translate("index")
export class DigitalPlatformComponent extends Component {

    static propTypes = {
        t: PropType.func,
        i18n: PropType.object,
        noHeader: PropType.bool,
        noButton: PropType.bool
    };

    constructor(props) {
        super(props);
        this.state = {
            lang: props.i18n.language
        };
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ ...this.state, lang: nextProps.i18n.language });
    }

    renderLink(item) {
        if (item.external) {
            return (
                <a href={item.url} target="_blank" rel="noreferrer noopener">
                    {item.title}
                </a>
            );
        } else {
            return (
                <Link to={item.url}>
                    {item.title}
                </Link>
            );
        }
    }

    render() {
        const {t, noHeader, noButton} = this.props;


        const numOfRows = Math.ceil(digitalPlatformProducts(t).length / 3);
        const indexOfItemInBeforelastRow = (numOfRows - 1) * 3 - 1;

        const showHeader = noHeader === undefined ? true : !noHeader;
        let showButton = noButton === undefined ? true : !noButton;
        const isUntranslated = this.state.lang === "sl" || this.state.lang === "de";
        if (showButton && isUntranslated) {
            showButton = false;
        }

        return (
            <div className="km-digital-platform-component">
                {showHeader ?
                    <div className="title">
                        <h1>{t("digital-platform.title")}</h1>
                    </div>
                    : null}
                {showHeader ?
                    <div className="subtitle">
                        <p>{t("digital-platform.subtitle")}</p>
                    </div>
                    : null}

                <div className="grid">
                    {digitalPlatformProducts(t).map((item, index) => (
                        <div className={index > indexOfItemInBeforelastRow ? "last-row grid-item" : "grid-item"} key={index}>
                            <div className="title">
                                {this.renderLink(item)}
                            </div>
                            <div className="desc">{item.description}</div>
                        </div>
                    ))}
                </div>
                {showButton ?
                    <div className="button-area">
                        <button onClick={() => push("/digital-platform")} className="btn btn-primary">{t("header.tiles.buttons.learn-more")}</button>
                    </div>
                    : null}
            </div>
        );
    }
}
