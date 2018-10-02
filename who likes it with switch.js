//facebook likes how you knew it :D (but with switch)
function likes(names) {
    let length = names.length;
    switch (length) {
        case 0:
            console.log('no one likes this');
            break;
        case 1:
            console.log(`${names[0]} likes this`);
            break;

        case 2:
            console.log(`${names[0]} and ${names[1]} like this`);
            break;

        case 3:
            console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
            break;

        case 3:
            console.log(`${names[0]}, ${names[1]} and ${names[2]} like this`);
            break;

        default:
            console.log(`${names[0]}, ${names[1]} and ${names.length - 2} like others this`);
            break;
    }
}

likes(['Alex', 'Jacob', 'Mark']);