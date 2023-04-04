import { getOrCreateChannel } from '@finos/fdc3'

// will throw if window.fdc3 is not available
import faker from 'faker';


const mount = async (el) => {
  let products = '';

  for (let i = 0; i < 5; i++) {
    const name = faker.commerce.productName();
  
    products += `<div>${name}</div>`;
  }
  
  el.innerHTML = products;  
};

const root = document.getElementById('dev-products');
mount(root);



const startFdc3 = async () => {
  // const channel = fdc3.getOrCreateChannel('myChannel');

  fdc3.addIntentListener('ViewContact', async (context) => {
    console.log('context', context);
    const count = context.id.count;
    alert('пришло из другого приложения: ', count)
  });

  // channel.broadcast({
  //   type: '',
  // })

}

if (window.fdc3) {
  startFdc3();
} else {
  window.addEventListener('fdc3Ready', fdc3Stuff);
}
