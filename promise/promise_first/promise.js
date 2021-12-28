function rand(m, n) {
  return Math.ceil(Math.random() * (n - m + 1)) + m - 1;
}

function lottery() {
  const number = rand(1, 100);
  if (number <= 30) {
    console.log("good good you");
  } else {
    console.log("fuck fuck you");
  }
}

function firstPromise() {
  const p = new Promise((reslove, reject) => {
    setTimeout(() => {
      const number = rand(1, 100);
      if (number <= 30) {
        reslove(number);
      } else {
        reject(number);
      }
    }, 2000);
  });

  p.then(
    (number) => {
      console.log("good good you, the number is " + number);
    },
    (number) => {
      console.log("fuck fuck you, the number is " + number);
    }
  );
}

const btn = document.querySelector("#root");
btn.addEventListener("click", firstPromise);
