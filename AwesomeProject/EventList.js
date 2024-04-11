import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

const event = {
  creator: { name: "马" },
  name: "学习",
  photo: require("./test.jpeg"), 
  eventType: "学习",
  filterType: "室内",
  description: "手冲！",
  location: { address: "图书馆" },
  time: { 
    date: "2024-04-20", 
    start: "10:00", 
    end: "13:00",
    description: "看大蒙抖音。" 
  },
  participantLimit: 10,
  contactInfo: "111",
  isAutoMatching: false,
  isApplicationRequired: true,
};

const Event = () => {
  return (
    <ScrollView style={styles.container}>
      <Image source={event.photo} style={styles.photo} />
      <View style={styles.details}>
        <View style={styles.header}>
          <Text style={styles.name}>{event.name}</Text>
          <Text style={styles.peopleCount}>{`参加人数: ${event.participantLimit}人`}</Text>
        </View>
        <Text style={styles.dateTime}>{`${event.time.date} ${event.time.start} ~ ${event.time.end}`}</Text>
        <Text style={styles.location}>{event.location.address}</Text>
        <Text style={styles.creator}>Creator: {event.creator.name}</Text>
        <Text style={styles.contactInfo}>Tel: {event.contactInfo}</Text>
      </View>
      <View style={styles.tagContainer}>
        <Text style={styles.tag}>报名仅限男生</Text>
      </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{event.description}</Text>
        </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  photo: {
    width: '100%',
    height: 200,
  },
  details: {
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center', 
    marginBottom: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1, 
  },
  peopleCount: {
    fontSize: 16,
    color: 'gray',
    marginLeft: 10, 
  },
  dateTime: {
    fontSize: 16,
    color: 'black',
    marginBottom: 5,
  },
  location: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  descriptionContainer: {
    backgroundColor: '#FAFAD2',
    padding: 10,
    marginVertical: 5,
  },
  description: {
    fontSize: 16,
    color: 'gray',
  },
  creator: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  contactInfo: {
    fontSize: 16,
    color: 'gray',
    marginBottom: 5,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#F0F0F0'
  },
  tag: {
    color: '#00BFFF',
    fontSize: 16,
    padding: 5,
  },
});

export default Event;