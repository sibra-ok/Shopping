
(async()=>{
let material=document.getElementById('products');
let input=document.getElementById('input')


const url='https://fakestoreapi.com/products';



const fetchProducts = async () => {
try{
const res=await fetch(url);
return await res.json();
} catch(error){
return error
}};



const products=await fetchProducts();
const generateProducts=(product)=>{
return`<div class="product_card">

    <div class="image_container">
<img src="${product.image}"
alt=""
/>
</div>
<div class="product_content">
<h2>
${product.title}
</h2>
<p>
${product.description}
</p>
<button>
${product.price}
</button>
</div></div>
</div>`
};



const renderProducts=(products)=>{
material.innerHTML="";
products.forEach((product) => {
material.innerHTML+=generateProducts(product);
});
};


const checkTextContain =(text,searchText)=>{

    return text.toString().toLowerCase().includes(searchText);
};

const filterHandler=(event)=>{
    const searchText=event.target.value.toLowerCase();
const filteredProducts=products.filter((product)=>{
   return (
checkTextContain(product.description,searchText)||
checkTextContain(product.title,searchText)||
checkTextContain(product.price,searchText)

   ); 
});

renderProducts(filteredProducts);
};

input.addEventListener('keyup',filterHandler);

renderProducts(products);

})();