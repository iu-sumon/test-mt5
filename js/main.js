//For redirecting to Homepage
$(".backToHomepage").on("click", function () {
  window.location.href = "index.html"; // Redirect to index.html
});


//Global variable for starting page
var currentPageId = "page-quote";
var currentSelectorId = "quote";

//Function for getting the button ids
function getButtons() {
  //List of button ids
  var list = ["quote", "chart", "trade", "history"];
  return list;
}

//Make sure the window is loaded before we add listeners
window.onload = function () {
  var pageIdList = getButtons();
  //Add an event listener to each button
  pageIdList.forEach(function (page) {
    document.getElementById(page).addEventListener("click", changePage, false);
  });
};

function changePage() {
  var currentSelector = document.getElementById(currentSelectorId);
  var currentPage = document.getElementById(currentPageId);
  
  var pageId = "page-" + this.id;
  var page = document.getElementById(pageId);
  var pageSelector = document.getElementById(this.id);

  if (page.classList.contains("active")) {
    return;
  }

  currentSelector.classList.remove("button-active");
  currentSelector.classList.add("button-inactive");
  currentPage.classList.remove("active");
  currentPage.classList.add("inactive");

  if(currentPage.classList.contains('not-button'))
  {
    currentPage.style.display = 'none';
  }
  

  pageSelector.classList.remove("button-inactive");
  pageSelector.classList.add("button-active");

  page.classList.remove("inactive");
  page.classList.add("active");

  //Need to reset the scroll
  window.scrollTo(0, 0);

  currentSelectorId = this.id;
  currentPageId = pageId;
}

function changeTo(item) {


  var currentSelector = document.getElementById(currentSelectorId);
  var currentPage = document.getElementById(currentPageId);
  var pageId = "page-" + item;
  var page = document.getElementById(pageId);
  var pageSelector = document.getElementById(item);
  

  if(pageId == 'page-order-window')
  {
    document.getElementById('footer-normal').style.display = 'none';
    document.getElementById('footer-order-window').style.display = 'block';
    if(currentPageId == 'page-quote')
    {
      var stockname = $("#watchlist-modal-title-left").text();
      $("#navbar-title").html(stockname);
    }
    if(currentPageId == 'page-chart')
    {
      $("#navbar-title").html('EURUSD');
    }
  }
  else
  {
    document.getElementById('footer-normal').style.display = 'block';
    document.getElementById('footer-order-window').style.display = 'none';
  }


  if (page.classList.contains("active")) {
    return;
  }

  currentSelector.classList.remove("button-active");
  currentSelector.classList.add("button-inactive");
  currentPage.classList.remove("active");
  currentPage.classList.add("inactive");

  //Display none for drawer item- news, mailbox, journal,settings, about etc.
  if(currentPage.classList.contains('not-button'))
  {
    currentPage.style.display = 'none';
  }

  page.classList.remove("inactive");
  page.classList.add("active");
  


  //Need to reset the scroll
  window.scrollTo(0, 0);

  
  currentPageId = pageId;

// For only footer buttons
  if(getButtons().includes(item))
  {
    currentSelectorId = item;
    pageSelector.classList.remove("button-inactive");
    pageSelector.classList.add("button-active");
    
  }
// For not buttons
  else
  {
    page.style.display = 'block';
  }
  
}

//For side drawer open/close
function openSideDrawer() {
  document.getElementById("side-drawer").style.left = "0";
  document.getElementById("side-drawer-void").classList.add("d-block");
  document.getElementById("side-drawer-void").classList.remove("d-none");
}

function closeSideDrawer() {
  document.getElementById("side-drawer").style.left = "-100rem";
  document.getElementById("side-drawer-void").classList.add("d-none");
  document.getElementById("side-drawer-void").classList.remove("d-block");
}

window.openSideDrawer = openSideDrawer;
window.closeSideDrawer = closeSideDrawer;





