import React from 'react';



class Test extends React.Component {
    constructor() {
        super()
        this.state = { names: ['James', 'John', 'PaulJ', 'RingoJ', 'George'] };
    }

    renderTest() {
        return this.state.names.filter(name => name.includes('J')).map(filteredName => (
            <li key={filteredName}>
                {filteredName}
            </li>
        ))
    }

    render() {
        return (
            <div>
                {this.renderTest()}
            </div>
        );
    }

}

export default Test;