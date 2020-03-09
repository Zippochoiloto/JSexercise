$(document).ready(function() {
  let count_no9 = 0;
  my_arr9 = [];
  $("#9_button").click(function() {
    for (let i = count_no9; i > 0; i--) {
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
});
