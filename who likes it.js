//facebook likes how you knew it :D
function likes(names) {
  if (names.length === 0) {
    console.log('no one likes this');
  }
  if (names.length === 1) {
    console.log(`${names[0]} likes this`);
  }
  if (names.length === 2) {
    console.log(`${names[0]} and ${names[1]} like this`);
  }
  if (names.length === 3) {
    console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
  }
  if (names.length > 3) {
    console.log(`${names[0]}, ${names[1]} and ${names.length - 2} like others this`);
  }
}

likes(['Alex', 'Jacob', 'Mark', 'Max', 'Matej']);