# Pontotel SpaceX

## Como rodar

```bash
# Clone o repositório
git clone https://github.com/lleonardooalves/pontotel-spacex

# Instale as dependências
npm install

# Inicie o projeto
npx expo start
```

Pressione `a` para abrir no emulador Android ou escaneie o QR code com o Expo Go.

## O que foi feito

App React Native que consome a API pública da SpaceX, exibindo a lista de lançamentos e o detalhe de cada missão.

**Funcionalidades:**

- Lista de lançamentos consumindo a API SpaceX
- Tela de detalhe com imagem do patch, informações e descrição da missão
- Campo de busca filtrando por nome da missão
- Filtro por status — Todos, Sucesso, Falha e Em Breve
- Estados de loading, erro com retry e lista vazia tratados em todas as telas
- Cache local com Zustand + AsyncStorage a lista de lançamentos persiste entre sessões
- Pull to refresh para recarregar a lista

## Estrutura de pastas

```
src/
  components/
    details/     # Componentes da tela de detalhe (Header, InfoCard, DetailsCard, PatchImage)
    list/        # Componentes da tela de lista (Card, LaunchList, SearchBar, StatusFilter)
    shared/      # Componentes reutilizáveis (LoadingBar, ErrorBar)
  hooks/         # Hooks customizados (useLaunchList, useLaunchDetail)
  navigation/    # Configuração do React Navigation
  screens/       # Telas da aplicação (LaunchListScreen, LaunchDetailScreen)
  services/      # Chamadas à API (api.ts)
  store/         # Store Zustand com persistência (useLaunchStore)
  types/         # Interfaces TypeScript (launch.ts)
```

## Escolha da biblioteca de estado

Optei pelo Zustand pela complexidade do aplicativo ser baixa e usar menos código em comparação ao Redux. Para o gerenciamento de uma única lista, ele é suficiente.

O Zustand também facilitou a integração com AsyncStorage usando o `persist`, utilizando cache local com poucas linhas de código a mais.

## O que faria diferente

- Melhoraria a UI dos cards e da tela de detalhe, tornando-a mais rica visualmente
- Utilizaria mais informações disponíveis na API como fotos e dados do foguete
- Implementaria o vídeo do lançamento com expo-video e WebView para o artigo
- Adicionaria testes de componente cobrindo os hooks e estados de erro
- Implementaria paginação infinita para carregar os lançamentos sob demanda

## Uso de IA

Utilizei Claude Code para algumas tarefas:

- Melhorar os styles do card e da tela de detalhe
- Tipagem dos dados da API SpaceX
- Resolver um bug no pull to refresh onde o app retornava dados do cache em vez da nova requisição

Não utilizei IA em: arquitetura do projeto, criação dos hooks, services, lógica de estado, navegação e componentização, todo o raciocínio e estrutura foram desenvolvidos por mim.

## Tempo gasto

Aproximadamente 18 horas distribuídas entre os dias 11 e 14 de maio.
