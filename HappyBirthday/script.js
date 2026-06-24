$(document).ready(function() {

  $(document).one("click", function() {
    $("#music")[0].play();
  });

  function moveButton(btn) {
    let x = Math.random() * (window.innerWidth - 120);
    let y = Math.random() * (window.innerHeight - 80);

    btn.css({
      left: x + "px",
      top: y + "px"
    });
  }

  $("#noBtn").hover(function() {
    moveButton($(this));
  });

  $("#noBtn2").hover(function() {
    moveButton($(this));
  });

 
  $("#yesBtn").click(function() {
    $("#questionBox").fadeOut(400, function() {
      $("#question2").fadeIn(400);
    });
  });

 
  $("#yesBtn2").click(function() {
    $("#question2").fadeOut(400, function() {
      $("#envelopePage").fadeIn(400);
    });
  });


  $("#openEnvelope").click(function() {
    $(this).toggleClass("open");

  
    for (let i = 0; i < 25; i++) {
      let heart = $("<div class='heart'>💖</div>");
      $("body").append(heart);

      heart.css({
        left: Math.random() * window.innerWidth,
        top: -50
      });

      heart.animate({
        top: window.innerHeight,
        opacity: 0
      }, 3000, function() {
        $(this).remove();
      });
    }
  });

});