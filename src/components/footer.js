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
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="logo"
                width={150}
                height={150}
              ></Image>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              The Mantu is the biggest market of grocery products. Get your
              daily needs from our store.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="#"
                className="flex items-center gap-2 bg-slate-700 hover:bg-slate-600 px-4 py-2 rounded-lg transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z" />
                </svg>
                <div className="text-left">
                  <div className="text-xs text-gray-400">DOWNLOAD ON</div>
                  <div className="text-sm font-semibold">App Store</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Category Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Category</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Fashion
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Cosmetics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Bags & Purse
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Shoes
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Belts
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Perfumes
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Delivery
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Legal Notice
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Terms of use
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Secure payment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact us
                </Link>
              </li>
            </ul>
          </div>

          {/* Account Section */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Account</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Sign In
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  View Cart
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Return Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Become a Vendor
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Payments
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
                  1234 Elm Street Springfield Avenue, Brooklyn den, IL 62704
                  USA.
                </p>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">+00 9876543210</p>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gray-400 flex-shrink-0" />
                <p className="text-sm text-gray-400">example@email.com</p>
              </div>
              <div className="flex gap-3 mt-4">
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 bg-slate-700 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-colors"
                >
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link
                  href="#"
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
