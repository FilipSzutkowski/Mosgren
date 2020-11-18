module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addWatchTarget('assets/styles/style.css');

  eleventyConfig.addFilter('simpleDate', (dateObject) => {
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false,
    };
    return new Intl.DateTimeFormat('default', options).format(dateObject);
  });

  return {
    markdownTemplateEngine: 'njk',
    dir: {
      layouts: '_layouts',
    },
  };
};
