
let text = "Hey!"
let numbers = [1,23,12,22,4,5]

function helloWorld(){
    console.log(text)
}

function printNumbers(){
    numbers.forEach(number => {
        if(number >= 5){
            console.log(number)
        }
    });
}

function getMemeTemplate(){
    fetch('https://api.imgflip.com/get_memes')
    .then(response =>{
        return response.json()
    })
    .then(myJson =>{
        let i = Math.floor((Math.random() * myJson['data']['memes'].length + 0))
        document.querySelector('#template_container').src = myJson['data']['memes'][i]['url']
    })
}

getMemeTemplate();