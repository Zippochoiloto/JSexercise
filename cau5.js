$(document).ready(function() {
  getSum5 = () => {
    $("#5_sum").remove();
    let num = $("#5_number").val();
    let listNumber = num.split("");
    let sum = 0;
    listNumber.map(val => (sum += parseInt(val)));
    if (sum) {
      $("#5_button").after(`<span id =5_sum>Tổng các chữ số: ${sum}</span>`);
    }
  };
});
