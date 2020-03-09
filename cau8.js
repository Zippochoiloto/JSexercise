$(document).ready(function() {
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
});
