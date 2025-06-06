const topSelling = [
    {
        id: "b5gyhn-4hb76bhh4-5y4hv6b8",
        name: "Vertical Striped Shirt",
        image: "./images/Frame 32.png",
        priceCents: {
            current: 21200,
            previous: 23200,
        },
        rating: {
            stars: 5.0,
            count: 5
        },
        discount: 30 ,
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
        id: "8478r44-9o-i3y8dy8dd-ddiddoeo",
        name: "Courage Graphic T-shirt",
        image: "./images/Frame 39.png",
        priceCents: {
            current: 14500,
            previous: null,
        },
        rating: {
            stars: 4.0,
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
    }, {
        id: "u9fi-g8cg7n83rhm9-yxe3f7-f689c3",
        name: "Loosed Fit Bermuda Shorts",
        image: "./images/Frame 37.png",
        priceCents: {
            current: 8000,
            previous: null,
        },
        rating: {
            stars: 3.0,
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
    },
    {
        id: "b1234567-89ab-cdef-0123-456789abcdef",
        name: "Faded Skinny Jeans",
        image: "./images/Group 16.png",
        priceCents: {
            current: 21000,
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
    },

]


let topSellingContent = '';

topSelling.forEach((product) => {

    topSellingContent += `<div class="product-card">
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

export { topSellingContent };

// This code dynamically generates the HTML content for new arrivals and injects it into the page.