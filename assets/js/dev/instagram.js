  var feed = new Instafeed({
      get: 'user',
      userId: 1438338591,
      clientId: 'e6b445cf354d43deba4a8065e1d4152c',
      accessToken: '1438338591.e6b445c.cd8325012ac44789be28ea08c6abaa79',
      resolution: 'low_resolution',
      limit: 7,
      useHttp: true,
      sortBy: 'most-recent',
      template: '<li><a href="{{link}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" /></a></li>'
  });
  feed.run();