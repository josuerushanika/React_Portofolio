import React from 'react';
import ProjectList from './ProjectList';

const Project = () => {
  const data = [
    {
      name: 'MERN Stack Job Portal',
      description: 'lorysznzn  z nsmnmsjskjsksketeffvseu dgdgdgwwowowo dfsfsfsfwuwuwiwiw',
      Projectlink: 'https://github.com/josuerushanika?tab=repositories',
      techused: [
        {
          techname: 'Node Js',

        },
        {
          techname: 'Express JS',

        },
        {
          techname: 'React Js',

        },
        {
          techname: 'SQL server',

        },
      ],
    },

    {
      name: 'Conference Website',
      description: 'lorysznzn  z nsmnmsjskjsksketeffvseu dgdgdgwwowowo dfsfsfsfwuwuwiwiw',
      Projectlink: 'https://github.com/josuerushanika?tab=repositories',
      techused: [
        {
          techname: 'Node Js',

        },
        {
          techname: 'Express JS',

        },
        {
          techname: 'React Js',

        },
        {
          techname: 'SQL server',

        },
      ],
    },

    {
      name: 'MERN Stack Job Social Media',
      description: 'lorysznzn  z nsmnmsjskjsksketeffvseu dgdgdgwwowowo dfsfsfsfwuwuwiwiw',
      Projectlink: 'https://github.com/josuerushanika?tab=repositories',
      techused: [
        {
          techname: 'Node Js',

        },
        {
          techname: 'Express JS',

        },
        {
          techname: 'React Js',

        },
        {
          techname: 'SQL server',

        },
      ],
    },

    {
      name: 'MERN Stack Job Linkdenl',
      description: 'lorysznzn  z nsmnmsjskjsksketeffvseu dgdgdgwwowowo dfsfsfsfwuwuwiwiw',
      Projectlink: 'https://github.com/josuerushanika?tab=repositories',
      techused: [
        {
          techname: 'Node Js',

        },
        {
          techname: 'Express JS',

        },
        {
          techname: 'React Js',

        },
        {
          techname: 'SQL server',

        },
      ],
    },

    {
      name: 'MERN Stack Job Portal',
      description: 'lorysznzn  z nsmnmsjskjsksketeffvseu dgdgdgwwowowo dfsfsfsfwuwuwiwiw',
      Projectlink: 'https://github.com/josuerushanika?tab=repositories',
      techused: [
        {
          techname: 'Node Js',

        },
        {
          techname: 'Express JS',

        },
        {
          techname: 'React Js',

        },
        {
          techname: 'SQL server',

        },
      ],
    },
  ];

  return (
    <div className="container">

      <div className="section-title">
        <h5> Project </h5>
        <span className="line" />
      </div>

      <div className="row">
  {data.map((item) => (
    <div className="col-xl-6 col-lg-6 col-sm-12" key={item.id}>
      <ProjectList prop1={item.prop1} prop2={item.prop2} />
    </div>
  ))}
</div>


      </div>
    
  );
};

export default Project;
