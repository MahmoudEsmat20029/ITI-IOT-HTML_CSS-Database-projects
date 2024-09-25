            /* --------------------------- First Question --------------------------- */
function UpperFirst(fullName) {
    return fullName.split(' ')
    .map((word, index) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
}

console.log(UpperFirst('the quick brown fox'));
            /* --------------------------- First Question End --------------------------- */
            /* --------------------------- Second Question --------------------------- */
function LongestWord (sentence) {
    var words = sentence.split(' ');
    let longestWord = '';

    words.forEach(word => {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    });

    return longestWord;
}

console.log(LongestWord('Web Development Tutorial'));
            /* --------------------------- Second Question End --------------------------- */
            /* --------------------------- Third Question --------------------------- */
function SortString(str) {
    return str.split('').sort().join('');
}

console.log(SortString('javascript'));
            /* --------------------------- Third Question End --------------------------- */
            /* --------------------------- Fourth Question --------------------------- */
function RandomArray(length) {
    if (length < 1 || length > 10) {
        throw new Error('Length must be between 1 and 10');
    }

    let array = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 10) + 1);
    }
    return array;
}

console.log(RandomArray(5));
            /* --------------------------- Fourth Question End --------------------------- */
            /* --------------------------- Fifth Question --------------------------- */
function UserData() {
    let username = '';
    while (!username) {
        username = prompt('Enter your username:');
    }

    let grades = '';
    while (true) {
        grades = prompt('Enter your grades separated by commas (90,50,30,10):');
        if (grades && grades.split(',').every(item => !isNaN(item.trim()))) {
            break;
        }
    }

    let gradesArray = grades.split(',').map(Number);
    let average = gradesArray.reduce((acc, grade) => acc + grade, 0) / gradesArray.length;

    console.log(`Welcome, ${username}!`);
    console.log(`Your average grade is: ${average.toFixed(2)}`);
}

UserData();
            /* --------------------------- Fifth Question End --------------------------- */