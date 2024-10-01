import { ActivityIndicator, FlatList, View, Text } from "react-native";
// import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";
import { useProductList } from "@/src/api/products";

export default function MenuScreen() {
  const { data: products, error, isLoading } = useProductList();

  if (isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    return <Text>Failed to fetch profucts...</Text>;
  }
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2} // number of columns
      contentContainerStyle={{
        gap: 10, // horizontal spacing
        padding: 10, // edge padding
      }}
      columnWrapperStyle={{ gap: 10 }} // vertical spacing
    />
  );
}
