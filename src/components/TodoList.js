import React, {useState} from 'react';

const TodoList = ({el, idx, tasks, deleteTask, saveChanges}) => {

    const [isEdit, setIsEdit] = useState(false)
    const [editTitle, setEditTitle] = useState(el.title)

    const handleSave = () => {
        saveChanges(el.id, editTitle)
        setIsEdit(false)

    }
    const handleEdit = () => {
        setIsEdit(true)
    }
    const handleChange = (e) => {
        setEditTitle(e.target.value)
    }
    const cancelEdit = () => {
        setEditTitle(el.title)
        setIsEdit(false)
    }

    return (
        <li className={`py-2 px-4 w-full flex justify-between align-middle
                            text-left rounded-t-lg border-gray-200 dark:border-gray-600 
                                ${idx === tasks.length - 1 ? "" : "border-b"}`}>


            {
                isEdit ? <input type="text" onChange={handleChange} defaultValue={editTitle}
                                className="text-black h-9 my-auto p-2"/> : <span className="my-auto">{el.title}</span>
            }

            <div className="flex">
                <button onClick={isEdit ? handleSave : handleEdit}
                        className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-lime-200 dark:focus:ring-lime-800">
  <span
      className="relative  px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {isEdit ? "сохранить" : "изменить"}
  </span>
                </button>
                <button
                    className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-red-200 via-red-300 to-yellow-200 group-hover:from-red-200 group-hover:via-red-300 group-hover:to-yellow-200 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:ring-red-100 dark:focus:ring-red-400">
  <span
      onClick={() => isEdit ? cancelEdit() : deleteTask(el.id)}
      className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
      {
          isEdit ? "отмена" : "удалить"
      }

  </span>
                </button>
            </div>
        </li>
    );
};

export default TodoList;