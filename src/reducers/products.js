var initialState = [
    {
        id: 1,
        name: "Iphone X",
        price: 500,
        image: 'http://vnreview.vn/image/17/67/26/1767266.jpg?t=1518484342718',
        des: 'Sản phẩm của Apple sản xuất',
        inventory: 15,
        rating: 5
    },
    {
        id: 2,
        name: "Sam Sam J7 Pro",
        price: 350,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA3vkcBRJNvYR1qgb_yCwrsVynhai3HOeb8I69R56fa1gxM7hc',
        des: 'Sản phẩm của Sam Sung sản xuất',
        inventory: 5,
        rating: 4
    },
    {
        id: 3,
        name: "Nokia N9",
        price: 310,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKrkJraIbuToUtdtWAtHhSiI4gXzwVdniLE8-dqmqlhReqcDqSsA',
        des: 'Sản phẩm của Nokia sản xuất',
        inventory: 8,
        rating: 4
    }
];

var products = (state = initialState, action) => {
    switch(action.type){
        default: return [...state];
    }
}

export default products;