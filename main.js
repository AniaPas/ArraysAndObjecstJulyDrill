//MAP. Let's return an array with even numbers only. Remember, that map returns "undefined" for odd numbers in the old array.
const numbersArr =[1, 2, 3, 4, 5, 10, 503, 408, 0, 83]

const evenNumbersWithMap = numbersArr.map((item) => {
    if(item % 2 === 0) {
    return item
    } else {
        
        return item + 1
    }
}) 
console.log('even numbers with MAP', evenNumbersWithMap)
function testujeSeMapa(jakasTablica) {
    const NowaTablicaPoMapie = jakasTablica.map((currentValue) =>{
        return currentValue +1
    })
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
//Let's show even numbers sing PUSH

let newNumbersArrWithEvenNumbers = []
for(let i = 0; i < numbersArr.length; i++) {
    if(numbersArr[i] % 2 === 0) {
        newNumbersArrWithEvenNumbers.push(numbersArr[i])
        console.log('New arrays with even numbers after PUSH ',  newNumbersArrWithEvenNumbers)

    }
}

//How about showing even numbers with forEach?

const evenNumbersForEach = numbersArr.forEach((item) =>{
    if(item % 2 === 0) {
        console.log(item)   
    } else console.log('this number is odd')
})

//Check, if the numbersArray includes a given number. use INCLUDES

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


    const findSomeElement = numbersArr.find((someElement) =>{
        return someElement === 3
        })
   
console.log('I am returing an element after FIND: ', findSomeElement)


//Delete the last element of any arry using POP

const arrayWithPop = numbersArr.pop()

console.log('New array with last element deleted-POP :', arrayWithPop)
//Add an element to an array.

const arrayAfterPush = numbersArr.push(999)
console.log('New array after PUSH has', arrayAfterPush, 'elements')

// Add an element to the beginning of an array: UNSHIFT

function addElementUnshift(arr1, element1) {
    const arrayAfterUnshift = arr1.unshift(element1) 
    console.log('the new array after UNSHIFT has now ', arrayAfterUnshift, 'elements')
    return arrayAfterUnshift
}

const newArrAfterUnshift = addElementUnshift(numbersArr, 1111) 

//Remove the first element from any array: SHIFT
 function removeWithShift(exampleArray) {
    const whatIremove = exampleArray.shift() 
    return whatIremove
   
   
 }
 const whatIsRemoved = addElementUnshift(numbersArr)
 console.log('The removed element after SHIFT is', whatIsRemoved)

//Let's join any 2 or more arrays using CONCAT

 const names1 = ['John', 'Mary', 'James', 'Thomas', 'William']
 const names2= ['Peter', 'Steven', 'Elisabeth', 'Jane' , 'Anna']

 function iJoinArrays(anyArrayToBeJoined1, anyArrayToBeJoined2) {
 const joinedArrays=  anyArrayToBeJoined1.concat(anyArrayToBeJoined2)
 return joinedArrays

 }

const joinedNames = iJoinArrays(names1, names2)
console.log('New joined array:', joinedNames)

//How about doing the same using UNSHIFT?

function arraysTogetherUnshift(arrayToBeUnshifted1, arrayToBeUnshifted2)  { 
    const joining2arraysUnshift = arrayToBeUnshifted1.unshift(arrayToBeUnshifted2)
    return joining2arraysUnshift
}

const twoNamesArrraysAFterUnshift = arraysTogetherUnshift(names1, names2)
console.log('joining arrays with UNSHIFT', twoNamesArrraysAFterUnshift)

//Using a LOOP to join two arrays togeter

 const mergeArrays = (arrToBeMerged, arrToBeMerged2)=> {
    for(let i = 0; i < arrToBeMerged.length; i++) {
        arrToBeMerged2.push(arrToBeMerged[i])
        
    } 
   return arrToBeMerged

}
const mergedWithALoop = mergeArrays(names1, names2)
console.log('merged with a loop and push', mergedWithALoop)//Please check this method out 
//Let's do the same with forEach
names1.forEach((item) => {
    
names2.push(item)
})
console.log(names2)
//use SOME to check if there is a number higher than  4 in the numbersArr.

const numberHigherThan4 = numbersArr.some((item) => {
   return  item > 4
})
console.log('Is there a number higher than 4? ', numberHigherThan4)

//use EVERY to check, if all numbers in the numbersArr are lower than 1000

const lowerThan1000 = numbersArr.every((item) => item < 1000)
console.log('Are all the numbers lower than 1000? ', lowerThan1000)

// Let's try forEach for the same thing and see the results
const doTheSameAsEveryWithForEach = numbersArr.forEach((item) => {
    if(item > 1000) {
      
        console.log('The number is lower')
    } else {
        console.log('The number is higher than 1000')
    }
})
const isMoreThat100 = numbersArr.some((currentValue) => {
    console.log('bla')
    return currentValue > 100
})
// Sort the states alphabetically

const states = ['uk', 'spain', 'poland', 'germany', 'france', 'greece']
const upperStates = states.map((element) => {
  return element.toUpperCase();
});
console.log(upperStates.sort());

//Reverse the elements. Use Sort.


