// Danh sách các sản phẩm có trong giỏ hàng
let products = [
    {
        name: "Iphone 13 Pro Max", // Tên sản phẩm
        price: 3000000, // Giá mỗi sản phẩm
        brand: "Apple", // Thương hiệu
        count: 2, // Số lượng sản phẩm trong giỏ hàng
    },
    {
        name: "Samsung Galaxy Z Fold3",
        price: 41000000,
        brand: "Samsung",
        count: 1,
    },
    {
        name: "IPhone 11",
        price: 15500000,
        brand: "Apple",
        count: 1,
    },
    {
        name: "OPPO Find X3 Pro",
        price: 19500000,
        brand: "OPPO",
        count: 3,
    },
]

// 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// Tên - Giá - Thương Hiệu - Số lượng
// Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

const showInfoProduct = pro => {
    pro.forEach(product => {
        console.log(`${product.name} - ${product.price} - ${product.brand} - ${product.count}`);
    })
}
showInfoProduct(products)

// 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// Tổng tiền mỗi sản phẩm = price * count

const showSumPrice = price => {
    let sumPrice = 0
    price.forEach(product => {
        sumPrice += product.price * product.count
    })
    return sumPrice
}
console.log(showSumPrice(products));

// 3. Tìm các sản phẩm của thuơng hiệu "Apple"

const showBrand = brand => {
    return brand.filter(product => product.brand == "Apple")
}
console.log(showBrand(products));

// 4. Tìm các sản phẩm có giá > 20000000

const showPrice = priceProduct => {
    return priceProduct.filter(product => product.price > 20000000)
}
console.log(showPrice(products));

// 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

const showName = name => {
    return name.filter(product => (product.name).toLowerCase().includes("pro"))
}
console.log(showName(products));

// 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

function newProduct(name, price, brand, count) {
    return {
        name: name,
        price: price,
        brand: brand,
        count: count
    }
}

products.push(newProduct("Iphone 12", 20000000, "Apple", 2))
console.log(products);

// 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng
const deleteProduct = show => {
    return show.filter(product => (product.brand).toLowerCase() != "samsung")
}
console.log(deleteProduct(products));


// 8. Sắp xếp giỏ hàng theo price tăng dần

const sortPriceProduct = arrange => {
    return arrange.sort((a, b) => a.price - b.price)
}
console.log(sortPriceProduct(products));

// 9. Sắp xếp giỏ hàng theo count giảm dần

const sortCountProduct = count => {
    return count.sort((a, b) => b.count - a.count)
}
console.log(sortCountProduct(products));

// 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

const randomProduct = random => {
    for (let i = random.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1))
        let ele = random[i]
        random[i] = random[j]
        random[j] = ele
    }
    return random.slice(0, 2)
}
console.log(randomProduct(products));
