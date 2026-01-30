import { motion } from "framer-motion";
import heroModel from "@/assets/hero-model.jpg";

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm tracking-[0.2em] uppercase mb-4 opacity-80">
              Why Choose Us
            </p>
            <h2 className="font-heading text-4xl md:text-5xl font-semibold mb-6">
              New Arrivals
            </h2>
            <p className="text-body opacity-90 mb-8 max-w-lg">
              Experience the perfect blend of tradition and modernity. 
              Our newest collection features handpicked sarees that celebrate 
              the artistry of Indian weavers while embracing contemporary aesthetics.
            </p>
            <a 
              href="#shop" 
              className="inline-block px-8 py-3 border border-primary-foreground text-primary-foreground 
                         tracking-[0.2em] uppercase text-sm font-medium
                         transition-all duration-300 hover:bg-primary-foreground hover:text-primary"
            >
              Explore Collection
            </a>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px]"
          >
            <img
              src={heroModel}
              alt="Model in elegant saree"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;