import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {translate} from 'react-i18next';
import {Container, Row, Col} from 'reactstrap';
import anime from 'animejs';

import './customers-section.scss';

import {quotes} from "../../../content/index-page/quotes";

@translate("index")
export class CustomersSection extends Component {
    static propTypes = {
        t: PropTypes.func
    };

    constructor(props) {
        super(props);

        this.state = {
            quotesPage: 0,
            width: '0',
            height: '0'
        };

        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }

    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        this.setState({...this.state, width: window.innerWidth, height: window.innerHeight});
    }

    toQuotesPage(page) {
        anime({
            targets: '.customers .customer',
            rotateY: '360deg',
            duration: 1000,
            easing: 'easeInQuad'
        }).finished.then(() => {
            this.setState(state => {
                return {
                    ...state,
                    quotesPage: page
                };
            });
            anime({
                targets: '.customers .customer',
                rotateY: '-360deg',
                duration: 1000,
                easing: 'easeOutQuad'
            });
        });
    }

    render() {
        const {t} = this.props;

        // changed to 1 customer per page, could be cleaned up better
        const {width} = this.state;
        const quotePagesArray = [];
        const quotePages = quotes(t).length; //width > 992 ? Math.ceil(quotes.length / 1) : quotes.length;
        const quotesPerPage = 1; //width > 992 ? 1 : 1;
        for (let i = 0; i < quotePages; i++) {
            quotePagesArray.push(i);
        }

        return (
            <div className="customers-section">
                <div className="customers text-center">
                    <Container>
                        <h2>{t('customers.title')}</h2>
                        <h2 className="h2-subtitle" dangerouslySetInnerHTML={{__html: t('customers.subtitle')}}/>

                        <Row className="customers justify-content-center">
                            {quotes(t)
                                .slice(this.state.quotesPage * quotesPerPage, this.state.quotesPage * quotesPerPage + quotesPerPage)
                                .map((customer, i) => (
                                    <Col className="customer" key={i} xs="10" lg="10">
                                        <p className="quote">
                                            <span dangerouslySetInnerHTML={{__html: `&quot;${customer.quote}&quot;`}}/>
                                        </p>
                                        <img className="rounded-circle my-3" src={customer.photo}/>
                                        <p className="font-weight-bold mb-0">{customer.name}</p>
                                        <p className="font-italic">{customer.company}</p>
                                    </Col>
                                ))}

                            <Col md="12" className="mb-5 quotesPagination" xs={10}>
                                {quotePagesArray.map((p, i) => (
                                    <button key={i} onClick={() => this.toQuotesPage(p)}
                                            className={p === this.state.quotesPage ? 'active' : ''}/>
                                ))}
                                <br/>
                                <br/>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}
