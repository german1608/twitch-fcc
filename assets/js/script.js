const users = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

$(document).ready(function () {
  // For the navbar
  $(".button-collapse").sideNav();

  // For the tabs
  $('ul.tabs').tabs({
    swipeable: true
    // responsiveThreshold: $('.app').width()
  });
  users.forEach(user => {
    $.ajax({
      url: 'https://wind-bow.glitch.me/twitch-api/streams/' + user,
      dataType: 'jsonp'
    })
    .done(function(json) {
      let channel, game, icon;
      let content = `
      li>
        <div class="user row valign-wrapper">
          <div class="col s4">
            <img src="assets/images/profile.jpg" alt="profile.jpg" class="responsive-img circle"  />
          </div>
          <div class="col s6 left-align">
            <h5><a href="${channel}">${user}</a></h5>
            <p>${game}</p>
          </div>
          <div class="col s2">
           ${icon}
          </div>
        </div>
      </li>
      `;
      if (json.stream) {
        console.log(json);
      }
    })
    .fail(function() {
      console.log("error");
    })
    .always(function() {
      console.log("complete");
    });
    
  })
  
});