import React, {Component} from "react";
import PropType from "prop-types";

import "./collapsable-list.component.scss";

export class CollapsableListComponent extends Component {

    static propTypes = {
        items: PropType.array,
        chevron: PropType.string,
        chevronDown: PropType.string,
        colorClazz: PropType.string
    };

    constructor(props) {
        super(props);
        this.openList = this.openList.bind(this);
        this.clickedItem = null;
        this.chevron = props.chevron;
        this.chevronDown = props.chevronDown;
    }

    getDescriptionFromImage(imgElem) {
        const rootElem = imgElem.parentNode.parentNode;
        const rootChildren = Array.from(rootElem.childNodes);
        const content = rootChildren.find(el => el.classList.contains("content"));
        return Array.from(content.childNodes).find(el => el.tagName === "SMALL");
    }

    openList() {
        const desc = this.getDescriptionFromImage(this.clickedItem);

        if (this.clickedItem.classList.contains("opened")) {
            this.clickedItem.src = this.chevron;
            this.clickedItem.classList.remove("opened");
            desc.classList.add("closed");
        } else {
            this.clickedItem.src = this.chevronDown;
            this.clickedItem.classList.add("opened");
            desc.classList.remove("closed");
        }
    }

    render() {
        const {items, colorClazz, chevronDown} = this.props;

        return (
            <div className="km-collapsable-list-component">
                {items.map((it, index) => (
                    <div className="coll-list-item" key={index}>
                        <div className="chevron">
                            <img src={chevronDown} className="opened" onClick={(e) => {
                                this.clickedItem = e.target;
                                this.openList();
                            }}/>
                        </div>
                        <div className="content">
                            <div className={"title " + colorClazz}>
                                {it.title}
                            </div>
                            <small>
                                {it.desc}
                            </small>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}
