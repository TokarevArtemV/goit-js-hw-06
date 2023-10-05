const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


const root = document.querySelector(".gallery");
root.style.display = "flex";
root.style.maxWidth = "400px";
root.style.flexDirection = "column";
root.style.gap = "20px";

function renderImg() {
  const murkup = images.map(({url, alt}) => {
    return `<img src="${url}" alt="${alt}"></img>`;
  })
  root.insertAdjacentHTML("afterbegin", murkup.join(""))
}

renderImg();

[...root.children].forEach(img => {
  img.style.display = "block";
  img.style.maxWidth = "100%";
  img.style.height = "auto";
});

