import React, { useEffect } from 'react';
import Repository from './Repository.jsx'


var RepositoriesForm = (props) => {

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }, []);
  
    function handleScroll() {
      if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight) return;
      props.loadMore();
    }

    return(
        <div>
        {props.reposData.map((repos, index) => <Repository key={index} repo={repos}/>)}
        </div>
    );
}

export default RepositoriesForm; 
