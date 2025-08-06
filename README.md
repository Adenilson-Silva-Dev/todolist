# 📱 MyTasks - Aplicativo de Gerenciamento de Tarefas

<div align="center">
  <img src="./src/imgs/cici.jpg" alt="MyTasks Logo" width="200" height="200" style="border-radius: 50%;">
  
  [![React Native](https://img.shields.io/badge/React%20Native-0.80.1-blue.svg)](https://reactnative.dev/)
  [![Firebase](https://img.shields.io/badge/Firebase-Authentication%20%7C%20Firestore-orange.svg)](https://firebase.google.com/)
  [![AsyncStorage](https://img.shields.io/badge/AsyncStorage-1.24.0-green.svg)](https://github.com/react-native-async-storage/async-storage)
  [![React Navigation](https://img.shields.io/badge/React%20Navigation-7.1.14-purple.svg)](https://reactnavigation.org/)
</div>

## 🧠 Objetivo do Projeto

O **MyTasks** é um aplicativo mobile desenvolvido em React Native que permite aos usuários gerenciar suas tarefas diárias de forma eficiente e intuitiva. O app oferece um sistema completo de autenticação, criação, edição, exclusão e acompanhamento de tarefas, com sincronização em tempo real através do Firebase.

### ✨ Principais Características

- 🔐 **Sistema de Autenticação Completo**: Login e registro com Firebase Authentication
- 📝 **Gerenciamento de Tarefas**: Criar, editar, excluir e marcar tarefas como concluídas
- 💾 **Persistência de Dados**: Armazenamento local com AsyncStorage e sincronização com Firestore
- 🎨 **Interface Moderna**: Design responsivo com tema escuro e elementos visuais atrativos
- 📱 **Navegação Intuitiva**: Sistema de navegação por abas para fácil acesso às funcionalidades
- 🔄 **Sincronização em Tempo Real**: Dados sincronizados automaticamente com o Firebase

## 🏗️ Arquitetura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Header/         # Cabeçalho do app
│   ├── ListTasks/      # Lista de tarefas ativas
│   └── finishedList/   # Lista de tarefas concluídas
├── contexts/           # Contextos React (Auth e Tasks)
├── pages/              # Telas principais do app
│   ├── LogIn/          # Tela de login/registro
│   ├── Home/           # Tela principal com tarefas
│   ├── NewTask/        # Criação/edição de tarefas
│   ├── FinishedTasks/  # Tarefas concluídas
│   └── Profile/        # Perfil do usuário
├── routes/             # Configuração de navegação
└── imgs/               # Imagens e assets
```

## 🔧 Tecnologias Utilizadas

### 🚀 Core Technologies
- **[React Native 0.80.1](https://reactnative.dev/)**: Framework para desenvolvimento mobile multiplataforma
- **[React 19.1.0](https://reactjs.org/)**: Biblioteca JavaScript para interfaces de usuário

### 🔥 Firebase Services
- **[@react-native-firebase/app](https://rnfirebase.io/)**: SDK principal do Firebase
- **[@react-native-firebase/auth](https://rnfirebase.io/auth)**: Autenticação de usuários
- **[@react-native-firebase/firestore](https://rnfirebase.io/firestore)**: Banco de dados NoSQL em tempo real
- **[@react-native-firebase/storage](https://rnfirebase.io/storage)**: Armazenamento de arquivos

### 🧭 Navegação
- **[@react-navigation/native](https://reactnavigation.org/)**: Sistema de navegação principal
- **[@react-navigation/stack](https://reactnavigation.org/docs/stack-navigator/)**: Navegação em pilha
- **[@react-navigation/bottom-tabs](https://reactnavigation.org/docs/bottom-tab-navigator/)**: Navegação por abas

### 💾 Armazenamento Local
- **[@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage)**: Armazenamento local persistente

### 🎨 UI/UX
- **[react-native-vector-icons](https://github.com/oblador/react-native-vector-icons)**: Ícones vetoriais
- **[react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context)**: Área segura para diferentes dispositivos

### 🛠️ Development Tools
- **ESLint**: Linting de código JavaScript
- **Prettier**: Formatação automática de código
- **Stylelint**: Linting de estilos CSS

## 🔐 Sistema de Autenticação

### 📋 Fluxo de Autenticação

O sistema de autenticação do MyTasks é robusto e seguro, implementado com Firebase Authentication e persistência local:

#### 1. **Registro de Usuário**
```javascript
// Criação de conta com email/senha
await auth().createUserWithEmailAndPassword(email, password)
  .then(async (value) => {
    // Criação do perfil no Firestore
    await firestore().collection('users').doc(uid).set({
      name: name,
      createdAt: new Date(),
    });
    // Armazenamento local da sessão
    storangeUser(data);
  });
```

#### 2. **Login de Usuário**
```javascript
// Autenticação com email/senha
await auth().signInWithEmailAndPassword(email, password)
  .then(async (value) => {
    // Busca dados do perfil no Firestore
    const userProfile = await firestore().collection('users').doc(uid).get();
    // Armazenamento local da sessão
    storangeUser(data);
  });
```

#### 3. **Persistência de Sessão**
- **AsyncStorage**: Armazena dados do usuário localmente com a chave `@mytask`
- **Recuperação Automática**: Ao abrir o app, verifica se existe sessão salva
- **Redirecionamento Inteligente**: Direciona para Home se logado, ou Login se não logado

#### 4. **Logout**
```javascript
// Limpeza completa da sessão
await auth().signOut();
await AsyncStorage.removeItem('@mytask');
setUser(null);
```

### 🔄 Controle de Estado

O contexto `AuthContext` gerencia todo o estado de autenticação:

- **Estado do Usuário**: Dados do usuário logado
- **Estado de Loading**: Indicadores de carregamento durante operações
- **Funções de Autenticação**: signUp, sigIn, signOut
- **Persistência**: storangeUser para salvar dados localmente

## 📱 Funcionalidades do App

### 🔐 Autenticação
- ✅ **Criar conta** com nome, email e senha
- ✅ **Login** com email e senha
- ✅ **Persistência de sessão** automática
- ✅ **Logout** com limpeza completa de dados

### 📝 Gerenciamento de Tarefas
- ✅ **Criar tarefas** com título e autor
- ✅ **Editar tarefas** existentes
- ✅ **Excluir tarefas** permanentemente
- ✅ **Marcar como concluída** (move para lista de finalizadas)
- ✅ **Visualizar tarefas concluídas** em aba separada

### 🎯 Funcionalidades Avançadas
- ✅ **Sincronização em tempo real** com Firebase Firestore
- ✅ **Ordenação por data** (mais recentes primeiro)
- ✅ **Limite de 50 tarefas** por consulta para performance
- ✅ **Interface responsiva** com tema escuro
- ✅ **Navegação intuitiva** por abas

## 🎨 Design da Interface

### 🎨 Paleta de Cores
- **Fundo Principal**: `#1A1A2E` (Azul escuro)
- **Cor de Destaque**: `#9B5DE5` (Roxo)
- **Texto**: `#FFFFFF` (Branco)
- **Bordas**: `#dcdcdc` (Cinza claro)

### 📱 Screenshots das Telas

#### 🔐 Tela de Login/Registro
![Tela de Login/Registro](./screenshots/login-register.png)

**Características:**
- Design minimalista com logo "MyTasks" (roxo e branco)
- Campos de entrada: nome, email (test@test.com) e senha (************)
- Botão roxo "Criar conta" com texto branco
- Link "Fazer login" para alternar entre telas
- Interface limpa e intuitiva com tema escuro

#### 🔐 Tela de Login
![Tela de Login](./screenshots/login.png)

**Características:**
- Logo "MyTasks" centralizado (roxo e branco)
- Campos de entrada: email e senha com placeholders
- Botão roxo "Login" com texto branco
- Link "Criar uma conta" para alternar para registro
- Design consistente com tema escuro

#### 🏠 Tela Principal (Home)
![Tela Principal](./screenshots/home.png)

**Características:**
- Header com logo "MyTasks" em fundo roxo escuro
- Card branco com tarefa "Estudar Spring Boot"
- Ícones de ação: quadrado (concluir), lápis (editar), lixeira (excluir)
- Botão flutuante roxo com ícone "+" no canto inferior direito
- Navegação por abas: lista, home (ativo), perfil

#### ➕ Tela de Nova Tarefa
![Nova Tarefa](./screenshots/new-task.png)

**Características:**
- Header "Adicionar tarefas" com botão voltar
- Campo de texto centralizado com placeholder "Digite uma tarefa..."
- Botão circular roxo com ícone "+" para adicionar
- Navegação por abas na parte inferior
- Interface focada na criação de tarefas

#### ➕ Tela de Edição de Tarefa
![Edição de Tarefa](./screenshots/edit-task.png)

**Características:**
- Campo de texto com tarefa "Estudar Javascript e React Native"
- Botão de confirmação para salvar edições
- Header "MyTesks" com navegação
- Suporte para edição de tarefas existentes
- Design consistente com tema escuro

#### 👤 Tela de Perfil
![Perfil do Usuário](./screenshots/profile.png)

**Características:**
- Header "MyTesks" com separador branco
- Avatar circular do usuário (Adenilson) com borda roxa
- Nome "Adenilson" em texto branco
- Email "adenilson@test.com" em texto branco
- Botão "Sair" com borda roxa e fundo escuro
- Navegação por abas com perfil ativo (ícone roxo)

#### ✅ Tela de Tarefas Concluídas
![Tarefas Concluídas](./screenshots/finished-tasks.png)

**Características:**
- Lista de tarefas com texto riscado
- Indicador visual de conclusão
- Ordenação por data de finalização
- Histórico de atividades
- *Nota: Screenshot não enviada - usar placeholder*

### 📱 Fluxo de Navegação Visual

<div align="center">
  <img src="./screenshots/navigation-flow.png" alt="Fluxo de Navegação" width="600">
  <p><em>Fluxo completo de navegação do aplicativo</em></p>
</div>

## 🚀 Como Executar o Projeto

### 📋 Pré-requisitos
- Node.js >= 18
- React Native CLI
- Android Studio (para Android)
- Xcode (para iOS - apenas macOS)
- Conta no Firebase

### 🔧 Configuração do Firebase

1. **Criar projeto no Firebase Console**
   - Acesse [console.firebase.google.com](https://console.firebase.google.com)
   - Crie um novo projeto
   - Ative Authentication com Email/Senha
   - Configure Firestore Database

2. **Configurar aplicativo Android/iOS**
   - Adicione aplicativo Android/iOS no projeto Firebase
   - Baixe o arquivo `google-services.json` (Android) ou `GoogleService-Info.plist` (iOS)
   - Coloque na pasta `android/app/` ou `ios/`

### 📦 Instalação e Execução

```bash
# 1. Clonar o repositório
git clone https://github.com/seu-usuario/todoList.git
cd todoList

# 2. Instalar dependências
npm install
# ou
yarn install

# 3. Configurar Firebase (se necessário)
# Adicionar google-services.json na pasta android/app/

# 4. Executar o projeto
# Para Android
npm run android
# ou
npx react-native run-android

# Para iOS (apenas macOS)
npm run ios
# ou
npx react-native run-ios

# 5. Iniciar Metro Bundler (se não iniciar automaticamente)
npm start
# ou
npx react-native start
```

### 🔧 Scripts Disponíveis

```json
{
  "android": "react-native run-android",
  "ios": "react-native run-ios",
  "start": "react-native start",
  "lint": "eslint .",
  "test": "jest"
}
```

## 📁 Estrutura de Dados

### 👤 Usuários (Firestore Collection: `users`)
```javascript
{
  uid: "string",           // ID único do usuário
  name: "string",          // Nome completo
  email: "string",         // Email do usuário
  createdAt: "timestamp"   // Data de criação da conta
}
```

### 📝 Tarefas (Firestore Collection: `tasks`)
```javascript
{
  id: "string",            // ID único da tarefa
  task: "string",          // Descrição da tarefa
  autor: "string",         // Nome do autor
  userId: "string",        // ID do usuário criador
  createdAt: "timestamp",  // Data de criação
  avatarUrl: "string"      // URL do avatar (opcional)
}
```

### ✅ Tarefas Concluídas (Firestore Collection: `finishedTask`)
```javascript
{
  id: "string",            // ID único
  title: "string",         // Título da tarefa
  autor: "string",         // Nome do autor
  userId: "string",        // ID do usuário
  finishedAt: "timestamp"  // Data de conclusão
}
```

## 🔄 Fluxo de Navegação

```
App.js
├── AuthProvider (Context)
├── TaskProvider (Context)
└── NavigationContainer
    └── Routes
        ├── AuthRoutes (se não logado)
        │   └── LogIn
        └── AppRoutes (se logado)
            ├── Tab Navigator
            │   ├── FinishedTasks
            │   ├── StackHome
            │   │   ├── Home
            │   │   └── NewTask
            │   └── Profile
```

## 🛡️ Segurança

### 🔐 Firebase Security Rules
Recomendações para as regras do Firestore:

```javascript
// Regras para usuários
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Usuários só podem ler/editar seus próprios dados
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
    
    // Tarefas só podem ser acessadas pelo criador
    match /tasks/{taskId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
    
    // Tarefas concluídas seguem a mesma regra
    match /finishedTask/{taskId} {
      allow read, write: if request.auth != null && 
        request.auth.uid == resource.data.userId;
    }
  }
}
```

## 🧪 Testes

O projeto inclui configuração básica de testes com Jest:

```bash
# Executar testes
npm test

# Executar testes em modo watch
npm test -- --watch
```

## 📝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Seu Nome**
- GitHub: [@seu-usuario](https://github.com/seu-usuario)
- LinkedIn: [Seu LinkedIn](https://linkedin.com/in/seu-perfil)

## 🙏 Agradecimentos

- [React Native](https://reactnative.dev/) pela excelente documentação
- [Firebase](https://firebase.google.com/) pelos serviços robustos
- [React Navigation](https://reactnavigation.org/) pela navegação fluida
- Comunidade React Native pelo suporte contínuo

---

<div align="center">
  <p>Feito com ❤️ e ☕</p>
  <p>Se este projeto te ajudou, considere dar uma ⭐</p>
</div>
