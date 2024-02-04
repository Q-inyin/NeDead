import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Button } from "react-native";

const FlexDirectionBasics = ({ navigation }) => {
  const [flexDirection, setflexDirection] = useState("column");

  return (
    <SafeAreaView style={styles.Navigationbar}>
      <PreviewLayout
        label="flexDirection"
        values={["column", "row", "row-reverse", "column-reverse"]}
        selectedValue={flexDirection}
        setSelectedValue={setflexDirection}
      >
        <View
          style={[styles.box, { backgroundColor: "powderblue" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "skyblue" }]}
        />
        <View
          style={[styles.box, { backgroundColor: "steelblue" }]}
        />
      </PreviewLayout>
      <Button
        title="Go to Details"
        onPress={() => {
          /* 1. Navigate to the Details route with params */
          navigation.navigate('Home', {
            itemId: 86,
            otherParam: 'anything you want here',
          });
        }}
      />
    </SafeAreaView>
  );
};

const PreviewLayout = ({
  label,
  children,
  values,
  selectedValue,
  setSelectedValue,
}) => (
  <View style={{ padding: 10, flex: 1 ,marginTop: 20}}>
    <Text style={styles.label}>{label}</Text>
    <View style={styles.row}>
      {values.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setSelectedValue(value)}
          style={[
            styles.button,
            selectedValue === value && styles.selected,
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              selectedValue === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
    <View style={[styles.container, { [label]: selectedValue }]}>
      {children}
    </View>
  </View>
);

const styles = StyleSheet.create({
  Navigationbar: {
    flex: 1,
  },

  container: {
    flex: 1,
    marginTop: 8,
    backgroundColor: "aliceblue",
  },
  box: {
    width: 50,
    height: 50,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    minWidth: "48%",
    textAlign: "center",
  },
  selected: {
    backgroundColor: "coral",
    borderWidth: 0,
  },
  buttonLabel: {
    fontSize: 12,
    fontWeight: "500",
    color: "coral",
  },
  selectedLabel: {
    color: "white",
  },
  label: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 24,
  },
});

export default FlexDirectionBasics;