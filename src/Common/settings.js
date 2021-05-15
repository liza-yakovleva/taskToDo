
import {Tooltip}  from 'react-bootstrap'
import React from 'react'

export  const  renderTooltipAllTasks = (props) =>(  
  <Tooltip id="all-task-tooltip" {...props}>
    Показать ВСЕ задания
  </Tooltip>
)

export const  renderTooltipDoneTask = (props) =>(  
  <Tooltip id="done-tooltip" {...props}>
    Показать только ВЫПОЛНЕНЫЕ задания
  </Tooltip>
)
export const  renderTooltipWillDoTask = (props) =>(  
  <Tooltip id="done-tooltip" {...props}>
    Показать, которые НАДО СДЕЛАТЬ задания
  </Tooltip>
)
export const  renderTooltipImportantTask = (props) =>(  
  <Tooltip id="done-tooltip" {...props}>
    Показать только ВАЖНЫЕ задания
  </Tooltip>
)

export const renderTooltipStar = (props) =>(  
  <Tooltip id="star-task-tooltip" {...props}>
    Нажмите, чтобы отметить как ВАЖНОЕ!
  </Tooltip>
)

export const renderTooltipTrash = (props) =>(  
  <Tooltip id="trash-task-tooltip" {...props}>
    Нажмите, чтобы УДАЛИТЬ это задание!
  </Tooltip>
)

export const renderTooltipDone = (props) =>(  
  <Tooltip id="done-task-tooltip" {...props}>
    Нажмите, чтобы ОТМЕТИТЬ  как ВЫПОЛНЕНОЕ задание!
  </Tooltip>
)

export const renderTooltipInputTasks = (props) =>(  
  <Tooltip id="input-task-tooltip" {...props}>
    Введите первые буквы вашего задания, чтобы НАЙТИ его в списке!
  </Tooltip>
)

export const renderTooltipAdd = (props) =>(  
  <Tooltip id="button-tooltip" {...props}>
    Внести НОВОЕ задание в список
  </Tooltip>
)

export const renderTooltipInput = (props) =>(  
  <Tooltip id="input-tooltip" {...props}>
    Напишите НОВОЕ задание в это поле
  </Tooltip>
)


