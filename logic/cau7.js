$(document).ready(function() {
  let listFibo = [0, 1];
  listNumberFibo = () => {
    num = parseInt($("#7_number").val());
    while (listFibo[listFibo.length - 1] <= num) {
      listFibo.push(
        listFibo[listFibo.length - 1] + listFibo[listFibo.length - 2]
      );
    }
    listFibo.splice(listFibo.length - 1, 1);
  };

  listFiboAndPrime = () => {
    listNumberFibo();
    listFibo.map((val, index) => {
      if (!isNguyenTo(val)) {
        listFibo.splice(index, 1);
      }
    });
    $("#7_button").after(
      `<span id= "listFibo">List Fibo và là số nguyên tố: ${listFibo}</span>`
    );
  };
});
