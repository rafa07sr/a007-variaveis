

const nome = prompt("qual o seu nome?")
const data = Number(prompt("qual sua data de nascimento?"))
let endereco = prompt("endereço?")
const cpf = Number(prompt("Cpf?"))
let escolaridade = prompt("escolaridade")
let cnh = Boolean(prompt("possui cnh"))
let filhos =Boolean(prompt("quantos filhos vc tem?"))
let profissao = prompt("cargo atual?")
let admissao = Boolean(prompt("ano de admissão?"))
let salario =Number(prompt("salario atual?"))
let comissao = Boolean(prompt("recebe comissão ?"))

console.log("nome dele é", nome)
console.log("A data de nascimento é " , data)
console.log("mora na " + endereco)
console.log("sua escolaridade é " , escolaridade)
console.log("tem cnh " , cnh)
console.log("quantos filhos " , filhos)
console.log("qual a sua profissao " , profissao)
console.log("data de admissao " , admissao)
console.log("qual o seu salario " , salario)
console.log("tem comissao", comissao)
