 const newArrival = [
    {
        id: "b1234567-89ab-cdef-0123-456789abcdef",
        name: "T-shirt with Tape Details",
        image: "./images/Frame 31.png",
        priceCents: {
            current: 12000,
            previous: null ,
        },
        rating: {
            stars: 3.5,
            count: 5
        },
        discount:  null,
        category: "apparel",
        description: "A stylish t-shirt featuring unique tape details, perfect for casual outings.",
        color: "Black",
        size: "M",
        keywords: [
            "jacket",
            "denim",
            "apparel"
        ]
     },
     {
         id: "37333-e3e344-343434",
         name: "Skinny Fit Jeans",
         image: "./images/Frame 33.png",
         priceCents: {
             current: 24000,
             previous: 20000,
         },
         rating: {
             stars: 3.5,
             count: 5
         },
         discount: 20 ,
         category: "apparel",
         description: "A stylish t-shirt featuring unique tape details, perfect for casual outings.",
         color: "Black",
         size: "M",
         keywords: [
             "jacket",
             "denim",
             "apparel"
         ]
     }, {
         id: "b1333333-5454-3-3-333333f",
         name: "Checkered Shirt",
         image: "./images/Frame 34.png",
         priceCents: {
             current: 18000,
             previous: null,
         },
         rating: {
             stars: 4.5,
             count: 5
         },
         discount: null,
         category: "apparel",
         description: "A stylish t-shirt featuring unique tape details, perfect for casual outings.",
         color: "Black",
         size: "M",
         keywords: [
             "jacket",
             "denim",
             "apparel"
         ]
     },   {
        id: "b1-ttttt-452t3by-5553-4gv4qw",
         name: "Sleeve Striped T-shirt",
        image: "./images/Frame 38.png",
        priceCents: {
            current: 13000,
            previous: 16000,
        },
        rating: {
            stars: 3.5,
            count: 5
        },
        discount: 30,
        category: "apparel",
        description: "A stylish t-shirt featuring unique tape details, perfect for casual outings.",
        color: "Black",
        size: "M",
        keywords: [
            "jacket",
            "denim",
            "apparel"
        ]
    },

]
  

let newArrivalContent = '';

newArrival.forEach((product) => {

    newArrivalContent += `<div class="product-card">
            <img src="${product.image}" alt="${product.name}" />
            <h3 class="product-card__title">${product.name}</h3>
            <div class="product-card__rating">
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star-half"></span>
              <span class="rating-score">${product.rating.stars}/${product.rating.count}</span>
            </div>
            <div class="product-card__prices">
              <span class="product-price__current">$${(product.priceCents.current / 100).toFixed(0)}</span>
<span class="product-price__old">${product.priceCents.previous ? `$${(product.priceCents.previous / 100).toFixed(0)}` : ''}</span>
              <span class="product-price__discount">${product.discount ? `-${Math.abs(product.discount)}%` : ''}</span>
            </div>
          </div>`;
})

export { newArrivalContent };

// This code dynamically generates the HTML content for new arrivals and injects it into the page.