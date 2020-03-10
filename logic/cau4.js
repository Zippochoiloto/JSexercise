$(document).ready(function() {
  // Cau 4
  GenderNum = () => {
    let count = 0;
    for (let i = 999999; i > 100000; i--) {
      if (isThuanNghich(i)) {
        count++;
        $("#4_button").after(`<span> ${i}</span>`);
      }
    }
  };

  isThuanNghich = num => {
    let listNumber = [];
    listNumber = num.toString().split("");
    // console.log("list", listNumber);
    for (let i = 0; i < 3; i++) {
      if (listNumber[i] !== listNumber[6 - i - 1]) {
        return false;
      }
    }
    return true;
  };
});
