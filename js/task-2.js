const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector(".gallery");

images.forEach((image) => {
  const li = document.createElement("li");
  const img = document.createElement("img");

  img.src = image.url;
  img.alt = image.alt;

  li.appendChild(img);
  galleryList.appendChild(li);
});

const galleryStyles = `
.gallery {
  display: flex;
  list-style-type: none;
  padding: 0;
}

.gallery li {
  margin-right: 10px;
}

.gallery img {
  max-width: 100%;
  height: auto;
}
`;

const styleElement = document.createElement("style");
styleElement.textContent = galleryStyles;
document.head.appendChild(styleElement);
