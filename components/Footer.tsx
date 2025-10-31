import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#27282C] text-gray-300 pt-16 md:pt-24 px-8 md:px-20">
            {/* Top Section */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-start md:space-x-9 space-y-12 md:space-y-0">
                {/* LOGO + Social + Newsletter */}
                <div className="space-y-6 w-full md:w-auto md:text-left">
                    {/* Logo */}
                    <div className="flex justify-center md:justify-start mb-8">
                        <Image
                            src="https://d2b1cooxpkirg1.cloudfront.net/publicAssets/intervue.svg"
                            alt="Intervue Logo"
                            width={140}
                            height={50}
                            className="object-contain invert"
                        />
                    </div>
                    <div className="md:flex justify-center md:justify-start gap-4 text-sm text-gray-200 hidden mt-6">
                        <Link href="#">Facebook</Link>
                        <Link href="#">Instagram</Link>
                        <Link href="#">LinkedIn</Link>
                        <Link href="#">Pinterest</Link>
                    </div>

                    {/* Newsletter */}
                    <div className="pt-4">
                        <h3 className="text-[#f1b545] font-semibold text-lg md:mb-6 mb-3">
                            Hire better & faster
                        </h3>
                        <div className="flex items-center justify-center md:justify-start border-b border-gray-600 w-full md:w-fit pr-2 pb-1">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                className="bg-transparent text-gray-300 text-sm py-2 outline-none w-full md:w-56"
                            />
                            <ArrowUpRight className="w-4 h-4 text-[#f1b545]" />
                        </div>

                    </div>

                    {/* Social Links */}

                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:flex md:w-full md:justify-around gap-y-12 gap-x-20  md:mt-0 text-left">
                    {/* Company Section */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Company</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#">So gehts</Link></li>
                            <li><Link href="#">Erfahrung</Link></li>
                            <li><Link href="#">Aligner</Link></li>
                            <li><Link href="#">Preise</Link></li>
                            <li><Link href="#">Standorte</Link></li>
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Resources</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Lift Media</Link></li>
                            <li><Link href="#">Offene Stellen</Link></li>
                            <li><Link href="#">Presse kit</Link></li>
                        </ul>
                    </div>

                    {/* Product Section 1 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#">Gratis Termin</Link></li>
                            <li><Link href="#">Freunde einladen</Link></li>
                            <li><Link href="#">Information</Link></li>
                            <li><Link href="#">Changelog</Link></li>
                            <li><Link href="#">Updates</Link></li>
                        </ul>
                    </div>

                    {/* Product Section 2 */}
                    <div>
                        <h4 className="text-white font-semibold mb-6">Product</h4>
                        <ul className="space-y-4 text-sm text-gray-400">
                            <li><Link href="#">Blog</Link></li>
                            <li><Link href="#">FAQ</Link></li>
                            <li><Link href="#">Lift Media</Link></li>
                            <li><Link href="#">Offene Stellen</Link></li>
                            <li><Link href="#">Presse kit</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-white md:pt-16 pt-5 pb-10 border-t border-gray-700 mt-12">
                <div className="flex flex-row py-4 md:hidden items-center justify-center space-x-3 w-full">
                    <div className="p-3 bg-gray-600 rounded-2xl">
                        <Facebook />
                    </div>
                    <div className="p-3 bg-gray-600 rounded-2xl"> <Twitter /></div>
                    <div className="p-3 bg-gray-600 rounded-2xl"> <Instagram /></div>
                    <div className="p-3 bg-gray-600 rounded-2xl"> <Linkedin /></div>
                    <div className="p-3 bg-gray-600 rounded-2xl">      <Youtube /></div>




                </div>
                <p className="text-center block md:hidden md:text-left leading-loose">
                    Copyright © 2023 Intervue. <br /> All rights reserved.
                </p>
                <p className="text-center hidden md:block md:text-left">
                    © 2023 Intervue. Crafted by great minds.
                </p>
                <div className="md:flex hidden gap-6 mt-4 md:mt-0 justify-center  md:justify-end">
                    <Link href="#">Datenschutz</Link>
                    <Link href="#">Impressum</Link>
                    <Link href="#">Cookie Policy</Link>
                    <Link href="#">AGBs</Link>
                </div>
            </div>
        </footer>
    );
}
