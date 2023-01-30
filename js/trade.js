// Function for trade submenu open and close start
$(".trade-accordion-link-click").click(function () {

  $header = $(this);
  //getting the next element
  $content = $header.next();
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $content.slideToggle(50, function () {
    $header.toggleClass("trade-accordion-link");
    $header.toggleClass("trade-accordion-link-border-remove");
  });

});

$(".trade-accordion-submenu-click").click(function () {

  $header = $(this);
  console.log()
  //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
  $header.slideToggle(50, function () {
    $header.siblings().toggleClass("trade-accordion-link");
    $header.siblings().toggleClass("trade-accordion-link-border-remove");
  });

});
// Function for trade submenu open and close end


// For adding red /green color
$(".trade-mode:contains('buy')").addClass("trade-mode-green");
$(".trade-mode:contains('sell')").addClass("trade-mode-red");
$(".trade-accordion-prices:contains('-')").addClass("trade-mode-red");


// For showing modal on longTap on each trade items start
var touchStartTimeStamp = 0;
var touchEndTimeStamp   = 0;
var tradelist = document.getElementsByClassName('trade-accordion-list');

Array.from(tradelist).forEach(function(item) {
  item.addEventListener('touchstart', onTouchStart,false); 
  item.addEventListener('touchend', onTouchEnd,false); 
  var timer;
  function onTouchStart(e) {
      touchStartTimeStamp = e.timeStamp;
  }

  function onTouchEnd(e) {
      touchEndTimeStamp = e.timeStamp;

      if((touchEndTimeStamp - touchStartTimeStamp) > 300)
      {
        console.log(touchEndTimeStamp - touchStartTimeStamp);// longtap
        $("#TradeModal").modal("show");
        
        var stockname = $(this).find('span.trade-stock-name').text() + ' ' +
                        $(this).find('span.trade-mode').text() + ' ' +
                        $(this).find('span.trade-quantity').text();
        $("#trade-modal-title-left").html(stockname);
        $("#trade-modal-title-right").html($(this).find('span.trade-accordion-prices').text());

      }
        
  }
});
// For showing modal on longTap on each trade items end


function openmodal_tradeorder_list() {

  $("#tradeorderlistModal").show();

  $(".modal_order")
    .unbind()
    .click(function (event) {
      $("#tradeorderlistModal").hide();
    });
}

function sortListAscendingProfit()
{
  $("#trade-first-accordion li").sort(function (a, b) {
    var selectColumn1;
  
    selectColumn1 = ".trade-accordion-prices";

    var aValue = parseFloat( $(a).find(selectColumn1).text());
    var bValue = parseFloat( $(b).find(selectColumn1).text());
    console.log(aValue)
    console.log(bValue)
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}
function sortListDescendingProfit()
{
  $("#trade-first-accordion li").sort(function (a, b) {
    var selectColumn1;
  
    selectColumn1 = ".trade-accordion-prices";

    var aValue = parseFloat( $(a).find(selectColumn1).text());
    var bValue = parseFloat( $(b).find(selectColumn1).text());
    console.log(aValue)
    console.log(bValue)
    return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}
function sortListAscendingSymbol()
{
  $("#trade-first-accordion li").sort(function (a, b) {

    
    var selectColumn1;
  
    selectColumn1 = ".trade-stock-name";
  
    var aValue = $(a).find(selectColumn1).text();
    var bValue = $(b).find(selectColumn1).text();
    
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}

function sortListDescendingSymbol()
{
  $("#trade-first-accordion li").sort(function (a, b) {

    
    var selectColumn1;
  
    selectColumn1 = ".trade-stock-name";
  
    var aValue = $(a).find(selectColumn1).text();
    var bValue = $(b).find(selectColumn1).text();
    
    return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}
function sortListAscendingTime()
{
  $("#trade-first-accordion li").sort(function (a, b) {

    
    var selectColumn1;
  
    selectColumn1 = ".trade-submenu-timestamp";
  
    var aValue = $(a).find(selectColumn1).text();
    var bValue = $(b).find(selectColumn1).text();
    
    return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}

function sortListDescendingTime()
{
  $("#trade-first-accordion li").sort(function (a, b) {

    
    var selectColumn1;
  
    selectColumn1 = ".trade-submenu-timestamp";
  
    var aValue = $(a).find(selectColumn1).text();
    var bValue = $(b).find(selectColumn1).text();
    
    return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
    
  })
  .appendTo("#trade-first-accordion");
}

$(document).on('click', '.trade-profit-item', function() {
  
  $('#trade-order-icon').hide();
  $('#trade-time-icon').hide();
  $('#trade-symbol-icon').hide();
  $('#trade-profit-icon').show();

  var profit_arrow = $(this).children().children();
  profit_arrow.toggleClass("fa-arrow-up fa-arrow-down");
  var classList = $(this).children().children().attr("class").split(" ");
  if(classList.includes('fa-arrow-up'))
  {
    sortListAscendingProfit();
  }
  else if(classList.includes('fa-arrow-down'))
  {
    sortListDescendingProfit();
  }
});

$(document).on('click', '.trade-symbol-item', function() {
  
  $('#trade-order-icon').hide();
  $('#trade-time-icon').hide();
  $('#trade-profit-icon').hide();
  $('#trade-symbol-icon').show();

  var symbol_arrow = $(this).children().children();
  symbol_arrow.toggleClass("fa-arrow-up fa-arrow-down");
  var classList = $(this).children().children().attr("class").split(" ");
  if(classList.includes('fa-arrow-up'))
  {
    sortListAscendingSymbol();
  }
  else if(classList.includes('fa-arrow-down'))
  {
    sortListDescendingSymbol();
  }
});

$(document).on('click', '.trade-time-item', function() {
  
  $('#trade-order-icon').hide();
  $('#trade-symbol-icon').hide();
  $('#trade-profit-icon').hide();
  $('#trade-time-icon').show();

  var time_arrow = $(this).children().children();
  time_arrow.toggleClass("fa-arrow-up fa-arrow-down");
  var classList = $(this).children().children().attr("class").split(" ");
  if(classList.includes('fa-arrow-up'))
  {
    sortListAscendingTime();
  }
  else if(classList.includes('fa-arrow-down'))
  {
    sortListDescendingTime();
  }
});