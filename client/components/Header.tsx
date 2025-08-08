import React, { useState } from "react";
import { Shield, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link 
              to="/" 
              className="flex items-center space-x-2"
            >
              <img
                src="/favicon.ico"
                alt="Logo"
                className="h-8 w-8 sm:h-10 sm:w-10 object-contain"
              />
              <span className="text-lg sm:text-xl font-bold text-gray-900">
                Công Dân Số An Toàn
              </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link
              to="/"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Trang chủ
            </Link>
            <Link
              to="/scam-types"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              An toàn số
            </Link>
            <Link
              to="/digital-ethics"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Đạo đức số
            </Link>
            <Link
              to="/ai-safety"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              AI An toàn
            </Link>
            <Link
              to="/digital-law"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Pháp luật số
            </Link>
            <Link
              to="/digital-skills"
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              Kỹ năng số
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Trang chủ
              </Link>
              <Link
                to="/scam-types"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                An toàn số
              </Link>
              <Link
                to="/digital-ethics"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Đạo đức số
              </Link>
              <Link
                to="/ai-safety"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                AI An toàn
              </Link>
              <Link
                to="/digital-law"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Pháp luật số
              </Link>
              <Link
                to="/digital-skills"
                className="block px-3 py-2 text-gray-700 hover:text-blue-600 font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kỹ năng số
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
