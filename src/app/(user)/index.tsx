import { Redirect } from "expo-router";

//? Sets up the default home
export default function TabIndex() {
  return <Redirect href={"/(user)/menu"} />;
}
