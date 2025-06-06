const casualCategory = [
    {
        id: "asyas-aecrayva-78384ge-yudr",
        name: "Gradient Graphic T-shirt",
        image: "./images/image 8.png",
        priceCents: {
            current: 14500,
            previous: null,
        },
        rating: {
            stars: 3.5,
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
        id: "eewgeifui-sgr-qwgr",
        name: "Polo with Tipping Details",
        image: "./images/image 9.png",
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
    }, {
        id: "6683g8-7af7aev7ay8-sgs",
        name: "Black Striped T-shirt",
        image: "./images/image 10.png",
        priceCents: {
            current: 12000,
            previous: 15000,
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
        discount: 20,
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
    }, {
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
    }, {
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

]


let casualCategoryContent = '';

casualCategory.forEach((product) => {

    casualCategoryContent += `<div class="product-card-display">
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

export { casualCategoryContent };

// This code dynamically generates the HTML content for casual category and injects it into the page.