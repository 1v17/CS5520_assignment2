import { SafeAreaView, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

import ScreenBackground from '../components/ScreenBackground';
import ItemsList from '../components/ItemsList';
import { database } from '../firebase/FirebaseSetup';

const DietScreen = () => {

  const [items, setItems] = useState([]);
  const collectionName = 'dietItems';

  useEffect( () => {
    const unsubscribe = onSnapshot(collection(database, collectionName), 
    (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push({id: doc.id, ...doc.data()});
      });
      setItems(items);
    });
    return () => unsubscribe(); // Detach the listener
  }, []); // Set the database listener only once

  return (
    <SafeAreaView style={styles.container}>
      <ScreenBackground>
        <ItemsList items={items} type='diet' />
      </ScreenBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default DietScreen