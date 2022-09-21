package lista4;

import java.util.Scanner;

public class Atividade2b {

	public static void main(String[] args) {
		
		double numero1, numero2, calculo;
		
		Scanner scan = new Scanner(System.in);
		
//		Solicita entrada de dados pelo usu�rio
		System.out.print("Digite o valor do primeiro n�mero: ");
		numero1 = scan.nextDouble(); // L� e atribui o valor digitado na vari�vel numero1
		
//		Solicita entrada de dados pelo usu�rios
		System.out.print("Digite o valor do segundo n�mero: ");
		numero2 = scan.nextDouble(); // L� e atribui o valor digitado na vari�vel numero2
		
//		Soma os dois valores e depois imprime o resultado
		calculo = numero1 + numero2;
		System.out.println("A soma dos dois n�meros �: " + calculo);
		
//		multiplica o n�mero1 pelo quadrado do n�mero 2 e depois imprime o resultado
		calculo = numero1 * Math.pow(numero2, 2);
		System.out.println("A multiplica��o do " + numero1 + " * " + numero2  + " ao "
				+ "quadrado � = " + calculo);
		
//		Calcula o quadrado do primeiro n�mero e depois imprime
		calculo = Math.pow(numero1, 2);
		System.out.println("O " + numero1 + " ao quadrado � = " + calculo);
		
//		Calcula a raiz quadrada da soma dos quadrados dos valores de numero1 e numero2
		calculo = Math.sqrt(Math.pow(numero1, 2) + Math.pow(numero2, 2));
		System.out.printf("A raiz quadrada da soma dos valores elevado ao quadrado �: %.2f", calculo);
		
	}
	
}