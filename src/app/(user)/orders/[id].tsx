import { Stack, useLocalSearchParams } from "expo-router";
import { View, StyleSheet, FlatList } from "react-native";
import orders from "@/assets/data/orders";
import OrderListItem from "@/src/components/OrderListItem";
import OrderItemListItem from "@/src/components/OrderItemListItem";

const OrderDetailsScreen = () => {
  const { id } = useLocalSearchParams();

  const order = orders.find((o) => o.id.toString() === id);

  if (!order) {
    return <View>Order Not Found!</View>;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: `Order # ${id}` }} />
      {/* render the order card */}
      {/* <OrderListItem order={order} /> */}

      {/* render the order list */}
      <FlatList
        data={order.order_items}
        renderItem={({ item }) => <OrderItemListItem orderItem={item} />}
        contentContainerStyle={{
          gap: 10, // horizontal spacing
          padding: 0, // edge padding
        }}
        ListHeaderComponent={<OrderListItem order={order} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    gap: 10,
  },
});

export default OrderDetailsScreen;
