import { View, Text, ActivityIndicator } from "react-native";
import React from "react";
import Button from "@/src/components/Button";
import { Link, Redirect } from "expo-router";
import { useAuth } from "@/src/providers/AuthProvider";
import { supabase } from "../lib/supabase";

const index = () => {
  const { session, loading, isAdmin } = useAuth();

  if (loading) {
    return <ActivityIndicator />;
  }

  // if no acive session, then user must login
  if (!session) {
    return <Redirect href={"/sign-in"} />;
  }

  // is user is not admin then they will automatically go to the (user) index
  if (!isAdmin) {
    return <Redirect href={"/(user)"} />;
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 10 }}>
      <Link href={"/(user)"} asChild>
        <Button text="User" />
      </Link>
      <Link href={"/(admin)"} asChild>
        <Button text="Admin" />
      </Link>
      {/* <Link href={"/(auth)/sign-in"} asChild>
        <Button text="Sign in" />
      </Link> */}

      <Button onPress={() => supabase.auth.signOut()} text="Sign Out" />
    </View>
  );
};

export default index;
