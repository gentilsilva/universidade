package lista4;

import java.util.Scanner;

public class Atividade2a {

	public static void main(String[] args) {
		
		int numeroTabuada;
		int tabuada = 9;
		
		Scanner scan = new Scanner(System.in);
		
//		Solicita entrada de dados pelo usu�rio
		System.out.print("Digite o numero da tabuada que deseja: ");
		numeroTabuada = scan.nextInt();  // L� e atribui o valor digitado na vari�vel numeroTabuada
		
//		La�o para imprimir a tabuada at� 9
		for(int i = 1; i <= tabuada; i++) {
			
//			calcula os valores da multiplica��o
			int multiplicacao = numeroTabuada * i;
			
//			Imprime o resultado da multiplica��o
			System.out.println(numeroTabuada + " * " + i + " = " + multiplicacao);
		}
		
	}
	
}
