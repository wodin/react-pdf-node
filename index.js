import React from "react";
import { Document, Page, StyleSheet, Text, View } from "@react-pdf/renderer";
import ReactPDF from "@react-pdf/renderer";
import Barcode from "./components/barcode";

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

// Create Document Component
const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Barcode fgColor="darkblue" bgColor="#ffa" />
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Barcode fgColor="darkblue" bgColor="lightgreen" />
      </View>
    </Page>
  </Document>
);

ReactPDF.render(<MyDocument />, `${__dirname}/../example.pdf`);
