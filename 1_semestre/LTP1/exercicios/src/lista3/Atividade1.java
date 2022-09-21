package lista3;

import java.util.Scanner;

public class Atividade1 {

	public static void main(String[] args) {
		
		int eleitores, votosBrancos, votosNulos, votosValidos;		
		double percentualDeVotos;
		
		Scanner scan = new Scanner(System.in);
		
//		Solicita a entrada de dados pelo usu�rio
		System.out.print("Digite o numero de eleitores: ");
		eleitores = scan.nextInt(); // L� e atribui o n�mero digitado a vari�vel eleitores
		
//		Solicita a entrada de dados pelo usu�rio
		System.out.print("Digite o numero de votos brancos: ");
		votosBrancos = scan.nextInt(); // L� e atribui o n�mero digitado a vari�vel votosBrancos
		
//		Solicita a entrada de dados pelo usu�rio
		System.out.print("Digite o numero de votos nulos: ");
		votosNulos = scan.nextInt(); // L� e atribui o n�mero digitado a vari�vel votosNulos
		
//		Solicita a entrada de dados pelo usu�rio
		System.out.print("Digite o numero de votos brancos: ");
		votosValidos = scan.nextInt(); // L� e atribui o n�mero digitado a vari�vel votosValidos
		
//		Calcula percentual votos brancos
		percentualDeVotos = (votosBrancos * 100) / eleitores;
		System.out.printf("O percentual de votos brancos e: %.1f ", percentualDeVotos);
		
//		Calcula percentual votos nulos
		percentualDeVotos = (votosNulos * 100) / eleitores;
		System.out.printf("\nO percentual de votos brancos e: %.1f ", percentualDeVotos);
		
//		Calcula percentual votos validos
		percentualDeVotos = (votosValidos * 100) / eleitores;
		System.out.printf("\nO percentual de votos brancos e: %.1f ", percentualDeVotos);
		
	}
	
}