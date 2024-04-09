import { useEffect, useState } from "react";
import Card from "./Card";
import { ThemeProvider } from "./UserContext";
import Theme from "./Theme";

function App() {
  const [curTheme, setCurTheme] = useState("light");

  const darkTheme = () => {
    setCurTheme("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(curTheme);
  }, [curTheme]);

  return (
    <ThemeProvider value={{ curTheme, setCurTheme, darkTheme }}>
      <div className="m-auto">
        <div>
          <Theme/>
          <Card />
        </div>
      </div>
    </ThemeProvider>
  );
}
export default App;
