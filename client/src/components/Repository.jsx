import React from 'react';
import {daysAgo} from '../../date/date.js'

const Repository = (props) => {

    const { created_at, name, description, stargazers_count, open_issues_count, owner } = props.repo;

    if(stargazers_count >= 1000) {
        var statCount = stargazers_count / 1000 +"k";
      } else {
        var statCount = stargazers_count;
      }
  
      if(open_issues_count >= 1000) {
        var issuesCount = open_issues_count / 1000 +"k";
      } else {
        var issuesCount = open_issues_count;
      }

      var createdAtDaysAgo = daysAgo(created_at)

    return (
        <div>
            <div>
                <img src={owner.avatar_url} alt={"user's name" + owner.login} />
            </div>
            <h1>{name}</h1>
            <p>{description}</p>
            <div>
               <div>Stars: {statCount}</div>
               <div>Issues: {issuesCount}</div>
               <div>Submitted {createdAtDaysAgo} days ago by {owner.login}</div>
            </div>
        </div>
    )
}

export default Repository;