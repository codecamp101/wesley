/* this changes the text inside of an element
document.querySelector('#user > b').textContent = ' wesley';
document.querySelector('#user > i').textContent = '?';
*/
// document.querySelector('output').textContent =typeof '234567896443';
// [1,2,'computer',4]
// const s='a very long sentence, 500 words long. Really!!!!!'
// document.querySelector('output').textContent =['pizza',2,'computer',4.5][0];
const eye = document.querySelector('#eye');
const output = document.querySelector('output');
const ipt = document.querySelector('input') ;
const fm = document.querySelector('form');
const pop = document.querySelector('#pop');
const user = document.querySelector('#user');
const start = document.querySelector('#start');
const pan = document.querySelector('#panel')
//this unmasks the password
eye.addEventListener('mousedown', () => {
    ipt.type = 'text';
    });
    //this masks the password
eye.addEventListener('mouseup', () => {
    ipt.type = 'password';
    });
    //this submits the password with the form
fm.addEventListener('submit',(e)=>{
    e.preventDefault(); //this will stop the page from reloding
    const pd = 'wes';
    if (pd === ipt.value){
        user.remove();
        fm.remove();
        output.textContent ='sighing you in...';
        const TimeoutID = setTimeout(()=> {
            output.remove();
            pop.showPopover();
            clearTimeout(TimeoutID);

        },3000)
    } else{
        output. textContent ='wrong password'
    }
});
//this shows/hides the #panel
start.addEventListener('click', () => {
    pan.classList.toggle('on');
});