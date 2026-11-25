# Simulador da Bolsa · BolsaLab

Dinâmica de sala para projetar: a cada clique aparece uma notícia (fictícia), os alunos levantam a plaquinha **SOBE ▲** ou **CAI ▼** para a ação do seu card e depois o professor revela o que aconteceu com cada empresa. No fim, o ranking mostra qual ação rendeu mais.

- `index.html`: o simulador (para o projetor)
- `imprimir.html`: cards das ações (4 por folha A4) e plaquinha SOBE/CAI para dobrar ao meio
- `dados.js`: empresas, preços iniciais e notícias. **Edite aqui** para trocar ou criar notícias.

## Atalhos

| Tecla | Ação |
|---|---|
| Espaço, Enter ou → | avança (notícia → revelar → próxima) |
| T | contagem de 10 segundos na tela da notícia |
| Esc ou ← | volta ao painel |
| F | tela cheia |

O jogo fica salvo no navegador: se a página recarregar, ele continua de onde parou. "Desfazer" volta uma notícia e "Reiniciar" (dois cliques) zera tudo.

Preços e notícias são fictícios, criados só para fins didáticos.
