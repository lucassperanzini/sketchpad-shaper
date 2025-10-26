import Header from "@/components/Header";
import DocumentCard from "@/components/DocumentCard";
import AISuggestions from "@/components/AISuggestions";
import ProgressTracker from "@/components/ProgressTracker";
import QuickAccess from "@/components/QuickAccess";
import { CreditCard, FileText, IdCard, CheckCircle2 } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-foreground mb-2">
                Seus Documentos
              </h1>
              <p className="text-muted-foreground">
                Acompanhe o status dos documentos necessários para acessar benefícios.
              </p>
            </div>

            <div className="space-y-4">
              <DocumentCard
                icon={IdCard}
                iconBgColor="bg-primary/10"
                title="Cadastro Único - Cadúnico"
                description="Comprova a situação socioeconômica da família."
                status="validated"
                aiNote="A IA verificou que este documento é exigido para 3 dos benefícios ativos do seu perfil."
                showInstructions
              />

              <DocumentCard
                icon={CreditCard}
                iconBgColor="bg-warning-light"
                title="CPF"
                description="Cádastro de Pesoda Fisica"
                status="pending"
              />

              <DocumentCard
                icon={FileText}
                iconBgColor="bg-alert-light"
                title="Comprovante de residência"
                description="Confirma o endereço da residência"
                status="missing"
              />

              <DocumentCard
                icon={IdCard}
                iconBgColor="bg-primary/10"
                title="RG"
                description="Registro Geral (Carteira de Identidade)"
                status="validated"
              />

              <DocumentCard
                icon={CheckCircle2}
                iconBgColor="bg-success-light"
                title="Vialidade"
                description=""
                status="validated"
              />
            </div>

            <footer className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground text-center">
                Plataforma de Acesso a Benefícios Públicos - 2026
              </p>
            </footer>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <AISuggestions />
            <ProgressTracker />
            <QuickAccess />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
