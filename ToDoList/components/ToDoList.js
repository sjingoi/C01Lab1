import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid'
import AddTask from './AddTask';

const ToDoList = ({ initialTaskTitles }) => {

    const [ tasks, setTasks ] = useState(initialTaskTitles.map((value) => ({ id: uuidv4(), text: value })));


    const addToDo = (newTitle) => {
        setTasks((prevTasks) => [ ...prevTasks, { id: uuidv4(), text: newTitle }])
    }

    const removeToDo = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    return (
        <View style={styles.todoListContainer}>
            {tasks.map((task) => (
                <View key={task.id} style={styles.todoItem}>
                    <Text>{task.text}</Text>
                    <Button title='Remove' onPress={() => removeToDo(task.id)}></Button>
                </View>
            ))}
            
            <AddTask onAddTask={addToDo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    todoListContainer: {
      margin: 10,
    },
    todoItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,
      marginVertical: 5,
      borderColor: 'gray',
      borderWidth: 1,
      borderRadius: 5,
    },
});

export default ToDoList