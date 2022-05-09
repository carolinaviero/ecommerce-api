const express = require('express');
const cors = require('cors')
const serverPort = 8000;
const app = express();

app.use(cors());

const products = [
    { id: 1, name: 'Le Cagole', description: 'Balenciaga Le Cagole in blue', brand: 'Balenciaga', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080252/xs-le-cagole-shoulder-bag-turquoise-balenciaga-womens-bags_abhtaf.jpg' },
    { id: 2, name: 'Birkin', description: 'Hermès Birkin', brand: 'Hermès', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/16254581_31076283_1000_odt8xa.jpg' },
    { id: 3, name: 'Miranda', description: 'By Far Miranda in green', brand: 'By Far', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/17501670_38771671_1000_clfsgy.jpg' },
    { id: 4, name: 'The City', description: 'The City in yellow', brand: 'By Far', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/60a7c10a19eac11640c289c2ee0f527e_piomut.jpg' },
    { id: 5, name: 'Vintage Coach', description: 'Vintage Coach bag in green', brand: 'Coach', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/green-suede-signature-sufflette-coach-handbag-21075009-1_2.jpg_osjiwa.webp' },
    { id: 6, name: 'Trotteur Duffle bag', description: 'Christian Dior 40 Blue Monogram Logo', brand: 'Dior', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/0ea7352c24c9383cae2704775f6cda0a_wyfyyb.jpg' },
    { id: 7, name: 'Moon bag', description: 'Eera Moon bag', brand: 'Eera', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/17375436_35900423_1000_ao4hdg.jpg' },
    { id: 8, name: 'Croissant bag', description: 'Louis Vuitton croissant bag', brand: 'Louis Vuitton', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080252/17809544_37662363_1000_cdc1ou.jpg' },
    { id: 9, name: 'Suede vintage Coach', description: 'Suede beige vintage Coach bag', brand: 'Coach', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080252/beige-suede-coach-handbag-2267093-1_1.jpg_iu7pyb.webp' },
    { id: 10, name: 'Vintage Bowling Dior', description: 'Vintage cloth Dior handbag', brand: 'Dior', price: 10, image: 'https://res.cloudinary.com/darjcijgb/image/upload/c_limit,w_400/v1652080253/pink-cloth-dior-handbag-22099179-1_3.jpg_xxfumn.webp' },
   ];

app.get('/', (req, res) => {
    console.log('New request');
    res.send('hello!');
   });

app.get('/products', (req, res) => {
    res.send(products);
});
  
app.get('/products/:id', (req, res) => {
    const parsedProductId = parseInt(req.params.id)
    const product = products.find((product) => product.id === parsedProductId);
    if (product) {
        res.send(product);
    } else {
        res.sendStatus(404);
    }
});
   

app.listen(serverPort, () => console.log(`Server is running on port ${serverPort}`));