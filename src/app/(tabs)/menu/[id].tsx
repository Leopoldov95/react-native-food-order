import { Stack, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

const Product = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{ title: `Details ${id}` }} />
      <Text style={{ fontSize: 20 }}>details for product {id}</Text>
    </View>
  );
};

export default Product;
