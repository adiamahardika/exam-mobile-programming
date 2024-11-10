import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";
import { Text } from "react-native-paper";

export default function DetailScreen() {
  const route = useRoute();
  const { item } = route.params;
  return (
    <View style={styles.container}>
      <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
        <View style={{ marginBottom: 16 }}>
          <Text style={styles.title}>{item.name}</Text>
        </View>
        <View style={{ flexDirection: "row", marginBottom: 16 }}>
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
      </View>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(item.address.geo.lat),
          longitude: parseFloat(item.address.geo.lng),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={MapView.PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(item.address.geo.lat),
            longitude: parseFloat(item.address.geo.lng),
          }}
          title={item.name}
          description="User Location"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", fontFamily: "Poppins" },
  title: { fontSize: 18, fontFamily: "Poppins-Medium" },
  desc: { fontSize: 14, fontFamily: "Poppins-Medium" },
  map: { flex: 1 },
});
