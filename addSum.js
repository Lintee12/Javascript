function sumAll(arr) {
  var answer = 0;
  if (arr[1] > arr[0]) {
    var a = arr[0];
    var b = arr[1];

    answer = a + b;

    var temp = a;
    var tempArr = [];

    while (temp < (b - 1)) {
      temp++;
      tempArr.push(temp);
    }
    for (let i = 0; i < tempArr.length; i++) {
      answer += tempArr[i];
    }
  }
  else {
    var a = arr[1];
    var b = arr[0];
    answer = a + b;

    var temp = a;
    var tempArr = [];

    while (temp < (b - 1)) {
      temp++;
      tempArr.push(temp);
    }
    for (let i = 0; i < tempArr.length; i++) {
      answer += tempArr[i];
    }
  }
  console.log(answer)
  return answer;
}
sumAll([4, 1]);