import React, {Component} from "react";
import PropType from "prop-types";

import "./comp-benefits.component.scss";
import {ArrowDividerComponent, SliderComponent} from "../../shared/export.shared.components";

export class CompBenefitsComponent extends Component {

    static propTypes = {
        benefits: PropType.array,
        title: PropType.string,
        subtitle: PropType.string,
        afterText: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {benefits, title, subtitle, afterText} = this.props;

        return (
            <div className="km-comp-benefits-component">

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={1} theme={"blue"}/>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row flex-column align-items-center">
                        <div className="col-9 col-xl-6">
                            <h2 className="text-center">{title}</h2>
                        </div>
                        <div className="col-9 col-xl-6">
                            <p className="text-center">{subtitle}</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <SliderComponent benefits={benefits}/>
                </div>
                <div className="container-fluid">
                    <div className="row flex-column align-items-center">
                        <div className="col-9 col-xl-6">
                            <p className="text-right" dangerouslySetInnerHTML={{__html: afterText}} />
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 p-0">
                            <ArrowDividerComponent corner={3} theme={"white"}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
