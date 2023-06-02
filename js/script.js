
// ////////////////
$(function () {
  var tab = $(".tabsTitle .tabButton"),
    content = $(".tabsContent .tabContent");
  tab.filter(":first").addClass("active");
  content.filter(":first").addClass("active").show();

  tab.click(function () {
    var indis = $(this).index();
    tab
      .removeClass("active")
      .eq(indis - 1)
      .addClass("active");
    content
      .removeClass("active")
      .hide()
      .eq(indis - 1)
      .addClass("active")
      .show();
    return false;
  });
});

/////////////////// /

var modal = document.querySelector(".modals");
var trigger = document.querySelector(".trigger");
var closeButton = document.querySelector(".close-button");

function toggleModal() {
  modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
  if (event.target === modal) {
    toggleModal();
  }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
//

