import { lazy, Suspense } from "react";
import "./App.css";
import Landing from "./pages/Landing";

const LandingPage = lazy(() => import("./pages/Landing"));

function App() {
  return (
    <div className="bg-neutral-900">
      <Suspense fallback={<div className="h-screen w-screen">Loading...</div>}>
        <LandingPage />
      </Suspense>
    </div>
  );
}

export default App;
