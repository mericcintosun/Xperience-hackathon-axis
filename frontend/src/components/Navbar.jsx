'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Wallet, Code, Search, History, LifeBuoy } from 'lucide-react';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: 'Developers', href: '/developers', icon: Code },
    { name: 'Support', href: '/support', icon: LifeBuoy },
    { name: 'Explorer', href: '/explorer', icon: Search },
    { name: 'Transactions', href: '/transactions', icon: History },
    { name: 'Wallet', href: '/wallet', icon: Wallet },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-[#262626] bg-[#0f0f0f] backdrop-blur-md">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative w-[80px] h-[40px]">
              <Image
                src="/logo.png"
                alt="Axis AI"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-sm font-medium text-[#a3a3a3] hover:text-[#23f7de] transition-colors"
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-[#a3a3a3] hover:text-[#23f7de] hover:bg-[#262626] transition-colors"
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-2 px-4 py-2 text-sm font-medium text-[#a3a3a3] hover:text-[#23f7de] hover:bg-[#262626] rounded-lg transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
