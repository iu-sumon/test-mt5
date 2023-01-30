
var first_value = Number($("#first_field").val());
var sl_value = Number($("#low_value").text());
var tp_value = Number($("#high_value").text());
var stock_price = Number($("#low_value").text());
var stock_limit = Number($("#low_value").text());


$("#first_field").on("propertychange change click keyup input paste", function(){
  first_value = Number($("#first_field").val());
});

$("#sl_value_field").on("propertychange change click keyup input paste", function(){
  sl_value = Number($("#sl_value_field").val());
  
  //For updating markline 
  option.series[0].markLine={
    symbol:['none', 'none'],
    data:[{
    symbol:"none",
    label:{
      normal:{
          show:true, 
          position:'end',
          backgroundColor: 'blue',
          color: '#fff',
          padding: [3,4],
          distance: 0
      }
    },
    lineStyle: {
      normal: {
          color: 'blue', 
          width: 2 ,
          type: 'solid'
      },
      
  },
    yAxis: $("#sl_value_field").val()
  }]};
myChart.setOption(option,true,false);
});

$("#tp_value_field").on("propertychange change click keyup input paste", function(){
  tp_value = Number($("#tp_value_field").val());
  //For updating markline 
  option.series[1].markLine={
    symbol:['none', 'none'],
    data:[{
    symbol:"none",
    label:{
      normal:{
          show:true, 
          position:'end',
          backgroundColor: 'red',
          color: '#fff',
          padding: [3,4],
          distance: 0
      }
    },
    lineStyle: {
      normal: {
          color: 'red', 
          width: 2 ,
          type: 'solid'
      },
      
  },
    yAxis: $("#tp_value_field").val()
  }]};
myChart.setOption(option,true,false);
});

$("#price_field").on("propertychange change click keyup input paste", function(){
  stock_price = Number($("#price_field").val());
});

$("#stop_limit_price_field").on("propertychange change click keyup input paste", function(){
  stock_limit = Number($("#stop_limit_price_field").val());
});

function openmodal_order_execution(input) {
  $("#orderwindowModal").modal("show");
  $(".order_execution_mode")
    .unbind()
    .click(function (event) {
      $(input).val($(this).text());

      var execution_title = [
        "Buy Limit",
        "Sell Limit",
        "Buy Stop",
        "Sell Stop",
      ];

      if ($(this).text() == "Instant Execution") {
        $(".footer-place").attr("style", "display: none !important");
        $(".footer-buysell").attr(
          "style",
          "display: flex! important"
        );
        
        $("#execution_stop_limit_price_field").attr(
          "style",
          "display: none !important"
        );
        $("#execution_expiration_field").attr(
          "style",
          "display: none !important"
        );
        $("#execution_price_field").attr("style", "display: none !important");
        $("#execution_deviation_field").attr(
          "style",
          "display: flex! important"
        );

      } else {

        $(".footer-buysell").attr("style", "display: none !important");
        $(".footer-place").attr(
          "style",
          "display: flex! important"
        );

        if (execution_title.includes($(this).text())) {
          
          $("#execution_deviation_field").attr(
            "style",
            "display: none !important"
          );
          $("#execution_expiration_field").attr(
            "style",
            "display: flex !important"
          );
          $("#execution_price_field").attr("style", "display: flex !important");
          $("#execution_stop_limit_price_field").attr(
            "style",
            "display: none !important"
          );
        } else if (
          $(this).text() == "Buy Stop Limit" ||
          $(this).text() == "Sell Stop Limit"
        ) {
          
          $("#execution_price_field").attr("style", "display: flex !important");
          $("#execution_stop_limit_price_field").attr(
            "style",
            "display: flex !important"
          );
          $("#execution_expiration_field").attr(
            "style",
            "display: flex !important"
          );
          $("#execution_deviation_field").attr(
            "style",
            "display: none !important"
          );
        }
      }

      $("#orderwindowModal").modal("hide");
    });
}

function openmodal_expiration_period(input) {
  $("#expirationModal").modal("show");
  $(".expiration_mode")
    .unbind()
    .click(function (event) {
      $(input).val($(this).text());
      $("#expirationModal").modal("hide");
    });
}

function openmodal_symbol_list() {

  $("#symbollistModal").show();

  $(".modal_symbol")
    .unbind()
    .click(function (event) {
      $("#symbollistModal").hide();
    });
    
}

function increaseFirstValue(increaseby) {
  first_value = isNaN(first_value) ? 0 : first_value;
  first_value = first_value + Number(increaseby);
  document.getElementById("first_field").value = first_value.toFixed(2);
}

function decreaseFirstValue(decreaseby) {
  first_value = isNaN(first_value) ? 0 : first_value;
  first_value = first_value + Number(decreaseby);
  document.getElementById("first_field").value = first_value.toFixed(2);
}

function increaseSLValue(increaseby) {
  sl_value = isNaN(sl_value) ? 0 : sl_value;
  sl_value = sl_value + Number(increaseby);
  //document.getElementById("sl_value_field").value = sl_value.toFixed(5);
  $("#sl_value_field").val(sl_value.toFixed(5)).trigger("change");
}

function decreaseSLValue(decreaseby) {
  sl_value = isNaN(sl_value) ? 0 : sl_value;
  sl_value = sl_value + Number(decreaseby);
  $("#sl_value_field").val(sl_value.toFixed(5)).trigger("change");
}

function increaseTPValue(increaseby) {
  tp_value = isNaN(tp_value) ? 0 : tp_value;
  tp_value = tp_value + Number(increaseby);
  $("#tp_value_field").val(tp_value.toFixed(5)).trigger("change");
}

function decreaseTPValue(decreaseby) {
  tp_value = isNaN(tp_value) ? 0 : tp_value;
  tp_value = tp_value + Number(decreaseby);
  $("#tp_value_field").val(tp_value.toFixed(5)).trigger("change");
}

function increaseDevValue() {
  var dev_value = Number(document.getElementById("deviation_field").value);
  dev_value = isNaN(dev_value) ? 0 : dev_value;
  dev_value++;
  document.getElementById("deviation_field").value = dev_value;
}

function decreaseDevValue() {
  var dev_value = Number(document.getElementById("deviation_field").value);
  dev_value = isNaN(dev_value) ? 1 : dev_value;
  dev_value--;
  dev_value < 1 ? (dev_value = 1) : "";
  document.getElementById("deviation_field").value = dev_value;
}

function increasePriceValue(increaseby) {
  stock_price = isNaN(stock_price) ? 0 : stock_price;
  stock_price = stock_price + Number(increaseby);
  document.getElementById("price_field").value = stock_price.toFixed(5);
}

function decreasePriceValue(decreaseby) {
  stock_price = isNaN(stock_price) ? 0 : stock_price;
  stock_price = stock_price + Number(decreaseby);
  stock_price < 1 ? (stock_price = 0) : "";
  document.getElementById("price_field").value = stock_price.toFixed(5);
}

function increaseLimitValue(increaseby) {
  stock_limit = isNaN(stock_limit) ? 0 : stock_limit;
  stock_limit = stock_limit + Number(increaseby);
  document.getElementById("stop_limit_price_field").value = stock_limit.toFixed(5);
}

function decreaseLimitValue(decreaseby) {
  stock_limit = isNaN(stock_limit) ? 0 : stock_limit;
  stock_limit = stock_limit + Number(decreaseby);
  stock_limit < 1 ? (stock_limit = 0) : "";
  document.getElementById("stop_limit_price_field").value = stock_limit.toFixed(5);
}


var chartDom = document.getElementById('stock_timeseries');
var myChart = echarts.init(chartDom);
var option;

function randomData() {
  now = new Date(+now + oneDay);
  value = value + Math.random() * 21 - 10;
  return {
    name: now.toString(),
    value: [
      [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'),
      Math.round(value)
    ]
  };
}
let data = [];
let now = new Date(2023, 9, 3);
let oneDay = 3600 * 1000;
let value = Math.random() * 1000;
for (var i = 0; i < 1000; i++) {
  data.push(randomData());
}
option = {
  grid:{
    left:5,
    right:70
  },
  xAxis: {
    type: 'time',
    show: false,
    splitLine: {
      show: false
    }
  },
  yAxis: {
    type: 'value',
    boundaryGap: [0, '100%'],
    splitLine: {
      show: true
    },
    position: 'right',
    
  },
  series: [
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data: data,
      animation: false,
      // markLine: {
      //   symbol:['none', 'none'],
      //   data:[{
      //     label:{
      //       normal:{
      //           show:true, 
      //           position:'end',
      //           backgroundColor: 'blue',
      //           padding: [3,4],
      //           color: '#fff',
      //           distance: 0
                
      //       }
      //     },
      //     lineStyle: {
      //       normal: {
      //           color: 'blue', 
      //           width: 2 ,
      //           type: 'solid'
      //       },
            
      //   },
      //     yAxis: 600
      //   }]
      // }
    },
    {
      name: 'Fake Data',
      type: 'line',
      showSymbol: false,
      data: data,
      animation: false,
      // markLine: {
      //   symbol:['none', 'none'],
      //   data:[{
      //     label:{
      //       normal:{
      //           show:true, 
      //           position:'end',
      //           backgroundColor: 'red',
      //           padding: [3,4],
      //           color: '#fff',
      //           distance: 0
                
      //       }
      //     },
      //     lineStyle: {
      //       normal: {
      //           color: 'red', 
      //           width: 2 ,
      //           type: 'solid'
      //       },
            
      //   },
      //     yAxis: 900
      //   }]
      // }
    },
    
  ]
};
setInterval(function () {
  for (var i = 0; i < 5; i++) {
    data.shift();
    data.push(randomData());
  }
  myChart.setOption({
    series: [
      {
        data: data
      },
      {
        data: data
      }
    ]
  });
}, 1000);

option && myChart.setOption(option);
