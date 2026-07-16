# Lunar — Possibilidades em Corian®

Site visual e responsivo para compartilhar referências de aplicações do Corian® em cozinhas e banheiros.

## Visualizar

Abra o arquivo `index.html` em um navegador. Para uma visualização mais fiel, mantenha todos os arquivos dentro da pasta `lunar-inspiracoes`.

## Acrescentar uma imagem

1. Copie a imagem para `assets/gallery/`.
2. Abra `gallery-data.js` em um editor de texto.
3. Duplique um dos blocos que começam em `{` e terminam em `},` dentro de `window.LUNAR_GALLERY`.
4. Preencha os campos:

```js
{
  id: "nome-unico-da-referencia",
  category: "cozinhas",
  image: "assets/gallery/nome-da-imagem.webp",
  alt: "Descrição objetiva do que aparece na imagem",
  title: "Cuba integrada",
  description: "Breve explicação do recurso mostrado na imagem.",
  resources: ["Cuba integrada", "Continuidade", "Fácil limpeza"],
  credit: "Fonte ou crédito da imagem.",
  format: "portrait",
},
```

Categorias disponíveis:

- `cozinhas`
- `banheiros`

Formatos disponíveis:

- `landscape`: imagem horizontal
- `portrait`: imagem vertical moderada
- `tall`: imagem vertical mais alta
- `square`: imagem quadrada

## Substituir os exemplos

Os seis itens iniciais usam arquivos SVG provisórios. Substitua o valor de `image` pelo caminho de sua fotografia e atualize título, descrição, recursos, texto alternativo e crédito.

Você também pode apagar completamente os itens de exemplo e cadastrar somente suas referências.

## Configurar o WhatsApp

No início de `gallery-data.js`, localize:

```js
whatsappNumber: "",
```

Informe país, DDD e telefone usando apenas números. Exemplo de formato:

```js
whatsappNumber: "5583999999999",
```

Enquanto esse campo estiver vazio, os botões de WhatsApp ficam automaticamente ocultos.

Quando o visitante abrir uma referência e clicar em **Avaliar esta possibilidade**, o nome daquela imagem será incluído automaticamente na mensagem.

## Configurar textos e contato

Os textos gerais, nome, localização, e-mail e mensagem de WhatsApp ficam em `window.LUNAR_SITE`, no mesmo arquivo `gallery-data.js`.

## Preparar imagens

- Prefira JPG ou WebP.
- Use aproximadamente 1.600 a 2.400 pixels no lado maior.
- Comprima antes de publicar.
- Evite arquivos individuais acima de 1,5 MB.
- Use somente imagens próprias ou autorizadas.
- Identifique claramente referências que não sejam projetos executados pela Lunar.

## Publicar

Envie toda a pasta, preservando sua estrutura, para a hospedagem escolhida. O site não exige banco de dados, instalação ou processo de compilação.

Arquivos essenciais:

- `index.html`
- `styles.css`
- `app.js`
- `gallery-data.js`
- pasta `assets/`
