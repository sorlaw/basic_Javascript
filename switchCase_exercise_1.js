const pilihan = 5;

// percabangan 1
if (pilihan == 1) {
  console.log("Light");
} else if (pilihan == 2) {
  console.log("Dark");
} else if (pilihan == 3) {
  console.log("nocturne");
} else if (pilihan == 4) {
  console.log("Terminal");
} else {
  console.log("Indigo");
}

// percabangan 2
switch (pilihan) {
  case 1:
    console.log("Light");
    break;
  case 2:
    console.log("Dark");
    break;
  case 3:
    console.log("Nocturne");
    break;
  case 4:
    console.log("Terminal");
    break;

  default:
    console.log("Indigo");
    break;
}

// percabangan 3
console.log(pilihan == 1 ? "Light" : pilihan == 2 ? "Dark" : pilihan == 3 ? "Nocturne" : pilihan == 4 ? "Terminal" : "Indigo");
