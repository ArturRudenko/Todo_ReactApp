import React, {useState} from 'react'
import PropTypes from 'prop-types'

const styles = {
    form:{
        marginTop: '25px',
    },
    input:{
        padding: '8px 12px',
        marginRight:'15px',
        border:'1px solid #C4C4C4',
        borderRadius:'5px',
        outline:'none',
        width:'70%',
    },
    button:{
        padding:'8px',
        background:'lightgreen',
        border:'1px solid #C4C4C4',
        borderRadius:'5px',
        outline:'none',
    }
}

function useInputValue(defaultValue = '') {
    const [value, setValue] = useState(defaultValue)

    return {
        bind:{
            value,
            onChange: event => setValue(event.target.value)
        },
        clear: () => setValue(''),
        value: () => value,
    }
}

function AddTodo({ onCreate }) {
    const input = useInputValue('')

    function submitHandler(event) {
        event.preventDefault()

        if(input.value().trim()) {
            onCreate(input.value())
            input.clear()
        }
    }

    return (
        <form style={styles.form} onSubmit={submitHandler}>
            <input {...input.bind} style={styles.input} required={true}/>
            <button type='submit' style={styles.button}>Add to-do</button>
        </form>
    )
}

AddTodo.propTypes = {
    onCreate: PropTypes.func.isRequired
}

export default AddTodo