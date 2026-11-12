# 🏰 Camelot

## 🏗️ Setup

### 1. 🗃️ Open the devcontainer

```txt
CMD+Shift+P → Rebuild and Reopen in Container
```

### 2. 🚀 Start the project

```bash
npm start
npm run storybook
```

## 🧑‍💻 Contributing

### 🧹 Format & Lint

```bash
npm run clean
```

### 🎨 shadcn/ui

#### Add Components

```bash
npx shadcn@latest add -c libs/design <component-name>
```

#### Update Components

```bash
npx shadcn@latest diff -c libs/design
```

#### Add Story to a Component

```bash
nx generate @nx/react:component-story --project @camelot/design --interactionTests false --componentPath lib/components/button.tsx
```

### 🆙 Upgrade

```bash
npx npm-check-updates --peer -u
```
