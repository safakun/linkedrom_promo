import { Link } from "react-router-dom"

export const About = () => {

    document.title = 'About | LinkeDrom'

    return (
        <>
         <div className="container-fluid">
    <div className="row">
      <div className="col-md-12 about">
        <h1 className="text-center">
          About LinkeDrom
        </h1>
        <p>This is online web applicaion that allows you to automate your work with LinkedIn. </p>
        <p>It has following features:</p>
        <ul>
          <li>Automatic search and send invites with message to relevant users based on query</li>
          <li>Automatic search and message to contacts based on user query</li>
          <li>Search LinkedIn users based on your query</li>
          <li>Virtual private server based on Linux with domain and IP address</li>
          <li>Enterprise based video meeting app</li>
           <li>Enterprise based email server</li>
          <li>Online CV creator</li>
          {/* <li>LinkedIn Jobs search</li> */}
        </ul>  
        <p>It can be useful for recruiters, people, who want to find recruters and people, who wants to quickly improve linkedin account with finding new useful contacts. It also can be used by marketers to automate direct contact messaging.</p>
        {/* <p>Subscribers can also promote instagram accounts. Instagram promoter has implemented functionality to automate likes, follows and comments. One user can promote as much instagram profiles as needed.</p> */}
        <p>Here are <Link to='/tarifs'>Tarifs</Link>.</p>
        
      </div>
    </div>
   </div>
        </>
    )
}