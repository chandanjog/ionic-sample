angular.module('starter.services', ['ngResource'])
.factory('Session', function ($resource) {
    return $resource('http://192.168.2.3:5000/sessions/:sessionId');
})
.factory('cordova', function () {
  return {
	  test: function(onSuccess){
      var self = this;
		  document.addEventListener("deviceready", function(){
        console.log('hello: inside event listener');
        self.ready(onSuccess);
      }, false);
	  },
	  ready: function(onSuccess){
		  //Save the world!
      console.log('hello: in ready');
      hello.greet('chandan', function(msg){
        console.log('hello: in greet success');
        alert('foo bar');
        alert(msg);
        onSuccess(msg);
      }, null );
	  }
  }
})
;
