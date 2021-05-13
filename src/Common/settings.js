
import {Tooltip}  from 'react-bootstrap'
import React from 'react'

export  const  renderTooltipAllTasks = (props) =>(  
  <Tooltip id="all-task-tooltip" {...props}>
    Показать все мои задания
  </Tooltip>
)

export const  renderTooltipDoneTask = (props) =>(  
  <Tooltip id="done-tooltip" {...props}>
    Показать только выполненные мои задания
  </Tooltip>
)

export const renderTooltipStar = (props) =>(  
  <Tooltip id="star-task-tooltip" {...props}>
    Нажмите, чтобы отметить как ВАЖНОЕ!
  </Tooltip>
)

export const renderTooltipTrash = (props) =>(  
  <Tooltip id="trash-task-tooltip" {...props}>
    Нажмите, чтобы удалить это задание!
  </Tooltip>
)

export const renderTooltipDone = (props) =>(  
  <Tooltip id="done-task-tooltip" {...props}>
    Нажмите, чтобы отметить  как выполненое задание!
  </Tooltip>
)

export const renderTooltipInputTasks = (props) =>(  
  <Tooltip id="input-task-tooltip" {...props}>
    Введите первые буквы вашего задания, чтобы найти его в списке!
  </Tooltip>
)

export const renderTooltipAdd = (props) =>(  
  <Tooltip id="button-tooltip" {...props}>
    Внести новое задание в список
  </Tooltip>
)

export const renderTooltipInput = (props) =>(  
  <Tooltip id="input-tooltip" {...props}>
    Напишите новое задание в это поле
  </Tooltip>
)


