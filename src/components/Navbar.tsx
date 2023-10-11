import { Facebook, Instagram, Linkedin } from 'lucide-react';
import { useState } from 'react';
import Logo from '../assets/logo.svg';

function Navbar() {
	const location = window.location.pathname;
	const [navbar, setNavbar] = useState(false);
	return (
		<div>
			<nav className="w-full bg-white shadow">
				<div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
					<div>
						<div className="flex items-center justify-between py-3 md:py-5 md:block">
							<a href="/" className="flex items-center">
								<img src={Logo} alt="Qurinom Logo" className="h-10 mr-3" />
								<div className="flex flex-col">
									<span className="self-center text-xl font-semibold whitespace-nowrap">
										Qurinom Solutions
									</span>
									<span className="text-sm font-light">Ray to achieve</span>
								</div>
							</a>
							<div className="md:hidden">
								<button
									className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
									onClick={() => setNavbar(!navbar)}
								>
									{navbar ? (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											viewBox="0 0 20 20"
											fill="currentColor"
										>
											<path
												fillRule="evenodd"
												d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
												clipRule="evenodd"
											/>
										</svg>
									) : (
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="w-6 h-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
											strokeWidth={2}
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M4 6h16M4 12h16M4 18h16"
											/>
										</svg>
									)}
								</button>
							</div>
						</div>
					</div>
					<div>
						<div
							className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 px-4 ${
								navbar ? 'block' : 'hidden'
							}`}
						>
							<ul
								className={`items-center justify-center flex md:space-x-6${
									navbar ? 'flex flex-col gap-4' : ''
								}`}
							>
								<li
									className={`md:hidden {
										location === '/'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/">Home</a>
								</li>
								<li
									className={`md:hidden {
										location === '/services'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/services">Services</a>
								</li>
								<li
									className={`md:hidden {
										location === '/products'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/products">Products</a>
								</li>
								<li
									className={`md:hidden {
										location === '/about'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/about">About Us</a>
								</li>
								<li
									className={`md:hidden {
										location === '/career'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/career">Career</a>
								</li>
								<li
									className={`md:hidden {
										location === '/blogs'
											? 'text-gray-900 underline'
											: 'text-gray-500 hover:underline'
									}`}
								>
									<a href="/blogs">Blogs</a>
								</li>
								<div className="flex items-center justify-end md:hidden">
									<a
										className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
										href="/contact"
									>
										Contact Us
									</a>
								</div>

								<div className="flex gap-4">
									<li className="text-gray-600 hover:text-gray-800">
										<a href="#facebook" className="h-8 mr-5">
											<Facebook />
										</a>
									</li>
									<li className="text-gray-600 hover:text-gray-800">
										<a href="#instagram" className="h-8 mr-5">
											<Instagram />
										</a>
									</li>
									<li className="text-gray-600 hover:text-gray-800">
										<a href="#linkedin" className="h-8 mr-5">
											<Linkedin />
										</a>
									</li>
								</div>
							</ul>
						</div>
					</div>
				</div>
			</nav>
			<nav className="bg-white border-gray-200 hidden md:block">
				<div className="max-w-screen-xl px-8 py-3 mx-auto">
					<div className="flex items-center justify-between">
						<ul className="flex flex-row font-medium mt-0 mr-6 space-x-14 text-md">
							<li
								className={
									location === '/'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/">Home</a>
							</li>
							<li
								className={
									location === '/services'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/services">Services</a>
							</li>
							<li
								className={
									location === '/products'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/products">Products</a>
							</li>
							<li
								className={
									location === '/about'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/about">About Us</a>
							</li>
							<li
								className={
									location === '/career'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/career">Career</a>
							</li>
							<li
								className={
									location === '/blogs'
										? 'text-gray-900 underline'
										: 'text-gray-500 hover:underline'
								}
							>
								<a href="/blogs">Blogs</a>
							</li>
						</ul>
						<div className="flex items-center justify-end">
							<a
								className="bg-gray-600 hover:bg-gray-800 text-white font-bold py-2 px-4 rounded-md"
								href="/contact"
							>
								Contact Us
							</a>
						</div>
					</div>
				</div>
			</nav>
		</div>
	);
}

export default Navbar;
