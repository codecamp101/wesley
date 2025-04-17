const hintBtn = document.querySelector('#hintBtn');
const txt = document.querySelector('#txt');
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