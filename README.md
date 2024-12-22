# rick-and-morty-app

A simple webapp to learn and practice web development.
The webapp is written using React v19, and created with Vite.

The webapp will cover various topics, from creating a new project from scratch, to setting up react,
creating components, along with other topics, all while following what is globally considered as best practices.

The webapp will display data retrieved from an API, [Rick and Morty API](https://github.com/afuh/rick-and-morty-api),
and the design of the webapp is inspired by the [Rick and Morty API](https://rickandmortyapi.com/) website.

## Table of Contents

- [Project Pre-requisites](#project-pre-requisites)
- [Create the Project](#create-the-project)
    - [Create a new Vite project](#create-a-new-vite-project)
    - [Refactor and Update](#refactor-and-update)
    - [Additional Tools (Optional)](#additional-tools-optional)
    - [Project Structure](#project-structure)
- [Useful Resources](#useful-resources)

## Project Pre-requisites

- Node.js v20.x or later.
- [bun](https://bun.sh/) (or npm which comes with Node.js).
- React v19.
- [Vite](https://vite.dev/) (or [create-react-app](https://create-react-app.dev/)).

## Create the Project

After you have installed Node.js, you need to decide whether to use npm or bun as your package manager,
if you choose bun, you need to install it.

For this project, we will use Vite as for tooling instead of CRA, if you choose CRA the steps shouldn't differ much.

### Create a new Vite project

With bun, you can create a new vite project by running the following command.

```shell
bun create vite
```

If you choose npm, run the below command.

```shell
npm create vite@latest
```

After running any of the above commands, you will be prompted in your command-line to enter the project name,
the vite template and the variant.

```
✔ Project name: … rick-and-morty-app
✔ Select a framework: › React
✔ Select a variant: › TypeScript

Scaffolding project in /Users/khaled/Projects/rick-and-morty-app...

Done. Now run:

  cd rick-and-morty-app
  bun install
  bun run dev

```

### Refactor and Update

After the project is created, change your working directory to the new directory and
run `bun install` (or `npm install`) to install the project's dependencies.

The `package.json` file might contain some outdated dependencies, depends on when their template was created,
it's a good idea to update to the latest versions of whatever dependencies you might use, unless explicitly specified
otherwise.

There is a tool that checks for dependency versions and update them if necessary, it's called
[`npm-check`](https://www.npmjs.com/package/npm-check), and you can run it without installing by running the
command `bunx npm-check [options]` (or `npx npm-check [options]`).

If you just want to see your dependencies, you can simply just run `bunx npm-check`, it will return a report of your
dependencies.

```
react              😎  MAJOR UP  Major update available. https://react.dev/
                                npm install react@19.0.0 --save to go from 18.3.1 to 19.0.0

react-dom          😎  MAJOR UP  Major update available. https://react.dev/
                                npm install react-dom@19.0.0 --save to go from 18.3.1 to 19.0.0

@types/react       😎  MAJOR UP  Major update available. https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react
                                npm install @types/react@19.0.2 --save-dev to go from 18.3.18 to 19.0.2

@types/react-dom   😎  MAJOR UP  Major update available. https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/react-dom
                                npm install @types/react-dom@19.0.2 --save-dev to go from 18.3.5 to 19.0.2

typescript         😎  MINOR UP  Minor update available. https://www.typescriptlang.org/
                                npm install typescript@5.7.2 --save-dev to go from 5.6.3 to 5.7.2

Use npm-check -u for interactive update.
```

As suggested by the command, simply run `bunx npm-check -u` to interact with the command-line and update the
dependencies you want. After you are done with that, you will have a project with the latest dependencies.

Note, sometimes when you install dependencies for their binaries only, you might get a warning that you have an unused
dependency, you can simply create a configuration file, `.npmcheckrc`, for `npm-check` to ignore certain dependencies.

This project contains a configuration file for this purpose [.npmcheckrc](./.npmcheckrc) to ignore the warning
for `prettier` since we only use it for its binary.

### Additional Tools (Optional)

With that, you can start developing your webapp, or you can add some more tools to helps you with your
development process.

#### Formatting

It's a good idea to use formatting tools, it helps keep your clean and pretty.

Formatting tools, such as `prettier` enforces formatting rules based on a configuration file, to keep all of your
files consistent. Rules like using single or double quotes for strings, trailing commas, enforcing semicolons, etc...

For this project, we will use `prettier`, and you can see the available [rules](https://prettier.io/docs/en/options) in
their documentation.

Start by running `bun add --dev prettier` (or `npm install -D prettier`) to add it as a dev dependency to your project.
Dev dependency because it is not needed to run your project, you only need to use it during the development process.

Create a file in your root directory called `.prettierrc` which will hold the formatting configuration, in JSON format.

For this project, I've chosen the following configuration, you can change any of the properties to your liking:

```json
{
    "printWidth": 80,
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": false,
    "quoteProps": "consistent",
    "jsxSingleQuote": false,
    "trailingComma": "all",
    "bracketSpacing": true,
    "bracketSameLine": true,
    "arrowParens": "always",
    "singleAttributePerLine": true
}
```

You can run `prettier` from the command-line.

Run `prettier . --check` to just check if there are any formatting issues.

Run `prettier . --write` to fix the formatting issues.

#### Linting

It's highly recommended to use linters, they help identify possible problems in your code, enforce certain rules,
like enforcing parenthesis in single argument arrow functions, among others. Linters can help make your code consistent
and bug-free, to a certain extent.

For this project, we will use `eslint` with `typescript-eslint`, both have a different set of rules, some might overlap
on the same behavior.

Here are the rules for [eslint](https://eslint.org/docs/latest/rules/), and here are the rules for
[typescript-eslint](https://typescript-eslint.io/rules/).

Luckily for us, vite includes eslint when we create a project.

But if you have an existing project, or use CRA to create your project without eslint, you can install it and
configure it yourself.

If your project is in Javascript, you only need [eslint](https://eslint.org/docs/latest/use/getting-started),
follow the steps mentioned in their documentation.

If your project is in Typescript, you only need [typescript-eslint](https://typescript-eslint.io/getting-started),
it will also install `eslint`, follow the steps mentioned in their documentation.

You can run `eslint` from the command-line.

Run `eslint .` to just check the linting issues.

Run `eslint . --fix` to fix the linting issues. Not all linting issues can be auto-fixed, some will need your
intervention.

##### Side Note

If you choose to install `prettier` with `eslint`, you will need to integrate `prettier` with eslint to let it be the
priority for checking formatting rules.

To do this, you need to install an `eslint` plugin called
[eslint-config-prettier](https://github.com/prettier/eslint-config-prettier), their documentation contains the steps
needed to integrate.

#### Husky

To automate the formatting and linting process, you need a way to apply them when adding changes to your
version control. For this we use [husky](https://typicode.github.io/husky/, which gives us the ability to intercept
git hooks at different stages, the most common one, and the one we need, is the `pre-commit` hook, which will apply
the changes when we are committing our files to git.

Start by running `bun add --dev husky` (or `npm install -D husky`) to add it as a dev dependency to your project.

Then run `bunx husky init` (or `npx husky init`) to initialize `husky`, this will create a directory under your
project's root called `.husky` which contains the hooks for different stages.
It will create, by default, the `pre-commit` hook, which is basically a simple bash script,
initialized to `bun test` (or `npm test` if using npm).

For our project's case, we don't have a test script, so we can remove it, or comment it out.
Inside the script, we simply add the two commands for formatting and linting.

```bash
prettier . --write
eslint . --fix
```

So whenever we add changes to stage, and then commit, before committing the changes, the above two lines will run.

#### Lint-Staged

After adding `husky`, if you commit some files, and some of them are affected by formatting or linting, you will
notice these files will not be added back to the stage, it will be as if you modified these files again.

To solve this, you need a tool that will apply the `pre-commit` hook and add those files back to the stage in order
to be committed to your repository.

There is a tool called `lint-staged` which does this job.

Start by running `bun add --dev lint-staged` (or `npm install -D lint-staged`) to add it as a dev dependency to
your project.

Then in your `package.json`, add a script called `lint-staged` which simply calls the command-line tool
installed `lint-staged`. Your `package.json` scripts should look like this.

```json lines
{
    // other package.json attributes
    "scripts": {
        // other scripts ...
        "prepare": "husky",
        "lint-staged": "lint-staged"
    }
    // ...
}
```

You also need to configure `lint-staged` to tell it what to run when called, which are the two commands we added to
the `pre-commit` hook. They need to be added to the `package.json` file as an attribute called `lint-staged`, which
specifies for each file type, what to run.

Here is an example.

```json lines
{
    // other package.json attributes
    "lint-staged": {
        "*": "prettier . --write",
        "*.{ts,tsx}": "eslint . --fix"
    }
}
```

We specified to use `prettier` for all file types, and `eslint` for Typescript files.

Now in `husky`'s `pre-commit` hook, we only need to call `bun run lint-staged` (or `npm run lint-staged`).

Now whenever you add and commit your files, if some files are affected by either formatting or linting, they will be
added back to the stage and committed.

### Project Structure

Now that you've setup your project, let's talk about the project structure.

It is recommended to following a logical structure for your project, in order to organize it and separate the files
by logic, so that its not cluttered and messy and unorganized.

In this project, we will follow the below structure.

```
rick-and-morty-app/ # Project's root directory
├── ...
├── public/         # public assets (mainly used in index.html)
│   └── favicon.svg
├── src/
│   ├── api/        # API caller functions
│   ├── assets/     # assets used within your code
│   ├── components/ # custom react components
│   ├── types/      # types used throughout the application
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
└── ...
```

The main take from the structure is what is in the `src` directory.

#### `api/`

Put functions that call APIs here, that way your API calls are not scattered and repeated in different places,
but organized in a directory that implies that what you are using is related to an API.

For example, the file [get-endpoint-counts.ts](./src/api/get-endpoint-counts.ts) contains functions that return the
count of different endpoints used in this webapp.

#### `assets/`

Put assets used throughout your react code here.
Assets, such as the home icon or the banner background, goes under this directory and used in the
[Header](./src/components/Header/index.tsx) and [Banner](./src/components/Banner/index.tsx) components respectively.

#### `components/`

Put react components that you create here.
Take note that this subdirectory is called components, so only include components here.
In this project, for example, we have a Header, Footer and Banner components. All of these components are used within
our App component.

If you intend to create react pages, there need to be included in their own subdirectory called `pages/`.

#### `types/`

Put type definitions created here.
You might create a type definition for an API response to reflect its structure, such as the `Character` type in
[character.ts](./src/types/character.ts).

## Useful Resources

Below are some useful resources that helps when developing, from important documentation to references to keep in mind,
for when you need it.

- [Material UI](https://mui.com/material-ui/all-components/): The documentation contains everything to know about
  all the components they offer, with several examples for different cases for each component. It also includes a
  detailed documentation of attributes not covered in the examples.
- [CSS Reference](https://cssreference.io/): A very useful reference for CSS with examples for each property.
