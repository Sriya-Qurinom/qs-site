import {
	ArrowRight,
	Facebook,
	Instagram,
	Linkedin,
	Mail,
	MapPin,
	Phone,
} from 'lucide-react';
import Logo from '../assets/logo.svg';

function Footer() {
	return (
		<div className="border-t-2 border-blue-950 flex flex-col justify-center items-center">
			<p className="text-center text-xl p-4 bg-blue-950 tracking-widest text-white w-fit rounded-b-3xl px-20">
				Find Us At
			</p>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-16 p-8">
				<div className="flex flex-col items-center space-y-2">
					<div className="bg-blue-950 p-3 rounded-full text-white">
						<Mail />
					</div>
					<a href="mailto:consulting@qurinomsolutions.com">
						consulting@qurinomsolutions.com
					</a>
				</div>
				<div className="flex flex-col items-center space-y-2">
					<div className="bg-blue-950 p-3 rounded-full text-white">
						<Phone />
					</div>
					<a href="tel:+919490684932">+919490684932</a>
					<a href="tel:+27833848842">+27833848842</a>
				</div>
				<div className="flex flex-col items-center space-y-2">
					<div className="bg-blue-950 p-3 rounded-full text-white">
						<MapPin />
					</div>
					<a href="https://goo.gl/maps/">Hyderabad</a>
					<a href="https://goo.gl/maps/">Jakarta (Indonesia)</a>
					<a href="https://goo.gl/maps/">South Africa (Johannesburg)</a>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-blue-950 text-white lg:grid-cols-5 place-items-center w-full">
				<a href="/" className="flex items-center">
					<img src={Logo} alt="Qurinom Logo" className="h-10 mr-3" />
					<div className="flex flex-col">
						<span className="self-center text-xl font-semibold whitespace-nowrap">
							Qurinom Solutions
						</span>
						<span className="text-sm font-light">Ray to achieve</span>
					</div>
				</a>
				<div className="flex items-center flex-col gap-4">
					Connect with us
					<div className="flex items-center">
						<a href="#facebook" className="h-8 mr-5">
							<Facebook />
						</a>
						<a href="#instagram" className="h-8 mr-5">
							<Instagram />
						</a>
						<a href="#linkedin" className="h-8 mr-5">
							<Linkedin />
						</a>
					</div>
				</div>

				<div className="flex flex-col items-center gap-4">
					Subscribe to our newsletter
					<form className="flex">
						<input
							type="email"
							placeholder="Email"
							className="border-2 border-white p-2 rounded-l-3xl text-white bg-blue-950"
						/>
						<button
							type="submit"
							className="bg-white text-blue-950 p-2 rounded-r-3xl border-2 border-white border-l-0"
						>
							<ArrowRight />
						</button>
					</form>
				</div>

				<p className="flex flex-col justify-center items-center">
					Terms & Conditions
				</p>

				<p className="flex flex-col justify-center items-center">
					Privacy & Policy
				</p>
			</div>

			<div className="p-4 w-full text-center">
				© 2021 Qurinom Solutions. All rights reserved.
			</div>
		</div>
	);
}

export default Footer;
