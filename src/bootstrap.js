import faker from 'faker';

const mount = (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
  
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;  
};

const root = document.getElementById('dev-products');
root && mount(root);

export { mount };
