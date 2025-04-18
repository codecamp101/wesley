const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
const checkBtn = document.querySelector('#checkBtn');

hintBtn.addEventListener('click', () => {
   // text.textcontent = 'I changed you!!!';
   writeTxt ();
});
function writeTxt () {
    const text = 'to walk unstedily, as like a baby';
    txt.textContent = '';
    let count = 0;
    const id = setInterval(() => {
        if(count === text.length - 1) clearInterval(id);
        txt.textContent += text[count];
    count++;//count++ keps adding 1 to the value of count
    }, 100);
}
let score = 0;
checkBtn.addEventListener('click', () => {
    document.querySelector('#cup > i').textContent = score;
    score += 5;
    document.querySelector('#action').style.backgroundImage = `url('confetti.gif')`;
    const tid =setTimeout(() => {
        document.querySelector('#action').style.backgroundImage = 'none';
        clearTimeout(tid);
    },2000);
//STRING METHODS
//.slice(strart, end) //slices a portion of a string
//concat(...strings) //joins all chars in a string 
//.trim()//removes spaces at the beginning and end of a string
//.at()