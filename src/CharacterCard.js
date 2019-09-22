import React from 'react';
import { format } from 'url';
 
export default class CharacterCard extends React.Component {
    state = {
        active: false
    }
    activate = () => {
        this.setState({
            active: true
        });
    if (this.state.active !== false){
        this.props.activationHandler(this.props.value);
        }
    }

    componentDidUpdate = (prevProps) => {
        console.log(this.props.attempt);
        if (prevProps.attempt === this.props.attempt ||                                      
            prevProps.boot === this.props.boot) {
                this.setState({ active: true })
        }
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}