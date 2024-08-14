// Nome do pacote (opcional)
package meu.pacote;

// Importação de bibliotecas (opcional)
import java.util.Scanner;

// Classe principal
public class MeuPrograma {
  // Atributos (variáveis de instância)
  private String nome;
  private int idade;

  // Construtor (opcional)
  public MeuPrograma(String nome, int idade) {
    this.nome = nome;
    this.idade = idade;
  }

  // Métodos
  public void imprimeNome() {
    System.out.println("Olá, meu nome é " + nome);
  }

  public void imprimeIdade() {
    System.out.println("Eu tenho " + idade + " anos");
  }

  // Método main (ponto de entrada do programa)
  public static void main(String[] args) {
    // Cria uma instância da classe MeuPrograma
    MeuPrograma meuPrograma = new MeuPrograma("João", 25);

    // Chama os métodos
    meuPrograma.imprimeNome();
    meuPrograma.imprimeIdade();
  }
}