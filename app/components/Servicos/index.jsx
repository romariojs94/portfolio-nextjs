export default function Servicos() {
  return (
    <div className="bg-black text-white py-12 sm:py-28" id="servicos">
      <div className="container mx-auto">
        <h2 className="text-2xl font-semibold sm:text-6xl mb-9 sm:mb-14">
          Serviços<span className="ponto">.</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-col-2 gap-4">
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-[#151515] hover:scale-105 link">
              <h3 className="text-xl sm:text-3xl">Desenvolvimentos de projetos customizados</h3>
              <p className="mt-5 opacity-40 sm:text-xl">
								Projetos focados nas melhores práticas de design e desenvolvimento, visando exclusividade para a sua empresa ou negócio.
              </p>
            </div>

            <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-[#151515] hover:scale-105 link">
              <h3 className="text-xl sm:text-3xl">Desenvolvimentos de projetos web</h3>
              <p className="mt-5 opacity-40 sm:text-xl">
								Desenvolvimentext-to de  landing pages, sites insituicionais e Sistemas para imobiliarias.  
              </p>
            </div>
            <div className="w-full p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 hover:bg-[#151515] hover:scale-105 link">
              <h3 className="text-xl sm:text-3xl">Otimização & SEO</h3>
              <p className="mt-5 opacity-40 sm:text-xl">
							Seu Projeto web está enfrentando baixas taxas de conversão ou a velocidade de carregamento está comprometendo a experiência do usuário? Vamos resolver utilizando técnicas avançadas de otimização, garantimos uma página web eficiente, rápida e pronta para converter!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
