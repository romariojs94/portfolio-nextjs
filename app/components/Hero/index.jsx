export default function Hero() {
  return (
    <main className="flex flex-col items-center justify-center h-[35vh] sm:h-[50vh] md:h-[90vh]">
      <div className="text-center w-10/12">
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.875rem] font-bold mb-6">Desenvolvedor Full-Stack</h1>
				<blockquote className="text-[#949494] text-sm sm:text-base md:text-2xl sm:max-w-[50ch] sm:mx-auto">“Choose a job you love, and you will never have to work a day in your
        life.” ― Confucius</blockquote>
      </div>
			<div className="animate-bounce mt-6 md:mt-24 bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
				<svg class="w-6 h-6 text-[#F47209;]" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor">
				<path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
				</svg>
			</div>
    </main>
  );
}