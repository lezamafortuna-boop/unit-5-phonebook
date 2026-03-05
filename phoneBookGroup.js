// Array to hold entries
let phonebook = [];

class Entry {
    constructor(name, phoneNumber, address) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.address = address;
    }
}

// partition function
// sortOption determines how the phonebook is to be sorted
function partition(arr, low, high, sortOption)
{

    // choose the pivot
    let pivot = arr[high][sortOption];

    // index of smaller element and indicates
    // the right position of pivot found so far
    let i = low - 1;

    // traverse arr[low..high] and move all smaller
    // elements to the left side. Elements from low to
    // i are smaller after every iteration
    for (let j = low; j <= high - 1; j++) {
        if (arr[j][sortOption] < pivot) {
            i++;
            swap(arr, i, j);
        }
    }

    // move pivot after smaller elements and
    // return its position
    swap(arr, i + 1, high);
    return i + 1;
}

// swap function
function swap(arr, i, j)
{
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

// the QuickSort function implementation
function quickSort(arr, low, high, sortOption)
{
    if (low < high) {

        // pi is the partition return index of pivot
        let pi = partition(arr, low, high, sortOption);

        // recursion calls for smaller elements
        // and greater or equals elements
        quickSort(arr, low, pi - 1, sortOption);
        quickSort(arr, pi + 1, high, sortOption);
    }
}


// Populate phonebook with random entries
for (let i = 0; i < 100; i++) {
    const randomName = "contact_" + Math.floor(Math.random() * 100) + 100;
    const randomPhone = Math.floor(Math.random() * 9000000000) + 1000000000;
    const randomAddress = (Math.floor(Math.random() * 999) + 1) + " Random Street";
    phonebook.push(new Entry(randomName, randomPhone, randomAddress));
}

// call QuickSort on the entire array
quickSort(phonebook, 0, phonebook.length - 1, "name");

console.log(phonebook);