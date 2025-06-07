import ReactDOM from "react-dom/client";
import styles from "./index.module.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
// basename="/sigaReact"
root.render(
  <BrowserRouter>
    <div className={styles.page}>
      <App />
    </div>
  </BrowserRouter>
);
