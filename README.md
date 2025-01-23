# Projeto de Pedidos

Este é um projeto de aplicativo de pedidos desenvolvido em React Native.

## Instalação

1. Clone o repositório:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
2. Navegue até o diretório do projeto:
    ```sh
    cd seu-repositorio
    ```

3. Instale as dependências:
    ```sh
    npm install
    ```

4. Execute o aplicativo:
    ```sh
    npm start
    ```

    ## Configuração do Firebase

    1. Adicione o Firebase ao seu projeto:
        - Crie um projeto no [Firebase Console](https://console.firebase.google.com/).
        - Adicione um novo aplicativo ao projeto e siga as instruções para configurar o Firebase no seu aplicativo React Native.

    2. Instale as dependências do Firebase:
         ```sh
         npm install @react-native-firebase/app @react-native-firebase/auth @react-native-firebase/firestore
         ```

    3. Configure o Firebase no seu aplicativo:
        - Crie um arquivo `firebaseConfig.js` na raiz do seu projeto e adicione as configurações do Firebase:
         ```javascript
         import firebase from '@react-native-firebase/app';
         import '@react-native-firebase/auth';
         import '@react-native-firebase/firestore';

         const firebaseConfig = {
            apiKey: "SUA_API_KEY",
            authDomain: "SEU_AUTH_DOMAIN",
            projectId: "SEU_PROJECT_ID",
            storageBucket: "SEU_STORAGE_BUCKET",
            messagingSenderId: "SEU_MESSAGING_SENDER_ID",
            appId: "SEU_APP_ID",
            measurementId: "SEU_MEASUREMENT_ID"
         };

         if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
         }

         export { firebase };
         ```

    4. Importe e utilize o Firebase nos seus componentes conforme necessário.
    ## Execução do Projeto

    Para executar o projeto em um dispositivo ou emulador, siga os passos abaixo:

    ### iOS

    1. Navegue até o diretório `ios`:
        ```sh
        cd ios
        ```

    2. Instale as dependências do CocoaPods:
        ```sh
        pod install
        ```

    3. Volte para o diretório raiz do projeto:
        ```sh
        cd ..
        ```

    4. Execute o aplicativo no emulador iOS:
        ```sh
        npx react-native run-ios
        ```

    ### Android

    1. Certifique-se de que o emulador Android está em execução ou conecte um dispositivo Android.

    2. Execute o aplicativo no emulador ou dispositivo Android:
        ```sh
        npx react-native run-android
        ```

    ### Observação

    Certifique-se de que o ambiente de desenvolvimento está configurado corretamente conforme a [documentação oficial do React Native](https://reactnative.dev/docs/environment-setup).
    ## Estrutura do Projeto

    A estrutura de diretórios do projeto é a seguinte:

    ```
    /seu-repositorio
    ├── android
    ├── ios
    ├── node_modules
    ├── src
    │   ├── components
    │   ├── screens
    │   ├── services
    │   ├── utils
    │   ├── App.js
    ├── .gitignore
    ├── firebaseConfig.js
    ├── package.json
    ├── README.md
    ```

    - `android`: Contém os arquivos específicos do projeto Android.
    - `ios`: Contém os arquivos específicos do projeto iOS.
    - `node_modules`: Contém as dependências do projeto.
    - `src`: Contém o código-fonte do aplicativo.
        - `components`: Contém os componentes reutilizáveis do aplicativo.
        - `screens`: Contém as telas do aplicativo.
        - `services`: Contém os serviços, como a integração com APIs.
        - `utils`: Contém utilitários e funções auxiliares.
        - `App.js`: Arquivo principal do aplicativo.
    - `.gitignore`: Arquivo que especifica quais arquivos e diretórios devem ser ignorados pelo Git.
    - `firebaseConfig.js`: Arquivo de configuração do Firebase.
    - `package.json`: Arquivo de configuração do npm, contendo as dependências e scripts do projeto.
    - `README.md`: Arquivo de documentação do projeto.

    ## Dependências

    As principais dependências utilizadas neste projeto são:

    - `react`: Biblioteca JavaScript para construir interfaces de usuário.
    - `react-native`: Framework para desenvolvimento de aplicativos móveis usando React.
    - `@react-native-firebase/app`: Biblioteca para integração com o Firebase.
    - `@react-native-firebase/auth`: Biblioteca para autenticação com o Firebase.
    - `@react-native-firebase/firestore`: Biblioteca para uso do Firestore com o Firebase.

    Para ver todas as dependências e suas versões, consulte o arquivo `package.json`.

    ## Licença

    Este projeto está licenciado sob a Licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

    ## Alterações do Projeto

    As seguintes alterações foram feitas no projeto até o momento:

    1. **Configuração Inicial do Projeto**
        - Criação do projeto com React Native.
        - Configuração do ambiente de desenvolvimento.

    2. **Integração com Firebase**
        - Adição do Firebase ao projeto.
        - Instalação das dependências do Firebase.
        - Configuração do Firebase no aplicativo.

    3. **Estruturação do Código**
        - Organização da estrutura de diretórios.
        - Criação de componentes reutilizáveis.
        - Implementação das telas principais do aplicativo.
        - Adição de serviços para integração com APIs.

    4. **Configuração de Execução**
        - Configuração para execução em dispositivos iOS e Android.
        - Instalação das dependências do CocoaPods para iOS.
        - Configuração do emulador Android.

    5. **Documentação**
        - Criação do arquivo `README.md` com instruções detalhadas.
        - Adição de informações sobre a estrutura do projeto e dependências.
        - Inclusão da licença MIT.

    Para mais detalhes sobre cada alteração, consulte os commits no repositório do projeto.