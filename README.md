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

## Tasks:

- Configure database (decide)
- Auth
