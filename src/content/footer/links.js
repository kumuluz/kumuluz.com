import {BLOG_URL, EE_KUMULUZ_URL, IO_KUMULUZ_URL, SOCIAL, SUNESIS_URL} from "../constants";

export const navigation = t => [
    {href: "/services", name: t("menu.services")},
    {href: "/products", name: t("menu.products")},
    {
        name: t("menu.customers.title"),
        href: "/customers"
    },
    {
        name: t("menu.aboutUs.title"),
        href: "/about",
        children: [
            {href: "/about/sunesis", name: t("menu.aboutUs.aboutUs")},
            {href: "/about/references", name: t("menu.aboutUs.references")},
            {href: "/about/awards", name: t("menu.aboutUs.awards")}
        ]
    },
    {href: BLOG_URL, name: t("menu.blog"), external: true}
];

export const footerLinks = t => [
    {
        title: t("footer.apis.title"),
        links: [
            {
                title: t("footer.apis.api1"),
                href: "/business-apis/payment"
            },
            {
                title: t("footer.apis.api2"),
                href: "/business-apis/product-catalog"
            },
            {
                title: t("footer.apis.api3"),
                href: "/business-apis/cart"
            },
            {
                title: t("footer.apis.api4"),
                href: "/business-apis/order"
            },
            {
                title: t("footer.apis.api5"),
                href: "/business-apis/fulfillment"
            },
            {
                title: t("footer.apis.api6"),
                href: "/business-apis/invoice"
            },
            {
                title: t("footer.apis.api7"),
                href: "/business-apis/customer"
            },
            {
                title: t("footer.apis.api8"),
                href: "/business-apis/ccm"
            },
            {
                title: t("footer.apis.api9"),
                href: "/business-apis/subscription"
            },
            {
                title: t("footer.apis.api10"),
                href: "/business-apis/kyc"
            }
        ]
    },
    {
        title: t("footer.community.title"),
        links: [
            {
                title: t("footer.community.link1"),
                href: BLOG_URL
            },
            {
                title: t("footer.community.link2"),
                href: ""
            },
            {
                title: t("footer.community.link3"),
                href: SOCIAL.TWITTER_URL
            },
            {
                title: t("footer.community.link4"),
                href: SOCIAL.LINKEDIN_URL
            }
        ]
    },
    {
        title: t("footer.websites.title"),
        links: [
            {
                title: "Kumuluz dAPIs",
                href: IO_KUMULUZ_URL
            },
            {
                title: "KumuluzEE",
                href: EE_KUMULUZ_URL
            },
            {
                title: "Sunesis",
                href: SUNESIS_URL
            }
        ]
    },
    {
        title: t("footer.company.title"),
        links: [
            {
                title: t("footer.company.link1"),
                href: SUNESIS_URL + "/about/sunesis"
            },
            {
                title: t("footer.company.link2"),
                href: SUNESIS_URL + "/about/awards"
            },
            {
                title: t("footer.company.link3"),
                href: BLOG_URL
            },
            {
                title: t("footer.company.link4"),
                href: ""
            },
            {
                title: t("footer.company.link5"),
                href: ""
            }
        ]
    }
];

import linkedInIcon from "../../assets/images/social/linkedin.svg";
import twitterIcon from "../../assets/images/social/twitter.svg";

export const socialLinks = [
    {
        img: twitterIcon,
        href: SOCIAL.TWITTER_URL
    },
    {
        img: linkedInIcon,
        href: SOCIAL.LINKEDIN_URL
    }
];
