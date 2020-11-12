module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addLayoutAlias('base', 'base.njk');

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: '_layouts',
    },
  };
};
