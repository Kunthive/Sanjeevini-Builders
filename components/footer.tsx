import Link from "next/link"
import { Icons } from "./icons"

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold">S</span>
              </div>
              <span className="font-bold text-lg">Sanjeevini</span>
            </div>
            <p className="text-sm opacity-90">Building Dreams, Crafting Spaces</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-accent transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-accent transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="hover:text-accent transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-accent transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Icons.MapPin size={16} />
                <span>
                  #28, 3rd Floor, 27th Main,
                  <br />
                  1st Stage, BTM Layout,
                  <br />
                  Bengaluru 560068
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Phone size={16} />
                <div className="flex flex-col">
                  <a href="tel:+919481545865" className="hover:text-accent transition-colors">
                    Ph: 9481545865
                  </a>
                  <a href="tel:+918073365694" className="hover:text-accent transition-colors">
                    Ph: 8073365694
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-2">
                <Icons.MessageCircle size={16} />
                <a
                  href="https://wa.me/918867301822?text=Hi%20Sanjeevini%20Builders%2C%20I%20would%20like%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  WhatsApp: 8867301822
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Icons.Mail size={16} />
                <a href="mailto:info@sanjeevinibuilders.com" className="hover:text-accent transition-colors">
                  info@sanjeevinibuilders.com
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Icons.Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icons.Facebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Icons.Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm opacity-75">
          <p>&copy; 2025 Sanjeevini Builders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
