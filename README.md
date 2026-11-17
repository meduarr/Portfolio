# Portfólio · Maria Eduarda

Portfólio pessoal desenvolvido com **HTML5, CSS3 e JavaScript** puro, sem frameworks e sem etapa de build.

## Estrutura

```
portfolio_me/
├── index.html            # Estrutura e conteúdo do site
├── README.md
└── assets/
    ├── css/style.css     # Estilos (variáveis, seções, responsividade)
    ├── js/main.js        # Interações (menu, animações, WhatsApp)
    └── img/favicon.svg   # Ícone da aba com as iniciais ME
```

## Como rodar localmente

Basta abrir o `index.html` no navegador.
Se preferir um servidor local, use a extensão **Live Server** do VS Code ou rode:

```bash
python -m http.server 8000
# acesse http://localhost:8000
```

## Personalização rápida

| O que mudar                | Onde                                                    |
|----------------------------|---------------------------------------------------------|
| Número do WhatsApp         | `assets/js/main.js` → `WHATSAPP_NUMBER` (ex.: `5583999999999`) |
| Mensagem padrão do WhatsApp| `assets/js/main.js` → `WHATSAPP_MESSAGE`                |
| Cores do site              | `assets/css/style.css` → bloco `:root`                  |
| Texto de apresentação      | `index.html` → seção `#inicio`                          |
| Tecnologias                | `index.html` → copie um `<li class="tech">`             |
| Projetos                   | `index.html` → copie um `<article class="project">` e ajuste `--accent` / `--accent-2` |

## Hospedagem

Por ser um site estático, pode ser publicado gratuitamente no **GitHub Pages**, **Netlify** ou **Vercel**: basta enviar a pasta inteira.

## Bibliotecas externas (via CDN)

- [Font Awesome 6](https://fontawesome.com/): ícones
- [Google Fonts](https://fonts.google.com/): Space Grotesk e JetBrains Mono
