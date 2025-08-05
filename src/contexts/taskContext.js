import { createContext, useState } from 'react';
import firestore from '@react-native-firebase/firestore';

export const TaskContext = createContext({});

function TaskProvider({ children }) {
  const [inputTask, setInputTask] = useState('');
  const [isEditingTask, setIsEditingTask] = useState('');

  async function handleUpdateTask() {
    if (!isEditingTask) return;
    
    try {
      await firestore().collection('tasks').doc(isEditingTask).update({
        task: inputTask,
      });
      setInputTask('');
      setIsEditingTask('');
    } catch (error) {
      console.log('Erro ao atualizar tarefa:', error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        inputTask,
        setInputTask,
        isEditingTask,
        setIsEditingTask,
        handleUpdateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export default TaskProvider;
