// concatenacao.js

// --- Quatro formas para concatenar strings no JavaScript ---

// 1. Usando o operador + (Plus)
// A forma mais clássica e direta para juntar strings.
const nomeEmpresaPlus = "Minha Empresa";
const departamentoPlus = "Desenvolvimento";
console.log("Bem-vindo(a) ao " + departamentoPlus + " da " + nomeEmpresaPlus + "!");
// Resultado esperado: Bem-vindo(a) ao Desenvolvimento da Minha Empresa!

// 2. Usando o Método .join()
// Geralmente usado com arrays, mas eficaz para juntar elementos de texto.
const nomeColaboradorJoin = "Ana";
const cargoJoin = "Analista de Projetos";
const informacoesColaborador = ["O(a) colaborador(a) ", nomeColaboradorJoin, " atua como ", cargoJoin, "."];
console.log(informacoesColaborador.join(""));
// Resultado esperado: O(a) colaborador(a) Ana atua como Analista de Projetos.

// 3. Usando o Método .concat()
// Um método específico de strings para concatenar uma ou mais strings.
const projetoConcat = "Projeto X";
const statusConcat = "em andamento";
console.log("O ".concat(projetoConcat).concat(" está ").concat(statusConcat).concat("."));
// Resultado esperado: O Projeto X está em andamento.

// Você também pode concatenar de forma mais simples:
const mensagemInicial = "Olá, ";
const usuario = "João";
console.log(mensagemInicial.concat(usuario, "! Bem-vindo(a) ao sistema."));
// Resultado esperado: Olá, João! Bem-vindo(a) ao sistema.


// 4. Usando Template String (Crases `` ` ``)
// Uma forma moderna e flexível, ideal para strings com variáveis e expressões.
const nomeGerenteTemplate = "Carlos";
const equipeTemplate = "Marketing";
const reuniaoHoje = true;
console.log(`O gerente ${nomeGerenteTemplate} da equipe de ${equipeTemplate} ${reuniaoHoje ? 'tem reunião hoje' : 'não tem reunião hoje'}.`);
// Resultado esperado: O gerente Carlos da equipe de Marketing tem reunião hoje.

// Exemplo com múltiplas linhas (benefício das Template Strings)
const relatorio = `
Prezado(a) colaborador(a),

Este é um lembrete importante sobre o prazo final do ${projetoConcat}.
Por favor, garanta que todas as tarefas estejam atualizadas.

Atenciosamente,
Sua Equipe de Gestão.
`;
console.log(relatorio);
/* Resultado esperado:
Prezado(a) colaborador(a),

Este é um lembrete importante sobre o prazo final do Projeto X.
Por favor, garanta que todas as tarefas estejam atualizadas.

Atenciosamente,
Sua Equipe de Gestão.
*/
