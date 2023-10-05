# [Cronologia da Ciência](https://flipeip.github.io/cronologia-da-ciencia)

Uma linha do tempo interativa de nomes de grandes cientistas e filósofos, contando um pouco da história da Metodologia Científica e Ciência da Computação.

Este site foi desenvolvido com o software de geração de sites estáticos [Jekyll](https://jekyllrb.com/), para facilitar a adição, remoção e alteração de novos cientistas, bem como reutilizar a estrutura do site para novos projetos de linha do tempo. O site é preparado para ser hospedado no [GitHub Pages](https://pages.github.com/).

O site foi programado por Felipe Matheus([flipeip](https://github.com/flipeip/)), as animações de perfil de cada cientista foram produzidas por [Noemi Medeiros](https://github.com/noemimedeiros) e os textos foram produzidos por ambos, junto com Arthur Henrique([ArthurHab](https://github.com/ArthurHab)) e Anna Lys.

## Cientistas em destaque no site

O site dá destaque aos seguintes cientistas (em ordem de data de nascimento):

1. Tales de Mileto
2. Pitágoras
3. Aristóteles
4. Francis Bacon
5. Galileu Galilei
6. René Descartes
7. Blaise Pascal
8. Isaac Newton
9. Charles Darwin
10. Nikola Tesla
11. Albert Einstein
12. Karl Popper
13. John Von Neumann
14. Alan Turing
15. Thomas Kuhn
16. Stephen Hawking

## Colaborando com mais cientistas

É possível ajudar a expandir a lista do site criando um pull-request adicionando novos nomes ao site, desde que siga o seguinte procedimento:

### Adicionando um Cientista

Simplesmente adicione um novo arquivo Markdown à pasta [```_events```](https://github.com/Fittl3/cronologia-da-ciencia/tree/main/_events) no seguinte formato:

```XXX-nome-do-cientista.md```

Observe que **XXX** é o número que indica a posição do cientista na lista, então lembre-se de renomear os cientistas que procedem o que está sendo adicionado. Observe também que o nome do cientista é em minúsculo, sem acentos e separado por hífens. Exemplo:

```014-alan-turing.md```

### Configurando o Cientista

Adicione o seguinte trecho no início do arquivo:
```markdown
---
title: Nome do Cientista
time: 1912-1954
color: red
icon: computer
video: nome-do-cientista
---
```
| Campo | Descrição|
|---|---|
| ```title``` | O nome do cientista que será usado como título. |
| ```time``` | O ano ou época de nascimento e falecimento do cientista. |
| ```color``` | Uma cor para ser usada como tema na lista. |
| ```icon``` | Um ícone do [Material Icons](https://fonts.google.com/icons) |
| ```video``` | O nome de um arquivo de vídeo .mp4 sem extensão para ser usado como perfil (Não é obrigatório) |

As cores disponíveis são:
| Cor | Nome da Cor |
|---|---|
|![red](https://dummyimage.com/10x10/F44336/F44336.png) | ```red``` |
|![pink](https://dummyimage.com/10x10/E91E63/E91E63.png) | ```pink``` |
|![purple](https://dummyimage.com/10x10/AA00FF/AA00FF.png) | ```purple``` |
|![deep-purple](https://dummyimage.com/10x10/7c4dff/7c4dff.png) | ```deep-purple``` |
|![indigo](https://dummyimage.com/10x10/3d5afe/3d5afe.png) | ```indigo``` |
|![blue](https://dummyimage.com/10x10/2196F3/2196F3.png) | ```blue``` |
|![light-blue](https://dummyimage.com/10x10/03A9F4/03A9F4.png) | ```light-blue``` |
|![cyan](https://dummyimage.com/10x10/00BCD4/00BCD4.png) | ```cyan``` |
|![teal](https://dummyimage.com/10x10/009688/009688.png) | ```teal``` |
|![green](https://dummyimage.com/10x10/4CAF50/4CAF50.png) | ```green``` |
|![light-green](https://dummyimage.com/10x10/8BC34A/8BC34A.png) | ```light-green``` |
|![lime](https://dummyimage.com/10x10/CDDC39/CDDC39.png) | ```lime``` |
|![yellow](https://dummyimage.com/10x10/FFEB3B/FFEB3B.png) | ```yellow``` |
|![amber](https://dummyimage.com/10x10/FFC107/FFC107.png) | ```amber``` |
|![orange](https://dummyimage.com/10x10/FF9800/FF9800.png) | ```orange``` |
|![deep-orange](https://dummyimage.com/10x10/FF5722/FF5722.png) | ```deep-orange``` |

### Adicionando o texto

Aqui é com você. Após a parte de configuração, adicione o texto e use as formatações de Markdown que são processadas pelo site automaticamente (Aprenda mais sobre Markdown [aqui](https://guides.github.com/features/mastering-markdown/)). No entanto, alguns padrões foram usados no conteúdo original do site e podem ser seguidos:

#### 1 - Referências

Por originalmente ser um projeto de universidade, foi adotado o padrão ABNT para referências a textos externos, seguindo o seguinte formato no arquivo:

No final do arquivo, a referência é colocada seguindo o modelo:
```markdown
---

[^cabral]: CABRAL, João Francisco Pereira. A concepção de ciência de Karl Popper. **Brasil Escola**. Disponível em: [https://brasilescola.uol.com.br/filosofia/a-concepcao-ciencia-karl-popper.htm](https://brasilescola.uol.com.br/filosofia/a-concepcao-ciencia-karl-popper.htm). Acesso em: 5 abr. 2021.

[^frazao]: FRAZÃO, Dilva. Biografia de Karl Popper. **eBiografia**, 9 jan. 2020. Disponível em: [https://www.ebiografia.com/karl_popper/](https://www.ebiografia.com/karl_popper/). Acesso em: 5 abr. 2021.
```

Para referenciar o autor, basta colocar ```[^nome]``` após o texto externo:
```markdown
...É o critério da Falseabilidade.”[^cabral]
```

Você é livre para colocar seu próprio nome como referência do texto seguindo esse modelo, mesmo sem a formatação ABNT, caso o texto seja originalmente produzido por você.

#### 2 - Grande Feito

No início do texto, é recomendado colocar um título em Markdown com o grande feito ou descoberta do cientista que será discutido no decorrer do texto:

```markdown
# Método Hipotético Dedutivo - 1935
```

#### 3 - Perfil

Há duas formas de colocar uma imagem de perfil no cientista. A usada no conteúdo original do site é utilizando a tag de configuração ```video```. Os vídeos seguem o seguinte padrão:

- São armazenados na pasta [```/assets/media/animations/```](https://github.com/Fittl3/cronologia-da-ciencia/tree/main/assets/media/animations)
- São salvos em ```.mp4``` para web
- São bem curtos (em média apenas 1 segundo)
- O primeiro frame do vídeo é uma imagem sem alteração do cientista
- Podem ter qualquer aspecto, mas verticalmente não passam de 600px

Caso um vídeo nesse formato seja complicado, adicionar uma foto estática antes do título do grande feito é uma ótima alternativa.
```markdown
![Alan Turing com 16 anos de idade](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Alan_Turing_Aged_16.jpg/200px-Alan_Turing_Aged_16.jpg)

# Máquina de Turing - 1936

"Alan Turing (1912-1954) foi um matemático britânico...
```

## Outras formas de colaborar

Caso encontre erros, formas de otimizar o site, ou queira adicionar funções novas, crie uma [issue](https://github.com/Fittl3/cronologia-da-ciencia/issues) ou [pull request](https://github.com/Fittl3/cronologia-da-ciencia/pulls) ao projeto, que será avaliado e corrigido/adicionado apropriadamente. Observe que novos cientistas também são adicionados por pull-requests.

## [Licença](https://github.com/Fittl3/cronologia-da-ciencia/blob/main/LICENSE)

O código fonte do site é licenciado sobre a licença [Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed.pt_BR), ou seja, é domínio público, podendo ser copiado e editado sem a necessidade de atribuição, mesmo que seja para uso comercial.

Fique atento ao conteúdo interno do site, que pode estar sobre outras licenças (textos e imagens, por exemplo).
