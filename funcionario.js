class Funcionario{
    constructor(nome, idade, cargo) {
        nome = this.nome;
        idade = this.idade;
        cargo = this.cargo;
    }

    seApresentar() {
        console.log('Meu nome é ' + this.nome + ', tenho ' + this.idade + ' anos.');
    } 

    trabalhar() {
        console.log('Meu cargo nessa empresa é ' + cargo);
    }
}

class Gerente extends Funcionario{
    constructor(nome, idade, cargo, departamento) {
        super(nome, idade, cargo);
        this.departamento = departamento;

    }

    gerenciar() {
        console.log('Gerencio o departamento: ' + this.departamento);
    }

}

class Desenvolvedor extends Funcionario{
    constructor(nome, idade, cargo, linguagem) {
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }

    programar() {
        console.log('Trabalho com a linguagem: ' + this.linguagem)
    }

}

        function Enviar(){

            var nome = document.getElementById('nomeFuncionario').value;
            var idade = document.getElementById('idadeFuncionario').value;
            var cargo = document.getElementById('cargoFuncionario').value;
            var departamento = document.getElementById('depGerente').value;
            var linguagem = document.getElementById('linProgramador').value;

            try{
            if(nome.length === 0){
            throw new Error('O nome não pode estar vazio')   
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

    
            try{
            if(idade.length === 0){
            throw new Error('Informe sua idade')   
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

            try{
            if(idade <= 17){
            throw new Error('Você não tem idade para trabalhar nessa empresa')   
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

            try{
            if(cargo.length === 0){
            throw new Error('O cargo não pode estar vazio')   
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

            try{
            if(cargo === 'Gerente' && departamento.length === 0){
            throw new Error('Informe o seu departamento')   
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

            try{
            if(cargo === 'Programador' && linguagem.length === 0){
            throw new Error('Informe sua linguagem')
            }
            }catch (error){
            alert('Ocorreu um error: ' + error.message);
            braek
            }

            var seApresentar = alert('Meu nome é ' + nome + ', tenho ' + idade + ' anos.');

            var trabalho = alert('Meu cargo nessa empresa é: ' + cargo);

            if(departamento.length > 0){
                alert('Trabalho no departamento: ' + departamento);
            }

            if(linguagem.length > 0){
                alert('Trabalho com a linguagem: ' + linguagem);
            }

            var enviarForm = confirm('Você deseja enviar o formulário ' + nome + '?')
            if(enviarForm){
                alert('Formulário enviado com sucesso, confira na Console.')
                console.log('Meu nome é ' + nome + ', tenho ' + idade + ' anos.')
                console.log('Meu cargo nessa empresa é: ' + cargo)

            }else{
                alert('Operação cancelada')
                console.log('Erro ao enviar')
            }
        }
    



