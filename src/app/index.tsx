import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  ListRenderItem,
} from "react-native";

// Home page w/ product search (shoes)
// ability to add to cart
// checkout w/ test payment --> Stripe or built-in Shopify func
// confirmation

type ListItem = {
  id: string;
  title: string;
};

type ItemProps = {
  data: ListItem;
};

const DATA = new Array(20).fill(null).map((_, index) => ({
  id: String(index),
  title: `Item ${index + 1}`,
}));

const Item: React.FC<ItemProps> = ({ data }: ItemProps) => (
  <View style={styles.item}>
    <Text style={styles.title}>{data.title}</Text>
  </View>
);

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  console.log({ searchTerm });

  const renderItem: ListRenderItem<ListItem> = ({ item }) => (
    <Item data={item} />
  );

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <TextInput
        style={styles.input}
        onChangeText={(text: string) => setSearchTerm(text)}
        value={searchTerm}
        placeholder="Search"
      />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={{ flex: 1, width: "100%" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 240,
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
  },
});
