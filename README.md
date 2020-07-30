# Qual o intuito deste projeto?

Este projeto faz o consumo da api do GitHub. O seu intuito é demonstrar proeficiência na aplicação de inúmeros conceitos de Javascritp ES6+, Consumo de APIs e tecnologias compatíveis. 

# O que foi utilizado

- Manipulação de DOM
- Desestruturação 
- Classes 
- Short object syntax
- Template literals 
- Arrow functions
- Webpack no gerênciamento de pastas e dependências
- Transpilador babel
- Consumo de apis 
- HTML
- CSS

# Exemplo de consulta
![img](https://github.com/AlekOliveira/ES6-application/blob/master/images/preview.png)

# Como rodar o projeto
- Clone ou faça dowload do repositório
- Abra o terminal dentro da pasta do projeto e execute o comando **npm install** para instalar as dependências
- Execute o comando **npm run dev** para inicializar o servidor
- Após isso para visualizar a aplicação basta acessar este endereço [http://localhost:8080/](http://localhost:8080/)  
- Fique à vontade caso queira modificar o arquivo main.js. Neste caso você deve executar o seguinte comando no terminal **yarn dev**, assim o modo de desenvolvedor será habilitado e o transcompilador do babel irá traduzir o código para versões mais antigas de forma que o nível de abstração se mantenha o mesmo.

# Observação
O arquivo bundle.js é criado em tempo de execução, de forma que ele possa acabar não aparecendo dentro da pasta /public deste projeto. Caso você queira visualizar o arquivo ou utilizar o mesmo para subir a aplicação ou algo do tipo, o comando **yarn build** irá gerar uma versão compilada do main.js com o nome de bundle.js.


