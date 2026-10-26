# Amora Nail Atelier

Site de apresentação de um atelier de unhas, com serviços, pacotes, galeria de trabalhos, perguntas frequentes e formulário para solicitar um agendamento pelo WhatsApp.

## Requisitos

- Node.js 20.19+ ou 22.12+
- npm

## Executar localmente

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
| `npm run preview` | Serve localmente a versão de produção já compilada. Execute `npm run build` antes. |

## Funcionalidades

- Navegação por seções com menu adaptado para dispositivos móveis.
- Serviços e pacotes com seleção para o formulário de agendamento.
- Galeria de trabalhos com filtros por categoria.
- Perguntas frequentes em formato de acordeão.
- Formulário que monta uma mensagem e abre o WhatsApp para solicitar o agendamento.
- Seleção de uma imagem de inspiração para visualização local. A imagem não é enviada pelo site; a pessoa deve anexá-la manualmente na conversa do WhatsApp.

## Personalização

- **Serviços, preços, galeria e FAQ:** edite `data.ts`.
- **Imagens locais:** adicione os arquivos em `public/images/` e atualize os caminhos correspondentes em `data.ts`. Algumas imagens da galeria atualmente usam URLs externas do Unsplash.
- **Número de WhatsApp do atelier:** em `App.tsx`, substitua `5511999999999` pelo número oficial, usando o código do país e DDD, apenas com dígitos. Esse valor de exemplo precisa ser atualizado antes da publicação.
- **Título e metadados básicos da página:** edite `index.html`.

## Produção

Gere os arquivos estáticos com:

```bash
npm run build
```

Publique o conteúdo de `dist/` em um serviço de hospedagem de sites estáticos. O projeto não possui backend; a confirmação de disponibilidade e do agendamento acontece diretamente pelo WhatsApp.