import {BLOG_URL} from "../constants";

export const navbarItems = t => [
    {
        url: "/business-apis",
        title: t("navbar.business-apis"),
        external: false
    },
    {
        url: "/digital-platform",
        title: t("navbar.digital-platform"),
        external: false
    },
    {
        url: "/partners",
        title: t("navbar.partners"),
        external: false
    },
    {
        url: BLOG_URL,
        title: t("navbar.blog"),
        external: true
    },
    {
        url: "#",
        title: t("navbar.contact"),
        external: false,
        isButton: true
    },

];
