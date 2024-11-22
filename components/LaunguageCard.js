import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function LanguageCard({ name, experience, logo }) {
  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.experience}>{experience}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  logo: {
    width: 80,
    height: 80,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  experience: {
    fontSize: 14,
    color: '#555',
  },
});
