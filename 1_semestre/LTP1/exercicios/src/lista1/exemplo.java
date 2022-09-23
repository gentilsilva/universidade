package lista1;

import java.util.Scanner;

public class exemplo {

	public static void main(String[] args) {
	
		String nomeUsuario, nomePai, nomeMae;
		Scanner leia = new Scanner(System.in);
		
		System.out.print("Digite o seu nome: ");
		nomeUsuario = leia.nextLine();
		
		System.out.print("Digite o nome do seu pai:");
		nomePai = leia.nextLine();
		
		System.out.print("Digite o nome da mãe: ");
		nomeMae = leia.nextLine();
		
		System.out.println(nomeUsuario + ", voce e filho de " + nomePai + " e " + nomeMae);
	}
	
}
