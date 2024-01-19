import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { v4 as uuidv4 } from 'uuid'

const ToDoList = ({ initialTaskTitles }) => {

    const [ tasks, setTasks ] = useState(initialTaskTitles.map((value) => ({ id: uuidv4(), text: value })));

    const removeToDo = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    }

    return (
        <View>
            {tasks.map((task) => (
                <View key={task.id}>
                    <Text>{task.text}</Text>
                    <Button title='Remove' onPress={() => removeToDo(task.id)}></Button>
                </View>
            ))}
        </View>
    )
}

export default ToDoList