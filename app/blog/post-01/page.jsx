export default function post01() {
  return (
    <main className="container text-center p-10">
      <h1 className="text-3xl p-3 font-bold text-gray-800">Como forçar o tabSize do vsCode?</h1>
      <p>
        Primeiro passo e ultimo, insira esse código em
        user &gt; <code>settings.json</code> <br />
				Então adicione essas linhas de código: <br />
				<code>editor.tabSize: 2</code>
      	<code>editor.detectIndentation:
        false,</code> 
				<code>editor.insertSpaces: false,</code>
      
      </p>
      <h2>E voila: </h2>
    </main>
  );
}