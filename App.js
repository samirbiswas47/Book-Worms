import React, { useState, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Button from "./component/Button";
import BookCount from "./component/BookCount";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function App() {
  const [bookCount, setBookCount] = useState(0);
  const [readingCount, setReadingCount] = useState(0);
  const [readCount, setReadCount] = useState(0);
  const [showAdd, setShowAdd] = useState(false);
  const [books, setBooks] = useState([]);
  const [newBook, setNewBook] = useState("");
  const bookNameRef = useRef();

  const handleAddBook = () => setShowAdd(true);
  const handleCloseBook = () => setShowAdd(false);

  const handleNewBookAdd = () => {
    if (newBook.trim()) {
      setBooks([...books, newBook]);
      setBookCount(bookCount + 1);
      setReadingCount(readingCount + 1);
      setNewBook("");
    }
    bookNameRef.current.focus();
  };

  const handleMarkRead = () => {
    setReadingCount(readingCount - 1);
    setReadCount(readCount + 1);
  };

  const renderItem = (item, index) => (
    <View style={styles.bookItem} key={index}>
      <Text style={{ flex: 1 }}>{item}</Text>
      <TouchableOpacity onPress={handleMarkRead}>
        <View style={styles.markReadButton}>
          <Text>Mark as Read</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <StatusBar style="auto" />
        <View style={styles.header}>
          <Text style={styles.headerText}>Book Worms</Text>
        </View>

        <View style={styles.body}>
          {showAdd && (
            <View style={styles.addSection}>
              <TextInput
                style={styles.input}
                placeholder="Enter Book Title"
                placeholderTextColor="#999"
                onChangeText={setNewBook}
                ref={bookNameRef}
                value={newBook}
              />
              <TouchableOpacity onPress={handleNewBookAdd}>
                <View style={styles.confirmButton}>
                  <Ionicons name="checkmark" color="white" size={30} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleCloseBook}>
                <View style={styles.cancelButton}>
                  <Ionicons name="close" color="white" size={30} />
                </View>
              </TouchableOpacity>
            </View>
          )}

          <FlatList
            data={books}
            renderItem={({ item, index }) => renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={() => (
              <View style={styles.emptyComponent}>
                <Text style={{ color: "#999" }}>No books added yet!</Text>
              </View>
            )}
          />

          <TouchableOpacity style={styles.addButton} onPress={handleAddBook}>
            <View style={styles.button}>
              <AntDesign name="plus" color="white" size={30} />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <BookCount title="Book" styles={styles} count={bookCount} />
          <BookCount title="Reading" styles={styles} count={readingCount} />
          <BookCount title="Read" styles={styles} count={readCount} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#fff",
    padding: 20,
    height: 70,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ede6e6",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  body: {
    flex: 1,
    padding: 5,
  },
  addSection: {
    height: 50,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    backgroundColor: "#ececec",
    paddingLeft: 5,
  },
  confirmButton: {
    width: 50,
    height: 50,
    backgroundColor: "#2dcc45",
    alignItems: "center",
    justifyContent: "center",
  },
  cancelButton: {
    width: 50,
    height: 50,
    backgroundColor: "#f99",
    alignItems: "center",
    justifyContent: "center",
  },
  bookItem: {
    height: 50,
    flexDirection: "row",
    padding: 5,
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ddd",
  },
  markReadButton: {
    width: 100,
    height: 30,
    backgroundColor: "#2dcc45",
    alignItems: "center",
    justifyContent: "center",
  },
  emptyComponent: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  button: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#AAD1E6",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "#fff",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    borderTopWidth: 0.5,
    borderTopColor: "#ede6e6",
  },
  footerItem: {
    flex: 1,
    alignItems: "center",
  },
  footerItemText: {
    fontWeight: "bold",
    fontSize: 16,
  },
});
