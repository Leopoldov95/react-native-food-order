import { FlatList, View } from "react-native";
import products from "@/assets/data/products";
import ProductListItem from "@/src/components/ProductListItem";

export default function MenuScreen() {
  return (
    <View>
      {/* {products.map((product, idx) => (
        <ProductListItem key={idx} product={product} />
      ))} */}
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
    </View>
  );
}
