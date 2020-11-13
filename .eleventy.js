module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addWatchTarget('assets/styles/style.css');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: '_layouts',
    },
  };
};
