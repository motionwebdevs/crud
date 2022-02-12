import React, {useState} from 'react';
import TodoList from "./TodoList";

const Todo = () => {
    const [tasks, setTasks] = useState([])
    const [title, setTitle] = useState("")


    const handleChange = (e) => {
        setTitle(e.target.value)
    }
    const addTask = () => {
        const newTask = {
            id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            title
        }
        setTasks([...tasks, newTask])
        setTitle("")
    }
    const deleteTask = (id) => {
        setTasks(tasks.filter(el => el.id !== id))
    }
    const saveChanges = (id, editTitle) => {
        setTasks(tasks.map(el => el.id === id ? {...el, title: editTitle} : el))
    }
    return (
        <div className="flex flex-row justify-center h-full">
            <div className="basis-1/3 ">
                <div className="mt-6 flex justify-between  align-middle ">

                    <input onChange={handleChange}
                           value={title}
                           className="bg-gray-50 border mr-3 border-gray-300
                            text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                           placeholder="add task..."/>
                    <button
                        onClick={addTask}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
  <span
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      Добавить
  </span>
                    </button>
                </div>

                <ul className="text-sm  font-medium mt-6 text-gray-900 bg-white rounded-lg  border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    {
                        tasks.map((el, idx) => (
                            <TodoList el={el} idx={idx} tasks={tasks} deleteTask={deleteTask} key={el.id}
                                      saveChanges={saveChanges}/>
                        ))
                    }


                </ul>
            </div>
        </div>
    );
};

export default Todo;