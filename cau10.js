$(document).ready(function() {
  // Cau 10
  let count_no10 = 0;
  let my_arr10 = [];
  $("#10_button").click(function() {
    for (let i = count_no10; i > 0; i--) {
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

  sortArray10 = () => {
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
});
