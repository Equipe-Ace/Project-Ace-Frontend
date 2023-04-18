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
import SelectCli from "./pages/selectCLI";
import RelatorioMenu from "./pages/relatoriomenu";



const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {/* ADM */}
                <Route path="/" element={<LoginADM />} />
                <Route path="/cadastroadm" element={<CadADM />} />

                {/* FINANCEIRO */}
                <Route path="/controletitulosfin" element={<CtrFIN />} />
                <Route path="/controletitulosfin2/:idCliente" element={<CtrFIN2 />} />
                <Route path="/controletitulosfin3/:idCliente" element={<CtrFIN3 />} />

                {/* CLIENTE */}
                <Route path="/cadastrocli" element={<CadCLI />} />
                <Route path="/selectcli" element={<SelectCli />} />

                {/* MENUS */}
                <Route path="/relatoriomenu" element={<RelatorioMenu />} />



            </Routes>
        </Router>
    );
}

export default AppRoutes;