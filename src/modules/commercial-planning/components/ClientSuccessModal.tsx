import SuccessModal from "@/shared/components/SuccessModal";

interface ClientSuccessModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ClientSuccessModal({ open, onOpenChange }: ClientSuccessModalProps) {
    return (
        <SuccessModal
            open={open}
            onOpenChange={onOpenChange}
            title="Cliente Registrado"
            description="Se podrá ver los clientes registrados en el inicio"
        />
    );
}
