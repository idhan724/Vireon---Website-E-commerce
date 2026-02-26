export type ProductDataProps = {
    id: number;
    category: "Fashion" | "Tech" | "Home & Living";
    name: string;
    description: string;
    img: string;
    alt: string;
    price: number;
    stock: number;
}

export const productData : ProductDataProps[] = [
    {
        id: 1,
        category: "Tech",
        name: "camera",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/camera.png",
        alt: "camera",
        price: 2500000,
        stock: 27,
    },
    {
        id: 2,
        category: "Home & Living",
        name: "Meja Jam",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/meja-jam.png",
        alt: "meja jam",
        price: 25000,
        stock: 187,
    },
    {
        id: 3,
        category: "Tech",
        name: "Macbook Pro",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/macbook-pro.png",
        alt: "macbook pro",
        price: 25000,
        stock: 76,
    },
    {
        id: 4,
        category: "Home & Living",
        name: "Bingkai Foto",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/bingkai-foto.png",
        alt: "Bingkai Foto",
        price: 25000,
        stock: 76,
    },
    {
        id: 5,
        category: "Home & Living",
        name: "Mesin Jahit",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/mesin-jahit.png",
        alt: "Mesin Jahit",
        price: 25000,
        stock: 76,
    },
    {
        id: 6,
        category: "Fashion",
        name: "Pakaian Pria",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/pakaian-pria.png",
        alt: "Pakaian Pria",
        price: 25000,
        stock: 76,
    },
    {
        id: 7,
        category: "Home & Living",
        name: "Peralatan Dapur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/peralatan-dapur.png",
        alt: "Peralatan Dapur",
        price: 25000,
        stock: 76,
    },
    {
        id: 8,
        category: "Fashion",
        name: "Sepatu Ungu",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/sepatu-ungu.png",
        alt: "Sepatu Ungu",
        price: 25000,
        stock: 76,
    },
    {
        id: 9,
        category: "Home & Living",
        name: "sofa",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/sofa.png",
        alt: "sofa",
        price: 25000,
        stock: 76,
    },
    {
        id: 10,
        category: "Home & Living",
        name: "topi",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus dicta tenetur vero reiciendis ratione ducimus laudantium facilis tempore nam numquam.",
        img:"/product/topi.png",
        alt: "topi",
        price: 25000,
        stock: 76,
    },
]