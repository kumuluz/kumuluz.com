export const navbarItems = t => [
    {
        url: "/business-apis",
        title: t("navbar.business-apis"),
        external: false,
        availableLangs: ["en", "sl", "de"]
    },
    {
        url: "/digital-platform",
        title: t("navbar.digital-platform"),
        external: false,
        availableLangs: ["en"]
    },
    {
        url: "/partners",
        title: t("navbar.partners"),
        external: false,
        availableLangs: ["en"]
    },
    {
        url: "https://blog.kumuluz.com",
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
