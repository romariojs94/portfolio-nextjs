export default function Rodape() {
	return (
		<div className="bg-black text-white pt-14 sm:pt-28 pb-7 sm:pb-14" id="contato">
			<div className="container">
				<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10  sm:gap-10">
					<p className="text-lg sm:text-2xl">
					Estou disponível para novos projetos no momento. Entre em contato comigo e marcamos uma conversa 👋
					</p>	
					<ul className="text-xl sm:text-4xl font-bold flex flex-col gap-4 sm:gap-7 pb-9">
						<li><a className="hover:text-[#F47209] will-change-transform" href="mailto:romariojs94@gmx.com" title="Email">romariojs94@gmx.com</a></li>
						<li><a className="hover:text-[#F47209] will-change-transform" title="WhatsApp" target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5547996497702&text=Ol%C3%A1,%20quero%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.
">+55 47 99649-7702</a></li>
					</ul>	
				</div>
			</div>
				<div className="container md:mt-16">
					<p className="pt-8 text-sm border-t-[1px] border-[#151515]">		
						© 2024 – Romário J. Santos
					</p>
				</div>
		</div>
	)
}