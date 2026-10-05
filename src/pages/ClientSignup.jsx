import SignupLayout from "../components/SignupLayout";
import SignupForm from "../components/SignupForm";

export default function ClientSignup() {
  return (
    <SignupLayout title="Sign Up">
      <SignupForm userType="client" />
    </SignupLayout>
  );
}