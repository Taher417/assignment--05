

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

let cuttingPoint = 20
document.querySelectorAll('.call-btn').forEach(element => {
    
 element.addEventListener('click', function(e){

   const mainPoint = parseInt(document.getElementById('point').innerText)
    const settext = mainPoint - cuttingPoint
    if(mainPoint < cuttingPoint ){
        alert('Not enough coins')
        return
    }
   document.getElementById('point').innerText = settext     

})
});
