# NomadeLifeDev_dmp3
Plataforma em React com sistema de SPA e Google Cloud Platform, sistematizado com Firebase e Firestore.
![LogoDev](https://github.com/user-attachments/assets/0073bc76-8ef0-4d2b-91dc-7f71c3466971)

Para documentar o repositório `NomadeLifeDev_dmp3`, que utiliza uma estrutura de desenvolvimento MVC (Model-View-Controller) integrada ao Firebase, Firestore e Authentication, você pode seguir o seguinte guia:
![LogoQuadrado](https://github.com/user-attachments/assets/be64abd7-2738-4442-a91a-340632096c12)

## Documentação do Projeto `NomadeLifeDev_dmp3`

### 1. Visão Geral do Projeto

**`NomadeLifeDev_dmp3`** é um sistema de blog desenvolvido com base na arquitetura MVC, utilizando Firebase como backend para autenticação de usuários e Firestore para gerenciamento de dados. Este repositório contém todo o código fonte necessário para criar, editar e gerenciar postagens de blog, assim como o sistema de login e registro de usuários.

### 2. Estrutura do Projeto

A estrutura do projeto segue o padrão MVC, que é dividido nas seguintes pastas principais:

- **Model**: Contém as definições dos modelos de dados utilizados pelo sistema, principalmente as interações com o Firestore.
- **View**: Contém os arquivos HTML, CSS e JavaScript que definem a interface do usuário. Aqui estão incluídos os templates e componentes visuais.
- **Controller**: Contém a lógica de controle que interage entre as views e os models, gerenciando a lógica de negócio e as chamadas para o Firebase.

### 3. Dependências do Projeto

O projeto `NomadeLifeDev_dmp3` utiliza as seguintes dependências principais:

- **Firebase SDK**: Para integração com os serviços do Firebase.
- **Firestore**: Para armazenamento e consulta de dados.
- **Firebase Authentication**: Para gerenciamento de autenticação de usuários.
- **Framework JavaScript**: (especificar qual, se for utilizado, como React, Angular, Vue, etc.)
  
### 4. Configuração Inicial

Para configurar o projeto localmente, siga os passos abaixo:

1. **Clone o Repositório**:

   ```bash
   git clone https://github.com/victoricoma/NomadeLifeDev_dmp3.git
   cd NomadeLifeDev_dmp3
   ```

2. **Instale as Dependências**:

   Certifique-se de ter o Node.js instalado. Execute o seguinte comando para instalar as dependências:

   ```bash
   npm install
   ```

3. **Configuração do Firebase**:

   Crie um projeto no Firebase e adicione o arquivo de configuração `firebaseConfig.js` na pasta `src/config` com as credenciais do seu projeto Firebase.

   ```javascript
   // src/config/firebaseConfig.js
   export const firebaseConfig = {
       apiKey: "YOUR_API_KEY",
       authDomain: "YOUR_AUTH_DOMAIN",
       projectId: "YOUR_PROJECT_ID",
       storageBucket: "YOUR_STORAGE_BUCKET",
       messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
       appId: "YOUR_APP_ID"
   };
   ```

4. **Inicialize o Firestore**:

   Configure o Firestore em modo de desenvolvimento ou produção conforme necessário.

   ```javascript
   import { initializeApp } from "firebase/app";
   import { getFirestore } from "firebase/firestore";
   import { firebaseConfig } from './firebaseConfig';

   const app = initializeApp(firebaseConfig);
   export const db = getFirestore(app);
   ```

5. **Rodando o Projeto**:

   Execute o projeto em um servidor local:

   ```bash
   npm start
   ```

### 5. Sistema MVC

#### **Model**
Os modelos são responsáveis por gerenciar os dados e a lógica de negócios relacionados ao Firestore.

Exemplo de um modelo para postagens de blog:

```javascript
import { collection, addDoc, getDocs, doc, deleteDoc } from "firebase/firestore"; 
import { db } from '../config/firebaseConfig';

export const BlogModel = {
    async createPost(data) {
        try {
            const docRef = await addDoc(collection(db, "posts"), data);
            return docRef.id;
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    },

    async getPosts() {
        const querySnapshot = await getDocs(collection(db, "posts"));
        return querySnapshot.docs.map(doc => doc.data());
    },

    async deletePost(id) {
        await deleteDoc(doc(db, "posts", id));
    }
};
```

#### **View**
As views são responsáveis pela renderização da interface do usuário. Elas utilizam HTML e CSS para exibir os dados do Firestore.

Exemplo de uma view para exibir as postagens do blog:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>BlogDev</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="app">
        <h1>BlogDev Posts</h1>
        <div id="posts-container"></div>
    </div>
    <script src="main.js"></script>
</body>
</html>
```

#### **Controller**
Os controladores gerenciam a interação entre o usuário e os dados, lidando com eventos e atualizações de estado.

Exemplo de controlador para gerenciar postagens:

```javascript
import { BlogModel } from './models/BlogModel';

document.addEventListener("DOMContentLoaded", async () => {
    const postsContainer = document.getElementById("posts-container");
    
    const posts = await BlogModel.getPosts();

    postsContainer.innerHTML = posts.map(post => `
        <div class="post">
            <h2>${post.title}</h2>
            <p>${post.content}</p>
        </div>
    `).join('');
});
```

### 6. Autenticação

A autenticação é gerenciada pelo Firebase Authentication, que permite login com email/senha, Google, Facebook e outras formas de login.

Exemplo de implementação básica de autenticação:

```javascript
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const AuthController = {
    async login(email, password) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error(error);
        }
    },

    async register(email, password) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            return userCredential.user;
        } catch (error) {
            console.error(error);
        }
    }
};
```

### 7. Contribuição

Se você deseja contribuir com o projeto `NomadeLifeDev_dmp3`, siga as etapas abaixo:

1. **Fork o Repositório**.
2. **Crie uma Nova Branch**: `git checkout -b feature/NomeDaFeature`.
3. **Commit suas Mudanças**: `git commit -m 'Adicionei uma nova feature'`.
4. **Envie para a Branch**: `git push origin feature/NomeDaFeature`.
5. **Abra um Pull Request**.

### 8. Licença

Este projeto está licenciado sob a [MIT License](https://opensource.org/licenses/MIT).

---

Essa estrutura oferece uma base sólida para a documentação do seu projeto. Sinta-se à vontade para ajustar os detalhes e expandir conforme necessário para cobrir aspectos específicos do seu projeto.
