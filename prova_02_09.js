class Funcionario {
    #salario;

    constructor(nome, salario) {
        if (new.target === Funcionario) {
            throw new Error("A classe Funcionario não pode ser instanciada diretamente.");
        }
        this.nome = nome;
        this.#salario = salario;
    }

    getSalario() {
        return this.#salario;
    }

    setSalario(novoSalario) {
        this.#salario = novoSalario;
    }

    descreverFuncao() {
        throw new Error("Utilize o método em uma subclasse.");
    }
}

class Medico extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
        this.especialidades = [];
    }

    descreverFuncao() {
        return `Médico ${this.nome}`;
    }

    adicionarEspecialidade(especialidade) {
        this.especialidades.push(especialidade);
    }
}

class Secretaria extends Funcionario {
    constructor(nome, salario) {
        super(nome, salario);
        this.agendas = [];
    }

    descreverFuncao() {
        return `Secretária ${this.nome}`;
    }

    criarAgenda(data, descricao, responsavel) {
        const agenda = new Agenda(data, descricao, responsavel);
        this.agendas.push(agenda);
    }
}

class Especialidade {
    constructor(nome) {
        this.nome = nome;
    }
}

class Agenda {
    constructor(data, descricao, responsavel) {
        this.data = data;
        this.descricao = descricao;
        this.responsavel = responsavel;
    }
}

// Testes

try {
    const f = new Funcionario("Carlos", 2000);
} catch (e) {
    console.log("Teste de abstração:", e.message);
}

const medico1 = new Medico("Dr. Silvo", 10000);
const secretaria1 = new Secretaria("Joana", 3000);

console.log("Salário inicial da secretária:", secretaria1.getSalario());
secretaria1.setSalario(3500);
console.log("Salário atualizado da secretária:", secretaria1.getSalario());

const funcionarios = [medico1, secretaria1];
console.log("Teste de polimorfismo");
funcionarios.forEach(func => console.log(func.descreverFuncao()));

const esp1 = new Especialidade("Cardiologia");
const esp2 = new Especialidade("Dermatologia");
medico1.adicionarEspecialidade(esp1);
medico1.adicionarEspecialidade(esp2);

console.log("Teste de agregação");
console.log(medico1);

secretaria1.criarAgenda("02/09/2025", "Consulta", "Dr. Silvo");
secretaria1.criarAgenda("05/09/2025", "Retorno", "Dr. Silvo");

console.log("Teste Composição");
console.log(secretaria1);