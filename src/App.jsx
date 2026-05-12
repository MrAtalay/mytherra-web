import { Routes, Route } from "react-router-dom";

// Main Page
import MainPage from "./pages/MainPage";

// Login Page
import LoginPage from "./pages/auth/LoginPage";

// Register Page
import RegisterPage from "./pages/auth/RegisterPage";

// Champions Page
import ChampionsPage from "./pages/champions/ChampionsPage";

// World Pages
import WorldPage from "./pages/world/WorldPage";
import RegionsPage from "./pages/world/RegionsPage";
import MapPage from "./pages/world/MapPage";
import FactionsPage from "./pages/world/FactionsPage";

// Updates Pages
import UpdatesPage from "./pages/updates/UpdatesPage";
import PatchNotesPage from "./pages/updates/PatchNotesPage";
import DevLogsPage from "./pages/updates/DevLogsPage";

// Entities Pages
import EntitiesPage from "./pages/entities/EntitiesPage";
import BossesPage from "./pages/entities/BossesPage";
import NPCsPage from "./pages/entities/NPCsPage";
import MobsPage from "./pages/entities/MobsPage";

// Gameplay Pages
import GameplayPage from "./pages/gameplay/GameplayPage";
import AbilitiesPage from "./pages/gameplay/AbilitiesPage";
import EquipmentsPage from "./pages/gameplay/EquipmentsPage";
import ItemsPage from "./pages/gameplay/ItemsPage";

// Lore Page
import LorePage from "./pages/LorePage";

// Admin Pages
import AdminMobsPage from "./pages/admin/AdminMobsPage";
import AdminChampionsPage from "./pages/admin/AdminChampionsPage";
import AdminBossesPage from "./pages/admin/AdminBossesPage";
import AdminNPCsPage from "./pages/admin/AdminNPCsPage";
import AdminAbilitiesPage from "./pages/admin/AdminAbilitiesPage";
import AdminItemsPage from "./pages/admin/AdminItemsPage";
import AdminEquipmentsPage from "./pages/admin/AdminEquipmentsPage";
import AdminRegionsPage from "./pages/admin/AdminRegionsPage";
import AdminFactionsPage from "./pages/admin/AdminFactionsPage";
import AdminUpdatesPage from "./pages/admin/AdminUpdatesPage";

// Navbar Component
import Navbar from "./components/general/Navbar";

function App() {
  return (
    <div className="app-layout">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Login Page Route */}
        <Route path="/login" element={<LoginPage />} />
        {/* Register Page Route */}
        <Route path="/register" element={<RegisterPage />} />
        {/* Champions Page Route */}
        <Route path="/champions" element={<ChampionsPage />} />
        {/* World Pages Routes */}
        <Route path="/world" element={<WorldPage />} />
        <Route path="/world/regions" element={<RegionsPage />} />
        <Route path="/world/map" element={<MapPage />} />
        <Route path="/world/factions" element={<FactionsPage />} />
        {/* Updates Pages Routes */}
        <Route path="/updates" element={<UpdatesPage />} />
        <Route path="/updates/patchnotes" element={<PatchNotesPage />} />
        <Route path="/updates/devlogs" element={<DevLogsPage />} />
        {/* Entities Pages Routes */}
        <Route path="/entities" element={<EntitiesPage />} />
        <Route path="/entities/bosses" element={<BossesPage />} />
        <Route path="/entities/npcs" element={<NPCsPage />} />
        <Route path="/entities/mobs" element={<MobsPage />} />
        {/* Gameplay Pages Routes */}
        <Route path="/gameplay" element={<GameplayPage />} />
        <Route path="/gameplay/abilities" element={<AbilitiesPage />} />
        <Route path="/gameplay/equipments" element={<EquipmentsPage />} />
        <Route path="/gameplay/items" element={<ItemsPage />} />
        {/* Lore Page Route */}
        <Route path="/lore" element={<LorePage />} />
        {/* Admin Routes */}
        <Route path="/admin/mobs" element={<AdminMobsPage />} />
        <Route path="/admin/champions" element={<AdminChampionsPage />} />
        <Route path="/admin/bosses" element={<AdminBossesPage />} />
        <Route path="/admin/npcs" element={<AdminNPCsPage />} />
        <Route path="/admin/abilities" element={<AdminAbilitiesPage />} />
        <Route path="/admin/items" element={<AdminItemsPage />} />
        <Route path="/admin/equipments" element={<AdminEquipmentsPage />} />
        <Route path="/admin/regions" element={<AdminRegionsPage />} />
        <Route path="/admin/factions" element={<AdminFactionsPage />} />
        <Route path="/admin/updates" element={<AdminUpdatesPage />} />
      </Routes>
    </div>
  );
}

export default App;
