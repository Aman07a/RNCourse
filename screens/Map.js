import { StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

function Map() {
  const region = {
    latitude: 37.4216012,
    longitude: -122.0835669,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  };

  return <MapView style={styles.map} initialRegion={region}></MapView>;
}

export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
