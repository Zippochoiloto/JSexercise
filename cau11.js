$(document).ready(function() {
  let countNo11 = 0;
  $("#11_button").click(function() {
    for (let i = countNo11; i > 0; i--) {
      $(`#11_${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#11_number").val());
    countNo11 = num;
    for (let i = num; i > 0; i--) {
      $("#11_button").after(`<div >
        <label id = "label${i}">Phan tu thu ${i}</label>
        <input type = "number" id = 11_${i} />
        </div>`);
    }
  });
  let countNo11Add = 0;
  $("#11_button_add").click(function() {
    for (let i = countNo11; i > 0; i--) {
      $(`#11add_${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#11_number_add").val());
    countNo11Add = num;
    for (let i = num; i > 0; i--) {
      $("#11_button_add").after(`<div >
        <label id = "label${i}">Phan tu thu ${i}</label>
        <input type = "number" id = 11add_${i} />
        </div>`);
    }
  });
  let myArr11 = [];
  let counterOdd = 0;
  getSum = () => {
    for (let i = 1; i <= countNo11; i++) {
      myArr11.push(parseInt($(`#11_${i}`).val()));
    }
    let sumPos = myArr11.reduce(countPositive, 0);
    let sumNeg = myArr11.reduce(countNegative, 0);
    let sumOdd = myArr11.reduce(countOdd, 0);
    $("#11_commands").after(`<div>Tong cac so duong: ${sumPos}</div>
      <div>Tong cac so am: ${sumNeg}</div>
      <div>Tong cac so chan: ${sumOdd}</div>
      <div>So phan tu chan: ${counterOdd}</div>`);
  };

  countPositive = (sum, startVal) => {
    if (startVal >= 0) {
      return (startVal += sum);
    }
    return sum;
  };
  countNegative = (sum, startVal) => {
    if (startVal < 0) {
      return (startVal += sum);
    }
    return sum;
  };

  findSecondSmallest = () => {
    let calculatedMyArr = myArr11;
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    let min = Math.min(...calculatedMyArr);
    calculatedMyArr.forEach((val, index) => {
      if (val === min) {
        calculatedMyArr.splice(index, 1);
      }
    });
    let min2nd = Math.min(...calculatedMyArr);
    $("#11_commands").after(`<div>Số nhỏ thứ hai trong dãy: ${min2nd}</div>`);
  };

  sortArray = () => {
    // console.log(myArr11);
    let calculatedMyArr = [];
    let newArray = [];
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    calculatedMyArr = calculatedMyArr.sort((a, b) => {
      return b - a;
    });
    $("#11_commands").after(
      `<div>Dãy được sắp xếp lại từ lớn đến bé: ${calculatedMyArr}</div>`
    );
    calculatedMyArr = calculatedMyArr.sort((a, b) => {
      return a - b;
    });
    $("#11_commands").after(
      `<div>Dãy được sắp xếp lại từ nhỏ đến lớn: ${calculatedMyArr}</div>`
    );
    calculatedMyArr.map(val => {
      if (val % 2 === 0) {
        newArray.push(val);
      } else {
        newArray.unshift(val);
      }
    });
    $("#11_commands").after(`<div>Sắp xếp theo chẵn lẻ: ${newArray}</div>`);
  };

  deleteElement = () => {
    let calculatedMyArr = [];
    let delEl = parseInt($("#11_delete_num").val());
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    calculatedMyArr.map((val, index) => {
      if (val === delEl) {
        calculatedMyArr.splice(index, 1);
      }
    });
    $("#11_commands").after(`<div>Dẫy đã được xóa: ${calculatedMyArr}</div>`);
  };
  countOdd = (sum, startVal) => {
    if (startVal % 2 === 0 && startVal > 0) {
      counterOdd += 1;
      return (startVal += sum);
    }
    return sum;
  };

  compareArray = () => {
    let calculatedMyArr = [];
    let calculatedMyArr2 = [];
    let sumArray = [];
    let combineArray = [];
    let differArray = [];
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr2.push(parseInt($(`#11add_${i}`).val()));
    }
    calculatedMyArr.map((val, index) => {
      sumArray[index] = val + calculatedMyArr2[index];
      if (calculatedMyArr2.includes(val)) {
        combineArray.push(val);
      }
      if (!calculatedMyArr2.includes(val)) {
        differArray.push(val);
      }
    });
    calculatedMyArr2.map(val => {
      if (!calculatedMyArr.includes(val)) {
        differArray.push(val);
      }
    });
    $("#11_commands").after(
      `<div>Tổng hai dãy nhập vào : ${sumArray}</div>
        <div>Dãy các giá trị xuất hiện trong cả hai dãy: ${combineArray}</div>
        <div>Dãy các giá trị không xuất hiện trong cả hai dãy: ${differArray}</div>`
    );
  };

  moveEl = () => {
    let calculatedMyArr = [];
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    let move5FirstArr = calculatedMyArr;
    let move5midArr = calculatedMyArr;
    let midIndex = Math.floor(calculatedMyArr.length / 2);
    console.log("mid index", midIndex);
    move5FirstArr.map((val, index) => {
      if (index >= move5FirstArr.length - 5) {
        move5FirstArr[move5FirstArr.length - index - 1] = val;
        move5midArr[midIndex + move5midArr.length - index - 1] = val;
      }
    });
    $("#11_commands").after(
      `<div>Tổng hai dãy nhập vào : ${sumArray}</div>
        <div>Dãy các giá trị xuất hiện trong cả hai dãy: ${combineArray}</div>
        <div>Dãy các giá trị không xuất hiện trong cả hai dãy: ${differArray}</div>`
    );
  };

  deleteMultipleElement = () => {
    let calculatedMyArr = [];
    for (let i = 1; i <= countNo11; i++) {
      calculatedMyArr.push(parseInt($(`#11_${i}`).val()));
    }
    let delEl = parseInt($("#11_number_delete").val());
    let del3ElArray = calculatedMyArr;
    let delElAfterArray = calculatedMyArr;
    del3ElArray.map((val, index) => {
      if (val === delEl) {
        del3ElArray.splice(index + 1, 3);
      }
    });
    delElAfterArray.map((val, index) => {
      if (val === delEl) {
        delElAfterArray.splice(index + 1, delElAfterArray.length);
      }
    });
    $("#11_commands").after(
      `<div>Dãy xóa 3 phần tử: ${del3ElArray}</div>
        <div>Dãy các phần tử đã xóa phía sau phần tử đã chọn : ${delElAfterArray}</div>`
    );
  };
});
