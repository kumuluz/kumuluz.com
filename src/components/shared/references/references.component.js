import React, {Component} from "react";
import PropType from "prop-types";

import "./references.component.scss";
import {referencesList} from "../../../content/references/references";

export class ReferencesComponent extends Component {

    static propTypes = {
        title: PropType.string
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {title} = this.props;

        return (
            <div className="km-references-component">
                <div className="title">
                    <h4>{title}</h4>
                </div>

                <div className="reference-list">
                    {referencesList.map((refer, index) => (
                        <div className="reference-item" key={index}>
                            <img src={refer.image} />
                            <span>
                                <p>
                                    {refer.name}
                                </p>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
