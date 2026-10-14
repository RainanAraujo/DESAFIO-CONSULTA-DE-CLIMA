# Desafio — Consulta de Clima

**Programação Desktop · JavaScript essencial · Individual**

---

## A situação

Você vai fazer uma tela que consulta o clima de uma cidade. O "servidor" é de mentira: está no arquivo `dados.js` e **demora 1,5 segundo** para responder, como um IPC ou um arquivo de verdade demorariam.

A tela, o estilo e o servidor **já estão prontos**. Você escreve **só o `script.js`**.

---

## Preparando

1. Baixe e descompacte o `projeto_inicial_clima.zip`
2. No terminal, dentro da pasta:

```bash
npm install
npm start
```

A janela abre com a tela pronta, mas o botão ainda não faz nada.

---

## O que vem pronto no `dados.js`

Não altere este arquivo. Ele oferece **uma** função assíncrona:

```js
buscarClima(cidade)
```

- Demora 1,5 segundo
- Devolve um objeto assim:

```js
{ cidade: 'Grajaú', temperatura: 34, condicao: 'Ensolarado' }
```

- **Lança um erro** se a cidade estiver vazia ou não for encontrada

Cidades disponíveis: Grajaú, São Luís, Imperatriz, Teresina e Fortaleza.

---

## Os elementos da tela

| `id` | O que é |
|---|---|
| `campo-cidade` | o campo onde se digita a cidade |
| `botao-consultar` | o botão Consultar |
| `mensagem` | um parágrafo para avisos e erros |
| `resultado-cidade` | onde aparece o nome da cidade |
| `resultado-temperatura` | onde aparece a temperatura |
| `resultado-condicao` | onde aparece a condição do tempo |

---

## Passo 1 — Consultar

1. Pegue os elementos da tela com `document.getElementById`
2. Crie uma função `async` chamada `consultar`
3. Dentro dela, chame `buscarClima` com `await`, passando o valor do campo
4. Mostre o nome da cidade, a temperatura (com `°C` no fim) e a condição nos três parágrafos de resultado, usando `textContent`
5. Ligue o botão à função com `addEventListener`

**Teste:** digite `Grajaú` e clique. Depois de 1,5 segundo, o resultado aparece.

---

## Passo 2 — Mostrar que está esperando

Enquanto a consulta não termina:

1. O botão fica **desabilitado** (`disabled = true`)
2. O parágrafo `mensagem` mostra **"Buscando..."**

Quando a resposta chegar, o botão volta a funcionar e a mensagem some.

**Teste:** clique e repare que, durante 1,5 segundo, não dá para clicar de novo.

---

## Passo 3 — Tratar os erros

1. Envolva a consulta num `try / catch`
2. Se der erro, mostre a mensagem do erro no parágrafo `mensagem`, em **vermelho** (classe `erro`), e volte os resultados para `—`
3. Use o `finally` para reabilitar o botão, dando certo ou errado

**Teste:** consulte uma cidade que não existe, como `Recife`, e depois consulte com o campo vazio. As duas mensagens de erro precisam aparecer na tela.

---

## Bônus — A mesma coisa com `.then()`

Faça uma segunda versão da função `consultar`, **sem `async` e sem `await`**, usando `.then()`, `.catch()` e `.finally()`.

Compare as duas versões: qual ficou mais fácil de ler?

