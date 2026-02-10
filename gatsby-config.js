module.exports = {
    siteMetadata: {
        siteName: "kumuluz.com"
    },
    plugins: [
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-sass",
            options: {
                sassOptions: {
                    precision: 10
                }
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/`,
                name: "src"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-plugin-image",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            maxWidth: 1024
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                start_url: "/",
                display: "minimal-ui",
                icon: "src/components/layout/kumuluz-iconx32.svg", // This path must exist
            },
        },
    ]
};
