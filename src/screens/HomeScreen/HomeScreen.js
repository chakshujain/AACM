import React from "react";
import { Text, View } from "react-native";

export default function HomeScreen(props) {
  console.log(props.extraData.id);
  const wholeSeller = (
    <View>
      <Text>Welcome WholeSeller</Text>
    </View>
  );

  const retailer = (
    <View>
      <Text>Welcome Retailer</Text>
    </View>
  );
  return props.extraData.userType === "wh" ? (
    <View>{wholeSeller}</View>
  ) : (
    <View>{retailer}</View>
  );
}
