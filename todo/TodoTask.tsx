import React from 'react'
import { ITask } from './interfaces'

import './todo.css';

interface Props{
    task: ITask
    completeTask(taskNameToDelete: string): void;
}

const TodoTask = ({task , completeTask}: Props) => {
  return (
    <div className='task'>
        <div className='content'>
            <span>{task.taskName}</span>
            <span>{task.deadline}</span>
        </div>

        <button onClick={()=>{completeTask(task.taskName)}} className='button'>Clear</button>
    </div>
  )
}

export default TodoTask