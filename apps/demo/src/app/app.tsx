import { Button, ThemeProvider } from '@camelot/components';
import { ThemeToggle } from './components/theme-toggle';

export function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ThemeToggle></ThemeToggle>
      <Button variant="outline">Submit</Button>
    </ThemeProvider>
  );
}

export default App;
