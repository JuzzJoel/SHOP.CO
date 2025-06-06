const productDetail = [
    {
        id: "93f8b1c2-4d3e-4f5a-8b6c-7d8e9f0a1b2c",
        name: "ONE LIFE GRAPHIC T-SHIRT",
        image: "./images/image 1.png",
        priceCents: {
            current: 21200,
            previous: 23200,
        },
        thumbnails: {
            first: "./images/image 2.png",
            second: "./images/image 5.png",
            third: "./images/image 6.png"
        },
        rating: {
            stars: 5.0,
            count: 5
        },
        discount: 30,
        category: "apparel",
        description: " This graphic t-shirt relax fit is perfect for any occasion. Crafted from soft combed brushed fabric, it offers a superior comfort and style.",
        colors: ["#4F4631", "#314F4A", "#31344f"],
        sizes: ["Small", "Medium", "Large", "X-Large"],
        keywords: [
            "jacket",
            "denim",
            "apparel"
        ]
    },
];



let productDetailContent = '';

productDetail.forEach((product) => {

    productDetailContent += ` 
                <div class="image-container">
                    <div class="gallery">
                        <div class="thumb">
                            <img src="${product.thumbnails.first}" alt="">
                        </div>
                        <div class="thumb">
                            <img src="${product.thumbnails.second}" alt="">
                        </div>
                        <div class="thumb">
                            <img src="${product.thumbnails.third}" alt="">
                        </div>
                    </div>

                    <div class="main-image">
                        <img src="${product.image}" alt="">
                    </div>
                </div>

                <div class="info-container">
                    <div class="level">
                        <div class="info">
                            <h1 class="info-header">${product.name}</h1>

                            <div class="info-rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star-half"></i>
              <span class="rating-score">${product.rating.stars}/${product.rating.count}</span>
                            </div>

                            <div class="price bg">
              <span class="product-price__current">$${(product.priceCents.current / 100).toFixed(0)}</span>
<span class="product-price__old">${product.priceCents.previous ? `$${(product.priceCents.previous / 100).toFixed(0)}` : ''}</span>
                                   <span class="product-price__discount">${product.discount ? `-${Math.abs(product.discount)}%` : ''}</span>

                        </div>
                                                    <div class="description">${product.description}</div>
</div>
                    </div>
                    <div class="level">
                        <div class="options">
                            <h4>Select Colors</h4>
                            <div class="colors">
          ${product.colors.map((color, index) => `<span style="background-color: ${color}" class="${index === 0 ? 'active' : ''}"></span>`).join('')}
        </div>

                        </div>
                    </div>
                    <div class="level">
                        <div class="options">
                            <h4>Choose Size</h4>
                            <div class="sizes">
                                <button>${product.sizes[0]}</button>
                                <button>${product.sizes[1]}</button>
                                <button class="active">${product.sizes[2]}</button>
                                <button>${product.sizes[3]}</button>
                            </div>
                        </div>
                    </div>
                    <div class="level four">
                        <div class="quantity">
                            <div class="quantity--selector">
                                <button class="quantity-bunn">−</button>
                                <span class="quantity-bunn figure">1</span>
                                <button class="quantity-bunn">+</button>
                            </div>
                        </div>
                        <button class="add-to-cart" data-product-id="${product.id}">Add to Cart</button>
                    </div>
                </div>

`;
});

export { productDetailContent };
