import React from 'react';
import RepositoriesForm from './RepositoriesForm.jsx';
import Axios from 'axios';
import {date} from '../../date/date.js'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            reposData: [],
            isFetching: false,
            page: 1
        }
        this.loadMore = this.loadMore.bind(this)
    }

    // error handling
    handelError(error) {
        console.log(error)
    }

    getRepos() {
        Axios.get(`https://api.github.com/search/repositories?q=created:>${date()}&sort=stars&order=desc&page=${this.state.page}`)
        .then((getData) => {
            this.setState({
                reposData: [...this.state.reposData, ...getData.data.items],
                isFetching: false
            })
        })
        .catch(this.handelError)
    }

    componentDidMount() {
        this.getRepos();
    }

    loadMore(){
        if(this.state.isFetching === true){
            return
        } else {
            this.setState({
                isFetching: true,
                page: this.state.page + 1
              })
              this.getRepos();
        }
      }

    render() {
        return (
            <div>
                <RepositoriesForm 
                reposData={this.state.reposData} 
                loadMore={this.loadMore}
                />
                {this.state.isFetching && 'Fetching to next page'}
            </div>
        )
    }

}

export default App;