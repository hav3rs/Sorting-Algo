function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = current;
    }
    return arr;
  }
  
  // Example usage:
  const arrayToSort = [12, 11, 13, 5, 6];
  console.log("Original array:", arrayToSort);
  const sortedArray = insertionSort(arrayToSort);
  console.log("Sorted array:", sortedArray);
  


  