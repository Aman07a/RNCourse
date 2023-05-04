import {
  PermissionStatus,
  getCurrentPositionAsync,
  useForegroundPermissions,
} from "expo-location";
import { useRef, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import MapView from "react-native-maps";

import { Colors } from "../../constants/colors";
import OutlinedButton from "../UI/OutlinedButton";

function LocationPicker() {
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();

  const [region, setRegion] = useState(null);
  const mapRef = useRef(null);

  async function verifyPermissions() {
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();

      return permissionResponse.granted;
    }

    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        "Insufficient Permissions!",
        "You need to grant location permissions to use this app."
      );
      return false;
    }

    return true;
  }

  async function getLocationHandler() {
    const hasPermission = await verifyPermissions();

    if (!hasPermission) {
      return;
    }

    const location = await getCurrentPositionAsync();
    const { latitude, longitude } = location.coords;

    if (latitude != null && longitude != null) {
      const newRegion = {
        latitude,
        longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };
      setRegion(newRegion);
      console.log(newRegion);

      if (mapRef.current) {
        mapRef.current.animateToRegion(newRegion, 500);
      }
    }
  }

  function pickOnMapHandler() {}

  return (
    <View style={styles.map}>
      {region ? (
        <MapView style={styles.mapPreview} region={region} ref={mapRef} />
      ) : (
        <View style={styles.mapPreview}>
          <Text>No location picked yet.</Text>
        </View>
      )}
      <View style={styles.actions}>
        <OutlinedButton icon="location" onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon="map" onPress={pickOnMapHandler}>
          Pick on Map
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationPicker;

const styles = StyleSheet.create({
  map: {
    height: 270,
    marginVertical: 8,
    borderRadius: 4,
  },
  mapPreview: {
    width: "100%",
    height: 200,
    marginVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.primary100,
    borderRadius: 4,
    overflow: "hidden",
  },
  actions: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
});
