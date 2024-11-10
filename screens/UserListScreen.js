import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Card, Avatar, Text } from "react-native-paper";

export default function UserListScreen() {
  const [users, setUsers] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, []);

  const renderUser = ({ item }) => (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate("Detail", { item: item })}
    >
      <Card.Title
        titleVariant="titleLarge"
        title={item.name}
        left={(props) => (
          <Avatar.Image
            {...props}
            source={require("../assets/avatar.png")}
            style={{
              backgroundColor: "transparent",
            }}
          />
        )}
      />
      <Card.Content>
        <View style={{ flexDirection: "row", marginBottom: 10 }}>
          <View style={{ flex: 0.7 }}>
            <Text>Username</Text>
            <Text style={styles.desc}>{item.username}</Text>
          </View>
          <View style={{ flex: 1 }}>
            <Text>Email</Text>
            <Text style={styles.desc}>{item.email}</Text>
          </View>
        </View>
        <Text>Address</Text>
        <Text style={styles.desc}>
          {item.address.street}, {item.address.suite}, {item.address.city},{" "}
          {item.address.zipcode}
        </Text>
      </Card.Content>
    </Card>
  );

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderUser}
      contentContainerStyle={styles.container}
    />
  );
}

const styles = StyleSheet.create({
  desc: { fontSize: 14, fontFamily: "Poppins-Medium" },
  container: { padding: 16 },
  card: { marginBottom: 16, backgroundColor: "#f9f9f9", fontFamily: "Poppins" },
});
