import { Fira_Code } from "next/font/google";
import Header from './components/Header';
import "./globals.css";

const FiraCode = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Romário J. Santos - Desenvolvedor Web Localizado em Blumenau/SC",
  description: "Desenvolvo projetos Web focados nas melhores práticas de design e desenvolvimento, visando exclusividade para a sua empresa ou negócio.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={FiraCode.className}>
				<Header />
				{children}
			</body>
    </html>
  );
}
