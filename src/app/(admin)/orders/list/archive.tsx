import { FlatList, View } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";

export default function OrderScreen() {
  return (
    <View>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrderListItem order={item} />}
        contentContainerStyle={{
          gap: 10, // horizontal spacing
          padding: 10, // edge padding
        }}
      />
    </View>
  );
}
