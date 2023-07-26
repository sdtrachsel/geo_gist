const cleanTitle = (title) => {
  const dashIndex = title.lastIndexOf('-');
  if (dashIndex !== -1) {
      return title.substring(0, dashIndex).trim();
  }
  return title;
}

const formatDate = (dateString) => {
  const date = new Date(dateString);
  let month = '' + (date.getMonth() + 1);
  let day = '' + date.getDate();
  let year = date.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [month, day, year].join('/');
}

const cleanImageUrl = (urlToImage) => {
  if (!urlToImage || !urlToImage.startsWith('https://')) {
    return 'https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg';
  }
  return urlToImage;
}

export const cleanArticles = (articles) => {
  return articles.map(article => ({
    ...article,
    title: cleanTitle(article.title),
    publishedAt: formatDate(article.publishedAt),
    urlToImage: cleanImageUrl(article.urlToImage)
  }));
}
