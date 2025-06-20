# minha-lib-test-poc

Uma prova de conceito de biblioteca em TypeScript utilizando o **tsup** para empacotamento e build.

## 📦 O que é o tsup?

O **tsup** é um bundler e empacotador para projetos TypeScript que reúne compilação, empacotamento e otimização em uma única ferramenta. Por baixo dos panos, ele se apoia no **esbuild**, oferecendo:

* **Build ultrarrápido**: compila e gera bundles em milissegundos.
* **Zero-config por padrão**: configuração mínima para começar a usar.
* **Suporte a múltiplos formatos**: `esm`, `cjs`, `umd` e mais.
* **Tree shaking automático**: remove código morto para reduzir o tamanho final.
* **Minificação e sourcemaps** prontos para produção.
* **Modo de observação (watch)** para desenvolvimento contínuo.

## 🎯 Por que escolher o tsup em vez do compilador tradicional (tsc)?

Comparado ao uso isolado do **tsc** (TypeScript Compiler) e de ferramentas adicionais, o tsup traz vantagens claras:

1. **Desempenho**

   * **tsup**: utiliza *esbuild*, resultando em tempos de build extremamente rápidos (geralmente < 50ms).
   * **tsc**: apenas transpila TypeScript para JavaScript, sem bundling, e tende a ser mais lento em projetos maiores.

2. **Bundling Integrado**

   * **tsup**: agrupa todo o código em bundles otimizados, já prontos para publicação.
   * **tsc**: gera diversos arquivos `.js` a partir de cada `.ts`, exigindo ferramentas extras (Rollup, Webpack, etc.) para bundling.

3. **Menos Configuração**

   * **tsup**: funciona out-of-the-box, com opções simples via `tsup.config.ts` ou flags de linha de comando.
   * **tsc + Rollup/Webpack**: exige configuração separada em `tsconfig.json`, `rollup.config.js` ou `webpack.config.js`.

4. **Workflow Unificado**

   * **tsup**: empacota, minifica e gera tipos (`.d.ts`) em um único passo.
   * **Fluxo tradicional**: envolve múltiplos passes (transpilação, bundling, minificação, geração de tipos), aumentando complexidade e tempo de build.

## 🚀 Como começar

https://tsup.egoist.dev/

## ⚙️ Uso do create-tsup

Para agilizar a configuração inicial de bibliotecas TypeScript com **tsup** você pode usar o **create-tsup**. Exemplos:

```bash
# Via npx, criando nova lib com template de arquitetura limpa
npx create-tsup minha-lib-test-poc --template clean

# Ou instalando globalmente
npm install -g create-tsup
create-tsup minha-lib-test-poc --template clean
```

Após gerar o projeto, basta:

```bash
cd minha-lib-test-poc
crie um tsconfig.json e atualize o tsup.config.ts como neste projeto
npm run build
```

## 🚀 Instalando a lib versionada por TAG

```bash
npm install git+https://github.com/JavanTorres/minha-lib-test-poc.git#v1.0.0
```
