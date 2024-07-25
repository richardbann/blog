## Installation, Initialization

In your projects' home folder (where all your projects live :)) enter:

```sh
pnpm create remix
```

Allow git init and pnpm install. Later you can rename your git branch to main:

```sh
git branch -m main
```

The default Remix template comes with tailwind configured.
Let's add some vscode settings and extensions. Have a look at the files in `.vscode`.

## Styling

Preventing layout shift due to the scrollbar:

```html
<html lang="en" className="overflow-x-hidden mr-[calc(-1*(100vw-100%))]">
  ...
</html>
```

## Deployment

It is not a trivial task to decide what are prod and dev dependencies. I have created a
separate directory and only added files and npm packages that needed. I have moved these
packages to "dependencies" in `package.json`. Apart from the `build` directory the `migrations` directory was needed to run the project in production mode.

## Tasks:

- `.env` files
- Auth
- Deployment
  - how to move files? (git?, docker?)
  - SSL terminating server (nginx?, caddy?)
- Logging
