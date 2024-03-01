import Image from "next/image";
import img from '../../../public/blog-1.webp';
import Link from "next/link";

export default function Blog() {
	return (
		<div className="container mx-auto py-12 sm:py-28">
			<div>
				<h1 className="text-2xl text-bold sm:text-6xl mb-14">Últimas postagens no Blog</h1>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-11 gap-x-7.5">	
				<div className="group">
					<div className="mb-6 overflow-hidden  transition-all group-hover:scale-105 w-full relative">
						<Image 
							alt=""
							src={img}
							width={370} 
							height={280}
							className="rounded-[10px]"
							style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>	
					</div>
							<h3 className="block text-dark font-bold text-xl mb-3.5">
								<Link href="#" className="block text-dark font-bold text-xl mb-3.5">
									<span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
									Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
									</span>
								</Link>
							</h3>
						<p>
							In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
						</p>
				</div>
				<div className="group">
					<div className="mb-6 overflow-hidden  transition-all group-hover:scale-105 w-full relative">
						<Image 
							alt=""
							src={img}
							width={370} 
							height={280}
							className="rounded-[10px]"
							style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>	
					</div>
							<h3 className="block text-dark font-bold text-xl mb-3.5">
								<Link href="#" className="block text-dark font-bold text-xl mb-3.5">
									<span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
									Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
									</span>
								</Link>
							</h3>
						<p>
							In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
						</p>
				</div>
				<div className="group">
					<div className="mb-6 overflow-hidden  transition-all group-hover:scale-105 w-full relative">
						<Image 
							alt=""
							src={img}
							width={370} 
							height={280}
							className="rounded-[10px]"
							style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>	
					</div>
							<h3 className="block text-dark font-bold text-xl mb-3.5">
								<Link href="#" className="block text-dark font-bold text-xl mb-3.5">
									<span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
									Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
									</span>
								</Link>
							</h3>
						<p>
							In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
						</p>
				</div>
				<div className="group">
					<div className="mb-6 overflow-hidden  transition-all group-hover:scale-105 w-full relative">
						<Image 
							alt=""
							src={img}
							width={370} 
							height={280}
							className="rounded-[10px]"
							style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
							/>	
					</div>
							<h3 className="block text-dark font-bold text-xl mb-3.5">
								<Link href="#" className="block text-dark font-bold text-xl mb-3.5">
									<span className="bg-gradient-to-r from-primary/20 to-primary/10 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px]">
									Traveller Visiting Ice Cave With Amazing Eye-catching view with nature
									</span>
								</Link>
							</h3>
						<p>
							In a world filled with constant noise and distractions, the allure of a simpler lifestyle beckons like a soothing whisper.
						</p>
				</div>
			</div>		
		</div>
		
	)
}