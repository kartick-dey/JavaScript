function conquer(arr, s, m, e) {
  const mergedArr = [];
  let idx1 = s; //  first array start index
  let idx2 = m + 1; // 2nd array start index

  while (idx1 <= m && idx2 <= e) {
    if (arr[idx1] <= arr[idx2]) {
      mergedArr.push(arr[idx1++]);
    } else {
      mergedArr.push(arr[idx2++]);
    }
  }

  while (idx1 <= m) {
    mergedArr.push(arr[idx1++]);
  }

  while (idx2 <= e) {
    mergedArr.push(arr[idx2++]);
  }

  for (let i = 0, j = s; i < mergedArr.length; i++, j++) {
    arr[j] = mergedArr[i];
  }
}

function divide(arr, s, e) {
  if (s >= e) {
    return;
  }
  const mid = Math.round(s + (e - s) / 2);

  divide(arr, s, mid);
  divide(arr, mid + 1, e);

  conquer(arr, s, mid, e);
}

function mergeSort() {
  const arr = [6, 3, 9, 5, 2, 8];
  divide(arr, 0, arr.length - 1);
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

mergeSort();
