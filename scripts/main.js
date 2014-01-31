require.config({
  paths: {
    underscore: '../bower_components/underscore/underscore-min'
    ,shifty: '../bower_components/shifty/dist/shifty.min'
    ,rekapi: '../bower_components/rekapi/dist/rekapi.min'
  }
});

require(['rekapi'], function (Rekapi) {
  function toArray (arrayLike) {
    return Array.prototype.slice.call(arrayLike);
  }

  function $ () {
    return toArray(
        document.querySelectorAll.apply(document, arguments));
  }

  var rekapi = new Rekapi(document.body);
  var lis = $('li');

  lis.forEach(function (li) {
    var durationVariance = Math.random() * 250;
    var actor = rekapi.addActor({ context: li });
    actor
      .keyframe(0, {
        transform: 'translateZ(1px)'
      }).keyframe(1000 + durationVariance, {
        transform: 'translateZ(0px)'
      }, 'bouncePast')
      .wait(2500);
  });

  rekapi.play();
});
