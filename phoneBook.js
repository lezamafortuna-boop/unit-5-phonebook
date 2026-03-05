// Phone Book Entry
class PhoneBookEntry {
  constructor(name, number, address) {
    this.name = name;
    this.number = number;
    this.address = address;
  }
}

// Phone Book Class
class PhoneBook {
  constructor() {
    this.entries = [];
  }

  addEntry(name, number, address) {
    const entry = new PhoneBookEntry(name, number, address);
    this.entries.push(entry);
    return entry;
  }

  updateEntry(name, newData) {
    const entry = this.entries.find(e => e.name === name);
    if (!entry) return null;

    if (newData.name !== undefined) entry.name = newData.name;
    if (newData.number !== undefined) entry.number = newData.number;
    if (newData.address !== undefined) entry.address = newData.address;

    return entry;
  }

  deleteEntry(name) {
    const index = this.entries.findIndex(e => e.name === name);
    if (index === -1) return false;

    this.entries.splice(index, 1);
    return true;
  }

  // Quick Sort (sort by any field)
  quickSort(field) {
    const arr = this.entries;

    const compare = (a, b) => {
      const x = a[field];
      const y = b[field];

      if (typeof x === "string" && typeof y === "string") {
        return x.localeCompare(y);
      }
      return x - y;
    };

    const partition = (low, high) => {
      const pivot = arr[high];
      let i = low - 1;

      for (let j = low; j < high; j++) {
        if (compare(arr[j], pivot) <= 0) {
          i++;
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
      }

      [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
      return i + 1;
    };

    const quickSortRecursive = (low, high) => {
      if (low < high) {
        const pi = partition(low, high);
        quickSortRecursive(low, pi - 1);
        quickSortRecursive(pi + 1, high);
      }
    };

    quickSortRecursive(0, arr.length - 1);
  }
}

// Generate 20 Random Entries
function generateRandomEntries(book) {
  const names = [
    "Luis", "Ana", "Carlos", "Maria", "John", "Sofia", "Daniel", "Elena",
    "Victor", "Laura", "Miguel", "Paula", "Robert", "Julia", "David",
    "Isabella", "Marco", "Natalia", "Henry", "Camila"
  ];

  const streets = [
    "Main St", "Sunset Blvd", "Ocean Drive", "Maple Ave", "Pine St",
    "Cedar Lane", "Hillcrest Rd", "Riverside Way", "Broadway", "Elm St"
];

  for (let i = 0; i < 20; i++) {
    const name = names[i];
    const number = `555-${Math.floor(1000 + Math.random() * 9000)}`;
    const address = `${Math.floor(1 + Math.random() * 999)} ${streets[i % streets.length]}`;
    book.addEntry(name, number, address);
  }
}

// Demo
const book = new PhoneBook();
generateRandomEntries(book);

console.log("=== ORIGINAL ENTRIES ===");
console.log(book.entries);

book.quickSort("name");
console.log("\n=== SORTED BY NAME ===");
console.log(book.entries);

book.quickSort("number");
console.log("\n=== SORTED BY NUMBER ===");
console.log(book.entries);

book.quickSort("address");
console.log("\n=== SORTED BY ADDRESS ===");
console.log(book.entries);