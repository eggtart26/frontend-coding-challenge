import React from 'react';
import RepositoriesForm from './RepositoriesForm.jsx';
import Axios from 'axios';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reposData: [],
        }
    }

    // error handling
    handelError(error) {
        console.log(error)
    }

    getRepos() {
        Axios.get('https://api.github.com/search/repositories?q=created:>2018-07-15&sort=stars&order=desc&page=1')
        .then((getData) => {
            this.setState({
                reposData: getData
            })
        })
        .catch(this.handelError)
    }

    componentDidMount() {
        this.getRepos();
    }

    render() {
        console.log(this.state.reposData,'reposdata')
        return (
            <div>
                <div>App.jsx working</div>
                <RepositoriesForm />
            </div>
        )
    }

}

export default App;