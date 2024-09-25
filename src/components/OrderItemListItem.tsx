import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { OrderItem } from "@/src/types";
import { Link, useSegments } from "expo-router";

type OrderItemProps = {
  orderItem: OrderItem;
};

export const defaultPizzaImg =
  "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/default.png";

const OrderItemListItem = ({ orderItem }: OrderItemProps) => {
  const segments = useSegments();

  return (
    <View style={styles.container}>
      <View style={styles.pizza}>
        <Image
          source={{ uri: orderItem.products.image || defaultPizzaImg }}
          style={styles.image}
          resizeMode="contain"
        />
        <View>
          <Text style={styles.title}>{orderItem.products.name}</Text>
          <View style={styles.orderDetails}>
            <Text style={styles.price}>
              ${orderItem.quantity * orderItem.products.price}
            </Text>
            <Text style={styles.size}>Size: {orderItem.size}</Text>
          </View>
        </View>
      </View>
      <View>
        <Text style={styles.title}>{orderItem.quantity}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    flex: 1,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  pizza: {
    flex: 1,
    flexDirection: "row",
    gap: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
  image: {
    width: 75,
    aspectRatio: 1,
  },
  orderDetails: {
    flex: 1,
    flexDirection: "row",
    gap: 15,
  },
  size: {},
});

export default OrderItemListItem;
