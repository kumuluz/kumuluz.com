import React, {Component} from "react";
import PropType from "prop-types";
import {translate} from "react-i18next";
import Link from "gatsby-link";

import "./comp-product-grid.component.scss";
import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";

@translate("index")
export class CompProductGridComponent extends Component {

    static propTypes = {
        t: PropType.func
    };

    constructor(props) {
        super(props);
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
        const {t} = this.props;
        const numOfRows = Math.ceil(digitalPlatformProducts(t).length / 3);
        const indexOfItemInBeforelastRow = (numOfRows - 1) * 3 - 1;

        return (
            <div className="km-comp-product-grid-component container-fluid">
                <div className="row justify-content-center">
                    <div className="col-9 col-lg-8 col-xl-6">
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
                    </div>
                </div>
            </div>
        );
    }
}
