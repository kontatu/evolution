const setBtn = document.getElementById('setBtn');
const resetBtn = document.getElementById('resetBtn');
const showImg = document.getElementById('showImg');
// const img1 = document.createElement('img');
// const img2 = document.createElement('img');
// const img3 = document.createElement('img');
// const img4 = document.createElement('img');
const img1 = document.createElement('div');
const img2 = document.createElement('div');
const img3 = document.createElement('div');
const img4 = document.createElement('div');


let random = 0;


setBtn.addEventListener("click", () => {
    showImg.innerHTML = '';
    random = Math.floor(Math.random() * 10);

    // img1.setAttribute('src', './img/evolution1.png');
    img1.innerHTML = "<img src='./img/evolution1.png'><p>原人</p>"
    showImg.appendChild(img1);
    if (random < 3) {
        // img2.setAttribute('src', './img/evolution2.png');
        img2.innerHTML = "<img src='./img/evolution2.png'><p>旧人</p>"
        showImg.appendChild(img2);
    };
    if (random < 2) {
        // img3.setAttribute('src', './img/evolution3.png');
        img3.innerHTML = "<img src='./img/evolution3.png'><p>新人</p>"
        showImg.appendChild(img3);
    };
    if (random === 0) {
        // img4.setAttribute('src', './img/evolution4.png');
        img4.innerHTML = "<img src='./img/evolution4.png'><p>現代人</p>"
        showImg.appendChild(img4);
    };

    console.log(random);
});

resetBtn.addEventListener('click', () => {
    showImg.innerHTML = '';
})
