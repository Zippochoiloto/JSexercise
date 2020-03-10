$(document).ready(function() {
  $("#2_Button").click(function() {
    let strOutPut = "";
    // let count = 0;
    let num = parseInt($("#2_number").val());
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        num /= i;
        strOutPut = strOutPut.concat(`${i},`);
      }
    }
    $("#2_result").text(strOutPut);
  });
});
