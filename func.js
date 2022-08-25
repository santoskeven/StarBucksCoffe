let ImgCoffee = document.querySelectorAll('.coffeeImg');
let circulo = document.getElementById('circulo')

let cores = {
    0: '#017043',
    1: 'pink',
    2: '#d751ac'
}

ImgCoffee[1].style.display = 'block';
circulo.style.backgroundColor = cores[1];

let SelectCoffee = document.querySelectorAll('.coffeeSect')

for(let i=0; i < SelectCoffee.length; i++){
   
    SelectCoffee[i].addEventListener('click', () => {
        for(let i=0; i < ImgCoffee.length; i++){
            ImgCoffee[i].style.display = 'none'
        }

        ImgCoffee[SelectCoffee[i].name].style.display = 'block';

        circulo.style.backgroundColor = cores[SelectCoffee[i].name];
        
    })

}
