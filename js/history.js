// Function for history balance submenu open and close start
$(".history-balance-accordion-link-click").click(function () {
  $header = $(this);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(50, function () {
    $('.history-balance-accordion-link-click').toggleClass("history-balance-accordion-link");
    $('.history-balance-accordion-link-click').toggleClass("history-balance-accordion-border-remove");
  });
});

$(".history-balance-accordion-submenu-click").click(function () {
  $header = $(this);
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $header.slideToggle(50, function () {
    $('.history-balance-accordion-link-click').toggleClass("history-balance-accordion-link");
    $('.history-balance-accordion-link-click').toggleClass("history-balance-accordion-border-remove");
  });
});
// Function for history balance submenu open and close start


function openmodal_historyorder_list() {

  $("#historyorderModal").show();

  $(".modal_history_order")
    .unbind()
    .click(function (event) {
      $("#historyorderModal").hide();
    });

}

function openmodal_historydate_list() {

  $("#historydateModal").show();

  $(".modal_history_date")
    .unbind()
    .click(function (event) {
      $("#historydateModal").hide();
    });

}
