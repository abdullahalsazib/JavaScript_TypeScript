
const paymentSuccess = true;
const mark = 70;

// Enroll
let enroll = () =>{
  console.log("Course enrollment is in progress...");

  const promise = new Promise((resolv, reject)=> {
    setTimeout(()=> {
      if(paymentSuccess){
        resolv();
      }else {
        reject("Payment Faild..!")
      }
    }, 2000)
  })

  return promise;
}

// Progress
let progress = () => {
  console.log("Course on Progress......")
  const promise = new Promise((resolv, reject)=> {
     setTimeout(() => {
    if(mark >= 80){
      resolv()
    }else {
      reject("You could not get enough marks to get the certificate")
    }
  },2000)
  })

return promise;
}




/*
const status = true;
console.log("Tack 1");

const promise = new Promise(function (resolv, reject) {
  setTimeout(() => {
    if (status) {
      resolv("Task 2");
    } else {
      reject("Faild!");
    }
  }, 2000);
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch(function (err) {
    console.log(err);
  });

console.log("Tack 3");
*/
