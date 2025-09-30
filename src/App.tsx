import React from "react";
import { InstallButton } from "./components/InstallButton";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Welcome to My Sample PWA!</h1>
      <p>This app can be installed on your mobile device like a native app.</p>
      <InstallButton />
    </div>
  );
};

export default App;
