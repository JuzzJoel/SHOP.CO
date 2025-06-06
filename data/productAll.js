const products = [
  {
        id: "b1234567-89ab-cdef-0123-456789abcdef",
        name: "T-shirt with Tape Details",
        image: "./images/Frame31.png",
        priceCents: {
            current: 120000,
            previous: 150000,
        },
        rating: {
          stars: 3.5,
          count: 5
        },
        discount: -20,
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

    
    
    

`    <div class="product-card">
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
              <span class="product-price__current">$${(product.priceCents.current / 100).toFixed(2)}</span>
              <span class="product-price__old">$${(product.priceCents.previous / 100).toFixed(2)}</span>
              <span class="product-price__discount">-${Math.abs(product.discount)}%</span>
            </div>
          </div>`