import React, {  useState } from 'react'
import {  StyleSheet } from 'react-native';
import TodoList from './src';

export default function App() {
  const [inputValues, setInputValues] = useState(['', '', '', '', '', '']);

  return (
      <TodoList />
  )
}
const styles = StyleSheet.create({});
