import React from 'react';
import Repository from './Repository.jsx'


var RepositoriesForm = (props) => {

    return(
        <div>
        {props.reposData.map((repos, index) => <Repository key={index} repo={repos}/>)}
        </div>
    );
}

export default RepositoriesForm; 
