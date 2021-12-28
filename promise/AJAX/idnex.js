const btn = document.querySelector("#btn");
btn.addEventListener("click", function () {
  const p = new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.apiopen.top/getJoke");
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(xhr.response);
        } else {
          reject(xhr.status);
        }
      }
    };
  });

  p.then(
    (a) => {
      console.log(a);
    },
    (a) => {
      console.log(a);
    }
  );
});
