import {
	HeartPulse,
	LineChart,
	MoveUpRight,
	PartyPopper,
	Plane,
	TimerReset,
	Trophy,
} from 'lucide-react';

function Career() {
	return (
		<div>
			<div className="flex flex-col gap-10 py-20 justify-center items-center">
				<p className="text-5xl font-bold text-center">Work with us </p>
				<p className="text-center text-2xl px-20 md:px-40 lg:px-60">
					Experience a culture of teamwork, diversity, and inclusivity where
					your contributions are valued, and your success is celebrated.
					Together, we'll achieve greatness.
				</p>
				<div className="flex items-center">
					<a
						className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-md flex gap-3"
						href="/about"
					>
						See Open Jobs
						<MoveUpRight />
					</a>
				</div>
			</div>
			<div className="grid md:grid-cols-2">
				<div className="flex flex-col gap-10 py-20 px-20 md:pr-8 lg:pr-20">
					<h1 className="text-5xl font-bold">Life at Qurinom</h1>
					<p className="text-xl">
						Join Qurinom and become part of a vibrant community of passionate
						individuals who are dedicated to making a positive impact through
						technology. Together, we'll empower excellence and inspire growth in
						a fulfilling and rewarding work environment.
					</p>
				</div>

				<div className="flex-col justify-center items-center hidden md:flex md:p-8 lg:pr-20">
					<img src="/career.png" alt="Image" className="w-fit" />
				</div>
			</div>

			<div className="flex flex-col gap-10 py-20">
				<div>
					<p className="text-5xl font-bold text-center pb-10">
						Perks & Benefits
					</p>
				</div>
				<div className="grid grid-cols-1 gap-10 px-20 md:px-40">
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<Trophy color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<HeartPulse color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<LineChart color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<TimerReset color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<Plane color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
					<div className="flex items-start space-y-2 bg-blue-400/10 p-5 rounded-xl gap-5">
						<div className="flex items-center justify-center align-middle h-full">
							<div className="bg-white p-3 rounded-full">
								<PartyPopper color="orange" />
							</div>
						</div>
						<div>
							<div className="text-2xl font-bold">
								Comprehensive Health Coverage
							</div>
							<div>
								Your health and well-being matter to us. We provide
								comprehensive health insurance plans that cover medical, dental,
								and vision expenses.
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="bg-blue-400/10 grid grid-cols-1 pb-10">
				<div className="flex flex-col justify-center py-10 px-20 gap-4 lg:col-span-2 md:col-span-1 items-center">
					<div className="text-3xl font-bold flex flex-col text-center">
						Find us on Glassdoor
					</div>
					<img src="/glassdoor.png" alt="glassdoor logo" className="w-36" />
					<div className="flex items-center gap-2">
						4.4
						<span className="text-gray-400">|</span>
						<img src="/stars.png" alt="stars" className="w-24" />
					</div>
				</div>
				<div className="flex flex-col justify-center py-10 px-20 gap-4 lg:col-span-2 md:col-span-1 items-center">
					<div className="text-xl flex flex-col text-center">
						“ Warm and friendly environment to grow and be challenged.”
					</div>
					<i className="text-gray-400 text-center">
						— Current Employee in Hyderabad
					</i>
				</div>
				<button className="flex justify-center items-center">
					<a
						className=" text-green-500 font-bold py-2 px-4 rounded-md flex gap-3 hover:bg-blue-400/10 border-gray-500 border-2"
						href="/career"
					>
						Go to Glassdoor
					</a>
				</button>
			</div>

			<div className="flex flex-col gap-10 py-20 justify-center items-center">
				<p className="text-5xl font-bold text-center">Open Jobs</p>
				<div className="items-start w-full px-20 md:px-40">
					<p className="text-2xl ">Design</p>
					<hr className="py-2" />
					<p className="text-xl ">Graphic Design</p>
					<p className="text-l  text-gray-500">Hyderabad, India</p>
				</div>
				<div className="items-start w-full px-20 md:px-40">
					<p className="text-2xl ">Engineering</p>
					<hr className="py-2" />
					<p className="text-xl ">Graphic Design</p>
					<p className="text-l  text-gray-500">Hyderabad, India</p>
				</div>
				<div className="items-start w-full px-20 md:px-40">
					<p className="text-2xl ">Management</p>
					<hr className="py-2" />
					<p className="text-xl ">Graphic Design</p>
					<p className="text-l  text-gray-500">Hyderabad, India</p>
				</div>
				<div className="items-start w-full px-20 md:px-40">
					<p className="text-2xl ">Engineering</p>
					<hr className="py-2" />
					<p className="text-xl ">Graphic Design</p>
					<p className="text-l  text-gray-500">Hyderabad, India</p>
				</div>
				<p>
					Can’t find a role that fits?
					<b>
						<a href="">Submit a speculative application</a>
					</b>
				</p>
			</div>

			<div className="bg-blue-950 text-white grid grid-cols-1">
				<div className="flex flex-col justify-center py-10 px-20 gap-4 lg:col-span-2 md:col-span-1">
					<div className="text-3xl font-bold flex flex-col text-center">
						Subscribe for Job updates
					</div>
				</div>
				<div className="flex flex-col justify-center py-10 px-20 md:px-40 lg:px-52 gap-4">
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

export default Career;
