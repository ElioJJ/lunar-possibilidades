/*
  CONTEÚDO EDITÁVEL DO SITE
  ---------------------------------------------------------------------------
  1. Coloque suas imagens dentro da pasta: assets/gallery/
  2. Duplique um dos itens de LUNAR_GALLERY.
  3. Altere imagem, título, descrição, recursos e crédito.

  Formatos aceitos no campo "format":
  "landscape" | "portrait" | "tall" | "square"

  Categorias aceitas no campo "category":
  "cozinhas" | "banheiros"
*/

window.LUNAR_SITE = {
  brandName: "Lunar",
  brandDescriptor: "Superfícies",
  eyebrow: "Referências para o seu projeto",
  title: "Possibilidades em Corian",
  intro:
    "Uma seleção de referências para você imaginar sua cozinha e banheiros com superfícies contínuas, cubas integradas e soluções desenvolvidas sob medida.",
  closingTitle: "Viu uma possibilidade que combina com seu projeto?",
  closingText:
    "Envie a referência para avaliarmos como ela pode ser adaptada ao seu ambiente.",
  disclaimer:
    "Imagens inspiracionais. Cada solução deve ser avaliada conforme as características do projeto.",
  location: "João Pessoa — PB",
  contact: {
    // Use somente números, incluindo país e DDD. Exemplo: 5583999999999
    whatsappNumber: "83 99420 5772",
    whatsappMessage:
      "Olá! Vi as referências de aplicações em Corian® e gostaria de conversar sobre uma possibilidade para o meu projeto.",
    email: "",
  },
};

window.LUNAR_GALLERY = [
  {
    id: "cozinha-ilha-continua",
    category: "cozinhas",
    image: "assets/gallery/ilha_monolitica.jpg",
    alt: "Espaço reservado para uma referência de ilha em Corian",
    title: "Ilha com aparência contínua",
    description:
      "Uma composição em que tampo, laterais e volumes trabalham como um único elemento visual.",
    resources: ["Continuidade visual", "Ilha", "Solução sob medida"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "landscape",
  },
  {
    id: "banheiro-cuba-integrada",
    category: "banheiros",
    image: "assets/gallery/placeholder-banheiro-cuba.svg",
    alt: "Espaço reservado para uma referência de cuba integrada em banheiro",
    title: "Cuba integrada",
    description:
      "Cuba e bancada desenvolvidas no mesmo material para criar unidade e facilitar a limpeza.",
    resources: ["Cuba integrada", "Não porosidade", "Limpeza"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "portrait",
  },  
  {
    id: "cozinha-cuba-tampa",
    category: "cozinhas",
    image: "assets/gallery/cuba_tampa_acess.jpg",
    alt: "Espaço reservado para uma referência de cuba com tampa em Corian",
    title: "Cuba com tampa e acessórios",
    description:
      "Elementos produzidos sob medida podem ampliar a área útil e preservar a organização visual da bancada.",
    resources: ["Cuba", "Tampa", "Acessórios integrados"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "tall",
  },
  {
    id: "cozinha-cuba-integrada",
    category: "cozinhas",
    image: "assets/gallery/cuba_integrada.jpg",
    alt: "Espaço reservado para uma referência de cuba com tampa em Corian",
    title: "Cubas e bancada completamente integradas",
    description:
      "Integração de bancada e cubas. Higiêne e harmonia visual",
    resources: ["Cuba", "Higiêne", "Praticidade"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "tall",
  },
  {
    id: "cozinha-integrada",
    category: "cozinhas",
    image: "assets/gallery/cozinha_integrada.jpg",
    alt: "Espaço reservado para uma referência de cuba com tampa em Corian",
    title: "Cozinha Integrada",
    description:
      "Integração de bancada e cubas. Higiêne e harmonia visual",
    resources: ["Cuba", "Higiêne", "Praticidade", "Acessórios"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "tall",
  },
  {
    id: "cozinha-recursos",
    category: "cozinhas",
    image: "assets/gallery/solucoes_personalizadas.jpg",
    alt: "Espaço reservado para uma referência de cuba com tampa em Corian",
    title: "Bancada com recursos de design",
    description:
      "Integração de bancada e cubas. Higiêne e harmonia visual",
    resources: ["Cuba", "Higiêne", "Praticidade", "Acessórios"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "tall",
  },
  {
    id: "banheiro-cuba-dupla",
    category: "banheiros",
    image: "assets/gallery/placeholder-banheiro-duplo.svg",
    alt: "Espaço reservado para uma referência de bancada com cuba dupla",
    title: "Bancada com cuba dupla",
    description:
      "Uma solução contínua e personalizada para suítes, hotéis e ambientes de uso compartilhado.",
    resources: ["Cuba dupla", "Hotelaria", "Personalização"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "landscape",
  },
  {
    id: "cozinha-formas-curvas",
    category: "cozinhas",
    image: "assets/gallery/ilha_curva.jpg",
    alt: "Espaço reservado para uma referência de bancada com formas curvas",
    title: "Formas personalizadas",
    description:
      "Curvas e cantos arredondados permitem criar volumes mais fluidos e adequados à circulação do ambiente.",
    resources: ["Curvas", "Cantos arredondados", "Design"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "square",
  },
   {
    id: "cozinha-formas-curvas",
    category: "cozinhas",
    image: "assets/gallery/ilha_curva2.jpg",
    alt: "Espaço reservado para uma referência de bancada com formas curvas",
    title: "Formas curvas",
    description:
      "Curvas e cantos arredondados permitem criar volumes mais fluidos e adequados à circulação do ambiente.",
    resources: ["Curvas", "Cantos arredondados", "Design"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "square",
  },
  {
    id: "banheiro-revestimento-continuo",
    category: "banheiros",
    image: "assets/gallery/placeholder-banheiro-continuo.svg",
    alt: "Espaço reservado para uma referência de bancada e revestimento contínuos",
    title: "Bancada e revestimento integrados",
    description:
      "O mesmo material pode avançar da bancada para frontões ou paredes, criando uma leitura arquitetônica mais limpa.",
    resources: ["Revestimento", "Frontão", "Continuidade"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "portrait",
  },
   {
    id: "cozinha-rebaixo-italiano",
    category: "cozinhas",
    image: "assets/gallery/rebaixo_italiano.jpg",
    alt: "Espaço reservado para uma referência de bancada com formas curvas",
    title: "Bancada com rebaixo italiano (5mm)",
    description:
      "Curvas e cantos arredondados permitem criar volumes mais fluidos e adequados à circulação do ambiente.",
    resources: ["Curvas", "Cantos arredondados", "Design"],
    credit: "Imagem provisória — substitua por uma referência autorizada.",
    format: "portrait",
  },
];
