// Sarah Frost's ascii art project for DANM 220

//this is an object of arrays
//each letter is a key - and the array of lines is the value
var Alpha = {
    a: ['AAAA','A  A','AAAA','A  A','A  A'],
    b: ['BBBB', 'B  B','BBBB','B  B','BBBB'],
    c: ['CCCC','C   ','C   ','C   ','CCCC'],
    d: ['DDDD','D  D','D  D','D  D','DDDD'],
    e: ['EEEE','E   ','EEEE','E   ','EEEE'],
    f: ['FFFF','F   ','FFFF','F   ','F   '],
    g: ['GGGG','G   ','G GG','G  G','GGGG'],
    h: ['H  H','H  H', 'HHHH', 'H  H','H  H'],
    i: ['  I ','  I ','  I ','  I ','  I '],
    j: ['   J','   J','   J','J  J','JJJJ'],
    k: ['K  K','K K ','K   ','K K ','K  K'],
    l: ['L   ','L   ','L   ','L   ','LLLL'],
    m: ['M   M','MM MM','M M M','M   M','M   M'],
    n: ['N   N','NN  N','N N N','N  NN','N   N'],
    o: ['OOOO','O  O','O  O','O  O','OOOO'],
    p: ['PPPP','P  P','PPPP','P   ','P   '],
    q: ['QQQQQ','Q   Q','Q Q Q','QQQQQ','   Q '],
    r: ['RRRR','R  R','RRRR','R R ','R  R'],
    s: ['SSSS','S   ','SSSS','   S','SSSS'],
    t: ['TTTTT', '  T  ', '  T  ','  T  ','  T  '],
    u: ['U  U','U  U','U  U','U  U','UUUU'],
    v: ['V  V','V  V','V  V',' V V','  V '],
    w: ['W   W','W   W','W W W','WW WW','W   W'],
    x: ['X   X',' X X ','  X  ',' X X ','X   X'],
    y: ['Y   Y',' Y Y ','  Y  ','  Y  ','  Y  '],
    z: ['ZZZZ','  Z ',' Z  ',' Z  ','ZZZZ']
};

//This converts user's input to lowercase
userText = (process.argv[2])
LowerUserText = userText.toLowerCase();

//Function is called with user input all in lower case
FML(LowerUserText)


//this portion of the function takes the user's input and converts it to a two dimensional array

line = [];

function FML (text){
    var line =[]
    for (i = 0; i < text.length; i++){
        line.push(Alpha[text[i]])

    }


console.log('\n')

//This section iterates through the five horizontal lines of each
//letter in the user input

//The two for loops are for the two dimentions of the array

//this for loop is for the lines within a specific letter
for (i=0; i<5; i++) {

//this for loop is for the letters in the user input
//which has been put in the array "line"

    for (k=0; k<line.length; k++) {
        process.stdout.write(line[k][i] + ' ');
        }
    process.stdout.write('\n');

    }

console.log('\n')

}
