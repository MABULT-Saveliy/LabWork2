import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import LanguageCard from './components/LanguageCard';
import languages from './data/languages';

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={languages}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <LanguageCard 
            name={item.name}
            experience={item.experience}
            logo={item.logo}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
