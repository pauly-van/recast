var searchYouTube = (options, callback) => {

  options.max = options.max || 5;

  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: {q: options.query, maxResults: options.max, key: options.key, videoEmbeddable: true, type: 'video', part: 'snippet'},
    contentType: 'application/json',
    success: function(data) {
      console.log('Youtube call --', data);
      callback(data.items);
    },
    error: function(data) {
      console.error('Failed youtube call --', data);
    }
  });
  
};

export default searchYouTube;
