const url = 'https://jsonplaceholder.typicode.com/comments';
const productsWrapper = document.querySelector('.products');

const getData = async () => {
    try {
        const response = await fetch(url);
        const products = await response.json();
        if (!response.ok) {
            throw new Error(response.message);
        }
        return products;

    } catch (err) {
        return err.message;
    }
}

const drawProducts = async () => {
    const products = await getData();
    const productsSlices = products.slice(0,20)
    for (let product of  productsSlices) {
        productsWrapper.innerHTML += 
 `  <div class='card'>
      <p class='price'>${product.id}</p>
      <p class='price'>${product.name}</p>
      <p class='price'>${product.email}</p>
      <p class = 'price'>${product.body}</p>
      
   
   
     
    </div>`
    }
}

drawProducts();
