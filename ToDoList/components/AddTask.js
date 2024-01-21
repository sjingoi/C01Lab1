import { useState } from "react"
import { View, Button, TextInput } from "react-native";

const AddTask = ({ onAddTask }) => {

    const [ title, setTitle ] = useState("");

    const handleAddTask = (title) => {
        if (title !== "") {
            onAddTask(title);
            setTitle("");
        }
    }

    return (
        <View>
            <TextInput
                placeholder="Enter task"
                value={title}
                onChangeText={(text) => setTitle(text)}
                keyboardType="ascii-capable"
                returnKeyType="done"
                ></TextInput>
            <Button title="Add Task" onPress={() => handleAddTask(title)}/>
        </View>
    )
}

export default AddTask;