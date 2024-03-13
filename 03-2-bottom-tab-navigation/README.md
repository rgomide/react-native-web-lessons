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

**Obs.:** Foi utilizada a biblioteca `@expo/vector-icons` para acessar os ícones disponíveis no acervo [FontAwesome](https://fontawesome.com/v6/search?o=r&m=free). Caso não tenha essa biblioteca em seu projeto, instale a partir do comando:

```bash
npm install @expo/vector-icons
```

## Exercício

Adapte o exercício desenvolvido no material sobre [Navegação entre telas](../03-1-navigation-between-screens/README.md#exercício) para utilizar a navegação por abas.

Nesse caso, utilize apenas as telas `Home`, `User Details` e `About`.

Configure as propriedades `tabBarIcon`, `tabBarActiveTintColor` e `tabBarInactiveTintColor` para configurar o aspecto visual dos botões de acesso das abas.

## Referências

- [Navegação por abas](https://reactnavigation.org/docs/tab-based-navigation)
- [Objeto options do Drawer Navigator](https://reactnavigation.org/docs/bottom-tab-navigator#options)
- [Ícones da biblioteca FontAwesome](https://fontawesome.com/v5/search?o=r&m=free)