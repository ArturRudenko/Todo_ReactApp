import React from 'react';
import PropTypes from 'prop-types'
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

function TodoItem({ todo, index }) {
    return(
    <li style={styles.li}>
        <span>
            <input type='checkbox' style={styles.input}/>
            <strong>{ index + 1}</strong>
            &nbsp;
            { todo.title }
        </span>
        <button type='button' style={styles.button}>&times;</button>
    </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
}

export default TodoItem