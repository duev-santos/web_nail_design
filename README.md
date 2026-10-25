# Amora Nail Atelier

Site de apresentação de um atelier de unhas, desenvolvido com React, TypeScript e Vite. A página reúne informações sobre o atelier, serviços, pacotes, trabalhos realizados, dúvidas frequentes e um formulário para solicitar agendamentos pelo WhatsApp.

> Os arquivos da aplicação e o `package.json` ficam na pasta pai deste diretório. Execute os comandos abaixo a partir da raiz do projeto.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

Na raiz do projeto, instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O Vite exibirá no terminal o endereço local para abrir no navegador.

## Scripts disponíveis

| Comando | Descrição |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run build` | Verifica os tipos TypeScript e gera a versão de produção em `dist/`. |
| `npm run preview` | Serve localmente a versão de produção. Execute `npm run build` antes. |

## Funcionalidades

- Navegação por seções com menu adaptado para dispositivos móveis.
- Lista de serviços e pacotes selecionáveis para o pedido de agendamento.
- Galeria de trabalhos com filtros por categoria.
- Perguntas frequentes em formato de acordeão.
- Formulário que prepara uma mensagem e abre uma conversa no WhatsApp.
- Seleção de imagem de inspiração para visualização local. A imagem não é enviada pelo site; ela deve ser anexada manualmente à conversa.

## Personalização

- **Serviços, preços, galeria e FAQ:** edite `../data.ts`.
- **Imagens locais:** adicione arquivos em `../public/images/` e atualize os caminhos correspondentes. Algumas imagens da galeria usam URLs externas do Unsplash.
- **Número de WhatsApp:** em `../App.tsx`, substitua `5511999999999` pelo número oficial com código do país e DDD, usando apenas dígitos. Atualize esse valor antes de publicar.
- **Título e metadados da página:** edite `../index.html`.

## Publicação

Gere os arquivos estáticos com `npm run build` e publique o conteúdo de `dist/` em um serviço de hospedagem de sites estáticos. O projeto não tem backend; disponibilidade e confirmação do agendamento são tratadas diretamente pelo WhatsApp.

