require.config({
  baseUrl: '/'
  ,paths: {
    underscore: 'bower_components/underscore/underscore'
    ,shifty: 'bower_components/shifty/dist/shifty.min'
    ,rekapi: 'bower_components/rekapi/dist/rekapi.min'
  }
});

require(['rekapi'], function (rekapi) {
 console.log(rekapi)
});
