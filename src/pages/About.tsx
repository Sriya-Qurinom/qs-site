import {
	ChevronRight,
	Megaphone,
	Merge,
	Monitor,
	MoveUpRight,
	Ticket,
} from 'lucide-react';

function About() {
	return (
		<div>
			<div className="grid md:grid-cols-2">
				<div className="flex flex-col justify-center py-10 px-20 gap-16 bg-orange-500/20">
					<div className="flex items-center w-full">
						<a href="/" className="flex items-center">
							Home
						</a>
						<ChevronRight />
						<a className="text-orange-500" href="/about">
							About Us
						</a>
					</div>
					<div className="text-5xl font-bold flex flex-col">
						<p>Who we are</p>
						<p className="px-24">&</p>
						<p>what we do</p>
					</div>
					<div className="flex flex-col gap-5 text-xl">
						We provide a complete solution from designing to development of app
						& websites.
					</div>
					<div className="flex items-center">
						<a
							className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md flex gap-3"
							href="/about"
						>
							Get in Touch
							<MoveUpRight />
						</a>
					</div>
				</div>
				<div className="flex-col justify-center items-center hidden md:flex">
					<img src="/about.png" alt="Image" className="w-fit" />
				</div>
			</div>

			<div className="flex flex-col gap-10 py-20">
				<div>
					<p className="text-5xl font-bold text-center pb-10">Our Value</p>
					<p className="text-center text-2xl p-10">
						We provide a complete service dor your digital products. From
						designing to development to maintenance.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
					<div className="flex flex-col items-start space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div className="bg-white p-3 rounded-full">
							<Megaphone color="orange" />
						</div>
						<div className="text-2xl font-bold">Get online Quotation</div>
						<div>We provide a complete online quotation before we start.</div>
					</div>
					<div className="flex flex-col items-start space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div className="bg-white p-3 rounded-full">
							<Ticket color="orange" />
						</div>
						<div className="text-2xl font-bold">See first Draft</div>
						<div>We provide a first draft before accepting payment.</div>
					</div>
					<div className="flex flex-col items-start space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div className="bg-white p-3 rounded-full">
							<Monitor color="orange" />
						</div>
						<div className="text-2xl font-bold">See progress</div>
						<div>
							We show you every milestone of a development & designing journey.
						</div>
					</div>
					<div className="flex flex-col items-start space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div className="bg-white p-3 rounded-full">
							<Merge color="orange" />
						</div>
						<div className="text-2xl font-bold">Deliver results</div>
						<div>We deliver results on time.</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-950 text-white grid md:grid-cols-2">
				<div className="flex-col justify-center items-center hidden md:flex md:relative md:top-20">
					<img src="/success.png" alt="Image" className="w-fit" />
				</div>
				<div className="flex flex-col justify-center py-10 px-20 gap-8">
					<div className="text-3xl font-bold flex flex-col">
						Our Mission is to make our clients Succeed and Sustain
					</div>
					<div className="flex flex-col gap-5 text-xl">
						At Qurinom solutions, we are not only committed to providing novel
						solutions but also to make our clients sustain and be among the
						elite in their domain.
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-10 py-20">
				<div>
					<p className="text-5xl font-bold text-center pb-10">Our Team</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 px-20">
					<div className="flex flex-col items-center space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div>
							<img
								src="av1.png"
								alt="avatar"
								className="w-32 h-32 rounded-full"
							/>
						</div>
						<div className="text-2xl font-bold text-center">John Peter</div>
						<div className="text-center">COO</div>
					</div>
					<div className="flex flex-col items-center space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div>
							<img
								src="av2.png"
								alt="avatar"
								className="w-32 h-32 rounded-full"
							/>
						</div>
						<div className="text-2xl font-bold text-center">John Peter</div>
						<div className="text-center">COO</div>
					</div>
					<div className="flex flex-col items-center space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div>
							<img
								src="av3.png"
								alt="avatar"
								className="w-32 h-32 rounded-full"
							/>
						</div>
						<div className="text-2xl font-bold text-center">John Peter</div>
						<div className="text-center">COO</div>
					</div>
					<div className="flex flex-col items-center space-y-2 bg-gray-400/20 p-5 rounded-xl">
						<div>
							<img
								src="av4.png"
								alt="avatar"
								className="w-32 h-32 rounded-full"
							/>
						</div>
						<div className="text-2xl font-bold text-center">John Peter</div>
						<div className="text-center">COO</div>
					</div>
				</div>
			</div>

			<div className="flex flex-col gap-10 py-20 bg-gray-400/20">
				<div>
					<p className="text-5xl font-bold text-center pb-10">
						Our Partnership and Collabrations
					</p>
				</div>
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 px-20">
					<div className="flex items-center justify-center">
						<img src="comp1.png" alt="company logo" className="w-fit h-fit" />
					</div>
					<div className="flex items-center justify-center">
						<img src="comp2.png" alt="company logo" className="w-fit h-fit" />
					</div>
					<div className="flex items-center justify-center">
						<img src="comp3.png" alt="company logo" className="w-fit h-fit" />
					</div>
					<div className="flex items-center justify-center">
						<img src="comp4.png" alt="company logo" className="w-fit h-fit" />
					</div>
					<div className="flex items-center justify-center">
						<img src="comp5.png" alt="company logo" className="w-fit h-fit" />
					</div>
				</div>
			</div>

			<div className="bg-blue-950 text-white grid lg:grid-cols-3 md:grid-cols-2">
				<div className="flex flex-col justify-center py-10 px-20 gap-4 lg:col-span-2 md:col-span-1">
					<div className="text-3xl font-bold flex flex-col">
						Stay in the loop
					</div>
					<div className="flex flex-col gap-5 text-xl">
						Subscribe to receive the latest news and updates about Qurinom
						solutions We promise not to spam you!
					</div>
				</div>
				<div className="flex flex-col justify-center py-10 px-20 gap-4 lg:pl-0">
					<form className="flex bg-white text-black rounded-xl p-2 justify-between">
						<input
							type="email"
							placeholder="Email"
							className="p-2 rounded-xl bg-inherit w-full mr-4"
						/>
						<button
							type="submit"
							className="bg-orange-500 text-white p-2 rounded-xl"
						>
							Continue
						</button>
					</form>
				</div>
			</div>
		</div>
	);
}

export default About;
