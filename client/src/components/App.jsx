import React from 'react';
import RepositoriesForm from './RepositoriesForm.jsx'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
          <div>
            <div>App.jsx working</div>
            <RepositoriesForm />
          </div>
        )
    }

}

export default App;