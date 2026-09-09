import { Smile } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/shared/components/ui/dialog";
import { Button } from "@/shared/components/ui/button";

interface SuccessModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
}

export default function SuccessModal({ open, onOpenChange, title, description }: SuccessModalProps) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="max-w-[400px] sm:max-w-[400px] p-8 rounded-2xl bg-white border-none shadow-2xl gap-0 flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-brand-surface flex items-center justify-center text-brand mb-6 border border-brand-border">
                    <Smile size={48} strokeWidth={2} />
                </div>

                <DialogTitle className="text-[22px] font-bold text-ink mb-3">
                    {title}
                </DialogTitle>

                <DialogDescription className="text-[14px] text-ink-muted mb-8 font-medium">
                    {description}
                </DialogDescription>

                <Button
                    onClick={() => onOpenChange(false)}
                    className="w-32 rounded-lg h-11 bg-brand hover:bg-brand-dark text-white font-semibold shadow-sm transition-colors active:scale-95"
                >
                    Aceptar
                </Button>
            </DialogContent>
        </Dialog>
    );
}
