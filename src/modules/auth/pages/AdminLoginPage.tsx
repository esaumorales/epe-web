import AdminLoginForm from "../components/organisms/AdminLoginForm";

interface AdminLoginPageProps {
  onLogin: () => void;
}

export default function AdminLoginPage({ onLogin }: AdminLoginPageProps) {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/image/fondo_login.webp')" }}
    >
      <AdminLoginForm onLogin={onLogin} />
    </div>
  );
}