const options = [
    'bg-gradient-to-r from-indigo-500 to-pink-500 bg-opacity-75',
    //have a variety of background colors, via the body classes. this is tailwindcss
    'bg-gradient-to-r from-green-500 to-blue-500 bg-opacity-75',
    'bg-gradient-to-r from-yellow-500 to-red-500 bg-opacity-75',
    'bg-gradient-to-r from-purple-500 to-indigo-500 bg-opacity-75',
    'bg-gradient-to-r from-pink-500 to-yellow-500 bg-opacity-75',
    'bg-gradient-to-r from-white to-neutral-600 bg-opacity-75',
    'bg-gradient-to-r from-white to-red-300 bg-opacity-75',
    'bg-gradient-to-b from-indigo-500 to-pink-500 bg-opacity-75',
    'bg-gradient-to-b from-green-500 to-blue-500 bg-opacity-75',
    'bg-gradient-to-b from-yellow-500 to-red-500 bg-opacity-75',
    'bg-gradient-to-b from-purple-500 to-indigo-500 bg-opacity-75',
    'bg-gradient-to-b from-pink-500 to-yellow-500 bg-opacity-75',


]

Array.prototype.random = function () {
    return this[Math.floor((Math.random()*this.length))];
  }

const random = (denominator) => Math.floor(Math.random() * denominator)
//const randomArray = (array) => array[random(array.length)]
const randomOption = () => options.random()
const getRandomColour = () => ['neutral','stone','gray','red','orange','amber','yellow','green','lime','teal','sky','blue','indigo','violet','purple','fuchsia','pink','rose'].random()
const genRandom = () => `bg-gradient-${['to-t', 'to-b', 'to-l', 'to-r', 'to-tr', 'to-tl', 'to-br', 'to-bl'].random()} from-${getRandomColour()}-500 to-${getRandomColour()}-500 bg-opacity-75`

document.addEventListener('DOMContentLoaded', () => {
    let option
    const doGenRandom = random(2) === 1
    if (doGenRandom) 
        option = genRandom()
    else
        option = randomOption()
    
    document.body.className = option + ' bg-fixed bg-cover bg-center'
})