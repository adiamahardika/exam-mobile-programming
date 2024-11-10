import React from "react";
import { View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { useRoute } from "@react-navigation/native";

export default function MapScreen() {
  const route = useRoute();
  const { lat, lng, name } = route.params;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: parseFloat(lat),
          longitude: parseFloat(lng),
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={MapView.PROVIDER_GOOGLE}
      >
        <Marker
          coordinate={{
            latitude: parseFloat(lat),
            longitude: parseFloat(lng),
          }}
          title={name}
          description="User Location"
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});
