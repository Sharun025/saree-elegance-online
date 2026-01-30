import { useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

interface ProductCardProps {
  image: string;
  name: string;
  price: number;
  category?: string;
}

const ProductCard = ({ image, name, price, category }: ProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-square overflow-hidden bg-card mb-4">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Quick View Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-foreground/20 flex items-center justify-center"
        >
          <button className="flex items-center gap-2 px-6 py-3 bg-background text-foreground text-sm font-medium tracking-wider uppercase hover:bg-primary hover:text-primary-foreground transition-colors">
            <Eye className="w-4 h-4" />
            Quick View
          </button>
        </motion.div>
      </div>

      <div className="text-center">
        {category && (
          <p className="text-xs text-muted-foreground tracking-wider uppercase mb-1">
            {category}
          </p>
        )}
        <h3 className="font-heading text-lg font-medium text-foreground mb-2">
          {name}
        </h3>
        <p className="text-sm text-muted-foreground">
          ₹{price.toLocaleString("en-IN")}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;