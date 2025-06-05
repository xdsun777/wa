let yesButton = document.getElementById("yes");
let noButton = document.getElementById("no");
let questionText = document.getElementById("question");
let mainImage = document.getElementById("mainImage");

let clickCount = 0;

const noTexts = [
    "用瞬云保护你",
    "给你防绕后绊线",
    "给你推黑",
    "只给你一个人奶",
    "求你啦！"
];

const imgArr = [
    "image/jett.webp",
    "image/cypher.webp",
    "image/omen.webp",
    "image/sage.webp",
    "image/angry.webp"
];

noButton.addEventListener("click", function() {
    clickCount++;

    // 合并样式操作，减少重排
    yesButton.style.transform = `scale(${1 + clickCount * 1.2})`;
    noButton.style.transform = `translateX(${clickCount * 50}px)`;
    const moveUp = clickCount * 25;
    mainImage.style.transform = questionText.style.transform = `translateY(-${moveUp}px)`;

    // No 文案变化
    if (clickCount <= noTexts.length) {
        noButton.innerText = noTexts[clickCount - 1];
    }

    // 图片变化
    if (clickCount <= imgArr.length) {
        mainImage.src = imgArr[Math.min(clickCount - 1, imgArr.length - 1)];
    }
});

yesButton.addEventListener("click", function() {
    document.body.innerHTML = `
        <div class="yes-screen">
            <h1 class="yes-text">超级爱你！</h1>
            <img src="image/kjraze.webp" alt="拥抱" class="yes-image">
        </div>
    `;
    document.body.style.overflow = "hidden";
});