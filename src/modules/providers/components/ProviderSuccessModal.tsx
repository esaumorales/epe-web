import SuccessModal from "@/shared/components/SuccessModal";

interface ProviderSuccessModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
}

export default function ProviderSuccessModal({ open, onOpenChange }: ProviderSuccessModalProps) {
    return (
        <SuccessModal
            open={open}
            onOpenChange={onOpenChange}
            title="Proveedor Registrado"
            description="Se podrá ver los proveedores en la lista"
        />
    );
}
