import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

export default function AuthLayout() {
  const { session } = useAuth();

  // if user is signed in, no need for them to be in the sign up page
  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
}
