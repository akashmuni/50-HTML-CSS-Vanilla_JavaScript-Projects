document.addEventListener('DOMContentLoaded', ()=>{
    // card options

    const cardArray=[
        {
            name: 'angularjs',
            img: 'images/angularjs.png'
        },
        {
            name: 'angularjs',
            img: 'images/angularjs.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'css',
            img: 'images/css.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'html',
            img: 'images/html.png'
        },
        {
            name: 'javascript',
            img: 'images/javascript.png'
        },
        {
            name: 'javascript',
            img: 'images/javascript.png'
        },
        {
            name: 'mongodb',
            img: 'images/mongodb.png'
        },
        {
            name: 'mongodb',
            img: 'images/mongodb.png'
        },
        {
            name: 'reactjs',
            img: 'images/reactjs.png'
        },
        {
            name: 'reactjs',
            img: 'images/reactjs.png'
        }
    ]

    cardArray.sort(()=> 0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    var cardsChosen=[]
    var cardsChosenId = []
    var cardsWon= []

    //creating board
    function createBoard(){
        for (let i=0; i< cardArray.length; i++){
            var card = document.createElement('img')
            card.setAttribute('src','images/code.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipcard)
            grid.appendChild(card)
        }
    }
    //checking for matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId= cardsChosenId[1]
        if(cardsChosen[0]=== cardsChosen[1]){
            // alert('You found a Match')
            cards[optionOneId].setAttribute('src', 'images/white.png')
            cards[optionTwoId].setAttribute('src', 'images/white.png')
            cardsWon.push(cardsChosen)
        } else{
            cards[optionOneId].setAttribute('src', 'images/code.png')
            cards[optionTwoId].setAttribute('src', 'images/code.png')
            // alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length/2){
            resultDisplay.textContent = 'Congralution! You found them all!'
        }
    }

    //fliping the card
    function flipcard(){
        var cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length=== 2){
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})