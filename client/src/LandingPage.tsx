import { LoginForm } from "./components/login-form";

export default function LandingPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-900 text-white">
      <LoginForm />
    </div>
  );
}
