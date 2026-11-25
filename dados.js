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
  { codigo: 'MRVE3', nome: 'MRV',              setor: 'Construção de casas', cor: '#7b3fa0', preco: 7.00 },
  { codigo: 'RENT3', nome: 'Localiza',         setor: 'Aluguel de carros', cor: '#3d4550', preco: 40.00 },
];

// Cada notícia: título, texto, efeitos (variação % por ação) e o porquê.
// Todas as notícias mexem com todas as empresas (0 = não muda).
// "dividendo" (opcional): reais por ação pagos a quem tem a ação.
// Banco com todas as notícias (numeradas). As que entram no jogo estão em USAR, no fim do arquivo.
window.BANCO_NOTICIAS = [
  // ---------- 1 ----------
  {
    titulo: 'Dólar dispara e chega a R$ 6,20',
    texto: 'A moeda americana teve a maior alta do ano após incertezas no cenário internacional.',
    efeitos: { VALE3: +4, GGBR4: +3, BBAS3: 0, ITUB4: 0, PETR4: +2, MGLU3: -6, EMBR3: +5, ABEV3: -3, SUZB3: +6, WEGE3: +3, MRVE3: -1, RENT3: -2 },
    porque: {
      VALE3: 'Exporta minério e recebe em dólar.',
      GGBR4: 'Tem fábricas nos EUA: o lucro de lá vale mais reais.',
      BBAS3: 'Banco que opera no Brasil, em reais: quase não sente.',
      ITUB4: 'Banco que opera no Brasil, em reais: quase não sente.',
      PETR4: 'Petróleo é vendido em dólar.',
      MGLU3: 'Eletrônicos importados ficam mais caros e as vendas caem.',
      EMBR3: 'Vende aviões em dólar para o mundo todo.',
      ABEV3: 'Cevada e alumínio das latas são cotados em dólar: custo sobe.',
      SUZB3: 'Exporta quase toda a celulose e recebe em dólar.',
      WEGE3: 'Exporta motores para mais de 100 países.',
      MRVE3: 'Materiais importados encarecem a obra.',
      RENT3: 'Carros novos ficam mais caros (peças importadas).',
    },
    licao: 'Dólar alto ajuda quem exporta e atrapalha quem importa.',
  },
  // ---------- 2 ----------
  {
    titulo: 'China anuncia pacote trilionário para acelerar a economia',
    texto: 'O governo chinês vai investir pesado em obras, fábricas e infraestrutura nos próximos dois anos.',
    efeitos: { VALE3: +8, GGBR4: +3, BBAS3: +2, ITUB4: +1, PETR4: +3, MGLU3: 0, EMBR3: +1, ABEV3: 0, SUZB3: +4, WEGE3: +2, MRVE3: 0, RENT3: 0 },
    porque: {
      VALE3: 'A China é a maior compradora de minério de ferro da Vale.',
      GGBR4: 'Mais demanda por aço no mundo puxa o preço para cima.',
      BBAS3: 'É o banco do agronegócio, que vende soja e carne à China.',
      ITUB4: 'Clima de otimismo melhora o mercado como um todo.',
      PETR4: 'Mais fábricas e obras = mais consumo de petróleo.',
      MGLU3: 'Vende só no Brasil, para o consumidor daqui.',
      EMBR3: 'Leve otimismo com o comércio mundial.',
      ABEV3: 'Vende cerveja no Brasil: a China não muda nada.',
      SUZB3: 'A China é a maior compradora de celulose da Suzano.',
      WEGE3: 'Mais obras pelo mundo = mais motores e equipamentos vendidos.',
      MRVE3: 'Constrói e vende casas só no Brasil.',
      RENT3: 'Aluga carros só no Brasil.',
    },
    licao: 'Quando o maior comprador do mundo acelera, quem vende para ele ganha.',
  },
  // ---------- 3 ----------
  {
    titulo: 'Banco Central sobe a taxa Selic para 15% ao ano',
    texto: 'Para segurar a inflação, o Copom aumentou os juros básicos da economia.',
    efeitos: { VALE3: -1, GGBR4: -2, BBAS3: +2, ITUB4: +2, PETR4: -1, MGLU3: -8, EMBR3: -1, ABEV3: -2, SUZB3: -2, WEGE3: -3, MRVE3: -7, RENT3: -5 },
    porque: {
      VALE3: 'Juros altos tornam a renda fixa mais atraente que a bolsa.',
      GGBR4: 'Financiamento caro freia a construção civil, que compra aço.',
      BBAS3: 'Bancos costumam lucrar mais com juros altos.',
      ITUB4: 'Bancos costumam lucrar mais com juros altos.',
      PETR4: 'Juros altos tornam a renda fixa mais atraente que a bolsa.',
      MGLU3: 'Crédito caro: as pessoas parcelam menos e compram menos.',
      EMBR3: 'Juros altos tornam a renda fixa mais atraente que a bolsa.',
      ABEV3: 'Com menos dinheiro sobrando, o consumo diminui.',
      SUZB3: 'Tem dívida grande: os juros pagos aumentam.',
      WEGE3: 'Empresas adiam investimentos em máquinas novas.',
      MRVE3: 'Financiar a casa própria fica muito mais caro.',
      RENT3: 'Pega muito dinheiro emprestado para comprar a frota.',
    },
    licao: 'Juros altos deixam a renda fixa mais atraente e a bolsa, em geral, cai.',
  },
  // ---------- 4 ----------
  {
    titulo: 'Black Friday bate recorde de vendas',
    texto: 'O comércio vendeu 20% a mais que no ano passado, principalmente pela internet.',
    efeitos: { VALE3: 0, GGBR4: 0, BBAS3: +1, ITUB4: +2, PETR4: +1, MGLU3: +10, EMBR3: 0, ABEV3: +2, SUZB3: +3, WEGE3: +1, MRVE3: 0, RENT3: 0 },
    porque: {
      VALE3: 'Minério não é vendido na Black Friday.',
      GGBR4: 'Aço não depende das compras do consumidor.',
      BBAS3: 'Mais compras no cartão geram mais tarifas.',
      ITUB4: 'Maior emissor de cartões: lucra com cada compra parcelada.',
      PETR4: 'Mais entregas = mais caminhões rodando com diesel.',
      MGLU3: 'Varejista com forte venda online: recorde de vendas.',
      EMBR3: 'Ninguém compra avião na Black Friday.',
      ABEV3: 'Consumidor animado gasta mais com bebidas.',
      SUZB3: 'Cada entrega precisa de uma caixa de papelão!',
      WEGE3: 'Vende motores para eletrodomésticos.',
      MRVE3: 'Ninguém compra apartamento na Black Friday.',
      RENT3: 'Aluguel de carro não depende da Black Friday.',
    },
    licao: 'Uma notícia pode atingir empresas de jeitos que nem imaginamos (a caixa de papelão!).',
  },
  // ---------- 5 ----------
  {
    titulo: 'BOATO: governo vai congelar preços e trocar a direção das estatais',
    texto: 'Mensagem que circula nas redes diz que o governo vai interferir na Petrobras e no Banco do Brasil. Nada foi confirmado.',
    efeitos: { VALE3: -1, GGBR4: -1, BBAS3: -7, ITUB4: -1, PETR4: -9, MGLU3: -1, EMBR3: -1, ABEV3: -1, SUZB3: -1, WEGE3: -1, MRVE3: -1, RENT3: -1 },
    porque: {
      VALE3: 'Clima de medo faz o mercado todo cair um pouco.',
      GGBR4: 'Clima de medo faz o mercado todo cair um pouco.',
      BBAS3: 'Estatal: investidores vendem com medo de interferência.',
      ITUB4: 'Clima de medo faz o mercado todo cair um pouco.',
      PETR4: 'Estatal: preço congelado = menos lucro. Venda por pânico.',
      MGLU3: 'Clima de medo faz o mercado todo cair um pouco.',
      EMBR3: 'Clima de medo faz o mercado todo cair um pouco.',
      ABEV3: 'Clima de medo faz o mercado todo cair um pouco.',
      SUZB3: 'Clima de medo faz o mercado todo cair um pouco.',
      WEGE3: 'Clima de medo faz o mercado todo cair um pouco.',
      MRVE3: 'Clima de medo faz o mercado todo cair um pouco.',
      RENT3: 'Clima de medo faz o mercado todo cair um pouco.',
    },
    licao: 'Boatos movem preços. Antes de agir, confira a fonte!',
  },
  // ---------- 6 ----------
  {
    titulo: 'Governo desmente boato; Petrobras e BB anunciam dividendos',
    texto: 'Era fake news. As duas estatais divulgaram lucro acima do esperado e vão pagar dividendos aos acionistas.',
    efeitos: { VALE3: +1, GGBR4: +1, BBAS3: +8, ITUB4: +1, PETR4: +10, MGLU3: +1, EMBR3: +1, ABEV3: +1, SUZB3: +1, WEGE3: +1, MRVE3: +1, RENT3: +1 },
    dividendo: { BBAS3: 1.00, PETR4: 1.50 },
    porque: {
      VALE3: 'O alívio devolve a queda do dia do boato.',
      GGBR4: 'O alívio devolve a queda do dia do boato.',
      BBAS3: 'Boato desmentido + lucro + dividendos. Quem vendeu no pânico perdeu.',
      ITUB4: 'O alívio devolve a queda do dia do boato.',
      PETR4: 'Boato desmentido + lucro + dividendos. Quem vendeu no pânico perdeu.',
      MGLU3: 'O alívio devolve a queda do dia do boato.',
      EMBR3: 'O alívio devolve a queda do dia do boato.',
      ABEV3: 'O alívio devolve a queda do dia do boato.',
      SUZB3: 'O alívio devolve a queda do dia do boato.',
      WEGE3: 'O alívio devolve a queda do dia do boato.',
      MRVE3: 'O alívio devolve a queda do dia do boato.',
      RENT3: 'O alívio devolve a queda do dia do boato.',
    },
    licao: 'Dividendo é a parte do lucro que a empresa divide com quem tem a ação.',
  },
  // ---------- 7 ----------
  {
    titulo: 'Petróleo sobe 12% após tensão no Oriente Médio',
    texto: 'O barril atingiu o maior preço em dois anos com o risco de faltar petróleo no mercado.',
    efeitos: { VALE3: -1, GGBR4: -1, BBAS3: 0, ITUB4: 0, PETR4: +8, MGLU3: -2, EMBR3: -3, ABEV3: -2, SUZB3: -1, WEGE3: +2, MRVE3: -1, RENT3: -3 },
    porque: {
      VALE3: 'Caminhões e navios da mineração gastam muito diesel.',
      GGBR4: 'Energia e transporte mais caros.',
      BBAS3: 'Banco não usa petróleo: efeito pequeno.',
      ITUB4: 'Banco não usa petróleo: efeito pequeno.',
      PETR4: 'Vende petróleo: preço maior = receita maior.',
      MGLU3: 'Frete das entregas fica mais caro.',
      EMBR3: 'Combustível caro aperta as aéreas, que compram menos aviões.',
      ABEV3: 'Garrafas PET e frete ficam mais caros.',
      SUZB3: 'Frete até os portos fica mais caro.',
      WEGE3: 'Petróleo caro aumenta a procura por energia elétrica e solar.',
      MRVE3: 'Asfalto, plástico e frete ficam mais caros.',
      RENT3: 'Gasolina cara: menos gente aluga carro.',
    },
    licao: 'Matéria-prima mais cara ajuda quem vende e atrapalha quem usa.',
  },
  // ---------- 8 ----------
  {
    titulo: 'EUA criam tarifa de 25% sobre produtos brasileiros',
    texto: 'O governo americano vai taxar quase tudo o que o Brasil exporta para os Estados Unidos.',
    efeitos: { VALE3: -1, GGBR4: +4, BBAS3: -1, ITUB4: -1, PETR4: -2, MGLU3: 0, EMBR3: -9, ABEV3: 0, SUZB3: -3, WEGE3: -4, MRVE3: 0, RENT3: 0 },
    porque: {
      VALE3: 'Vende pouco para os EUA: efeito pequeno.',
      GGBR4: 'Tem fábricas DENTRO dos EUA, protegidas da concorrência. Ganhou!',
      BBAS3: 'Exportadores do agro podem ter dificuldade de pagar dívidas.',
      ITUB4: 'Economia brasileira deve crescer menos.',
      PETR4: 'Parte do petróleo exportado vai para os EUA.',
      MGLU3: 'Vende só no Brasil: a tarifa não chega até ela.',
      EMBR3: 'Os EUA são o maior cliente dos jatos da Embraer.',
      ABEV3: 'Produz e vende no Brasil: não exporta para os EUA.',
      SUZB3: 'Os EUA compram bastante celulose brasileira.',
      WEGE3: 'Exporta muitos motores e transformadores para os EUA.',
      MRVE3: 'Constrói e vende só no Brasil: a tarifa não chega.',
      RENT3: 'Atua só no Brasil: a tarifa não chega.',
    },
    licao: 'Conhecer a empresa faz diferença: parecia ruim para a Gerdau, mas foi bom.',
  },
  // ---------- 9 ----------
  {
    titulo: 'Desemprego atinge o menor nível da história',
    texto: 'Mais brasileiros com carteira assinada e salário no bolso.',
    efeitos: { VALE3: 0, GGBR4: +2, BBAS3: +3, ITUB4: +3, PETR4: +1, MGLU3: +7, EMBR3: 0, ABEV3: +3, SUZB3: 0, WEGE3: +2, MRVE3: +6, RENT3: +3 },
    porque: {
      VALE3: 'Vende para fora: o emprego no Brasil não muda suas vendas.',
      GGBR4: 'Mais gente comprando casa = mais construção e mais aço.',
      BBAS3: 'Menos calote: mais gente consegue pagar empréstimos.',
      ITUB4: 'Menos calote: mais gente consegue pagar empréstimos.',
      PETR4: 'Mais gente indo trabalhar = mais combustível vendido.',
      MGLU3: 'Com salário, as pessoas compram geladeira, TV, celular...',
      EMBR3: 'Vende aviões para fora: não muda nada.',
      ABEV3: 'Mais dinheiro no bolso = mais cerveja e refrigerante.',
      SUZB3: 'Vende celulose para fora: não muda nada.',
      WEGE3: 'Indústrias contratam e compram mais máquinas.',
      MRVE3: 'Com emprego e salário, as famílias conseguem financiar a casa.',
      RENT3: 'Mais gente aluga carro para trabalhar com aplicativo.',
    },
    licao: 'Quem vende no Brasil depende da economia brasileira; exportadoras, nem tanto.',
  },
  // ---------- 10 ----------
  {
    titulo: 'Copom mantém a Selic, exatamente como o mercado esperava',
    texto: 'Todos os economistas previam que os juros ficariam em 15%. E ficaram.',
    efeitos: { VALE3: 0, GGBR4: 0, BBAS3: 0, ITUB4: 0, PETR4: 0, MGLU3: 0, EMBR3: 0, ABEV3: 0, SUZB3: 0, WEGE3: 0, MRVE3: 0, RENT3: 0 },
    porque: {
      VALE3: 'Já estava no preço.', GGBR4: 'Já estava no preço.', BBAS3: 'Já estava no preço.',
      ITUB4: 'Já estava no preço.', PETR4: 'Já estava no preço.', MGLU3: 'Já estava no preço.',
      EMBR3: 'Já estava no preço.', ABEV3: 'Já estava no preço.', SUZB3: 'Já estava no preço.',
      WEGE3: 'Já estava no preço.',
      MRVE3: 'Já estava no preço.',
      RENT3: 'Já estava no preço.',
    },
    licao: 'O mercado reage à SURPRESA. Notícia esperada não mexe no preço. Quem não levantou placa acertou!',
  },
  // ---------- 11 ----------
  {
    titulo: 'Seca histórica: reservatórios baixos e conta de luz mais cara',
    texto: 'Falta de chuva obriga o país a ligar usinas térmicas, e a energia fica até 30% mais cara.',
    efeitos: { VALE3: -2, GGBR4: -4, BBAS3: -3, ITUB4: -1, PETR4: +2, MGLU3: -1, EMBR3: 0, ABEV3: -2, SUZB3: -3, WEGE3: +4, MRVE3: -1, RENT3: 0 },
    porque: {
      VALE3: 'Mineração gasta muita energia elétrica.',
      GGBR4: 'Siderurgia é uma das indústrias que mais gastam energia.',
      BBAS3: 'Banco do agro: produtores perdem safra e atrasam pagamentos.',
      ITUB4: 'Economia desacelera um pouco.',
      PETR4: 'Usinas térmicas queimam gás e óleo: vende mais.',
      MGLU3: 'Conta de luz alta deixa menos dinheiro para compras.',
      EMBR3: 'Avião não depende de chuva.',
      ABEV3: 'Cerveja usa muita água e energia.',
      SUZB3: 'Eucalipto cresce menos sem chuva.',
      WEGE3: 'Empresas correm para comprar painéis solares e motores econômicos.',
      MRVE3: 'Conta de luz alta aperta o orçamento das famílias.',
      RENT3: 'Carro não depende de chuva.',
    },
    licao: 'Até o clima mexe na bolsa, e cada empresa sente de um jeito.',
  },
  // ---------- 12 ----------
  {
    titulo: 'Onda de calor recorde atinge todo o país',
    texto: 'Termômetros passam de 40 °C em várias capitais durante duas semanas.',
    efeitos: { VALE3: 0, GGBR4: 0, BBAS3: 0, ITUB4: 0, PETR4: +1, MGLU3: +4, EMBR3: 0, ABEV3: +7, SUZB3: 0, WEGE3: +3, MRVE3: 0, RENT3: 0 },
    porque: {
      VALE3: 'Calor não muda a venda de minério.',
      GGBR4: 'Calor não muda a venda de aço.',
      BBAS3: 'Banco não depende da temperatura.',
      ITUB4: 'Banco não depende da temperatura.',
      PETR4: 'Mais ar-condicionado = mais térmicas ligadas.',
      MGLU3: 'Corrida por ventiladores e ar-condicionado.',
      EMBR3: 'Calor não muda a venda de aviões.',
      ABEV3: 'Calor = muito mais cerveja, água e refrigerante vendidos.',
      SUZB3: 'Calor não muda a venda de celulose.',
      WEGE3: 'Fabrica motores para compressores de ar-condicionado.',
      MRVE3: 'Calor não muda a venda de casas.',
      RENT3: 'Calor não muda o aluguel de carros.',
    },
    licao: 'Nem toda notícia afeta todo mundo: às vezes o certo é não levantar placa.',
  },
  // ---------- 13 ----------
  {
    titulo: 'Crise global: bolsas do mundo inteiro despencam',
    texto: 'Medo de recessão nos EUA e na Europa faz investidores venderem ações em todo o planeta.',
    efeitos: { VALE3: -6, GGBR4: -5, BBAS3: -4, ITUB4: -3, PETR4: -5, MGLU3: -6, EMBR3: -5, ABEV3: -1, SUZB3: -4, WEGE3: -3, MRVE3: -5, RENT3: -4 },
    porque: {
      VALE3: 'Recessão = menos obras no mundo = menos minério.',
      GGBR4: 'Recessão = menos obras = menos aço.',
      BBAS3: 'Investidores estrangeiros tiram dinheiro do Brasil.',
      ITUB4: 'Banco grande e sólido: cai, mas menos.',
      PETR4: 'Economia fraca = menos petróleo consumido.',
      MGLU3: 'Na crise, as pessoas cortam primeiro os eletrodomésticos.',
      EMBR3: 'Aéreas adiam compra de aviões na crise.',
      ABEV3: 'Cerveja e refrigerante vendem até na crise: cai bem menos.',
      SUZB3: 'Menos consumo no mundo = menos papel e embalagens.',
      WEGE3: 'Empresa sólida e espalhada pelo mundo: cai menos.',
      MRVE3: 'Na crise, as famílias adiam a compra da casa.',
      RENT3: 'Empresas e turistas cortam viagens.',
    },
    licao: 'Existe um risco que atinge todo mundo. Diversificar reduz o risco, mas não elimina.',
  },
];

// =====================================================================
//  NOTÍCIAS DO JOGO: números do banco acima, na ordem em que aparecem.
//  Padrão (8 rodadas): dólar, Selic, Black Friday, boato, desmentido,
//  Copom "já esperado", tarifa dos EUA e desemprego recorde.
//  Reserva para trocar: 2 China, 7 petróleo, 11 seca, 12 calor, 13 crise global.
// =====================================================================
const USAR = [1, 3, 4, 5, 6, 10, 8, 9];
window.NOTICIAS = USAR.map(n => window.BANCO_NOTICIAS[n - 1]).filter(Boolean);
