# Site da Raquel Silva — Pedagoga

Site institucional em HTML, CSS e JavaScript puro (sem frameworks, sem back-end,
sem banco de dados). Feito para apresentar o trabalho da Raquel e divulgar o
serviço de reforço escolar / acompanhamento pedagógico.

## Estrutura do projeto

```
/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── assets/
│   ├── images/       <- fotos da Raquel
│   └── icons/        <- ícones de WhatsApp, Instagram, LinkedIn e favicon
└── README.md
```

## Como abrir localmente

Não precisa de servidor nem instalação. Basta abrir o arquivo `index.html`
diretamente no navegador (duplo clique, ou clique com o botão direito >
"Abrir com" > seu navegador).

Se preferir rodar com um servidor local simples (opcional, útil para testar
em outros dispositivos na mesma rede), com Python instalado:

```
python3 -m http.server 8000
```

e acesse `http://localhost:8000` no navegador.

## O que falta preencher

Três links ainda não foram informados e estão deixados como `href="#"` no
código, com um `title` explicando o que falta. Um clique neles não faz nada
(o JavaScript intercepta e ignora o clique) até você colocar o link de
verdade. Eles aparecem em dois lugares:

**1. LinkedIn da Raquel** — em `index.html`, procure por
`js-pending-link` perto de `aria-label="LinkedIn da Raquel`. Aparece na
seção de Contato e no footer (2 ocorrências).

**2. Seus links de desenvolvedor (GitHub, LinkedIn, Portfólio)** — também em
`index.html`, dentro do `<footer>`, na linha da assinatura
"Desenvolvido por devRu · Ruan Rodrigues". São 3 links (`GitHub`, `LinkedIn`,
`Portfólio`), todos com `js-pending-link` e um `title` indicando qual é qual.

Para preencher qualquer um desses, troque o `href="#"` pela URL real e remova
a classe `js-pending-link` daquele link específico (senão o clique continua
sendo bloqueado pelo JavaScript). Por exemplo:

```html
<!-- antes -->
<a href="#" class="js-pending-link" title="Link do GitHub a ser adicionado">GitHub</a>

<!-- depois -->
<a href="https://github.com/seu-usuario" target="_blank" rel="noopener">GitHub</a>
```

## Fotos

As quatro fotos da Raquel já estão nomeadas por seção em
`assets/images/`: `raquel-hero.jpg`, `raquel-sobre.jpg`,
`raquel-ludico.jpg` e `raquel-contato.jpg`. Se quiser trocar alguma,
mantenha o mesmo nome de arquivo para não precisar alterar o `index.html`,
ou atualize o caminho na tag `<img>` correspondente.

## Formulário de contato

O formulário na seção "Contato" é só front-end: ele não envia dados para
nenhum servidor. Ao clicar em "Enviar pelo WhatsApp", o JavaScript monta uma
mensagem com o que foi digitado e abre o WhatsApp da Raquel
(`js/script.js`, variável `whatsappNumero`) com essa mensagem pronta.

## Personalização rápida

- **Número de WhatsApp**: aparece em três lugares no `index.html` (dentro
  dos links `https://wa.me/...`) e uma vez em `js/script.js`
  (`whatsappNumero`). Se o número mudar, atualize nos quatro lugares.
- **Cores**: todas as cores do site estão centralizadas no topo de
  `css/style.css`, dentro de `:root { ... }`. Basta trocar os valores
  hexadecimais ali para mudar a paleta inteira.
- **Textos**: todo o conteúdo está direto no `index.html`, sem sistema de
  templates — é só editar o texto entre as tags.
