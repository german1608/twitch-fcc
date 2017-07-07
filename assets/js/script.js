const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function () {

  // Iterate over all users.
  users.forEach(user => {

    // Start the request for the user info
    $.ajax({
      url: `https://wind-bow.glitch.me/twitch-api/users/${user}`,
      dataType: 'jsonp'
    })
    .done(function(json) {
      // Some variables whose name explain themselves
      let channelLink = `https://www.twitch.tv/${user}`,
          channelIcon = json.logo ? json.logo : `assets/images/unknown.png`,
          // This two are default, they would change
          game = "", 
          icon = "assets/images/offline.png";

      // Making the request for the stream info
      $.ajax({
        url: `https://wind-bow.glitch.me/twitch-api/streams/${user}`,
        dataType: 'jsonp'
      })
      .done(function(json2) {
        // Only true if the user is currently streaming
        if (json2.stream) {
          game = json2.stream.game;
          icon = 'assets/images/online.png';
        }
        let content = `
        <li>
          <div class="user row valign-wrapper">
            <div class="col s3">
              <img src="${channelIcon}" class="responsive-img circle profile" alt="user"/>
            </div>
            <div class="col s7 left-align">
              <span><a href="${channelLink}" target="_blank">${user}</a></span>
              <p><a href="${channelLink}" target="_blank">${game}</a></p>
            </div>
            <div class="col s2">
              <img src="${icon}" alt="status" class="responsive-img status" />
            </div>

          </div>
        </li>`;
        $('#all-panel ul').append(content);
        if (json2.stream) $('#online-panel ul').append(content);
        else $('#offline-panel ul').append(content);
      });
    
    });
    
  });

  // Start the app in a smooth way
  $('#app').addClass('active');
});
