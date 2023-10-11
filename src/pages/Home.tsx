import { Asterisk, CheckCircle2, MoveUpRight, UserCircle } from 'lucide-react';

function Home() {
	return (
		<div>
			<div className="bg-blue-950 text-white grid md:grid-cols-2">
				<div className="flex flex-col justify-center py-10 px-20 gap-16">
					<div className="flex items-center w-full">
						<Asterisk />
						<div>The complete tech solution</div>
						<hr className="border-1 border-white w-10" />
					</div>
					<div className="text-5xl font-bold">
						Welcome to your tech solutions.
					</div>
					<div className="flex flex-col gap-5">
						<p className="text-2xl">
							We provide complete tech solution from designing to development.
						</p>
						<p className="text-xl">
							Today, we're a team of 20+ who are building the future together by
							using cutting-edge technology
						</p>
					</div>
					<div className="flex items-center">
						<a
							className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md flex gap-3"
							href="/about"
						>
							Explore
							<MoveUpRight />
						</a>
					</div>
				</div>
				<div className="flex-col justify-center items-center hidden md:flex">
					<img src="/girl.png" alt="Image" className="w-fit" />
				</div>
			</div>
			<div className="flex flex-col gap-10 py-20">
				<div>
					<p className="text-5xl font-bold text-center pb-10">
						Our Delivering Tech Solutions
					</p>
					<p className="text-center text-2xl pb-10">
						We are a team of 20+ who are passionate about making the world a
						better place.
					</p>
				</div>
				<div className="grid md:grid-cols-3 gap-10 px-20">
					<div className="flex flex-col justify-center items-center gap-4">
						<div className="flex justify-center items-center">
							<img src="/ourprod.png" alt="Products" className="w-1/2" />
						</div>
						<div className="text-2xl font-bold">Our Products</div>
						<div className="text-center">
							Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna.
						</div>
						<a href="#learnmore">
							<button className="font-bold py-2 px-4 flex gap-3 underline items-center">
								Learn More
								<MoveUpRight size={20} />
							</button>
						</a>
					</div>
					<div className="flex flex-col justify-center items-center gap-4">
						<div className="flex justify-center items-center">
							<img src="/ourwf.png" alt="Workflow" className="w-1/2" />
						</div>
						<div className="text-2xl font-bold">Our Workflows</div>
						<div className="text-center">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nihil
							quasi tenetur sit sapiente qui aperiam vitae eum impedit, dolore
							quod ipsum architecto laboriosam tempora
						</div>
						<a href="#learnmore">
							<button className="font-bold py-2 px-4 flex gap-3 underline items-center">
								Learn More
								<MoveUpRight size={20} />
							</button>
						</a>
					</div>
					<div className="flex flex-col justify-center items-center gap-4">
						<div className="flex justify-center items-center">
							<img src="/ourexp.png" alt="Experts" className="w-1/2" />
						</div>
						<div className="text-2xl font-bold">Our Experts</div>
						<div className="text-center">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
							facere qui amet enim, id recusandae quisquam laudantium aliquid
							iusto expedita velit nulla, distinctio
						</div>
						<a href="#learnmore">
							<button className="font-bold py-2 px-4 flex gap-3 underline items-center">
								Learn More
								<MoveUpRight size={20} />
							</button>
						</a>
					</div>
				</div>
			</div>
			<div className="bg-blue-950 text-white grid md:grid-cols-2 py-20">
				<div className="flex-col justify-center items-start hidden md:flex">
					<img src="/ipad.png" alt="Image" className="w-4/5" />
				</div>

				<div className="flex flex-col justify-center p-20 md:pl-0 gap-10">
					<h1 className="text-5xl font-bold">Our Milestones</h1>
					<p className="text-2xl">
						We're based in Hydrabad, which is home to so many great companies
						and communities, but it's also where we started out as a
						bootstrapped team of two people working from their apartments.
					</p>
					<ul className="flex text-l flex-col gap-5">
						<li className="flex items-center gap-3">
							<CheckCircle2 color="orange" />
							Agile web design and development methodology
						</li>
						<li className="flex items-center gap-3">
							<CheckCircle2 color="orange" />
							Award winning web solutions and sites
						</li>
						<li className="flex items-center gap-3">
							<CheckCircle2 color="orange" />
							Competitive rates for web design and development
						</li>
					</ul>
				</div>
			</div>
			<div className="grid md:grid-cols-2">
				<div className="flex flex-col gap-10 py-20 px-20">
					<h1 className="text-5xl font-bold">
						Why we are different from other startups
					</h1>
					<p className="text-xl">
						With us you can create a mobile app for your business in 2 weeks as
						well as create a website for your business in 2 days.
					</p>

					<div className="flex gap-5">
						<img src="/userstack.svg" alt="Users" />
						<div className="flex flex-col justify-center">
							<p className="text-xl font-bold">20+</p>
							<p className="text-l">Remote Employees</p>
						</div>
					</div>
				</div>

				<div className="flex-col justify-center items-end hidden md:flex">
					<img src="/video1.png" alt="Image" className="w-fit" />
				</div>
			</div>
			<div className="bg-blue-950 text-white grid md:grid-cols-2 py-20">
				<div className="flex-col justify-center items-start hidden md:flex">
					<img src="/video2.png" alt="Image" className="w-4/5" />
				</div>

				<div className="flex flex-col justify-center md:p-10 md:pr-10 p-20 gap-10">
					<h1 className="text-5xl font-bold">Customer is Our Top Priority</h1>
					<p className="text-xl">
						We survey all of our clients, the results of which go directly to
						our CEO.
					</p>
					<div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm lg:mb-12 lg:grid-cols-2">
						<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r ">
							<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8">
								<h3 className="text-lg font-semibold text-gray-900">
									Very easy this was to integrate
								</h3>
								<p className="my-4">
									If you care for your time, I hands down would go with this."
								</p>
							</blockquote>
							<figcaption className="flex items-center justify-center space-x-3">
								<UserCircle color="black" />
								<div className="space-y-0.5 font-medium text-left">
									<div className="text-gray-900">Bonnie Green</div>
									<div className="text-sm text-gray-500">
										Developer at Open AI
									</div>
								</div>
							</figcaption>
						</figure>
						<figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-tr-lg">
							<blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 ">
								<h3 className="text-lg font-semibold text-gray-900 ">
									Solid foundation for any project
								</h3>
								<p className="my-4">
									Designing with Figma components that can be easily translated
									to the utility classNamees of Tailwind CSS is a huge
									timesaver!"
								</p>
							</blockquote>
							<figcaption className="flex items-center justify-center space-x-3">
								<UserCircle color="black" />

								<div className="space-y-0.5 font-medium">
									<div className="text-gray-900">Roberta Casas</div>
									<div className="text-sm text-gray-500">
										Lead designer at Dropbox
									</div>
								</div>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
