import React, {Component} from "react";
import PropType from "prop-types";

import "./api-how-it-works.component.scss";
import {ArrowDividerComponent} from "../../shared/arrow-divider/arrow-divider.component";

export class ApiHowItWorksComponent extends Component {

    static propTypes = {
        title: PropType.string,
        subtitle: PropType.string,
        children: PropType.oneOfType([
            PropType.object,
            PropType.array
        ]),
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title, subtitle, children} = this.props;

        return (
            <div className="km-how-it-works-component">
                <div className="container-fluid blue-section">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-6">

                            <div className="row align-items-center flex-column">
                                <div className="col-9 col-lg-5">
                                    <h2 className="text-center">{title}</h2>
                                </div>
                                {subtitle && (
                                    <div className="col-9 col-lg-5 mb-5">
                                        <p className="text-center">{subtitle}</p>
                                    </div>
                                )}
                                <div className="col-9 justify-content-center">
                                    {children}
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme="white" corner={4}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
