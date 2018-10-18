import React, {Component} from "react";
import PropType from "prop-types";

import "./comp-header.component.scss";

import {ArrowDividerComponent} from "../../shared/arrow-divider/arrow-divider.component";

export class CompHeaderComponent extends Component {

    static propTypes = {
        image: PropType.string,
        title: PropType.string,
        subtitle: PropType.string,
        items: PropType.array,
        url: PropType.string
    };

    constructor(props) {
        super(props);
    }

    renderImage(image) {
        const {url} = this.props;
        if (url) {
            return (
                <a href={url} target="_blank" rel="noreferrer noopener" className="set-logo-size">
                    <img src={image}/>
                </a>
            );
        }
        return (
            <img className="set-logo-size" src={image}/>
        );
    }

    render() {
        const {image, title, subtitle, items} = this.props;

        return (
            <div className="container-fluid km-comp-header-component">
                <div className="row justify-content-center">
                    <div className="col-9 col-xl-6">
                        <div className="row align-items-center flex-column">
                            <div className="col-10 header-image">
                                {this.renderImage(image)}
                            </div>
                            <div className="col-10 col-lg-8 p-0">
                                <h1 className="text-center" dangerouslySetInnerHTML={{__html: title}} />
                            </div>
                            <div className="col-10 col-lg-8">
                                <h2 className="text-center">{subtitle}</h2>
                            </div>
                            <div className="col-10 items">
                                {items.map((it, index) => (
                                    <div key={index} className="item">{it}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col-10 p-0">
                        <ArrowDividerComponent corner={4} theme="white"/>
                    </div>
                </div>
            </div>
        );
    }
}
