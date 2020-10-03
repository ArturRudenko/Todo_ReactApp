import React from 'react'
import './Modal.css'

export default class Modal extends React.Component {
    state = {
        isOpen: false
    }

    render() {
        return (
            <React.Fragment>
                <button className='btn' onClick={() => this.setState({isOpen: true})}>Open modal</button>

                {this.state.isOpen && 
                    (<div className='modal'>
                        <div className='modal-body'>
                            <h2>Modal title</h2>
                            <p className='modal-text'>Thank you for checking out this App!</p>
                            <button className='btn' onClick={() => this.setState({isOpen: false})}>Close modal</button>
                        </div>
                    </div>
                )}
            </React.Fragment>
        )
    }
}