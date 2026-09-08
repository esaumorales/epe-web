import { Smile } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";

interface ProviderSuccessModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProviderSuccessModal({ open, onOpenChange }: ProviderSuccessModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] sm:max-w-[400px] p-8 rounded-[1.5rem] bg-white border-none shadow-2xl gap-0 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[#EBF3EC] flex items-center justify-center text-[#5D9634] mb-6 border border-[#d2e5d5]">
                    <Smile size={48} strokeWidth={2} />
                </div>

                <DialogTitle className="text-[22px] font-bold text-[#1a2f22] mb-3">
                    Proveedor Registrado
                </DialogTitle>
                
                <DialogDescription className="text-[14px] text-gray-500 mb-8 font-medium">
                    Se podra ver los proveedores en la lista.
                </DialogDescription>

                <Button 
                    onClick={() => onOpenChange(false)}
                    className="w-32 rounded-xl h-11 bg-[#6b9d3b] hover:bg-[#58852e] text-white font-semibold shadow-sm"
                >
                    Aceptar
                </Button>
            </DialogContent>
        </Dialog>
    );
}
