import React from 'react';
import ProductCard from './ProductCard';

const product1 = { id: "1", name: "White Onesie", type: "Onesie", gender: "U", age: "3-6M", colors: ["white"], price: 9.99, imagePath: "https://m.media-amazon.com/images/I/51OWuFsvpQL._AC_UY550_.jpg" };
const product2 = { id: "2", name: "Hello World Onesie", type: "Onesie", gender: "U", age: "3-6M", colors: ["white"], price: 12.99, imagePath: "https://cdn.shopify.com/s/files/1/0173/5264/products/onesie_-_hello_world_i_m_new_here_1200x.jpg?v=1571442073" };
const product3 = { id: "3", name: "3 Pack Onesies", type: "Onesie", gender: "M", age: "12M", colors: ["black, white, red, yellow"], price: 23.99, imagePath: "https://cdn.shopify.com/s/files/1/0074/6402/6227/products/OP193219EK_1500x.jpg?v=1644540007" };

let productList = [product1, product2, product3];

const products = (props) => {

    return (
        <div id='product-cards'>
            {
                productList.map(p => <ProductCard key={p.id}
                    product={p}
                    productList={productList}
                    cart={props.cart}
                    addProduct={props.addProduct}
                    removeProduct={props.removeProduct}
                />
                )
            }
        </div>
    );
};

export default products;