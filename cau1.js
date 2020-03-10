$(document).ready(function() {
  // Cau 1
  $("#1_Button").click(function() {
    let check = false;
    let num1 = parseInt($("#1_numberA").val());
    let num2 = parseInt($("#1_numberB").val());
    if (num1 === 0 || num2 === 0) {
      $("#resultUCLN").text("Uoc chung lon nhat la " + (num1 + num2));
      $("#resultBCNN").text("BCNN khong ton tai");
    }
    findUCLN = () => {
      numA = num1;
      numB = num2;
      while (numA !== numB) {
        if (numA > numB) {
          numA -= numB;
        } else {
          numB -= numA;
        }
      }
      return numA;
    };

    findBCNN = () => {
      const UCLN = findUCLN();
      BCNN = (num1 * num2) / UCLN;
      return BCNN;
    };
    $("#resultUCLN").text("Uoc chung lon nhat la " + findUCLN());
    $("#resultBCNN").text("Boi chung nho nhat la " + findBCNN());
  });
});
