$("document").ready(function () {
  let menuContainer = $("#menuContainer");
  let menuContainerWidth =
    $("body").width() * 0.17 - $("body").width() * 0.17 * 0.5;

  let menuImg = $("#container #top_buttons #menu .menu");
  let closeImg = $("#menuContainer #closeImg");
  let container = $("#container");

  menuImg.click(function () {
    if ($("body").width() > 767) {
      if (!$("#menuContainer").hasClass("show")) {
        menuContainer.show().animate({ width: "17%" });
        $(this)
          .css({ position: "relative" })
          .animate({ right: menuContainerWidth });
        menuContainer.addClass("show");
      } else {
        menuContainer.animate({ width: "0%" });
        $(this).animate({ right: 0 });
        menuContainer.removeClass("show");
      }
    } else {
      if (!$("#menuContainer").hasClass("show")) {
        menuContainer.show().animate({ height: "100%", width: "100%" });
        menuContainer.addClass("show");
        this.src = "img/close.png";
        //container.css({ filter: "blur(2px)" });
      } else {
        this.src = "img/menu.png";
        menuContainer.animate({ width: "0%" });
        $(this).animate({ right: 0 });
        menuContainer.removeClass("show");
      }
    }
  });

  /*
  closeImg.click(function () {
    menuContainer.removeClass("show");
    menuContainer.animate({ height: "0%", width: "0%" });
    $(menuImg).animate({ top: 0 });
    menuImg.show();
  });
  */

  let squadmember = $("#contents #right div ");

  squadmember.mouseover(function () {
    let actualObj = "." + $(this).attr("class");
    let hiddenName = $(actualObj + " p #hidden");
    let hiddenRole = $(actualObj + " p .role");
    if ($("body").width() > 767) {
      //szerokosc obrazka 364, tez lepiej pobrac ZROBIONE;
      /* trzeba sprobowac pobrac pozycje 'left' aktualnego obiektu i o tyle przesunac padding ZROBIONE*/
      let posLeft = parseInt($(actualObj + " p").css("left"));
      let widthHiddenName = parseInt($(hiddenName).css("width"));
      hiddenName
        .show()
        .animate({ marginRight: 364 - posLeft - widthHiddenName + 65 });
      hiddenRole.show();
      $(actualObj + " p").removeClass("#hidden");
    } else {
      $(actualObj + " p").css({ display: "flex" });
      $(actualObj + " p").animate({ marginLeft: "-40px" });
      hiddenName.show();
      hiddenRole.show();
      $(actualObj + " p").removeClass("#hidden");
    }
  });

  squadmember.mouseout(function () {
    let actualObj = "." + $(this).attr("class");
    let hiddenName = $(actualObj + " p #hidden");
    let hiddenRole = $(actualObj + " p .role");
    if ($("body").width() > 767) {
      hiddenName.hide().css("margin-right", "0");
      hiddenRole.hide();
      $(actualObj + " p").addClass("#hidden");
    } else {
      hiddenName.hide();
      hiddenRole.hide();
      $(actualObj + " p").animate({ marginLeft: "0px" });
      $(actualObj + " p").addClass("#hidden");
    }
    //hiddenRole.hide();
    //hiddenName.animate({ marginRight: 0 }).hide();
  });
  /*
  let music_player = $("#footer div audio");

  music_player[0].muted = false;
  music_player[0].play();
  
  if (music_player[0].play() == 0) {
    setTimeout(function () {
      music_player.play();
    }, 1000);
  }
  */

  let disc_img = $("#contents #carousel #carousel_item img");
});
