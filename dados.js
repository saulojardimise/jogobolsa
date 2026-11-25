// =====================================================================
//  DADOS DO SIMULADOR — edite aqui as empresas e as notícias.
//  Preços e notícias são FICTÍCIOS, só para a dinâmica em sala.
// =====================================================================

window.EMPRESAS = [
  { codigo: 'VALE3', nome: 'Vale',             setor: 'Mineração',         cor: '#0a7d6e', preco: 60.00 },
  { codigo: 'GGBR4', nome: 'Gerdau',           setor: 'Siderurgia (aço)',  cor: '#1f4e9e', preco: 18.00 },
  { codigo: 'BBAS3', nome: 'Banco do Brasil',  setor: 'Banco',             cor: '#c9a400', preco: 25.00 },
  { codigo: 'ITUB4', nome: 'Itaú',             setor: 'Banco',             cor: '#e46c0a', preco: 35.00 },
  { codigo: 'PETR4', nome: 'Petrobras',        setor: 'Petróleo',          cor: '#1b8a3a', preco: 35.00 },
  { codigo: 'MGLU3', nome: 'Magazine Luiza',   setor: 'Varejo',            cor: '#0b6fd6', preco: 10.00 },
  { codigo: 'EMBR3', nome: 'Embraer',          setor: 'Aviões',            cor: '#28356b', preco: 70.00 },
  { codigo: 'ABEV3', nome: 'Ambev',            setor: 'Bebidas',           cor: '#b3261e', preco: 13.00 },
  { codigo: 'SUZB3', nome: 'Suzano',           setor: 'Papel e celulose',  cor: '#5c8a1e', preco: 55.00 },
  { codigo: 'WEGE3', nome: 'WEG',              setor: 'Motores e energia', cor: '#00529b', preco: 45.00 },
];

// Cada notícia: título, texto, efeitos (variação % por ação) e o porquê.
// "dividendo" (opcional): reais por ação pagos a quem tem a ação.
window.NOTICIAS = [
  {
    titulo: 'Dólar dispara e chega a R$ 6,20',
    texto: 'A moeda americana teve a maior alta do ano após incertezas no cenário internacional.',
    efeitos: { VALE3: +4, SUZB3: +6, EMBR3: +5, GGBR4: +3, WEGE3: +2, PETR4: +1, MGLU3: -5, ABEV3: -2 },
    porque: {
      SUZB3: 'Exporta quase tudo e recebe em dólar: cada venda vale mais reais.',
      EMBR3: 'Vende aviões em dólar para o mundo inteiro.',
      VALE3: 'Exporta minério de ferro e recebe em dólar.',
      MGLU3: 'Muitos produtos são importados e ficam mais caros; o consumidor compra menos.',
      ABEV3: 'Cevada e alumínio das latas são cotados em dólar: o custo sobe.',
    },
    licao: 'Dólar alto ajuda quem exporta e atrapalha quem importa.',
  },
  {
    titulo: 'China corta produção de aço e compra menos minério de ferro',
    texto: 'O governo chinês anunciou que vai reduzir a produção das suas siderúrgicas no próximo ano.',
    efeitos: { VALE3: -7, GGBR4: +3 },
    porque: {
      VALE3: 'A China é a maior cliente da Vale. Menos aço lá = menos minério vendido.',
      GGBR4: 'Com menos aço chinês barato no mundo, a Gerdau enfrenta menos concorrência.',
    },
    licao: 'A mesma notícia pode ser ruim para uma empresa e boa para outra.',
  },
  {
    titulo: 'Banco Central sobe a taxa Selic para 15% ao ano',
    texto: 'Para segurar a inflação, o Copom aumentou os juros básicos da economia.',
    efeitos: { MGLU3: -8, WEGE3: -2, ABEV3: -1, PETR4: -1, VALE3: -1, SUZB3: -1, EMBR3: -1, GGBR4: -1, BBAS3: +2, ITUB4: +2 },
    porque: {
      MGLU3: 'Crédito mais caro: as pessoas parcelam menos e compram menos.',
      BBAS3: 'Bancos costumam ganhar mais com juros altos.',
      ITUB4: 'Bancos costumam ganhar mais com juros altos.',
    },
    licao: 'Juros altos deixam a renda fixa mais atraente e a bolsa, em geral, cai.',
  },
  {
    titulo: 'Black Friday bate recorde de vendas pela internet',
    texto: 'O comércio eletrônico vendeu 20% a mais que no ano passado.',
    efeitos: { MGLU3: +12, ABEV3: +1 },
    porque: {
      MGLU3: 'Varejista com forte venda online: recorde de vendas = mais lucro.',
    },
    licao: 'Notícias do setor afetam diretamente as empresas daquele setor.',
  },
  {
    titulo: 'BOATO: presidente do Banco do Brasil vai renunciar',
    texto: 'Mensagem que circula nas redes sociais afirma que o presidente do banco deixará o cargo amanhã. Nada foi confirmado.',
    efeitos: { BBAS3: -6 },
    porque: {
      BBAS3: 'O mercado reage até a boatos: muita gente vende por medo.',
    },
    licao: 'Boatos movem preços. Antes de agir, confira a fonte!',
  },
  {
    titulo: 'Banco do Brasil desmente boato e anuncia lucro recorde',
    texto: 'O banco negou a renúncia, divulgou lucro acima do esperado e vai pagar R$ 1,00 por ação em dividendos.',
    efeitos: { BBAS3: +9 },
    dividendo: { BBAS3: 1.00 },
    porque: {
      BBAS3: 'Boato desmentido + lucro forte + dividendos: a ação volta a subir. Quem vendeu no pânico perdeu.',
    },
    licao: 'Dividendo é parte do lucro que a empresa divide com quem tem a ação.',
  },
  {
    titulo: 'Petróleo sobe 12% após tensão no Oriente Médio',
    texto: 'O barril atingiu o maior preço em dois anos com o risco de falta de oferta.',
    efeitos: { PETR4: +8, EMBR3: -2, MGLU3: -1, ABEV3: -1 },
    porque: {
      PETR4: 'Vende petróleo: preço maior = receita maior.',
      EMBR3: 'Combustível caro aperta as companhias aéreas, que compram menos aviões.',
    },
    licao: 'Matéria-prima mais cara ajuda quem vende e atrapalha quem usa.',
  },
  {
    titulo: 'EUA criam tarifa de 25% sobre aço importado',
    texto: 'O governo americano quer proteger as siderúrgicas do país.',
    efeitos: { GGBR4: +5, VALE3: -2 },
    porque: {
      GGBR4: 'A Gerdau tem fábricas DENTRO dos EUA e fica protegida da concorrência estrangeira.',
      VALE3: 'Menos comércio de aço no mundo pode reduzir a demanda por minério.',
    },
    licao: 'Conhecer a empresa faz diferença: parecia ruim para a Gerdau, mas foi bom.',
  },
  {
    titulo: 'Embraer fecha venda de 60 jatos para companhia americana',
    texto: 'É um dos maiores contratos da história da empresa.',
    efeitos: { EMBR3: +10 },
    porque: {
      EMBR3: 'Contrato grande = receita garantida por anos.',
    },
    licao: 'Bons resultados da empresa valorizam a ação.',
  },
  {
    titulo: 'Ambev divulga lucro exatamente igual ao esperado',
    texto: 'Os analistas previam lucro de R$ 4 bilhões no trimestre. Veio R$ 4 bilhões.',
    efeitos: { ABEV3: 0 },
    porque: {
      ABEV3: 'Lucro bom, mas já esperado: o preço já tinha "contado" com isso.',
    },
    licao: 'O mercado reage à SURPRESA, não à notícia em si.',
  },
  {
    titulo: 'WEG anuncia fábrica de baterias para carros elétricos',
    texto: 'Investimento de R$ 2 bilhões para atender a demanda por energia limpa.',
    efeitos: { WEGE3: +6, PETR4: -1 },
    porque: {
      WEGE3: 'Entra em um mercado que cresce rápido no mundo todo.',
    },
    licao: 'Investidores pagam mais por empresas com bom futuro de crescimento.',
  },
  {
    titulo: 'Preço da celulose despenca na Europa',
    texto: 'Excesso de oferta derrubou o preço da celulose em 15%.',
    efeitos: { SUZB3: -7 },
    porque: {
      SUZB3: 'A Suzano é uma das maiores vendedoras de celulose do mundo.',
    },
    licao: 'Empresas de commodities dependem do preço do que vendem.',
  },
  {
    titulo: 'Crise global: bolsas do mundo inteiro caem',
    texto: 'Medo de recessão nos EUA e na Europa faz investidores venderem ações em todo o planeta.',
    efeitos: { VALE3: -5, GGBR4: -5, BBAS3: -4, ITUB4: -4, PETR4: -5, MGLU3: -6, EMBR3: -4, ABEV3: -2, SUZB3: -3, WEGE3: -4 },
    porque: {
      ABEV3: 'Cerveja e refrigerante continuam vendendo na crise: cai menos.',
      MGLU3: 'Na crise as pessoas cortam primeiro as compras de eletrodomésticos.',
    },
    licao: 'Existe um risco que atinge todo mundo. Diversificar reduz o risco, mas não elimina.',
  },
];
