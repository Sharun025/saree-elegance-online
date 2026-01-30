import { motion } from "framer-motion";
import heroModel from "@/assets/hero-model.jpg";
import heroSecondary from "@/assets/hero-secondary.jpg";

const Hero = () => {
  return (
    <section className="min-h-screen pt-16 md:pt-20">
      <div className="flex flex-col md:flex-row min-h-[calc(100vh-5rem)]">
        {/* Left Image - Full Height */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 h-[50vh] md:h-auto relative"
        >
          <img
            src={heroModel}
            alt="Elegant woman in traditional silk saree"
            className="w-full h-full object-cover object-top"
          />
        </motion.div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Text Content */}
          <div className="flex-1 flex flex-col justify-center px-6 md:px-12 lg:px-16 py-12 md:py-0">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="heading-display text-foreground mb-6"
            >
              Elegance<br />Redefined
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-body text-muted-foreground max-w-md mb-8"
            >
              Discover a world of timeless elegance and artisanal craftsmanship at Vasudha. 
              Our curated collection of handwoven sarees celebrates India's rich textile heritage, 
              catering to women who appreciate authentic beauty.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <a href="#shop" className="btn-outline inline-block">
                Shop All
              </a>
            </motion.div>
          </div>

          {/* Bottom Image */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[40vh] md:h-[45%]"
          >
            <img
              src={heroSecondary}
              alt="Model in cream silk saree"
              className="w-full h-full object-cover object-top"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;