const axios = require('axios')

module.exports = function (api) {
  api.loadSource(async store => {
    const { data } = await axios.get('https://www.reddit.com/r/aww.json?raw_json=1');

    const contentType = store.addContentType({
        typeName: 'RedditPost',
        route: '/reddit/:id',
    });

    for (const post of data.data.children) {
        contentType.addNode({
            id: post.data.id,
            title: post.data.title,
            path: '/reddit/' + post.data.id,
            fields: {
                thumbnail: post.data.thumbnail,
                img: post.data.preview.images[0].source.url
            }
        })
    }
  });

  api.loadSource(async jobsStore => {
    const { data } = await axios.get('http://cafeto.co/wp-json/cafetoWebsite/jobs');

    const contentTypeJobs = jobsStore.addContentType({
        typeName: 'JobPost',
        route: '/job/:id',
    });

    for (const post of data.jobs) {
        contentTypeJobs.addNode({
            id: post.id,
            title: post.title,
            path: '/job/' + post.id,
            fields: {
                link: post.link,
                country: post.country,
                app: post.app,
            }
        })
    }
  })
}