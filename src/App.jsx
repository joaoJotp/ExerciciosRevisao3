import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

class Usuario {
  constructor(nome, email, telefone = "Não informado") {
    this.nome = nome;
    this.email = email;
    this.telefone = telefone;
  }
}

class Relatorio {
  gerar(usuarios) {
    return usuarios.map(({ nome, email, telefone = "Não informado" }) => {
      return `Usuário: ${nome} | Email: ${email} | Telefone: ${telefone}`;
    });
  }
}

function App() {
  // 1. HTML Generator
  const links = [
    { texto: "Google", url: "https://google.com" },
    { texto: "YouTube", url: "https://youtube.com" },
  ];

  const tagsA = links.map(
    ({ texto, url }) => `<a href="${url}">${texto}</a>`
  );

  // 2. Merge de Dados
  const ids = [1, 2, 3];
  const nomes = ["Ana", "Carlos", "Maria"];

  const dadosCombinados = ids.map((id, index) => ({
    id,
    nome: nomes[index],
  }));

  // 3. Desestruturação Dinâmica
  const pessoa = { nome: "Gabriel", idade: 20 };
  const chave = "nome";
  const { [chave]: valorExtraido } = pessoa;

  // 4. Sistema de Notas
  const alunos = [
    { nome: "Ana", notas: [8, 7, 9] },
    { nome: "Carlos", notas: [6, 5, 7] },
  ];

  const medias = alunos.map(({ nome, notas }) => {
    const soma = notas.reduce((total, nota) => total + nota, 0);
    const media = soma / notas.length;

    return {
      nome,
      media: media.toFixed(2),
    };
  });

  // 5. Refatoração de Objeto
  const configuracao = {
    tema: "escuro",
    idioma: "pt-BR",
    usuario: "admin",
    senha: "123456",
  };

  const { senha, ...configSemSenha } = configuracao;

  // 6. Calculadora de Estoque
  const estoque = [
    { produto: "Camisa", preco: 50, quantidade: 3 },
    { produto: "Tênis", preco: 200, quantidade: 2 },
  ];

  const estoqueAtualizado = estoque.map((item) => ({
    ...item,
    totalItem: item.preco * item.quantidade,
  }));

  // 7. Desestruturação com Alias e Map
  const cursos = [
    { title: "JavaScript", price: 100 },
    { title: "React", price: 150 },
  ];

  const cursosFormatados = cursos.map(({ title: titulo, price: preco }) => {
    return `Curso: ${titulo} | Preço: R$ ${preco}`;
  });

  // 8. Inversão de Matriz Simples
  const matriz = [
    [1, 2],
    [3, 4],
  ];

  const primeiraColuna = matriz.map(([primeiro]) => primeiro);

  // 9. Tratamento de Dados Incompletos
  const usuarios = [
    { nome: "Ana", telefone: "99999-9999" },
    { nome: "Carlos" },
    { nome: "Maria", telefone: "98888-8888" },
  ];

  const usuariosTratados = usuarios.map(
    ({ nome, telefone = "Não informado" }) => ({
      nome,
      telefone,
    })
  );

  // 10. Agregador de Classes
  const listaUsuarios = [
    new Usuario("Gabriel", "gabriel@email.com", "99999-9999"),
    new Usuario("João", "joao@email.com"),
  ];

  const relatorio = new Relatorio();
  const logs = relatorio.gerar(listaUsuarios);

  return (
    <div>
      <h1>Exercícios React - Map e Desestruturação</h1>

      <h2>1. HTML Generator</h2>
      {tagsA.map((tag, index) => (
        <p key={index}>{tag}</p>
      ))}

      <h2>2. Merge de Dados</h2>
      {dadosCombinados.map((item) => (
        <p key={item.id}>
          ID: {item.id} | Nome: {item.nome}
        </p>
      ))}

      <h2>3. Desestruturação Dinâmica</h2>
      <p>Valor extraído: {valorExtraido}</p>

      <h2>4. Sistema de Notas</h2>
      {medias.map((aluno, index) => (
        <p key={index}>
          Nome: {aluno.nome} | Média: {aluno.media}
        </p>
      ))}

      <h2>5. Refatoração de Objeto</h2>
      <p>Tema: {configSemSenha.tema}</p>
      <p>Idioma: {configSemSenha.idioma}</p>
      <p>Usuário: {configSemSenha.usuario}</p>

      <h2>6. Calculadora de Estoque</h2>
      {estoqueAtualizado.map((item, index) => (
        <p key={index}>
          {item.produto} | Preço: R$ {item.preco} | Quantidade:{" "}
          {item.quantidade} | Total: R$ {item.totalItem}
        </p>
      ))}

      <h2>7. Desestruturação com Alias e Map</h2>
      {cursosFormatados.map((curso, index) => (
        <p key={index}>{curso}</p>
      ))}

      <h2>8. Inversão de Matriz</h2>
      <p>{primeiraColuna.join(", ")}</p>

      <h2>9. Tratamento de Dados Incompletos</h2>
      {usuariosTratados.map((usuario, index) => (
        <p key={index}>
          Nome: {usuario.nome} | Telefone: {usuario.telefone}
        </p>
      ))}

      <h2>10. Agregador de Classes</h2>
      {logs.map((log, index) => (
        <p key={index}>{log}</p>
      ))}
    </div>
  );
}

export default App;