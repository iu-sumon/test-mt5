// For changing price font size
$.each($(".price"), function () {
  var price = $(this)
    .html()
    .match(/^(\d+)(\.\d+)?/);

  var afterdecimal = price[2].substring(0, price[2].length - 2);

  var lastafterdecimal = price[2].slice(-2);

  $(this).html(
    `<span style="font-size:12px;">${price[1]}</span><span style="font-size:14px;">${afterdecimal}</span><span style="font-size:30px;">${lastafterdecimal}</span>`
  );
});

// For showing modal on longTap on each watchlist items start
var touchStartTimeStamp = 0;
var touchEndTimeStamp = 0;
var watchlist = document.getElementsByClassName("watchlist-parent");

Array.from(watchlist).forEach(function (item) {
  item.addEventListener("touchstart", onTouchStart, false);
  item.addEventListener("touchend", onTouchEnd, false);

  function onTouchStart(e) {
    touchStartTimeStamp = e.timeStamp;
  }

  function onTouchEnd(e) {
    touchEndTimeStamp = e.timeStamp;

    // if((touchEndTimeStamp - touchStartTimeStamp) > 300)
    // {
    console.log(touchEndTimeStamp - touchStartTimeStamp); // longtap
    $("#WatchlistModal").modal("show");

    var stockname = $(this).find("span.watchlist_item").text();
    $("#watchlist-modal-title-left").html(stockname);

    $(".modal_watchlist")
    .unbind()
    .click(function (event) {
      $("#WatchlistModal").modal("hide");
    });

    // }
  }
});
// For showing modal on longTap on each watchlist items end
function myFunction() {
  console.log("hello");
  alert("hello");
}
