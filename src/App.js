import "./styles/main.css";

import DesktopNavegation from "./src_desktop/desktopNavBar";
import DesktopMainContent from "./src_desktop/desktopMainContent";

import MobileNavegation from "./src_mobile/mobileNavBar";
import MobileMainContent from "./src_mobile/mobileMainContent";

function App() {
  return (
    <div className="App">
      <header>
        <DesktopNavegation />
        <MobileNavegation />
      </header>
      <main>
        <DesktopMainContent />
        <MobileMainContent />
      </main>
    </div>
  );
}

export default App;
