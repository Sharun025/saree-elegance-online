import { motion } from "framer-motion";
import ProductCard from "./ProductCard";

// Import product images
import saree1 from "@/assets/products/saree-1.jpg";
import saree2 from "@/assets/products/saree-2.jpg";
import saree3 from "@/assets/products/saree-3.jpg";
import saree4 from "@/assets/products/saree-4.jpg";
import saree5 from "@/assets/products/saree-5.jpg";
import saree6 from "@/assets/products/saree-6.jpg";
import accessory1 from "@/assets/products/accessory-1.jpg";
import accessory2 from "@/assets/products/accessory-2.jpg";

const products = [
  {
    id: 1,
    image: saree1,
    name: "Banarasi Silk Saree",
    price: 18500,
    category: "Silk Sarees",
  },
  {
    id: 2,
    image: saree2,
    name: "Kanjivaram Royal Blue",
    price: 24500,
    category: "Kanjivaram",
  },
  {
    id: 3,
    image: saree3,
    name: "Blush Pink Chiffon",
    price: 8900,
    category: "Chiffon",
  },
  {
    id: 4,
    image: saree4,
    name: "Emerald Patola Silk",
    price: 32000,
    category: "Patola",
  },
  {
    id: 5,
    image: saree5,
    name: "Golden Tussar Elegance",
    price: 15500,
    category: "Tussar Silk",
  },
  {
    id: 6,
    image: saree6,
    name: "Mustard Chanderi",
    price: 12500,
    category: "Chanderi",
  },
  {
    id: 7,
    image: accessory1,
    name: "Pearl Jhumka Earrings",
    price: 4500,
    category: "Jewelry",
  },
  {
    id: 8,
    image: accessory2,
    name: "Traditional Gold Bangles",
    price: 6800,
    category: "Jewelry",
  },
];

const ProductGrid = () => {
  return (
    <section id="shop" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground mb-4">
            Our Collection
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Explore our handpicked selection of exquisite sarees and accessories, 
            each piece crafted with love and tradition.
          </p>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;