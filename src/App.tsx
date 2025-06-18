import AppLayout from "./AppLayout";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="devBlog-ui-theme">
      <AppLayout />
    </ThemeProvider>
  );
}

export default App;
