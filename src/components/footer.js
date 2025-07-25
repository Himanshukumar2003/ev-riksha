import Container from "@mui/material/Container";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 px-6 py-12 mt-0">
      <Container maxWidth="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
              ></Image>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Mac Auto – Driving E-Rickshaw Innovation Since 2014. As one of
              India’s pioneering electric vehicle manufacturers, we specialize
              in eco-friendly E-Rickshaws and loading carts with patented
              designs and i-CAT certifications. With a PAN India presence, Mac
              Auto is committed to delivering innovative, reliable, and
              high-performance electric mobility solutions. Our dedication to
              quality and customer satisfaction sets us apart in the EV
              industry.
            </p>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Our Products
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Our Products
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/products/mac-tejas-sh"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tejas
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mac-tejs-dhl"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tejas DHL
                </Link>
              </li>
              <li>
                <Link
                  href=""
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mac Multi Utility E-Cart
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mac-900"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mac 900
                </Link>
              </li>
              <li>
                <Link
                  href="/products/mac-mue-carbage"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Mac MUE Garbage
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  View All Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-400">
                  121A, 121B Gurukul Indraprastha Industrial. Green Valley
                  Faridabad, Haryana -121010
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400"> +91 80 9062 9062</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">info@macauto.in</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  href="https://www.facebook.com/MacAutoofficial"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="https://x.com/macautoofficial"
                  target="_blank"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  target="_blank"
                  href="https://www.instagram.com/accounts/login/?next=https%3A%2F%2Fwww.instagram.com%2Fmacautoindiaofficial%2F&is_from_rle"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-pink-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-slate-700 pt-6 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            Mac Auto | Design & Developed By
            <a href="https://brandingwaale.com/"> Brandingwaale Webtech</a>
          </p>
          <div className="flex items-center gap-2">
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <div className="flex gap-0.5">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              </div>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">PayPal</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-purple-600 font-bold text-xs">Skrill</span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-[var(--color-secondary)] font-bold text-xs">
                MC
              </span>
            </div>
            <div className="w-12 h-8 bg-white rounded flex items-center justify-center">
              <span className="text-blue-600 font-bold text-xs">VISA</span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
