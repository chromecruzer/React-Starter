import React, { useState } from 'react';

const TodoList = () => {
    const [task, setTask] = useState(["WakeUp", "Brush", "take ur dog to walk Nigga"]);
    const [newTask, setNewTask] = useState('');

    const handleChange = (event) => setNewTask(event.target.value);

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTask(prevTask => [...prevTask, newTask]);
            setNewTask("");
        }
    };

    const deleteTask = (index) => {
        const updatedTask = task.filter((_, indx) => indx !== index);
        setTask(updatedTask);
    };

    const moveUpTask = (index) => {
        if (index > 0) { // Check if the task is not already at the top
            const updatedTaskup = [...task];
            [updatedTaskup[index], updatedTaskup[index - 1]] = [updatedTaskup[index - 1], updatedTaskup[index]];
            setTask(updatedTaskup);
        }
    };

    const moveDownTask = (index) => {
        if (index < task.length - 1) {
            const updatedTaskDown = [...task];
            [updatedTaskDown[index], updatedTaskDown[index + 1]] = [updatedTaskDown[index + 1], updatedTaskDown[index]];
            setTask(updatedTaskDown);
        }
    };

    const editTask = (index) => {
        const newTaskName = prompt("Enter the new task name:");
        if (newTaskName !== null && newTaskName.trim() !== "") {
            const updatedTaskEdit = [...task];
            updatedTaskEdit[index] = newTaskName;
            setTask(updatedTaskEdit);
        }
    };

    return (
        <div className="todo-list-container">
            <h1>TodoList</h1>
            <div className="input-container">
                <input type='text' onChange={handleChange} placeholder='Enter UR task' value={newTask} />
                <button onClick={addTask}>ADD</button>
            </div>
            <ol className="task-list">
                {task.map((c, index) => (
                    <li key={index}>
                        <span>{c}</span>
                        <div className="button-container">
                            <button onClick={() => deleteTask(index)}>Delete</button>
                            {index > 0 && <button onClick={() => moveUpTask(index)}>MoveUp</button>}
                        <button onClick={() => moveDownTask(index)}>MoveDown</button>
                            <button onClick={() => editTask(index)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;



/**import React, { useReducer, useState } from 'react';

const initialState = {
    taskList: ["WakeUp", "Brush", "take ur dog to walk Nigga"],
    newTask: '',
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return { ...state, taskList: [...state.taskList, action.payload] };
        case 'DELETE_TASK':
            return { ...state, taskList: state.taskList.filter((_, index) => index !== action.payload) };
        case 'MOVE_UP':
            if (action.payload > 0) {
                const updatedTaskUp = [...state.taskList];
                [updatedTaskUp[action.payload], updatedTaskUp[action.payload - 1]] = [updatedTaskUp[action.payload - 1], updatedTaskUp[action.payload]];
                return { ...state, taskList: updatedTaskUp };
            }
            return state;
        case 'MOVE_DOWN':
            if (action.payload < state.taskList.length - 1) {
                const updatedTaskDown = [...state.taskList];
                [updatedTaskDown[action.payload], updatedTaskDown[action.payload + 1]] = [updatedTaskDown[action.payload + 1], updatedTaskDown[action.payload]];
                return { ...state, taskList: updatedTaskDown };
            }
            return state;
        case 'EDIT_TASK':
            const newTaskList = [...state.taskList];
            newTaskList[action.payload.index] = action.payload.newTaskName;
            return { ...state, taskList: newTaskList };
        case 'SET_NEW_TASK':
            return { ...state, newTask: action.payload };
        default:
            return state;
    }
};

const TodoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleChange = (event) => dispatch({ type: 'SET_NEW_TASK', payload: event.target.value });

    const addTask = () => {
        if (state.newTask.trim() !== "") {
            dispatch({ type: 'ADD_TASK', payload: state.newTask });
            dispatch({ type: 'SET_NEW_TASK', payload: '' });
        }
    };

    const deleteTask = (index) => dispatch({ type: 'DELETE_TASK', payload: index });

    const moveUpTask = (index) => dispatch({ type: 'MOVE_UP', payload: index });

    const moveDownTask = (index) => dispatch({ type: 'MOVE_DOWN', payload: index });

    const editTask = (index) => {
        const newTaskName = prompt("Enter the new task name:");
        if (newTaskName !== null && newTaskName.trim() !== "") {
            dispatch({ type: 'EDIT_TASK', payload: { index: index, newTaskName: newTaskName } });
        }
    };

    return (
        <div className="todo-list-container">
            <h1>TodoList</h1>
            <div className="input-container">
                <input type='text' onChange={handleChange} placeholder='Enter UR task' value={state.newTask} />
                <button onClick={addTask}>ADD</button>
            </div>
            <ol className="task-list">
                {state.taskList.map((c, index) => (
                    <li key={index}>
                        <span>{c}</span>
                        <div className="button-container">
                            <button onClick={() => deleteTask(index)}>Delete</button>
                            {index > 0 && <button onClick={() => moveUpTask(index)}>MoveUp</button>}
                            <button onClick={() => moveDownTask(index)}>MoveDown</button>
                            <button onClick={() => editTask(index)}>Edit</button>
                        </div>
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default TodoList;
 */