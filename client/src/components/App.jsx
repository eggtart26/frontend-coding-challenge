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
        Axios.get('https://api.github.com/search/repositories?q=created:>2020-07-15&sort=stars&order=desc&page=1')
        .then((getData) => {
            this.setState({
                reposData: [...getData.data.items]
            })
        })
        .catch(this.handelError)
    }

    componentDidMount() {
        this.getRepos();
    }

    render() {
        return (
            <div>
                <RepositoriesForm reposData={this.state.reposData} />
            </div>
        )
    }

}

export default App;