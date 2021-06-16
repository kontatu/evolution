const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');
const img1 = document.createElement('img');
const img2 = document.createElement('img');
const img3 = document.createElement('img');
const img4 = document.createElement('img');


let random = 0;


setBtn.addEventListener("click", () => {
    showImg.innerHTML = '';
    random = Math.floor(Math.random() * 10);

    img1.setAttribute('src', './img/evolution1.png');
    showImg.appendChild(img1);
    if (random < 3) {
        img2.setAttribute('src', './img/evolution2.png');
        showImg.appendChild(img2);
    };
    if (random < 2) {
        img3.setAttribute('src', './img/evolution3.png');
        showImg.appendChild(img3);
    };
    if (random === 0) {
        img4.setAttribute('src', './img/evolution4.png');
        showImg.appendChild(img4);
    };

    console.log(random);
});

resetBtn.addEventListener('click', () => {
    showImg.innerHTML = '';
})
