const box = document.querySelector(`#box`);

const button = document.querySelector(`button`);

button.addEventListener (`click`, ()=> {

    

    let numberOfPixelsHorizontal = prompt(`enter horizontal number of pixel`, ``)

    if (numberOfPixelsHorizontal>80){
        alert (`No more than 80`);
        remBox();
        box.style.backgroundColor = `red`;
        return}
    if (numberOfPixelsHorizontal === null || numberOfPixelsHorizontal <= 0){
        box.style.backgroundColor = `red`;
    }
    else {
        box.style.backgroundColor = `black`;
    }
    

    let pixelWidth = (960/numberOfPixelsHorizontal);
    pixelWidth = pixelWidth.toFixed(2);
    let numberOfPixelTotal = (+numberOfPixelsHorizontal*+numberOfPixelsHorizontal);

    function remBox (){
        box.innerHTML =``;
    }

    function fillBox(){
        for (let index = 0; index < numberOfPixelTotal; index++) {
            let pixel = document.createElement('div');
            pixel.className = `${index}`;
        
            pixel.style.cssText = `width: ${pixelWidth}px; height: ${pixelWidth}px`
            pixel.style.opacity = `1`;
            pixel.addEventListener(`mouseenter`, () => {
                pixel.style.opacity -= `0.1`;
                pixel.style.backgroundColor = generateNewColor();
                });
          
            // pixel.style.cssText = ('');
            box.appendChild(pixel);
            }
        }  ;
    remBox();
    
    fillBox(numberOfPixelTotal);
    
});
    


const hexCharacters = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]

function getCharacter(index) {
	return hexCharacters[index]
}

function generateNewColor() {
	let hexColorRep = "#"

	for (let index = 0; index < 6; index++){
		const randomPosition = Math.floor ( Math.random() * hexCharacters.length ) 
    	hexColorRep += getCharacter( randomPosition )
	}
	
	return hexColorRep
}








// fillBox(numberOfPixelTotal);
// onHoover();