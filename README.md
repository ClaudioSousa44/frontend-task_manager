# Task Manager
 
## Sobre
Este projeto é desenvolvido com Node.js e React.js, e tem como objetivo gerenciar tarefas.

## Tecnologias utilizadas
- React.js
- TypeScript
- Axios
- Vite
- HTMl
- CSS
- Railway

---
## Como rodar o projeto localmente

### Passo a Passo

1. **Clone o repositório:**
   
   ```bash
   git clone https://github.com/ClaudioSousa44/frontend-task_manager.git
   ```
   
2. **Navegue até o diretório do projeto:**
   
   ```bash
   cd frontend-task_manager
   ```
   
3. **Mude a API_URL dentro de TaskService.tsx para: **
 
   ```bash
   const API_URL = "http://localhost:3000/tasks";
   ```
4. **Instale as dependências:**
 
   ```bash
   npm install
   ```
5. **Inicie o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

## Decisões técnicas

- **TypeScript:** proporciona uma experiência de desenvolvimento mais segura e eficiente, com tipagem estática, melhor autocompletar, detecção precoce de erros e maior manutenibilidade no código.
- **Axios:** oferece uma forma simples e eficiente de fazer requisições HTTP, com suporte a promessas, interceptadores para manipulação de requisições e respostas, além de facilitar o tratamento de erros e a configuração de cabeçalhos.
- **Vite:** oferece uma experiência de desenvolvimento mais rápida e eficiente, com configuração simples, HMR instantâneo, otimização de desempenho e suporte nativo a JSX/TSX, além de garantir uma produção bem otimizada.
- **Deploy:** O deploy realizado na Railway é essencial para garantir que sua aplicação seja utilizada de forma eficiente e confiável, saindo do ambiente de desenvolvimento e se tornando um produto funcional e acessível.

## Possíveis implementações futuras

- **Histórico e Restauração de Tarefas:** Implementar uma funcionalidade para que os usuários possam ver o histórico de tarefas e até mesmo restaurar tarefas deletadas.
- **Implementação de Filtros e Busca Avançada:** Implementar filtros e uma busca eficiente para que os usuários possam encontrar tarefas com mais facilidade.
- **Autenticação e Autorização de Usuários:** Implementar um sistema de login e registro de usuários para autenticação, aumentando a segurança.
- **Paginação:** Implementar paginação para melhorar o desempenho e a experiência do usuário.
- **Testes Unitários e de integração:** Implementar testes para aumentar a confiabilidade dos componentes e das funções da aplicação.

---
## Url do deploy
[Clique aqui](https://frontend-taskmanager-production.up.railway.app/) para ver a API no deploy.

# Autor
Claudio Sousa

