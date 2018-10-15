import {BApi} from "./schema/bapi.class";

export const tags = t => [
    t("filters.tags.users"),
    t("filters.tags.ecommerce"),
    t("filters.tags.data")
];

export const businessApisList = t => {
    return [
        new BApi("payment", t("apis.payment-api.title"), t("apis.payment-api.shortDesc"), "/business-apis/payment", "/business-apis/payment", t("apis.payment-api.tag")),
        new BApi("product-catalog", t("apis.product-catalog.title"), t("apis.product-catalog.shortDesc"), "/business-apis/product-catalog", "/business-apis/product-catalog", t("apis.product-catalog.tag")),
        new BApi("cart", t("apis.cart.title"), t("apis.cart.shortDesc"), "/business-apis/cart", "/business-apis/cart", t("apis.cart.tag")),
        new BApi("order", t("apis.order.title"), t("apis.order.shortDesc"), "/business-apis/order", "/business-apis/order", t("apis.order.tag")),
        new BApi("fulfillment", t("apis.fulfillment.title"), t("apis.fulfillment.shortDesc"), "/business-apis/fulfillment", "/business-apis/fulfillment", t("apis.fulfillment.tag")),
        new BApi("invoice", t("apis.invoice.title"), t("apis.invoice.shortDesc"), "/business-apis/invoice", "/business-apis/invoice", t("apis.invoice.tag")),
        new BApi("customer", t("apis.customer.title"), t("apis.customer.shortDesc"), "/business-apis/customer", "/business-apis/customer", t("apis.customer.tag")),
        new BApi("ccm", t("apis.ccm.title"), t("apis.ccm.shortDesc"), "/business-apis/ccm", "/business-apis/ccm", t("apis.ccm.tag")),
        new BApi("subscription", t("apis.subscription.title"), t("apis.subscription.shortDesc"), "/business-apis/subscription", "/business-apis/subscription", t("apis.subscription.tag")),
        new BApi("kyc", t("apis.kyc.title"), t("apis.kyc.shortDesc"), "/business-apis/kyc", "/business-apis/kyc", t("apis.kyc.tag"), true)
    ];
};
