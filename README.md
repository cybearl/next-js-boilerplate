<p align="center">
  <br />
  <a href="https://nextjs.org/" target="_blank"><img width="100px" src="https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67" /></a>
  <h2 align="center">@cybearl/next-js-boilerplate</h2>
  <p align="center">An advanced and entirely pre-configured<br />Next.js & BiomeJS boilerplate.</p>
</p>

Installation
------------
1. Clone the repository
2. Install dependencies
    ```typescript
    $ npm install // yarn
    ```
3. Generate the Prisma client
    ```typescript
    $ npx prisma generate // yarn prisma generate
    ```
4. Start the development server
    ```typescript
    $ npm run dev // yarn dev
    ```

Dev notes
---------
This boilerplate is specifically designed for [Cybearl](https://github.com/cybearl) projects, so it won't
probably be updated that often to newer version and specifically aims to stay for stability first.

For now, staying with:
- **Next.js v14.2** (with page routing).
- **React v18.3**.
- **EsLint v8.57**.

It should also be noted that the Next.js middleware contains a `connect-src` policy for Cybearl's
domains that you can remove.
