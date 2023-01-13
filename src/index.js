import { createRoot } from "react-dom/client";
import App from "./components/App";
import "react-datepicker/dist/react-datepicker.css";

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);
