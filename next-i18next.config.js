module.exports = {
    i18n: {
        locales: ["en", "fr", "tr"],
        defaultLocale: "en",
        localeDetection: false,

        domains: [
            {
                domain: process.env.NEXT_PUBLIC_DOMAIN,
                defaultLocale: "en",
            },
            {
                domain: `fr.${process.env.NEXT_PUBLIC_DOMAIN}`,
                defaultLocale: "fr",
            },
            {
                domain: `tr.${process.env.NEXT_PUBLIC_DOMAIN}`,
                defaultLocale: "tr",
            },
        ],
    },
};
