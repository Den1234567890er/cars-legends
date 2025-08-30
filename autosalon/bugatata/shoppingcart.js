

let root = document.querySelector(".root")

for (let i = 0; i < localStorage.length; i++){

    let card = JSON.parse(localStorage.getItem(localStorage.key(i)))

    if (typeof card == "object") {
        card = card
    } else {
        continue
    }

    let obj = `<div class="bmw">
                <img
                    class="img"
                    src="${card.img}"
                />
                <h2>${card.text}</h2>
            </div>`;

    root.innerHTML += obj
}

