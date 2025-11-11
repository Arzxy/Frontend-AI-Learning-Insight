import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <Card className="w-[400px] p-6 text-center shadow-lg">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          Tailwind + Shadcn Works 🎉
        </h1>
        <p className="text-gray-600 mb-6">
          Kalau kamu bisa liat card ini dengan bayangan dan padding, berarti Shadcn udah aktif.
        </p>
        <Button className="bg-blue-600 text-white hover:bg-blue-700 transition-all">
          Coba Klik Aku 💫
        </Button>
      </Card>
    </div>
  )
}

export default App
