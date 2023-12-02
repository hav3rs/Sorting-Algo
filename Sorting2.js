function insertionSort(arr) {
    const len = arr.length;
    for (let i = 1; i < len; i++) {
      let current = arr[i];
      let j = i - 1;
      
      // Move elements of arr[0..i-1], that are greater than current,
      // to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];
        j--;
      }
      
      arr[j + 1] = current; // Insert the current element in its correct position
    }
    return arr;
  }
  
  // Example usage:
  const arrayToSort = [12, 11, 13, 5, 6];
  console.log("Original array:", arrayToSort);
  const sortedArray = insertionSort(arrayToSort);
  console.log("Sorted array:", sortedArray);
  