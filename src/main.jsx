
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NoteState from "./pages/Mpage/NoteState.jsx";
import Estate from "./pages/Epage/Estate.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <NoteState>
            <Estate>
                <App />
            </Estate>
        </NoteState>
    </StrictMode>
);
