import AppRouter from "./router/AppRouter";
import { Toast } from "./components/UI/Toast";

function App() {
    return ( 
        <Toast>
            <AppRouter />
        </Toast>
    );
};

export default App;
