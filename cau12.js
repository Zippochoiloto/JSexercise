$(document).ready(function() {
  sortString = () => {
    let string = $("#12_string").val();
    string = string.trim();
    console.log("new string", string);
    let stringArr = string.split("");
    let newStrArray = [];
    let lowerArray = [];
    stringArr.map(val => {
      if (isUpperCase(val)) {
        newStrArray.unshift(val);
        newStrArray = newStrArray.sort();
      } else {
        lowerArray.push(val);
      }
    });
    lowerArray.map(val => {
      newStrArray.push(val);
    });
    $("#12_sortButton").after(`<div>Dãy xóa 3 phần tử: ${newStrArray}</div>`);
  };

  const isUpperCase = string => /^[A-Z]*$/.test(string);
});
