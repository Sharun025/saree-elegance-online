import { Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo */}
          <div className="font-heading text-2xl font-semibold tracking-wide">
            Vasudha
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity" aria-label="Twitter">
              <Twitter className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-sm opacity-70">
            © {new Date().getFullYear()} Vasudha Sarees. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;