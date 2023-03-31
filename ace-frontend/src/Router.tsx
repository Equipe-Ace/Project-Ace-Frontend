import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import LoginADM from "./pages/login";
import CadADM from "./pages/cadADM";
import CtrADM from "./pages/ctrADM";
import CtrADM2 from "./pages/ctrADM2";
import CtrADM3 from "./pages/ctrADM3";
import CtrFIN from "./pages/ctrFIN";
import CtrFIN2 from "./pages/ctrFIN2";
import CtrFIN3 from "./pages/ctrFIN3";
import CadCLI from "./pages/cadCLI";
import CadCLI2 from "./pages/cadCLI2"




const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* ADM */}
                <Route path="/" element={<LoginADM />} />
                <Route path="/cadastroADM" element={<CadADM />} />
                <Route path="/ControleTitulosADM" element={<CtrADM />} />
                <Route path="/ControleTitulosADM2" element={<CtrADM2 />} />
                <Route path="/ControleTitulosADM3" element={<CtrADM3 />} />

                {/* FINANCEIRO */}
                <Route path="/ControleTitulosFIN" element={<CtrFIN />} />
                <Route path="/ControleTitulosFIN2" element={<CtrFIN2 />} />
                <Route path="/ControleTitulosFIN3" element={<CtrFIN3 />} />

                {/* CLIENTE */}
                <Route path="/cadastroCLI" element={<CadCLI />} />
                <Route path="/cadastroCLI2" element={<CadCLI2 />} />
            </Routes>
        </Router>
    );
}

export default AppRoutes;