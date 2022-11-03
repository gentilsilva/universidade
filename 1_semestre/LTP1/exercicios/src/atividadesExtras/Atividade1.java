package atividadesExtras;


public class Atividade1 {

	String nome;
	
	public Atividade1() {
		
	}
	
	public Atividade1(String nome) {
		this.nome = nome;
	}
	
	public String saudacaoSemNome() {
		return "Hello, there";
	}
	
	public String saudacaoComNome(String nome) {
		return "Hello, " + nome + "!";
	}
	
	public static void main(String[] args) {
		
		Atividade1 mensagem = new Atividade1();
		
		if(mensagem.nome == null) {
			mensagem.saudacaoSemNome();
		} else {
			mensagem.saudacaoComNome("Gentil");
		}
		
	}
	
}
