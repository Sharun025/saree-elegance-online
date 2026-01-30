import { motion } from "framer-motion";
import accessoriesBanner from "@/assets/accessories-banner.jpg";

const PromoBanner = () => {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={accessoriesBanner}
          alt="Traditional gold jewelry collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-primary-foreground px-4"
        >
          <p className="text-sm tracking-[0.2em] uppercase mb-4 opacity-90">
            Premium Quality
          </p>
          <h2 className="font-heading text-4xl md:text-6xl font-semibold mb-4">
            Authentic Craftsmanship
          </h2>
          <p className="text-body max-w-xl mx-auto mb-8 opacity-90">
            Each piece in our collection is crafted by master artisans 
            using traditional techniques passed down through generations.
          </p>
          <a 
            href="#contact" 
            className="btn-gold inline-block"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PromoBanner;