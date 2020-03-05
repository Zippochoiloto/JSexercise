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

  GenderNum = () => {
    for (let i = 1000; i < 9999; i++) {}
  };

  isThuanNghich = num => {};
});
