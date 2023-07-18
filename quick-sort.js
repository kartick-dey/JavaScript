function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function partition(arr, l, h) {
  const pivot = arr[h];
  let i = -1;

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < pivot) {
      i++;
      swap(arr, i, j);
    }
  }
  i++;
  swap(arr, i, h);
  return i;
}

function quickSort(arr, l, h) {
  if (l < h) {
    const pivot = partition(arr, l, h);
    quickSort(arr, l, pivot - 1);
    quickSort(arr, pivot + 1, h);
  }
  return arr;
}
const arr = [6, 3, 9, 5, 2, 8];
const sArr = quickSort(arr, 0, arr.length - 1);
for (let i = 0; i < sArr.length; i++) {
  console.log(sArr[i]);
}
