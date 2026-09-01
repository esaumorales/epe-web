import AdminLoginForm from "../components/organisms/AdminLoginForm";

interface AdminLoginPageProps {
  onLogin: () => void;
}

export default function AdminLoginPage({ onLogin }: AdminLoginPageProps) {
  return (
    <div>
      <AdminLoginForm onLogin={onLogin} />
    </div>
  );
}