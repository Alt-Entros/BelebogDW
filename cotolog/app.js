const listElement = document.querySelector(".projects-grid");

const list = [
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 1",
    text: "Краткое описание проекта",
    count: "1 500 000",
  },
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 2",
    text: "Краткое описание проекта",
    count: "1 200 000",
  },
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 3",
    text: "Краткое описание проекта",
    count: "1 200 000",
  },
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 1",
    text: "Краткое описание проекта",
    count: "1 500 000",
  },
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 1",
    text: "Краткое описание проекта",
    count: "1 500 000",
  },
  {
    imgSrc: "img coto/Снимок экрана 2024-10-07 172522.png",
    alt: "Предмет 1",
    text: "Краткое описание проекта",
    count: "1 500 000",
  },
];

function getListTemplate(post) {
  return `
    <div class="project-item">
      <img src="${post.imgSrc}" alt="${post.alt}" />
      <div class="project-info">
        <p>${post.text}</p>
        <p>${post.count} ₽</p>
      </div>
    </div>
  `;
}

function generatePost(post) {
  listElement.insertAdjacentHTML("beforeend", getListTemplate(post));
}

list.forEach(generatePost);
