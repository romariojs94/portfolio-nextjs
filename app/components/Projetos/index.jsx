import Image from "next/image";
import Link from "next/link";

import img from "../../../public/image.jpg";
export default function projetos() {
  return (
    <section className="bg-[#F7F7F7]">
      <div className="container py-12  sm:py-28">
        <h2 className="text-4xl sm:text-6xl mb-8 font-semibold">Projetos.</h2>

				<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        
				<Link href="/cafe-preto">
          <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
            <div
              className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
            >
              <Image
                alt=""
                src={img}
                className="sm:h-full w-full sm:object-cover hover:scale-110 transition-all ease-out duration-300"
                width={400}
                height={400}
              />
            </div>
						<h1 className="mt-5 text-3xl font-medium">name Project Name</h1>
            <h2 className="text-xl opacity-50">Description</h2>
          </div>
				</Link>
				<Link href="/cafe-preto">
          <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
            <div
              className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-48 mob:h-auto"
            >
              <Image
                alt=""
                src={img}
                className="h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                width={400}
                height={400}
              />
            </div>
						<h1 className="mt-5 text-3xl font-medium">name Project Name</h1>
            <h2 className="text-xl opacity-50">Description</h2>
          </div>
				</Link>
        </div>
      </div>
    </section>
  );
}