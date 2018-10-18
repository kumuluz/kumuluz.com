import React, {Component} from "react";
import PropType from "prop-types";

import "./api-header.component.scss";

export class ApiHeaderComponent extends Component {

    static propTypes = {
        title: PropType.string,
        paragraphs: PropType.array,
        paragraphsOrientation: PropType.string
    };

    constructor(props) {
        super(props);
    }

    getPercentage(len, orientation) {
        if (orientation === "column") {
            return "col-10 text-center mb-4";
        }

        switch(len) {
            case 1:
                return "col-10";
            case 2:
                return "col-10 col-lg-5";
            case 3:
                return "col-10 col-lg-3";
            default:
                return "col-10";
        }
    }

    render() {

        const {title, paragraphs, paragraphsOrientation} = this.props;
        const orientation = paragraphsOrientation !== undefined ? paragraphsOrientation : "row";

        const directionClass = orientation === "row" ? "row justify-content-center" : "row align-items-center flex-columns";
        const Colclazz = this.getPercentage(paragraphs.length, orientation) + " para";

        return (
            <div className="km-api-header-component">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-lg-8 col-xl-5">
                            <div className={directionClass}>
                                <div className="col-10 mb-3">
                                    <h1 className="text-center">{title}</h1>
                                </div>
                                {paragraphs.map((para, index) => (
                                    <div className={Colclazz} key={index}>
                                        {para}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
