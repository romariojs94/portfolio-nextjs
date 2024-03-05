import Image from "next/image";
import HelloImg from "../../../public/hello-world.jpg";
import Link from "next/link";

export default function Blog() {
  return (
    <div className="container mx-auto py-12 sm:py-28" id="blog">
      <div>
        <h1 className="text-2xl font-semibold sm:text-6xl mb-14">
          Blog<span className="ponto">.</span>
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        <div className="group">
          <div className="mb-6 overflow-hidden transition-all group-hover:scale-105 w-full relative">
            <Image
              alt=""
              src={HelloImg}
              width={1920}
              height={1280}
              className="rounded-[10px]"
              style="position: absolute; height: 100%; width: 100%; inset: 0px; color: transparent;"
            />
          </div>
          <h3 className="block text-dark font-bold text-xl mb-3.5">
            <Link href="#" className="block text-dark font-bold text-xl mb-3.5">
              <span>
								Hello, World!
              </span>
            </Link>
          </h3>
          <p className="text-sm sm:text-lg">
            <code>console.log(&apos;Hello, World!&apos;)</code>.
          </p>
        </div>
      </div>
    </div>
  );
}
