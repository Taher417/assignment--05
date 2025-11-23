

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
let counter = 0;

const copyElements = document.getElementsByClassName('copy-btn');

for (let i = 0; i < copyElements.length; i++) {

    copyElements[i].addEventListener('click', function(e) {
        
        e.preventDefault()
         const card = this.closest('.card')
         const Number = card.querySelector('.number').innerText
        alert(`${Number} number is copied`)
        counter++;
        const copyCounter = document.getElementById('copy-counter');
        copyCounter.textContent = counter;
        
    });
}



let cuttingPoint = 20
document.querySelectorAll('.call-btn').forEach(element => {
    
 element.addEventListener('click', function(e){
    e.preventDefault()

   const mainPoint = parseInt(document.getElementById('point').innerText)

    const settext = mainPoint - cuttingPoint
    
    if(mainPoint < cuttingPoint ){
        
        alert('Not Enough Coins')
        return      
    }

    const card = this.closest('.card')

    const subtitle = card.querySelector('.subtitle').innerText

    const Number = card.querySelector('.number').innerText

    alert(`📞Calling ${subtitle} ${Number}..... ` );

   document.getElementById('point').innerText = settext  

   const Time = new Date().toLocaleTimeString()

   const callContainer = document.getElementById('cart-container')

   const newCall = document.createElement("div")

   newCall.innerHTML = `
                <div class=" w-full h-20 mt-[10px] rounded-xl flex justify-between items-center p-2 bg-[#c1f0c1]">
                    <div>
                        <span class="text-[17px] font-semibold">${subtitle}</span>
                    <br>
                    <span class="font-semibold">${Number}</span>
                    </div>
                    <div>
                        ${Time}
                    </div>
                </div>
   `

   callContainer.append(newCall);
})
});

document.getElementById('clear-btn').addEventListener('click', function(e){
    e.preventDefault()

    document.getElementById('cart-container').innerHTML = " "

})






