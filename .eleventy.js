module.exports = function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");

    eleventyConfig.addFilter("readableDate", (date) =>
        new Date(date)
            .toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
            .toLowerCase()
    );

    eleventyConfig.addFilter("rejectTag", (tags, tag) => tags.filter(t => t !== tag));

    return {
        dir: {
            input: "src",
            output: "public",
        },
    };
};
