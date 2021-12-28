// Set new default font family and font color to mimic Bootstrap's default styling
(Chart.defaults.global.defaultFontFamily = "Nunito"),
  '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = "#858796";

// Trade-In Cost
$(function () {
  var ctx = document.getElementById("totalTradeInCost");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar 21", "6 AM", "12 PM", "6 PM"],
      datasets: [
        {
          label: "Earnings",
          lineTension: 0.1,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "#212529",
          pointRadius: 2,
          pointBackgroundColor: "#212529",
          pointBorderColor: "#212529",
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 1,
          data: [0, 200000, 50000, 5000, 500000, 30000, 1000, 15000, 200000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 10,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 10,
              padding: 0,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + number_format(value);
              },
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 5,
        yPadding: 5,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 5,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });
});
// Online Trade-In Sessions
$(function () {
  var ctx = document.getElementById("onlineTradeInSessions");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar 21", "6 AM", "12 PM", "6 PM"],
      datasets: [
        {
          label: "Earnings",
          lineTension: 0.1,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "#212529",
          pointRadius: 2,
          pointBackgroundColor: "#212529",
          pointBorderColor: "#212529",
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 1,
          data: [0, 200000, 50000, 5000, 500000, 30000, 1000, 15000, 200000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 7,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 10,
              padding: 0,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + number_format(value);
              },
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });
});
// Returning Customer Rate
$(function () {
  var ctx = document.getElementById("returningCustomerRate");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar 21", "6 AM", "12 PM", "6 PM"],
      datasets: [
        {
          label: "Earnings",
          lineTension: 0.1,
          backgroundColor: "rgba(0, 0, 0, 1)",
          borderColor: "#212529",
          pointRadius: 1,
          pointBackgroundColor: "#212529",
          pointBorderColor: "#212529",
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 1,
          data: [0, 200000, 50000, 5000, 500000, 30000, 1000, 15000, 200000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 7,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 10,
              padding: 0,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + number_format(value);
              },
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });
});
// Average Trade-In Value
$(function () {
  var ctx = document.getElementById("averageTradeInValue");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar 21", "6 AM", "12 PM", "6 PM"],
      datasets: [
        {
          label: "Earnings",
          lineTension: 0.1,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "#212529",
          pointRadius: 2,
          pointBackgroundColor: "#212529",
          pointBorderColor: "#212529",
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 1,
          data: [0, 200000, 50000, 5000, 500000, 30000, 1000, 15000, 200000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 7,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 10,
              padding: 0,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + number_format(value);
              },
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });
});
// Total Trade-Ins
$(function () {
  var ctx = document.getElementById("totalTradeIns");
  var myLineChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Mar 21", "6 AM", "12 PM", "6 PM"],
      datasets: [
        {
          label: "Earnings",
          lineTension: 0.1,
          backgroundColor: "rgba(78, 115, 223, 0.05)",
          borderColor: "#212529",
          pointRadius: 2,
          pointBackgroundColor: "#212529",
          pointBorderColor: "#212529",
          pointHoverRadius: 2,
          pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
          pointHoverBorderColor: "rgba(78, 115, 223, 1)",
          pointHitRadius: 10,
          pointBorderWidth: 1,
          data: [0, 200000, 50000, 5000, 500000, 30000, 1000, 15000, 200000],
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
        },
      },
      scales: {
        xAxes: [
          {
            time: {
              unit: "date",
            },
            gridLines: {
              display: false,
              drawBorder: false,
            },
            ticks: {
              maxTicksLimit: 7,
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              maxTicksLimit: 10,
              padding: 0,
              // Include a dollar sign in the ticks
              callback: function (value, index, values) {
                return "$" + number_format(value);
              },
            },
            gridLines: {
              color: "rgb(234, 236, 244)",
              zeroLineColor: "rgb(234, 236, 244)",
              drawBorder: false,
              borderDash: [2],
              zeroLineBorderDash: [2],
            },
          },
        ],
      },
      legend: {
        display: false,
      },
      tooltips: {
        backgroundColor: "rgb(255,255,255)",
        bodyFontColor: "#858796",
        titleMarginBottom: 10,
        titleFontColor: "#6e707e",
        titleFontSize: 14,
        borderColor: "#dddfeb",
        borderWidth: 1,
        xPadding: 15,
        yPadding: 15,
        displayColors: false,
        intersect: false,
        mode: "index",
        caretPadding: 10,
        callbacks: {
          label: function (tooltipItem, chart) {
            var datasetLabel =
              chart.datasets[tooltipItem.datasetIndex].label || "";
            return datasetLabel + ": $" + number_format(tooltipItem.yLabel);
          },
        },
      },
    },
  });
});

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + "").replace(",", "").replace(" ", "");
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = typeof thousands_sep === "undefined" ? "," : thousands_sep,
    dec = typeof dec_point === "undefined" ? "." : dec_point,
    s = "",
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return "" + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
}
