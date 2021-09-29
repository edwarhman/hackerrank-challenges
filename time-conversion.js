let s = "01:00:00AM";
console.log(s);

let arr = [];
if (s.includes('AM')) {
  s =  s.replace('AM', '');
  arr = s.split(":");  
  if (arr[0] === '12') {
    arr[0] = '00';
  }
} else {
  s =  s.replace('PM', '');
  arr = s.split(":");  
  if (arr[0] !== "12") {
    arr[0] = (Number(arr[0]) + 12).toString();
  }
}
s = arr.join(":");

console.log(s);
