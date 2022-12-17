const API = `https://634e9f834af5fdff3a625f84.mockapi.io`;

const controller = async (url, method = `GET`, obj) => {
  let options = {
    method: method,
    headers: {
      "Content-type": "application/json",
    },
  };

  if (obj) options.body = JSON.stringify(obj);

  let request = await fetch(url, options),
    response = request.ok ? request.json() : Promise.reject();

  return response;
};

const categoriesContainer = document.querySelector(`#categoriesContainer`);

const filterCategory = (cat) => {
  const itemCategories = cat.map((item) => item.category);

  const byOneCategory = itemCategories.filter((element, index) => {
    return itemCategories.indexOf(element) === index;
  });

  return byOneCategory;
};

const renderCategoriesContainer = (cat) => {
  categoriesContainer.innerHTML = filterCategory(cat)
    .map(
      (item) =>
        `<section class="category" data-name=${item}>
        </section>`
    )
    .join(``);
  console.log(filterCategory(cat));
};

const renderProducts = async () => {
  let products = await controller(API + `/products`);
  console.log(products);

  renderCategoriesContainer(products);

  const sectionCategory = document.querySelector(`.category`); //обЪявлял позже, тогда что-то получалось

  sectionCategory.innerHTML = products
    .map(
      (item) =>
        `<h2>${item.title}</h2>
            <div class="category__container">
                <div data-id="${item.id}" class="product">
                    <img
                        src="images/products/${item.img}.png"
                        class="product__img"
                        alt="${item.title}"
                        height="80"
                    />
                    <p class="product__title">${item.title}r</p>
                    <div class="product__sale">
                        <span class="product__sale--old">$${item.price}</span>
                        <span class="product__sale--percent">-${item.salePercent}%</span>
                    </div>
                    <div class="product__info">
                        <span class="product__price">$30000</span
                        ><button class="product__cart">
                            <img
                                src="images/shopping-cart.png"
                                alt="shopping cart"
                                height="20"
                            />
                        </button>
                    </div>
                </div>
            </div>`
    )
    .join(``);
};
renderProducts();
