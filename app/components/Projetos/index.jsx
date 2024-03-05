import Image from "next/image";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import img from "../../../public/mmclean.png";
export default function projetos() {
  return (
    <section className="bg-[#F7F7F7]" id="projetos">
      <div className="container py-12 sm:py-28">
        <Tabs defaultValue="ecommerce">
          <div className="md:flex justify-between items-center mb-14">
            <h2 className="text-4xl sm:text-6xl font-semibold mb-4">Projetos<span className="ponto">.</span></h2>
						<TabsList>
                <TabsTrigger value="ecommerce">E-commerce</TabsTrigger>
                <TabsTrigger value="landingpage">Landing Page</TabsTrigger>
                <TabsTrigger value="webapp">Web App</TabsTrigger>
              </TabsList>
          </div>
					<TabsContent value="webapp">
						<h1>Em breve!</h1>
					</TabsContent>

          <TabsContent value="ecommerce" className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
            <Link href="https://mmclean.com.br/" target="_blank">
              <div className="overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link">
                <div className="relative rounded-lg overflow-hidden transition-all ease-out duration-300 h-auto mob:h-auto">
                  <Image
                    alt="Loja MM Clean - Ecommerce para produtos automotivos"
                    src={img}
                    className="block max-h-full w-full object-cover hover:scale-110 transition-all ease-out duration-300"
                    width={400}
                    height={400}
                  />
                </div>
                <h1 className="mt-5 text-lg sm:text-3xl font-medium">
                  Loja MM Clean - Ecommerce para produtos automotivos
                </h1>
              </div>
            </Link>
          </TabsContent>
          <TabsContent value="landingpage">
						<h1>Em breve!</h1>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
