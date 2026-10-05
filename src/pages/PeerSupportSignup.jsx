import SignupLayout from "../components/SignupLayout";
import SignupForm from "../components/SignupForm";

export default function PeerSupportSignup() {
  return (
    <SignupLayout title="Sign Up">
      <SignupForm userType="peer-supporter" />
    </SignupLayout>
  );
}