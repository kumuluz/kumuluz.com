import React, {Component} from "react";
import Link from "gatsby-link";
import PropType from "prop-types";
import {translate} from "react-i18next";

import "./comp-navigation.component.scss";

@translate("digital-platform")
export class CompNavigationComponent extends Component {

    static propTypes = {
        t: PropType.func,
        activeTab: PropType.string,
        products: PropType.array
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {products, activeTab} = this.props;

        return (
            <div className="km-comp-navigation-component">
                {products.map((prod, index) => {
                    const isActive = activeTab === prod.colorClazz;
                    const clazz = "bord-bot" + (isActive ? ` back${prod.colorClazz}` : "");

                    if (prod.external) {
                        return (
                            <div className="navigation-item" key={index}>
                                <a href={prod.url} target="_blank">
                                    <div>{prod.title}</div>
                                    <div className={clazz}/>
                                </a>
                            </div>
                        )
                    }
                    return (
                        <div className="navigation-item" key={index} >
                            <Link to={prod.url}>
                                <div>{prod.title}</div>
                                <div className={clazz}/>
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}
