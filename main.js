//MAP. Let's return an array with even numbers only. Remember, that map returns "undefined" for odd numbers in the old array.
const numbersArr =[1, 2, 3, 4, 5, 10, 503, 408, 0]

const evenNumbersWithMap = numbersArr.map((item) => {
    if(item % 2 === 0) {
        return item
    } else {
        
        return item + 1
    }
}) 
console.log('even numbers with MAP', evenNumbersWithMap)
//Let's shpw evene numbers yousing a loop
for(let i = 0; i < numbersArr.length; i++) {
    if(i % 2 === 0) {
        console.log('even numbers with a loop', numbersArr[i])
    }

}
 
//Lets's do the same with a FILTER

const showEvenNumbersAfterFilter = numbersArr. filter((item) =>{
    if(item % 2 === 0)
    return item
})

console.log('Im using a FILTER to show even numbers', showEvenNumbersAfterFilter)

//Lets show the odd numbers only, using filter

const oddNumbersAfterFilter = numbersArr.filter((item) =>{
    if(item % 2 !== 0)
    return item
})

console.log('Im showing odd numbers after  FILTER', oddNumbersAfterFilter)

//Check, if the numbersArray includes a givennumber. use INCLUDES

const hasNuberFifty = numbersArr.includes(50)
console.log('Has number 50? ', hasNuberFifty)

// A function with parameters doing the same thing

function hasTheWord(anyText, searchedElement) {
    const testconst = anyText.includes(searchedElement)
    if(testconst === true) {
        console.log('yesss, we have it!!')
        return true
    } else 
    console.log('nooooo, sorry, no such thing')
    return false

}
const has50 = hasTheWord(numbersArr, 50)

//Write a function that would find a word/element in a text.

function findElement(someArray, item) {
    const isThereElement = someArray.find((item) =>{ 
        //Alternative transcription someArray(item => item === 3), no return!
        console.log('we have it')
        return item ===3
    }) 
}
const isThere3 = findElement(numbersArr)