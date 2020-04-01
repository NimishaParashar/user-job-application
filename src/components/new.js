console.log("alsdfgsdfgsdfgdflk");

let arr = [1, 2, 1, 1, 3];
arr = [...new Set(arr)];
console.log(arr);
const emp = [{ id: 1, name: "nimisha" }];
function filterArr(arr, emp) {
  return emp.find(ele2 => ele2.id == arr.find(ele => ele.id == 1).id).name;
}

console.log(filterArr(arr, emp));
