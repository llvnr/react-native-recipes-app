import React from 'react';
import { Pressable, View, Text, Image, StyleSheet } from "react-native"

export default function TaskTile({ task, onUpdateTask, onDeleteTask }) {
    const onChangeStatus = () => {
        onUpdateTask(task.id)
    }

    const _onDeleteTask = () => {
        onDeleteTask(task.id)
    }

  return (
    <View style={styles.container}>
        <Pressable onPress={onChangeStatus} style={styles.subContainer}>
            <Image
                style={styles.check}
                source={task.isCompleted ? require('../../../assets/icons/icon_check_circle.png') : require('../../../assets/icons/icon_circle.png')}
            />
            <Text style={styles.title} >{task.title}</Text>
        </Pressable>
        <Pressable onPress={_onDeleteTask} >
            <Image
                style={styles.check}
                source={require('../../../assets/icons/icon_bin.png')}
            />
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between",
        padding:20
    },
    subContainer: {
        flexDirection:"row",
        alignItems:"center",        
    },
    title: {
        marginLeft:20,
        fontSize:16
    },
    check: {
        width:26,
        height:26,
    }
})
