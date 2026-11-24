import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NoteState from "./pages/Mpage/NoteState.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
       <NoteState>
        <App />
    </NoteState>
    </StrictMode>
);