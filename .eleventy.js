module.exports = (eleventyConfig) => {
  eleventyConfig.addPassthroughCopy('assets');
  eleventyConfig.addPassthroughCopy('admin');
  eleventyConfig.addPassthroughCopy('_data');
  eleventyConfig.addLayoutAlias('base', 'base.njk');
  eleventyConfig.addLayoutAlias('post', 'post.njk');
  eleventyConfig.addLayoutAlias('about', 'about.njk');

  eleventyConfig.addFilter('limit', (array, qty) =>
    qty < 0 ? array.slice(qty) : array.slice(0, qty)
  );
  eleventyConfig.addFilter('simpleDate', (dateObject) => {
    const options = {
      timeZone: 'Europe/Oslo',
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
