import React, {Component} from "react";
import PropType from "prop-types";
import {Modal, ModalBody, ModalHeader} from "reactstrap";

import "./video-player.component.scss";
import {determineScreenWidth, MOBILE_MEDIA} from "../../../layouts/common";

export class VideoPlayerComponent extends Component {

    static propTypes = {
        title: PropType.string,
        videoUrl: PropType.string
    };

    constructor(props) {
        super(props);
        this.showVideoModal = this.showVideoModal.bind(this);
        this.state = {
            showVideo: false
        }
    }

    calculateWidthAndHeight() {
        const screenSize = determineScreenWidth();
        const ratio = 360 / 640;
        return {width: screenSize, height: screenSize * ratio};
    }

    showVideoModal() {
        this.setState({
            showVideo: !this.state.showVideo
        });
    }

    render() {
        const {title, videoUrl} = this.props;
        const videoPlayerSize = this.calculateWidthAndHeight();

        return (
            <Modal isOpen={this.state.showVideo} toggle={this.showVideoModal} className="km-video-player">
                <ModalHeader toggle={this.showVideoModal}>
                    {title}
                </ModalHeader>
                <ModalBody>
                    <iframe src={videoUrl} width={videoPlayerSize.width} height={videoPlayerSize.height}
                            frameBorder="0"
                        webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen={true} />
                </ModalBody>
            </Modal>
        );
    }
}
