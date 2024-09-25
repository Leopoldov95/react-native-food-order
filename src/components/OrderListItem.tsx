import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import Colors from "@/src/constants/Colors";
import { Order, Product } from "@/src/types";
import { Link, useSegments } from "expo-router";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

type OrderListItemProps = {
  order: Order;
};

const OrderListItem = ({ order }: OrderListItemProps) => {
  //* This is needed for referencing the "local" directory
  const segments = useSegments();

  const formatDate = (date: string) => {
    dayjs.extend(relativeTime);

    return dayjs(date).fromNow();
  };

  return (
    <Link href={`/${segments[0]}/orders/${order.id}`} asChild>
      <Pressable style={styles.container}>
        <View>
          <Text style={styles.title}>Order #{order.id}</Text>
          <Text style={styles.label}>{formatDate(order.created_at)}</Text>
        </View>
        <View>
          <Text style={styles.title}>{order.status}</Text>
        </View>
      </Pressable>
    </Link>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
  },
  title: {
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },
  label: {
    color: "gray",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
});

export default OrderListItem;
