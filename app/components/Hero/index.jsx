export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center h-[35vh] sm:h-[50vh] md:h-[70vh]">
      <div className="text-center w-11/12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.875rem] font-bold mb-6">Desenvolvedor Full-Stack</h1>
				<blockquote className="text-[#949494] text-sm sm:text-base md:text-2xl sm:max-w-[50ch] sm:mx-auto">“Choose a job you love, and you will never have to work a day in your
        life.” ― Confucius</blockquote>
      </div>
    </main>
  );
}