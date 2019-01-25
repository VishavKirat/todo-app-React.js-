import React from 'react'


let DisplayTasks = (props) =>{
    let {tasks} = props;
    let {deleteTask} = props;
    return (
        <div className="tasks-list" >
            {
                tasks.map((item)=>{
                   return <div className='task' key = {item.id} onClick={() => deleteTask(item.id)}>{item.name}</div>
                 })
            }
            
        </div>
    );
}

export default DisplayTasks;