import { motion } from "framer-motion";
import storySarees from "@/assets/story-sarees.jpg";
import craftsmanship from "@/assets/craftsmanship.jpg";

const features = [
  {
    title: "Heritage",
    description:
      "We preserve centuries-old weaving traditions, bringing you sarees crafted by master artisans from across India.",
  },
  {
    title: "Quality",
    description:
      "Every thread is carefully selected, every pattern meticulously woven to ensure unparalleled quality and longevity.",
  },
  {
    title: "Personal Touch",
    description:
      "From styling advice to custom draping tutorials, we're here to make your saree experience truly special.",
  },
];

const StorySection = () => {
  return (
    <section className="bg-muted">
      {/* Image Grid */}
      <div className="grid md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="h-[50vh] md:h-[80vh]"
        >
          <img
            src={storySarees}
            alt="Stack of colorful silk sarees"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-[50vh] md:h-[80vh]"
        >
          <img
            src={craftsmanship}
            alt="Artisan hands weaving traditional saree"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Story Content */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="heading-section text-foreground mb-6">
              Our Story
            </h2>
            <p className="text-body text-muted-foreground max-w-3xl mx-auto">
              At Vasudha, we are passionate about preserving India's rich weaving heritage. 
              Our boutique is a sanctuary for those seeking timeless elegance and authentic craftsmanship. 
              Each saree in our collection tells a story—of skilled artisans, age-old traditions, 
              and the beauty that emerges when heritage meets contemporary design.
            </p>
          </motion.div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="font-heading text-2xl font-medium text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-body text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;