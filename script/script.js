const searchWorld = document.querySelector("#search-word");
const products = document.querySelectorAll(".product-items");
const searchPrice = document.querySelector("#search-price");
const searchPriceBTN = document.querySelector("#search-btn");

const BtnAll = document.querySelector("#BtnAll");
const BtnTech = document.querySelector("#BtnTech");
const BtnHealth = document.querySelector("#BtnHealth");
const BtnCloth = document.querySelector("#BtnCloth");

const searchByWord = (event) => {
  btnAllClick();
  const phrase = event.target.value.toLowerCase().trim();
  products.forEach((product) => {
    if (product.children[1].innerText.toLowerCase().includes(phrase))
      product.style.display = "flex";
    else product.style.display = "none";
  });
};

const searchByPriceBTN = (event) => {
  btnAllClick();
  const price = searchPrice.value;
  products.forEach((product) => {
    if (product.children[2].innerText === price) product.style.display = "flex";
    else if (price === "") product.style.display = "flex";
    else product.style.display = "none";
  });
};

const searchByPrice = (event) => {
  btnAllClick();
  const price = searchPrice.value;
  if (event.key === "Backspace" || event.key === "Enter")
    products.forEach((product) => {
      if (product.children[2].innerText === price) product.style.display = "flex";
      else if (price === "") product.style.display = "flex";
      else product.style.display = "none";
    });
};

const btnAllClick = () => {
  BtnAll.classList.add("active");
  BtnTech.classList.remove("active");
  BtnHealth.classList.remove("active");
  BtnCloth.classList.remove("active");
  products.forEach((product) => {
    product.style.display = "flex";
  });
};

const btnTechClick = () => {
  BtnAll.classList.remove("active");
  BtnTech.classList.add("active");
  BtnHealth.classList.remove("active");
  BtnCloth.classList.remove("active");
  products.forEach((product) => {
    if (product.dataset.category === "tech") product.style.display = "flex";
    else product.style.display = "none";
  });
};

const btnHealthClick = () => {
  BtnAll.classList.remove("active");
  BtnTech.classList.remove("active");
  BtnHealth.classList.add("active");
  BtnCloth.classList.remove("active");
  products.forEach((product) => {
    if (product.dataset.category === "health") product.style.display = "flex";
    else product.style.display = "none";
  });
};

const btnClothlick = () => {
  BtnAll.classList.remove("active");
  BtnTech.classList.remove("active");
  BtnHealth.classList.remove("active");
  BtnCloth.classList.add("active");
  products.forEach((product) => {
    if (product.dataset.category === "cloth") product.style.display = "flex";
    else product.style.display = "none";
  });
};

window.addEventListener("load", () => {
  searchWorld.addEventListener("keyup", searchByWord);
  searchPriceBTN.addEventListener("click", searchByPriceBTN);
  searchPrice.addEventListener("keyup", searchByPrice);
  BtnAll.addEventListener("click", btnAllClick);
  BtnTech.addEventListener("click", btnTechClick);
  BtnHealth.addEventListener("click", btnHealthClick);
  BtnCloth.addEventListener("click", btnClothlick);
});
