let cars = document.querySelectorAll(".bmw");

let count = localStorage.getItem("counter");
if (count === null) {
  count = 0;
} else {
  count = Number(count);
}

cars.forEach((element) => {
  element.addEventListener("click", () => {
    count++;
      localStorage.setItem("counter", count);
      
      let obj = {
          img: element.querySelector("img").getAttribute("src"),
          text: element.querySelector("h2").innerHTML,
      }
    localStorage.setItem(`car${count}`, JSON.stringify(obj));
  });
});
