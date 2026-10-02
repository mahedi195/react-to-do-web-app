import { useState } from "react";

import './App.css'



function TodoApp() {

    const [task_arr, set_task_arr] = useState(['react learning', 'Eat breakfast']);

    const [inputTasks, setInputTasks] = useState("");

    //inputTasks

    function addTaks() {
        set_task_arr([inputTasks, ...task_arr]);
        setInputTasks("");
    }

    function handleInputTaks(event) {
        setInputTasks(event.target.value);
    }


    function deleteTask(index) {

        const updated_Arr = [];
        task_arr.forEach(function (items, i) {
            if (index != i) {
                updated_Arr.push(items)
            }
        })

        set_task_arr(updated_Arr);

    }


    function move_up(index) {
        if (index == 0)
            return;

        const updated_Arr = [...task_arr];


        const temp = updated_Arr[index];
        updated_Arr[index] = updated_Arr[index - 1];
        updated_Arr[index - 1] = temp;
        set_task_arr(updated_Arr);

    }




    function move_down(index) {
        const arr_length = task_arr.length;
        if (index == arr_length - 1)
            return;

        const updated_Arr = [...task_arr];

        const temp = updated_Arr[index];
        updated_Arr[index] = updated_Arr[index + 1];
        updated_Arr[index + 1] = temp;

        set_task_arr(updated_Arr);

    }



    return (
        <div className="to_do">

            <div>

                <h1>To-Do List</h1>
                <div className="input_and_add_btn">


                    <input type="text" value={inputTasks} placeholder="Enter tasks . . ." onChange={handleInputTaks} />
                    <button type="text" className="add_btn" onClick={addTaks}>Add</button>

                </div>



            </div>



            <ol>

                {
                    task_arr.map((elements, index) =>
                        <li key={index}>
                            <span className="text"> {elements} </span>
                            <button className="delete_btn" onClick={() => deleteTask(index)}  >Delete</button>

                            <button className="move_btn" onClick={() => move_up(index)}>Up</button>
                            <button className="move_btn" onClick={() => move_down(index)} >Down</button>

                        </li>
                    )
                }


            </ol>
        </div>
    );
}

export default TodoApp;