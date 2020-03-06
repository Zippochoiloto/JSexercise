$(document).ready(function() {
  // Cau 1
  $("#1_Button").click(function() {
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

  //   Cau 2
  $("#2_Button").click(function() {
    let strOutPut = "";
    let count = 0;
    let num = parseInt($("#2_number").val());
    for (let i = 2; i <= num; i++) {
      while (num % i === 0) {
        num /= i;
        strOutPut = strOutPut.concat(`${i},`);
      }
      //   if (num > i) {
      //     strOutPut = strOutPut.concat(`*`);
      //   }
    }
    $("#2_result").text(strOutPut);
  });

  let count = 0;
  let my_arr = [];
  //   Cau 3
  $("#3_button").click(function() {
    for (let i = count; i > 0; i--) {
      $(`#${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#3_number").val());
    count = num;
    for (let i = num; i > 0; i--) {
      $("#3_button").after(`<div id = "label${i}">
      <label>Phan tu thu ${i}</label>
      <input type = "number" id = ${i} />
      </div>`);
    }
  });

  $("#3_resolve").click(function() {
    for (let i = 1; i <= count; i++) {
      my_arr.push($(`#${i}`).val());
    }
    // console.log("max", Math.max(...my_arr));
    $("#cau_A").text(
      `Số lớn nhất trong mảng: ` + Math.max(...my_arr).toString()
    );
    my_arr = my_arr.sort((a, b) => {
      return b - a;
    });
    $("#cau_B").text(`List giam dan: ` + my_arr);
    $("#cau_C").text(`Bạn có muốn thêm vào list ?`);
    $("#cau_C").after(`<div id = "addElement">
      <button id = "3_Yes" onclick = "YesClickHandler()">Yes</button>
        <button id = "No">No</button>     
      </div>`);
  });

  YesClickHandler = () => {
    $("#addElement").after(
      `<div id = "elValue">
        <label>Phan tu them vao: </label>
        <input type = "number" id = "3_el"/>
        <br>
        <button id = "Add" onclick = "addHandler()" >ADD</button>
        </div>`
    );
  };

  addHandler = () => {
    my_arr.push($("#3_el").val());
    console.log("my arr", my_arr);
    my_arr = my_arr.sort((a, b) => {
      return b - a;
    });
    $("#elValue").after(`<span>List sau khi them moi: ${my_arr}</span>`);
  };
  $("#Add").click(function() {});
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

  // Cau 5
  getSum = () => {
    $("#5_sum").remove();
    let num = $("#5_number").val();
    let listNumber = num.split("");
    let sum = 0;
    listNumber.map(val => (sum += parseInt(val)));
    if (sum) {
      $("#5_button").after(`<span id =5_sum>Tổng các chữ số: ${sum}</span>`);
    }
  };

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
  let listFibo = [0, 1];
  // Cau 7
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
  //Cau 8
  GiaiPT = () => {
    let a = parseInt($("#8_number_1").val());
    let b = parseInt($("#8_number_2").val());
    let c = parseInt($("#8_number_3").val());
    let d = parseInt($("#8_number_4").val());

    let delta0 = b * b - 3 * a * c;
    let delta1 = 2 * b * b * b - 9 * a * b * c + 27 * a * a * d;
    let delta = (delta1 * delta1 - 4 * delta0 * delta0 * delta0) / (27 * a * a);
    let C = Math.pow(
      (Math.pow(delta1 * delta1 - 4 * delta0 * delta0 * delta0, -2) + delta1) /
        2,
      -3
    );
    let u = (-1 + Math.pow(-3)) / 2;
    let ans1 = -(b + u * C + delta0 / (u * c)) / (3 * a);
    let ans2 = -(b + u * u * C + delta0 / (u * u * c)) / (3 * a);
    let ans3 = -(b + u * u * u * C + delta0 / (u * u * u * c)) / (3 * a);
    console.log("answer", ans1);
    $("#8_button").after(`<span id = "Ans1">${ans1}</span>`);
    $("#8_button").after(`<span id = "Ans2">${ans2}</span>`);
    $("#8_button").after(`<span id = "Ans3">${ans3}</span>`);
  };
  let count_no9 = 0;
  my_arr9 = [];
  //Cau 9
  $("#9_button").click(function() {
    for (let i = count; i > 0; i--) {
      $(`#${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#9_number").val());
    count_no9 = num;
    for (let i = num; i > 0; i--) {
      $("#9_button").after(`<div id = "label${i}">
      <label>Phan tu thu ${i}</label>
      <input type = "number" id = 9_${i} />
      </div>`);
    }
  });

  recursiveFunction = (arr, x, start, end) => {
    if (start > end) return false;

    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === x) return mid;
    if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1);
    else return recursiveFunction(arr, x, mid + 1, end);
  };

  findIndex = () => {
    my_arr9 = [];
    for (let i = count_no9; i > 0; i--) {
      my_arr9.push(parseInt($(`#9_${i}`).val()));
      my_arr9 = my_arr9.sort(function(a, b) {
        return a - b;
      });
    }
    let find_number = parseInt($("#9_number_find").val());
    let index_find = recursiveFunction(
      my_arr9,
      find_number,
      0,
      my_arr9.length - 1
    );
    if (index_find >= 0 && index_find !== false) {
      $("#9_findButton").after(
        `<div>Array sau khi sort: ${my_arr9}</div><div id = '9_result'>Index tim thay: ${index_find}</div>`
      );
    }
    if (index_find === false) {
      $("#9_findButton").after(`<div id = '9_result'>Can not find index</div>`);
    }
  };

  let count_no10 = 0;
  let my_arr10 = [];
  $("#10_button").click(function() {
    for (let i = count; i > 0; i--) {
      $(`#${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#10_number").val());
    count_no10 = num;
    for (let i = num; i > 0; i--) {
      $("#10_button").after(`<div id = "label${i}">
      <label>Phan tu thu ${i}</label>
      <input type = "date" id = 10_${i} />
      </div>`);
    }
  });

  sortArray = () => {
    for (let i = count_no10; i > 0; i--) {
      let el = new Date($(`#10_${i}`).val());
      my_arr10.push(el);
    }
    my_arr10 = my_arr10.sort((a, b) => b - a);
    my_arr10.map((val, index) => {
      $("#10_sortButton").after(
        `<div id = "date${index}">${val.toLocaleDateString()}</div>`
      );
    });
  };

  let count_no11 = 0;
  $("#11_button").click(function() {
    for (let i = count; i > 0; i--) {
      $(`#11_${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#11_number").val());
    count_no11 = num;
    for (let i = num; i > 0; i--) {
      $("#11_button").after(`<div id = "label${i}">
      <label>Phan tu thu ${i}</label>
      <input type = "number" id = 11_${i} />
      </div>`);
    }
  });

  $("#11_button_add").click(function() {
    for (let i = count; i > 0; i--) {
      $(`#11add_${i}`).remove();
      $(`#label${i}`).remove();
    }
    let num = parseInt($("#11_number").val());
    count_no11 = num;
    for (let i = num; i > 0; i--) {
      $("#11_button_add").after(`<div id = "label${i}">
      <label>Phan tu thu ${i}</label>
      <input type = "number" id = 11add_${i} />
      </div>`);
    }
  });
});
