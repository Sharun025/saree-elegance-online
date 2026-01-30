import { motion } from "framer-motion";

// Import product images
import saree1 from "@/assets/products/saree-1.jpg";
import saree2 from "@/assets/products/saree-2.jpg";
import saree4 from "@/assets/products/saree-4.jpg";
import accessory1 from "@/assets/products/accessory-1.jpg";

const categories = [
  {
    id: 1,
    image: saree1,
    name: "Silk Sarees",
    description: "Exquisite handwoven silk sarees from Kanchipuram, Banarasi, and more",
  },
  {
    id: 2,
    image: saree2,
    name: "Silk Fabrics",
    description: "Premium silk fabrics for custom tailoring and design",
  },
  {
    id: 3,
    image: saree4,
    name: "Silk Dhotis",
    description: "Traditional silk dhotis crafted with finest threads",
  },
  {
    id: 4,
    image: accessory1,
    name: "Silk Accessories",
    description: "Elegant silk accessories to complement your attire",
  },
];

const ProductGrid = () => {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="heading-section text-foreground mb-4">
            Our Products
          </h2>
          <p className="text-body text-muted-foreground max-w-2xl mx-auto">
            Explore our curated categories of exquisite silk products, 
            each crafted with love and tradition by master artisans.
          </p>
        </motion.div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-square overflow-hidden bg-card mb-4">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300" />
              </div>

              <div className="text-center">
                <h3 className="font-heading text-xl font-medium text-foreground mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;