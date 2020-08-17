import React from 'react';

const Repository = (props) => {

    const { created_at, name, description, stargazers_count, open_issues_count, owner } = props.repo;

    return (
        <div>
            <div>
                <img src={owner.avatar_url} alt={"user's name" + owner.login} />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
               <div>Stars: {stargazers_count}</div>
               <div>Issues: {open_issues_count}</div>
               <div>Submitted XX days ago by {owner.login}</div>
            </div>
        </div>
    )
}

export default Repository;