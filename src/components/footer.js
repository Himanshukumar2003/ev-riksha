import { Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="border-b border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row  gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Subscribe to our newsletters
              </h2>
              <p className="text-gray-300 text-sm leading-relaxed">
                Stay up to date with the latest news, announcements, and
                articles.
              </p>
            </div>
            <div className="lg:max-w-md w-full">
              <div className="flex gap-2 mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-white text-black border-0 flex-1"
                />
                <button className="bg-orange-600 hover:bg-orange-700 text-white px-6">
                  Submit
                </button>
              </div>
              <p className="text-xs text-gray-400">
                By submitting this form, I agree to receive logistics news and
                marketing updates from Barsan Global Logistics and its
                affiliates via email and phone. I understand I can unsubscribe
                at any time by clicking the unsubscribe link in any email or by
                contacting Barsan Global Logistics directly. View our{" "}
                <Link href="#" className="text-orange-600 hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="mb-6">
              <h3 className="text-2xl font-bold tracking-wider">BARSAN</h3>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Connecting the world of commerce to make trade happen. We are a
              global logistics company.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Policy Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Legal Information Center
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Green Logistics
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="pt-4">
            <h4 className="text-lg font-semibold mb-6">
              Products and Services
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Air Freight
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Ocean Freight
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Road Freight
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Intermodal Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Warehouse and Fulfillment
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-orange-600 text-sm transition-colors"
                >
                  Customs Clearance Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Headquarters</h4>
            <div className="space-y-3 text-sm text-gray-300">
              <div className="d-flex">
                <p className="font-medium">
                  Email:
                  <Link
                    href="mailto:info@barsan.com"
                    className="text-orange-600 hover:underline"
                  >
                    info@barsan.com
                  </Link>
                </p>
              </div>
              <div>
                <p className="font-medium">
                  Call Centre:{" "}
                  <span className="text-orange-600 hover:underline">
                    +90 00 4 00
                  </span>
                </p>
              </div>
              <div>
                <p className="font-medium">Phone: +90 (212) 000 00 00</p>
              </div>
              <div>
                <p className="font-medium">Fax: +90 (212) 000 00 00</p>
              </div>
              <div>
                <p className="font-medium">Address:</p>
                <p>Merkez Mahallesi Nisbetiye Sokak</p>
                <p>No:1-3/1 Şişli / İstanbul / Türkiye</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              ©2024 Barsan Global Logistics - All right reserved.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-orange-600 transition-colors"
              >
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
