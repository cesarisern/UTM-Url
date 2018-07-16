$(document).ready(function(){
  // I've learned how to loop until the right DOM element is rendered. Next step: Create one function that checks existance and sets UI for: email button, accounts drop-down, reset password.
  Itshere();
  function Itshere() {
   if (!$("#login-name-link").size()) {
     window.requestAnimationFrame(Itshere);
   }else {
      $("#login-name-link").addClass("pt-button pt-intent-primary pt-minimal");
      $("#login-name-link").css({"text-decoration":"none"});
      $(".login-buttons-dropdown-align-").css({"margin-top":"20px","margin-left":"20px"});
      $("#login-name-link").click(function () {
          Itshere2();
      }
      );
      function Itshere2() {
        if (!$("#login-buttons-open-change-password").size()) {
        window.requestAnimationFrame(Itshere2);
      } else {
        console.log("Function says the element 2 IS rendered");
        $(".login-link-and-dropdown-list .login-close-text").addClass("pt-button pt-intent-primary pt-minimal");
        $(".login-link-and-dropdown-list .login-close-text").css({"text-decoration":"none","font-size":"14px","top":"98px"});
        $(".login-link-and-dropdown-list .login-button").addClass("pt-button pt-intent-primary pt-minimal");
        $(".login-link-and-dropdown-list .login-button").removeClass("login-button");
        $("#login-name-link").removeClass("pt-intent-primary");
        $("#login-name-link").attr(":disabled");
        $("#login-name-link").css({"color":"rgba(191,204,214,.5)"});
        $(".login-link-and-dropdown-list #login-dropdown-list").css({"margin-top":"-30px","background":"none","border":"none","box-shadow":"none","position":"relative"});
        $("#login-buttons-open-change-password").css({"margin-right":"30px"});
      };
    }
    }
 };
});
