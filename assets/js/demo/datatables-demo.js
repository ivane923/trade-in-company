// Call the dataTables jQuery plugin
$(document).ready(function () {
  $(".datatable").DataTable({
    targets: "no-sort",
    bSort: false,
    order: [],
  });
});
