# Navegação por pilha em cada aba

- [Introdução](#introdução)
- [Uma pilha de navegação para cada aba](#uma-pilha-de-navegação-para-cada-aba)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Neste projeto analisaremos o uso de vários componentes de navegação de forma aninhada.

## Uma pilha de navegação para cada aba

```mermaid
graph LR;
    A(App.js)-- Tab -->B(HomeStack);
    B-- Stack -->D(Home)
    D<-- Stack -->E(Details)
    A-- Tab -->C(SettingStack);
    C-- Stack -->F(Settings)
    F<-- Stack -->G(Details)
    
```

## Exercício

## Referências

- [Navegação por pilha em cada aba](https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab)