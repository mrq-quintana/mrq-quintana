export const Productos = [
    {
      productId: 1000,
      productName: "delightful chocolate Ilise",
      productImage: "https://picsum.photos/400?image=659",
      productStock: 100,
      productPrice: 1500,
      productSalePrice: 1200,
      category: "adultos",
      description: "Descripcion del Producto"
    },
    {
      productId: 1001,
      productName: "civilian salmon Delinda",
      productImage: "https://picsum.photos/400?image=261",
      productStock: 100,
      productPrice: 1800,
      productSalePrice: 1500,
      category: "adultos",
      description: "Descripcion del Producto"
    },
    {
      productId: 1002,
      productName: "northern chocolate Dagmar",
      productImage: "https://picsum.photos/400?image=921",
      productStock: 100,
      productPrice: 2380,
      productSalePrice: 2100,
      category: "adultos",
      description: "Descripcion del Producto"
    },
    {
      productId: 1004,
      productName: "arrogant tan Nelia",
      productImage: "https://picsum.photos/400?image=924",
      productStock: 100,
      productPrice: 4560,
      productSalePrice: 4200,
      category: "adultos",
      description: "Descripcion del Producto"
    },
    {
      productId: 1005,
      productName: "following bronze Misti",
      productImage: "https://picsum.photos/400?image=340",
      productStock: 100,
      productPrice: 3650,
      productSalePrice: 3120,
      category: "adultos",
      description: "Descripcion del Producto"
    },
   {
     productId: 1007,
     productName: "sufficient peach Georgiana",
     productImage: "https://picsum.photos/400?image=860",
     productStock: 100,
     productPrice: 4000,
     productSalePrice: 3260,
     category: "adultos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1008,
     productName: "frequent sapphire Petronella",
     productImage: "https://picsum.photos/400?image=913",
     productStock: 100,
     productPrice: 4498,
     productSalePrice: 4099,
     category: "adultos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1009,
     productName: "indirect indigo Fiona",
     productImage: "https://picsum.photos/400?image=583",
     productStock: 100,
     productPrice: 9000,
     productSalePrice: 8300,
     category: "adultos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1010,
     productName: "gross plum Veriee",
     productImage: "https://picsum.photos/400?image=306",
     productStock: 100,
     productPrice: 3650,
     productSalePrice: 3216,
     category: "adultos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1011,
     productName: "gigantic red Lissy",
     productImage: "https://picsum.photos/400?image=184",
     productStock: 100,
     productPrice: 9805,
     productSalePrice: 8956,
     category: "adultos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1012,
     productName: "blind copper Dionne",
     productImage: "https://picsum.photos/400?image=308",
     productStock: 100,
     productPrice:2030,
     productSalePrice: 2020,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1013,
     productName: "varied indigo Lizzie",
     productImage: "https://picsum.photos/400?image=453",
     productStock: 100,
     productPrice: 5600,
     productSalePrice: 5230,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1014,
     productName: "single amaranth Doris",
     productImage: "https://picsum.photos/400?image=325",
     productStock: 100,
     productPrice: 1650,
     productSalePrice:1300,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1015,
     productName: "keen maroon Lenette",
     productImage: "https://picsum.photos/400?image=92",
     productStock: 100,
     productPrice: 3200,
     productSalePrice: 3099,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1016,
     productName: "conservation peach Nari",
     productImage: "https://picsum.photos/400?image=798",
     productStock: 100,
     productPrice: 5600,
     productSalePrice: 5300,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1017,
     productName: "loyal blush Happy",
     productImage: "https://picsum.photos/400?image=163",
     productStock: 100,
     productPrice: 4569,
     productSalePrice: 4305,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1018,
     productName: "awkward jade Wini",
     productImage: "https://picsum.photos/400?image=475",
     productStock: 100,
     productPrice: 9056,
     productSalePrice: 8500,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1019,
     productName: "uncertain cyan Tawsha",
     productImage: "https://picsum.photos/400?image=18",
     productStock: 100,
     productPrice: 9805,
     productSalePrice:9652,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1020,
     productName: "partial harlequin Katlin",
     productImage: "https://picsum.photos/400?image=466",
     productStock: 100,
     productPrice: 4562,
     productSalePrice: 3512,
     category: "chicos",
     description: "Descripcion del Producto"
   },
   {
     productId: 1021,
     productName: "redundant emerald Allyson",
     productImage: "https://picsum.photos/400?image=110",
     productStock: 100,
     productPrice: 7856,
     productSalePrice: 7802,
     category: "chicos",
     description: "Descripcion del Producto"
   }
]
  
  export const db = new Promise((respuesta, rechazo) => {
    let resp = "200";
    if (resp === "200") {
      setTimeout(() => {
        respuesta(Productos);
      }, 2000);
    } else {
      rechazo("Error 404");
    }
  });

