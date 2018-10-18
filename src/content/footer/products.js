import React from "react";

export const products = t => {
    return [
        {
            id: "kumuluzEE",
            name: <div dangerouslySetInnerHTML={{ __html: t("products.kumuluzEE.title") }} />,
            description: t("products.kumuluzEE.description"),
            transformation: t("products.kumuluzEE.transformation"),
            href: "/digital-components/ee"
        },
        {
            id: "kumuluzAPI",
            name: <div dangerouslySetInnerHTML={{ __html: t("products.kumuluzAPI.title") }} />,
            description: t("products.kumuluzAPI.description"),
            transformation: t("products.kumuluzAPI.transformation"),
            href: "/digital-components/api"
        },
        {
            id: "kumuluzIntegration",
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t("products.kumuluzIntegration.title")
                    }}
                />
            ),
            description: t("products.kumuluzIntegration.description"),
            transformation: t("products.kumuluzIntegration.transformation"),
            href: "/digital-components/integration"
        },
        {
            id: "kumuluzUX",
            name: <div dangerouslySetInnerHTML={{ __html: t("products.kumuluzUX.title") }} />,
            description: t("products.kumuluzUX.description"),
            transformation: t("products.kumuluzUX.transformation"),
            href: "/digital-components/ux"
        },
        {
            id: "kumuluzMarketplace",
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t("products.kumuluzMarketplace.title")
                    }}
                />
            ),
            description: t("products.kumuluzMarketplace.description"),
            transformation: t("products.kumuluzMarketplace.transformation"),
            href: "/digital-components/marketplace"
        },
        {
            id: "kumuluzCrowdsensing",
            name: (
                <div
                    dangerouslySetInnerHTML={{
                        __html: t("products.kumuluzCrowdsensing.title")
                    }}
                />
            ),
            description: t("products.kumuluzCrowdsensing.description"),
            transformation: t("products.kumuluzCrowdsensing.transformation"),
            href: "/digital-components/crowdsensing"
        }
    ];
};
