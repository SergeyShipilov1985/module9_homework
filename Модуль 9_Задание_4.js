
const inputWidth = document.getElementById("width");
const inputHeight = document.getElementById("height");
const submitButton = document.querySelector("button");
const outputSpan = document.querySelector("span");
const photosContainer = document.querySelector("div");

submitButton.addEventListener("click", submitButtonHandle);

function submitButtonHandle() {
    const pictureWidth = inputWidth.value;
    const pictureHeight = inputHeight.value;

    if ((pictureWidth < 100 || pictureWidth > 300 || isNaN(pictureWidth)) || (pictureHeight < 100 || pictureHeight > 300 || isNaN(pictureHeight))) {
        write("Одно из чисел вне диапазона от 100 до 300.");
        return;
    }

    write("Загружаю фото...");

    fetch(`https://picsum.photos/${pictureWidth}/${pictureHeight}`)
        .then((response) => response.url)
        .then((result) => {
            loadPhoto(result);
            write("Фото загружено.");
        })
        .catch((reason) => {
            write("Ошибка: " + reason);
        });
}

function write(text) {
    outputSpan.innerHTML = text;
}

function loadPhoto(photoUrl) {
    const cardBlock =   `<img
                          src="${photoUrl}"
                          style="margin-right: 30px"
                        />`;

    photosContainer.innerHTML = cardBlock;
}