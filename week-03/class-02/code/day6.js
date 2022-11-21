// setTimeout(() => {
//   console.log('setTimeout 1 is running')
// }, 2000)
console.log(1)
console.log(2)
// setTimeout(() => {
//   console.log('setTimeout 2 is running')
// }, 2000)
console.log(3)
console.log(4)
console.log(5)

console.clear()

let h2 = document.querySelector('h2')

function myExecutor(resolve, reject) {
  // console.log('this callback is running')
  // reject('Reject Request')
  // console.log(resolve,reject)
  if (Math.random() < 0.5) {
    reject('Reject')
  } else {
    resolve('Success Resolve')
  }
}

function successHandler() {
  console.log('Success Handler')
}

function rejectHandler() {
  console.log('Theres an error')
}

let myPromise = new Promise(myExecutor)

myPromise
  .then((message) => {
    console.log('inside dot then', message)
    h2.innerHTML = message
  })
  .catch((error) => {
    console.log('Reject' + error)
    h2.innerHTML = error
  })

// let delay = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('success')
//   }, 1000)
// })
// console.log(delay)
function delay(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('success')
    }, time)
  })
}
function afterASecond() {
  console.log('that has worked')
}
// console.log(delay)
delay(1000).then(afterASecond)

console.clear()



let request = new XMLHttpRequest()
request.open('GET', 'https://jsonplaceholder.typicode.com/todos')
request.send()

// request.addEventListener('readystatechange', () => {
//   console.log(request,request.readyState)
//   if(request.readyState === 4){
//     let data = JSON.parse(request.responseText)
//     console.log(data)
//   }
// })

setTimeout(() => {
  let data = JSON.parse(request.responseText)
  console.log(data)
},3000)


