let files = [2, 3, 5, 4];

let participant = 0;

const tours = 5;
const places = 5;

for (i = 0; (i = tours); i++) {
  if (files[0] > 5) {
    console.log("le manège n'a que 5 places");
  } else if (files[0] < 5 && files[0] + files[1] > 5) {
    participant = files[0];
  } else if (files[0] < 5 && files[0] + files[1] + files[2] > 5) {
    participant = files[1];
  }

  else if (files[0] < 5 && files[0] + files[1] + files[2]+ files[3] > 5) {
    participant = files[2];
  }

  else if (files[0] < 5 && files[0] + files[1] + files[2]+ files[3]+ files[4] > 5) {
    participant = files[3];
  }

  else if (files[0] < 5 && files[0] + files[1] + files[2]+ files[3]+ files[4]+ files[5] > 5) {
    participant = files[4];
  }

  else if (files[0] < 5 && files[0] + files[1] + files[2]+ files[3]+ files[4]+ files[5] == 5) {
    participant = files[5];
  }


  for (j = 0; (j = files.length); j++) {
    let file = files[index];
  }
}
