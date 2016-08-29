console.log('sourced');

var getMe = function() {
  FB.api('/me', {fields: 'last_name'}, function(response) {
    console.log(response);
  });
};

var getPermissions = function() {
  FB.api('/me/permissions', function(response) {
    if (!response || response.error) {
      console.log(response.error);
    } else {
      console.log(response);
    }
  });
};

var getMyFeed = function(){
  FB.api('/me/feed', function(response) {
    if (!response || response.error) {
      console.log(response.error);
    } else {
      console.log(response);
    }
  });
};

var getMyFriends = function(){
  FB.api(
      "/me/friends",
      function (response) {
        if (response && !response.error) {
          console.log(response);
        }
      }
  );
};
