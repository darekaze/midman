# MidMan Redirector ⚡️

A simple redirector for sensitive contents using `postMessage` API.

It supports Cross-Domain. Any domain with correct setup can interact with this site.

## Deployment

- [Cloudflare Page (default)](https://midman.pages.dev/)
- [Vercel](https://midman.vercel.app/)
- [Netlify Edge](https://middyman.netlify.app/)

---

## Project Structure

Inside your project, you'll see the following directory structure:

```
├── public/
│   └── ...
└── src/
    ├── components/
    │   └── ...
    └── routes/
        └── ...
```

- `src/routes`: Provides the directory based routing, which can include a hierarchy of `layout.tsx` layout files, and an `index.tsx` file as the page. Additionally, `index.ts` files are endpoints. Please see the [routing docs](https://qwik.builder.io/qwikcity/routing/overview/) for more info.

- `src/components`: Recommended directory for components.

- `public`: Any static assets, like images, can be placed in the public directory. Please see the [Vite public directory](https://vitejs.dev/guide/assets.html#the-public-directory) for more info.

## Development

Development mode uses [Vite's development server](https://vitejs.dev/). During development, the `dev` command will server-side render (SSR) the output.

```shell
yarn dev # or `yarn dev`
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

## Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to locally preview a production build, and it should not be used as a production server.

```shell
yarn preview # or `yarn preview`
```

## Production

The production build will generate client and server modules by running both client and server build commands. Additionally, the build command will use Typescript to run a type check on the source code.

```shell
yarn build # or `yarn build`
```

Cloudflare's [wrangler](https://github.com/cloudflare/wrangler) CLI can be used to preview a production build locally. To start a local server, run:

```
yarn serve
```

Then visit [http://localhost:8787/](http://localhost:8787/)


## Ref

- [Qwik Docs](https://qwik.builder.io/)
- [Vite](https://vitejs.dev/)
- [Partytown](https://partytown.builder.io/)