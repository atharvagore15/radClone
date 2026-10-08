import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";

export default function PeerLogin() {
  return (
    <LoginLayout>
      <LoginForm userType="peer-supporter" />
    </LoginLayout>
  );
}