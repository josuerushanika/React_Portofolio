import React from 'react'
import "./TechStack.css"

const TechStack = () => {

    const data = [
        {
            name: "Full Stack Developer"
        },

        {
            name: " Vanilla JavaScript"
        },

        {
            name: "React"
        },

        {
            name: "CSS"
        },

        {
            name: "SQL Server"
        },

        {
            name: "PostgreSql"
        },

        {
            name: "Mysql"
        },

        {
            name: "Lunix"
        },

        {
            name: "TCP/IP"
        },

        {
            name: "Netlify"
        },

        {
            name: "GitHub"
        },

        {
            name: "Heroku"
        },

        {
            name: "Express js"
        },

        {
            name: "C#"
        },

        {
            name: "CCNA"
        },

        {
            name: "CCNP"
        },

        {
            name: "Windows server"
        },

        {
            name: "Kali Lunix"
        },
        {
            name: "IOT"
        },

        {
            name: "Ruby On Rails"
        },
    ]

    const colors = [
    "#F1C40F",
    "#4B088A",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
    "#8181F7",
    "#FE2EF7",
    "#585858",
    "#800000",
    "#0088FE",
    "#00C49F",

    ];

  return (
    <div className='container techstack-section'>
       <div className='section-title'>
            <h5>Tech Stack</h5>
       </div>

       <div className='row'>
           {data.map((item,index) =>(
             <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12 left-max' key={index}>
             <div className='tech-content'>
                <span className='tech-number' style={{backgroundColor: colors[index]}}>
                    {index +1 }
                </span>
                <p>{item.name}</p>
                </div>
             </div>
           ))}
       </div>
    </div>
  )
}

export default TechStack