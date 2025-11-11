

let count = 0;

const heartElements = document.getElementsByClassName('heart-bit');

for (let i = 0; i < heartElements.length; i++) {
    heartElements[i].addEventListener('click', function(e) {
        e.preventDefault()
        count++;
        const heartCounter = document.getElementById('heart-counter');
        heartCounter.textContent = count;
    });
}


document.querySelectorAll('.call-btn').forEach(element => {
    
 element.addEventListener('click', function(e){

   const mainPoint = parseInt(document.getElementById('point').innerText)
    const settext = mainPoint - 20
   mainPoint.innerText = settext
   console.log(settext)      

})
});
