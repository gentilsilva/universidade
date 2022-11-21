package lista10;

public class Atividade2 {

	public static void main(String[] args) {
		
		int[][] arrNumeros = new int[5][5];
		
		for(int i = 0; i < 5; i++) {
			for(int j = 0; j < 5; j++) {
				if(i == j) {
					arrNumeros[i][j] = 1;
				} else {
					arrNumeros[i][j] = 0;
				}
			}
		}
		
		for(int i = 0; i < 5; i++) {
			String mensagem = "[ ";
			for(int j = 0; j < 5; j++) {
				mensagem += arrNumeros[i][j] + " ";
			}
			System.out.println(mensagem + "]");
		}
		
	}
	
}
