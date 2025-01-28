const paymentSuccess = true;
const mark = 60;

// Enroll
let enroll = () => {
  console.log("Course enrollment is in progress...🚀");

  const promise = new Promise((resolv, reject) => {
    setTimeout(() => {
      if (paymentSuccess) {
        resolv();
      } else {
        reject("Payment Faild..! 💥");
      }
    }, 2000);
  });

  return promise;
};
// Progress
let progress = () => {
  console.log("Course on Progress...... 🧑‍🦯");

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (mark >= 80) {
        resolve();
      } else {
        reject("You could not get enough marks to get the certificate");
      }
    }, 2000);
  });
};
let getCertificate = () => {
  console.log("Prearing your certificate");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Congrets! you got the certificate 😄");
    }, 1000);
  });
};

async function Course() {
  try {
    await enroll();
    await progress();
    const message = await getCertificate();
    console.log(message);
  } catch (err) {
    console.log(err);
  }
}
Course();

// enroll()
//   .then(progress)
//   .then(getCertificate)
//   .then((value) => console.log(value))
//   .catch((err) => {
//     console.log(err);
//   });
