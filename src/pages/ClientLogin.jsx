import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";

export default function ClientLogin() {
  return (
    <LoginLayout>
      <LoginForm userType="client" />
    </LoginLayout>
  );
}