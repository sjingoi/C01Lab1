import { useState } from "react"
import { View, Button, TextInput, StyleSheet } from "react-native";

const AddTask = ({ onAddTask }) => {

    const [ title, setTitle ] = useState("");

    const handleAddTask = (title) => {
        if (title !== "") {
            onAddTask(title);
            setTitle("");
        }
    }

    return (
        <View style={styles.addTodoForm}>
            <TextInput
                placeholder="Enter task"
                value={title}
                onChangeText={(text) => setTitle(text)}
                keyboardType="ascii-capable"
                returnKeyType="done"
                style={styles.input}
                ></TextInput>
            <Button title="Add Task" onPress={() => handleAddTask(title)}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addTodoForm: {
      margin: 10,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 10,
    },
});

export default AddTask;