import React, { useState } from 'react';
import { StyleSheet, View, Platform, SafeAreaView } from 'react-native';
import { Thead, Tbody } from './zzzzzzz/Thead'
import Button from './zzzzzzz/Button'


const Table = () => {

  const [tableHead] = useState(['title', 'price', 'edit', 'delete'])

  const [courses] = useState([
    { _id: '1', title: 'node', price: 2000, edit: 'yes', delete: 'yes' },
    { _id: '2', title: 'react', price: 170000, edit: 'no', delete: 'no' },
    { _id: '3', title: 'java', price: 55000, edit: 'yes', delete: 'no' },
  ])


  return (
    <SafeAreaView style={{ width: '100%', alignItems: 'center',
     marginTop: 80 }} >
      <View style={styles.container}>

        <View style={styles.viewHead}>
          <Thead TheadStyle={styles.thead}>عنوان</Thead>
          <Thead TheadStyle={styles.thead}>قیمت</Thead>
          <Thead TheadStyle={styles.thead}>ویرایش</Thead>
          <Thead TheadStyle={styles.thead}>حذف</Thead>
        </View>

        {courses.map((course, key) => (
          <View key={course._id} style={styles.viewBody} >

            <Tbody TbodyStyle={{ backgroundColor: (key == "1") ? '#999' : '#555' }}>
              {key == "0" ? <Button style={styles.btn} >{course.title}</Button> : course.title}
            </Tbody>

            <Tbody TbodyStyle={{ backgroundColor: (key == "1") ? '#999' : '#555' }}>
              {course.price}
            </Tbody>

            <Tbody TbodyStyle={{ backgroundColor: (key == "1") ? '#999' : '#555' }}>
              {course.edit}
            </Tbody>

            <Tbody TbodyStyle={{ backgroundColor: (key == "1") ? '#999' : '#555' }}>
              {course.delete}
            </Tbody>
          </View>
        ))}
      </View>
    </SafeAreaView>

  )
}




const styles = StyleSheet.create({
  container: {
    width: '90%',
    height: '100%'
  },
  thead: {
    backgroundColor: 'silver',
  },
  viewBody: {
    flexDirection: 'row',
    width: '100%',
  },
  viewHead: {
    flexDirection: 'row',
    height: 40,
    width: '100%',
  },
  btn: {
    minWidth: "94%",
    height: 43,
    paddingHorizontal: Platform.OS === 'android' && 10
  },
  tbody: {
    height: 40,
    width: '100%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center',
    paddingRight: 2,
    paddingLeft: 2,
  },

});



export default Table
