import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'
import { findByLabelText } from '@testing-library/react';

const styles = {
    li:{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '5px',
        border:'1px solid #C4C4C4',
        borderRadius:'5px',
        marginBottom:'10px',
    },
    input:{
        marginRight:'10px',
        cursor: 'pointer',
    },
    button:{
        border:'none',
        background:'red',
        borderRadius:'50%',
        border:'none',
        outline:'none',
        color:'#FFF',
        fontSize:'15px',
        cursor:'pointer',
    }
}

function TodoItem({ todo, index, onChange }) {
    const { removeTodo } = useContext(Context)
    const classes = []

    if(todo.completed) {
        classes.push('done')
    }

    return(
    <li style={styles.li}>
        <span className={classes.join(' ')}>
            <input type='checkbox'
            checked={todo.completed}
             style={styles.input}
             onChange={() => onChange(todo.id)}
            />
            <strong>{ index + 1}</strong>
            &nbsp;
            { todo.title }
        </span>
        <button type='button' style={styles.button} onClick={() => removeTodo(todo.id)}>&times;</button>
    </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired
}

export default TodoItem