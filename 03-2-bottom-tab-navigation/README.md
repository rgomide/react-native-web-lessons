# Navegação por abas

- [Introdução](#introdução)
- [Abas inferiores](#abas-inferiores)
- [Customização](#customização)
- [Exercício](#exercício)
- [Referências](#referências)

## Introdução

Neste tópico analizaremos como navegar entre telas utilizando a navegação por abas.

Primeiramente, verifique se o seu arquivo `package.json` possui a dependência `@react-navigation/bottom-tabs`. Caso não tenha, instale a partir do comando:

```bash
npm install @react-navigation/bottom-tabs
```

## Abas inferiores

A primeira diferença em relação ao método de navegação por referência é de que temos que importar a função `createBottomTabNavigator` do pacote `@react-navigation/bottom-tabs`.

Assim, iniciamos o nosso objeto de navegação no arquivo [App.js](./App.js#L9):

```js
const Tab = createBottomTabNavigator()
```

## Customização

Cada elemento de navegação pode ser configurado a partir da prop `options`, o mapeamento para a tela [Home](./App.js#L15) utiliza as seguintes props:

- `tabBarIcon`: função que retorna o elemento para ser renderizado como o ícone da aba
- `tabBarActiveTintColor`: cor do título da aba quando ela estiver ativa
- `tabBarInactiveTintColor`: cor do título da aba quando ela estiver inativa
- `tabBarBadge`: ícone que sobrepõe a aba

Essas opções foram definidas da seguinte maneira:

```js
{
  tabBarIcon: () => {
    return <FontAwesome name='house' size={20} />
  },
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  tabBarBadge: 2
}
```

## Exercício

## Referências

- [Navegação por abas](https://reactnavigation.org/docs/tab-based-navigation)