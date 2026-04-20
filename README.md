# 🌡️ FrostEye Monitor

Sistema IoT para monitoramento de temperatura e umidade em tempo real, integrando um microcontrolador Arduino com uma aplicação web desenvolvida em Node.js.

O projeto simula a coleta de dados de sensores e demonstra o fluxo completo de dados entre hardware e software, com exibição dinâmica em uma interface web.

---

## 🚀 Demonstração

📌 *Em breve disponível online*
📷 *Adicione aqui um GIF ou imagens do sistema funcionando*
![alt text](<circuito/FrostEye - ioT.png>)
---

## 🧠 Sobre o Projeto

Este projeto foi desenvolvido com o objetivo de demonstrar conhecimentos em:

* Integração entre sistemas embarcados e aplicações web
* Comunicação de dados em tempo real
* Desenvolvimento full stack (backend + frontend)
* Estruturação de aplicações escaláveis

O sistema simula um ambiente real de monitoramento climático, podendo ser adaptado facilmente para sensores físicos.

---

## 🏗️ Arquitetura do Sistema

```
Arduino (Tinkercad / C++)
        ↓
Simulação de Sensor (Temperatura e Umidade)
        ↓
Servidor Node.js
        ↓
Aplicação Web (Frontend)
        ↓
Visualização em Tempo Real
```

📌 *Sugestão: adicionar um diagrama feito no draw.io*

---

## ⚙️ Tecnologias Utilizadas

### 🔌 Hardware / Simulação

* Arduino (C++)
* Tinkercad

### 🖥️ Backend

* Node.js
* Express

### 🌐 Frontend

* HTML5
* CSS3
* JavaScript

### 📊 Visualização de Dados

* Chart.js (ou outra biblioteca de gráficos)

---

## 📡 Funcionalidades

* 📥 Recebimento de dados simulados de sensores
* 📊 Exibição de temperatura e umidade em tempo real
* 🔄 Atualização dinâmica da interface
* 🧪 Modo simulado para testes sem hardware físico

---

## ▶️ Como Executar o Projeto

### 1. Clone o repositório

```bash
git clone https://github.com/Murillo5000/FrostEye-Monitor.git
```

### 2. Acesse a pasta do backend

```bash
cd backend
```

### 3. Instale as dependências

```bash
npm install
```

### 4. Inicie o servidor

```bash
cd backend
node server.js

cd backend
node simulator.js
```

### 5. Acesse no navegador

```
http://localhost:3000
```

---

## 📁 Estrutura do Projeto

```
/arduino      → Código do Arduino (simulação no Tinkercad)
/backend      → Servidor Node.js
/frontend     → Interface web
```

---

## 🔮 Melhorias Futuras

* 📡 Integração com sensores reais (DHT11/DHT22)
* ☁️ Deploy em nuvem
* 📈 Histórico de dados (banco de dados)
* 🚨 Sistema de alertas (temperatura crítica)
* 🔌 Comunicação via WebSockets

---

## 🎯 Objetivo

Este projeto foi desenvolvido com foco em aprendizado e demonstração de habilidades práticas para oportunidades de estágio na área de desenvolvimento de software e IoT.

---

## 👨‍💻 Autor

**Seu Nome Aqui**
📎 GitHub: https://github.com/Murillo5000
📧 Email: [murillo.dangelo23@gmail.com](mailto:murillo.dangelo23@gmail.com)

---

## 📄 Licença

Este projeto está sob a licença MIT.
