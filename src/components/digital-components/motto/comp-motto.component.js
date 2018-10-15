import React, {Component} from "react";
import PropType from "prop-types";

import "./comp-motto.component.scss";
import {ArrowDividerComponent} from "../../shared/export.shared.components";

export class CompMottoComponent extends Component {

    static propTypes = {
        title: PropType.string,
        subtitle: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title, subtitle, image} = this.props;

        return (
            <div className="container-fluid km-comp-motto-component">
                <div className="row align-items-center flex-column">
                    <div className="col-10 p-0">
                        <ArrowDividerComponent corner={1} theme="white"/>
                    </div>
                    <div className="line"/>
                    <div className="col-9 col-xl-6">
                        <h2 className="text-center">{title}</h2>
                    </div>
                    <div className="col-9 col-xl-6">
                        <p className="text-center">{subtitle}</p>
                    </div>
                    {image && (
                        <div className="col-9 col-xl-6 justify-content-center d-flex">
                            <img src={image}/>
                        </div>
                    )}
                </div>
            </div>
        );
    }
}
