$(document).ready(function() {

let count = 0;
  let my_arr = [];
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
})