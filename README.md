# 🏰 Camelot

## 🏗️ Setup

### 1. 🗃️ Open the devcontainer

```txt
CMD+Shift+P → Rebuild and Reopen in Container
```

### 2. 🚀 Start the project

```bash
npm start
```

## 🧑‍💻 Contributing

### 🧹 Format & Lint

```bash
npm run clean
```

### 🎨 shadcn/ui

#### Add Components

```bash
npx shadcn@latest add -c libs/components <component-name>
```

#### Update Components

```bash
npx shadcn@latest diff -c libs/components
```

### 🆙 Upgrade

```bash
npx npm-check-updates --peer -u
```
