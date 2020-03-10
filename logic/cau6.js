$(document).ready(function() {
  // Cau 6
  listNumber = () => {
    let num = parseInt($("#6_number").val());
    for (let i = num; i > 1; i--) {
      if (isNguyenTo(i)) {
        $("#6_button").after(`<span>${i},</span>`);
      }
    }
  };

  isNguyenTo = num => {
    let checknum = true;
    if (num === 1) return true;
    for (let i = 2; i < num; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };
});
