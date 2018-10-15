import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { translate } from 'react-i18next';
import { Row, Col } from 'reactstrap';

import {digitalPlatformProducts} from "../../../content/index-page/digital-platform";

import './products-grid.scss';

@translate()
export class ProductsGrid extends Component {
  static propTypes = {
    t: PropTypes.func,
    i18n: PropTypes.object,
    transformation: PropTypes.any,
    dark: PropTypes.any
  };

  render() {
    const { t, transformation, dark } = this.props;

    const kumuluzDigitalProductsLastRows = Math.ceil(digitalPlatformProducts(t).length / 3);
    const kumuluzDigitalProductsLastRowIndex = (kumuluzDigitalProductsLastRows - 1) * 3 - 1;

    return (
      <Row>
        {digitalPlatformProducts(t).map((service, i) => (
          <Col
            key={i}
            xs="12"
            md="4"
            className={'product ' + (i > kumuluzDigitalProductsLastRowIndex ? 'lastRow ' : '') + (dark ? 'dark' : 'light')}
          >
            <a href={service.href} target="_blank">
              <div className="name">{service.name}</div>
            </a>
            {(!transformation && <div className="description">{service.description}</div>) || (
              <div className="description">{service.transformation}</div>
            )}
          </Col>
        ))}
      </Row>
    );
  }
}
