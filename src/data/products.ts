import productShoe1 from "@/assets/product-shoe-1.jpg";
import productShoe2 from "@/assets/product-shoe-2.jpg";
import productTshirt1 from "@/assets/product-tshirt-1.jpg";
import productTshirt2 from "@/assets/product-tshirt-2.jpg";
import productPants1 from "@/assets/product-pants-1.jpg";
import productBag1 from "@/assets/product-bag-1.jpg";
import productShirt1 from "@/assets/product-shirt-1.jpg";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  image: string;
  sizes: string[];
  description: string;
}

export const products: Product[] = [
  {
    id: "shoe-1",
    name: "Classic White Leather",
    category: "Shoes",
    price: 189,
    image: productShoe1,
    sizes: ["38", "39", "40", "41", "42", "43", "44"],
    description: "Premium Italian leather sneaker with minimalist design. Handcrafted for ultimate comfort and timeless style."
  },
  {
    id: "shoe-2",
    name: "Shadow Black Edition",
    category: "Shoes",
    price: 219,
    image: productShoe2,
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    description: "All-black leather sneaker with subtle matte finish. The perfect statement piece for the modern wardrobe."
  },
  {
    id: "tshirt-1",
    name: "Essential Tee - Sand",
    category: "T-Shirts",
    price: 78,
    image: productTshirt1,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "Oversized premium cotton tee in warm sand. 280gsm heavyweight fabric for a luxurious drape."
  },
  {
    id: "tshirt-2",
    name: "Essential Tee - Noir",
    category: "T-Shirts",
    price: 78,
    image: productTshirt2,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    description: "The perfect black tee. Oversized silhouette in 280gsm premium cotton with a subtle box fit."
  },
  {
    id: "shirt-1",
    name: "Oxford Classic White",
    category: "Shirts",
    price: 145,
    image: productShirt1,
    sizes: ["S", "M", "L", "XL", "XXL"],
    description: "Crisp white Oxford shirt in premium cotton. Relaxed fit with barrel cuffs for effortless elegance."
  },
  {
    id: "pants-1",
    name: "Tailored Wool Trousers",
    category: "Pants",
    price: 265,
    image: productPants1,
    sizes: ["28", "30", "32", "34", "36", "38"],
    description: "Charcoal wool blend trousers with refined tapered leg. Italian fabric meets modern tailoring."
  },
  {
    id: "bag-1",
    name: "Minimal Tote - Cream",
    category: "Bags",
    price: 320,
    image: productBag1,
    sizes: ["One Size"],
    description: "Premium leather tote bag in warm cream. Unlined for a soft, natural feel with suede interior."
  }
];

export const categories = ["All", "Shoes", "T-Shirts", "Shirts", "Pants", "Bags"];
