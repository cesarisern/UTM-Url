$(document).ready(function(){
  // I've learned how to loop until the right DOM element is rendered. Next step: Create one function that checks existance and sets UI for: email button, accounts drop-down, reset password.
  Itshere();
  function Itshere() {
   if (!$("#login-name-link").size()) {
     console.log("Function says the element is NOT rendered");
     window.requestAnimationFrame(Itshere);
   }else {
      console.log("Function says the element is rendered");
      $("#login-name-link").addClass("pt-button pt-intent-primary");
      $("#login-name-link").click(function () {
          Itshere2();
      }
      );
      function Itshere2() {
        if (!$("#login-buttons-open-change-password").size()) {
        console.log("Function says the element 2 is NOT rendered");
        window.requestAnimationFrame(Itshere2);
      } else {
        console.log("Function says the element 2 IS rendered");
        $(".login-link-and-dropdown-list .login-close-text").addClass("pt-button pt-intent-primary");
        $(".login-link-and-dropdown-list .login-button").addClass("pt-button pt-intent-primary");
        $(".login-link-and-dropdown-list .login-button").removeClass("login-button");
      };
    }
    }
 };
});
