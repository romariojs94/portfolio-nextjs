import Hero from './components/Hero';
import Projetos from './components/Projetos';
import Servicos from './components/Servicos';
import Blog from './components/Blog';
import Rodape from './components/Rodape';
export default function Home() {
	return (
		<>
			<Hero />
			<Projetos />
			<Servicos />
			<Blog />
			<Rodape />
		</>
  );
}