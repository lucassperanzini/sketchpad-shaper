import { Card } from "@/components/ui/card";

const QuickAccess = () => {
  return (
    <Card className="p-6 border-border">
      <h3 className="font-semibold text-foreground mb-4">Acesso rápido</h3>
      <div className="flex flex-wrap gap-3">
        <a
          href="#"
          className="text-sm text-primary hover:underline font-medium"
        >
          Mapa CRAS
        </a>
        <a
          href="#"
          className="text-sm text-foreground hover:text-primary"
        >
          Meus Benef
        </a>
        <a
          href="#"
          className="text-sm text-primary hover:underline font-medium"
        >
          Ajuda
        </a>
      </div>
    </Card>
  );
};

export default QuickAccess;
