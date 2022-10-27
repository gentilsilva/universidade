package autoInstrucional;

import java.util.Scanner;

public class Agenda {

	public static void main(String[] args) {
		
		String[][] agenda = new String[100][3];
		String dados;
		Scanner scan = new Scanner(System.in);
		int contador = 0;
		int opcao;
		
		do {
			
			System.out.print("Menu \n"
					+ "1 - Para armazenar um novo contado \n"
					+ "2 - Listar todos os contatos \n"
					+ "3 - Buscar contato por nome \n"
					+ "4 - Sair \n"
					+ "Digite: ");
			opcao = scan.nextInt();
			
			if(opcao == 1) {				
				for(int i = contador; i < contador + 1;) {
					for(int j = 0; j < 3; j++) {
						System.out.print("Digite em ordem: nome, e-mail e número. Pressione enter após cada "
								+ "informação digitada. \n"
								+ "Digite: ");
						dados = scan.next().toUpperCase();
						agenda[i][j] = dados;
					}
					contador++;
					break;
				}
				
			} else if(opcao == 2) {				
				for(int i = 0; i < agenda.length; i++) {
					String mensagem = "";
					for(int j = 0; j < 3; j++) {
						mensagem += "[" + agenda[i][j] + "]";
					}
					if(agenda[i][0] != null) {
						System.out.println(mensagem);
					}
				}
				
			} else if(opcao == 3) {
				System.out.print("Digite o nome procurado: ");
				dados = scan.next().toUpperCase();
				for(int i = 0; i < agenda.length; i++) {
					String mensagem = "";
					for(int j = 0; j < 3; j++) {
						mensagem += "[" + agenda[i][j] + "]";
					}
					if(dados.equals(agenda[i][0])) {
						System.out.println(mensagem);
					}					
				}
				
			} else if(opcao > 4) {
				System.out.println("Opção inválida!");
			}
			
		} while (opcao != 4);
		
		scan.close();
		
	}
	
}