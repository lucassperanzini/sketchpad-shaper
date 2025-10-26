import { FileText, Upload } from "lucide-react";
import { Card } from "@/components/ui/card";

const AISuggestions = () => {
  return (
    <Card className="p-6 border-border">
      <h3 className="font-semibold text-foreground mb-4">
        Sugestões automáticas da IA
      </h3>
      <div className="space-y-4">
        <div className="flex gap-3">
          <div className="bg-success-light rounded-lg p-2 flex-shrink-0 h-fit">
            <Upload className="h-5 w-5 text-success" />
          </div>
          <p className="text-sm text-foreground">
            Você pode atualizar seu Cadúnico diretamente pelo apo Cov,br.
          </p>
        </div>
        <div className="flex gap-3">
          <div className="bg-warning-light rounded-lg p-2 flex-shrink-0 h-fit">
            <FileText className="h-5 w-5 text-warning" />
          </div>
          <p className="text-sm text-foreground">
            <span className="font-medium">Faltando comprovante de residência?</span> Veja onde emitir online.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default AISuggestions;
