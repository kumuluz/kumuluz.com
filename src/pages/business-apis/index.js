import React, {Component} from "react";
import PropType from "prop-types";
import {Helmet} from "react-helmet";
import Link, {push} from "gatsby-link";
import {translate} from "react-i18next";
import {UncontrolledTooltip} from "reactstrap";

import {ArrowDividerComponent, ReferencesComponent} from "../../components/shared/export.shared.components";

import "./business-apis-page.scss";
import arrowIcon from "../../assets/images/arrow-blue-200.svg";
import arrowIconGrey from "../../assets/images/arrow-grey.svg";
import {headersList} from "../../content/business-apis/headers";
import {businessApisList, tags} from "../../content/business-apis/business-apis";
import {Footer} from "../../components/shared/footer/footer";


@translate("business-apis")
export default class BusinessAPIsPage extends Component {

    static propTypes = {
        t: PropType.func,
        i18n: PropType.object
    };

    constructor(props) {
        super(props);
        this.loadMore = this.loadMore.bind(this);
        this.filterApis = this.filterApis.bind(this);
        this.filterByTag = this.filterByTag.bind(this);
        this.renderDocumentationLink = this.renderDocumentationLink.bind(this);

        this.state = {
            displayedApis: [],
            activeTag: "",
            lang: props.i18n.language
        };
        this.LOAD_X_APIS = 6;
    }

    componentDidMount() {
        const {t} = this.props;
        this.setState({
            ...this.state,
            displayedApis: businessApisList(t).slice(0, this.LOAD_X_APIS),
        });

        this.viewMoreBtn.show = () => {
            this.viewMoreBtn.style.display = "inline-flex";
        };
        this.viewMoreBtn.hide = () => {
            this.viewMoreBtn.style.display = "none";
        };
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.i18n.language !== this.state.lang) {
            this.setState({
                ...this.state,
                displayedApis: businessApisList(nextProps.t).slice(0, this.LOAD_X_APIS),
                lang: nextProps.i18n.language
            });
            this.viewMoreBtn.show();
        }

    }

    loadMore() {
        const {t} = this.props;
        const newSize = this.state.displayedApis.length + this.LOAD_X_APIS;
        if (newSize >= businessApisList(t).length) {
            this.viewMoreBtn.hide();
        }
        this.setState({
            displayedApis: businessApisList(t).slice(0, newSize)
        });
    }

    filterApis() {
        const {t} = this.props;

        const query = this.searchbar.value.toUpperCase();
        this.viewMoreBtn.hide();
        const foundApis = businessApisList(t).filter(
            (api) => {
                if (api.title.toUpperCase().includes(query)) {
                    return true;
                } else if (api.shortDesc.toUpperCase().includes(query)) {
                    return true;
                }
                return false;
            }
        );
        this.setState({
            ...this.state,
            displayedApis: foundApis,
        });
    }

    filterByTag(tagName) {
        const {t} = this.props;

        const query = tagName.toUpperCase();
        this.viewMoreBtn.hide();
        const foundApis = businessApisList(t).filter(
            (api) => {
                return api.tag.toUpperCase().includes(query);
            }
        );
        this.setState({
            displayedApis: foundApis,
            activeTag: tagName
        });
    }

    renderDocumentationLink(api) {
        const {t} = this.props;

        if (!api.notReleased) {
            /*When documentation is ready replace return with following code:
                return (
                    <Link to={api.docsUrl} className="docs-btn-link">
                        <span className="docs-btn">
                            {t("apis.docs")}
                            <img src={arrowIcon} />
                        </span>
                    </Link>
                );*/
            return (
                <span className="docs-btn">
                    {t("apis.docs")}
                    <img src={arrowIcon}/>
                </span>
            );
        } else {
            return (
                <span className="docs-btn disabled-docs" id={"docs-btn-" + api.id}>
                    {t("apis.docs")}
                    <img src={arrowIconGrey}/>
                    <UncontrolledTooltip target={"docs-btn-" + api.id} placement={"top"}>
                        {t("apis.not-available")}
                    </UncontrolledTooltip>
                </span>
            );
        }
    }

    render() {
        const {t} = this.props;

        return (
            <div className="km-business-apis-page">
                <Helmet title={t("meta.title")}/>
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-10 col-sm-9 col-xl-7 header">
                            <h1 dangerouslySetInnerHTML={{__html: t("header.main-title")}}/>
                            <h2>{t("header.subtitle-1")}</h2>
                        </div>
                    </div>
                </div>

                <div className="container-fluid light-blue-grad-section">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6 header-items">
                            {headersList(t).map((item, index) => (
                                <div className="header-item" key={index}>
                                    <div className="image">
                                        <img src={item.image}/>
                                    </div>
                                    <p className="title">{item.title}</p>
                                    <p className="desc" dangerouslySetInnerHTML={{__html: item.desc}}/>
                                </div>
                            ))}
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"white"} corner={4}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row justify-content-center apis-list" id="apis-list">
                        <div className="col-9 col-xl-6">
                            <div className="row mb-5">
                                <div className="col-25-perc">
                                    <div className="search-bar">
                                        <input placeholder={t("filters.placeholder")} type="text"
                                            onInput={this.filterApis}
                                            ref={ref => this.searchbar = ref}/>
                                    </div>
                                    <h4>{t("filters.title")}</h4>
                                    <div className="filters">
                                        <span
                                            className={this.state.activeTag === "" ? "tag-filter active-filter" : "tag-filter"}
                                            onClick={() => this.filterByTag("")}>
                                            {t("filters.tags.show-all")}
                                        </span>
                                        {tags(t).map((tag, index) => (
                                            <span
                                                className={this.state.activeTag === tag ? "tag-filter active-filter" : "tag-filter"}
                                                key={index} onClick={() => this.filterByTag(tag)}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                                <div className="col-75-perc">
                                    <div className="apis-grid">
                                        {this.state.displayedApis.map((api, index) => (
                                            <div className="api-item" key={index}>
                                                <div className="tag">
                                                    {api.tag}
                                                </div>
                                                <div className="api-name">
                                                    {api.title}
                                                </div>
                                                <div className="api-desc">
                                                    {api.shortDesc}
                                                </div>
                                                <div className="buttons">
                                                    <Link to={api.url}>
                                                        <span className="overview-btn">{t("apis.overview")}</span>
                                                    </Link>
                                                    {this.renderDocumentationLink(api)}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="view-more-btn">
                                        <span onClick={this.loadMore}
                                            ref={ref => this.viewMoreBtn = ref}>{t("apis.view-more")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-10 p-0">
                            <ArrowDividerComponent theme={"blue"} corner={4}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid dark-blue-section">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6">
                            <h2>{t("ways.title")}</h2>
                            <div className="ways-list">
                                <div className="left-way way">
                                    <div>
                                        <h3>{t("ways.left-way.title")}</h3>
                                        <p>{t("ways.left-way.para")}</p>
                                    </div>
                                    <div>
                                        <span>{t("ways.left-way.button")}</span>
                                    </div>
                                </div>
                                <div className="center-way way">
                                    <div>
                                        <h3>{t("ways.center-way.title")}</h3>
                                        <p>{t("ways.center-way.para1")}</p>
                                        <p>{t("ways.center-way.para2")}</p>
                                    </div>
                                    <div>
                                        <span
                                            onClick={() => document.getElementById("apis-list").scrollIntoView()}>{t("ways.center-way.button")}</span>
                                    </div>
                                </div>
                                <div className="right-way way">
                                    <div>
                                        <h3>{t("ways.right-way.title")}</h3>
                                        <p>{t("ways.right-way.para1")}</p>
                                        <p>{t("ways.right-way.para2")}</p>
                                    </div>
                                    <div>
                                        <span onClick={() => push("/#contact-us")}>{t("ways.right-way.button")}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-9 col-xl-6 text-center mt-5 learn-more-link">*/}
                        {/*<Link to={"/"}>*/}
                        {/*{t("ways.learn-more.link")}*/}
                        {/*</Link>*/}
                        {/*&#160;{t("ways.learn-more.text")}*/}
                        {/*</div>*/}
                        <div className="col-10 p-0 mt-5">
                            <ArrowDividerComponent theme={"white"} corner={3}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid mt-5">
                    <div className="row justify-content-center">
                        <div className="col-9 col-md-9 col-lg-8 col-xl-6">
                            <ReferencesComponent title={t("references")}/>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-9 col-xl-6">
                            <div className="row case-study">
                                <div className="col-10 col-md-5">
                                    <h4>{t("case-study.above-title")}:</h4>
                                    <h3 dangerouslySetInnerHTML={{__html: t("case-study.title")}}/>
                                    <p>
                                        <a href={"http://www.petrol.si/"} rel="noreferrer noopener"
                                            target="_blank">{t("case-study.para1.link")}</a>
                                        &#160;{t("case-study.para1.text")}
                                    </p>
                                    <p>{t("case-study.para2")}</p>
                                </div>
                                <div className="col-10 col-md-5 quote-container">
                                    <div className="grey-area">
                                        <p>
                                            <span className="quote">&#34;</span>
                                            {t("case-study.quote")}
                                            <span className="quote right-quote">&#34;</span>
                                        </p>
                                        {/*<div className="arrow-quote" />*/}
                                    </div>
                                    {/*<div className="lightblue-area">*/}
                                    {/*<p className="quote-author-name">Adrian Freeman</p>*/}
                                    {/*<p className="quote-author-role">Petrol CTO</p>*/}
                                    {/*</div>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer social/>
            </div>
        );
    }
}
