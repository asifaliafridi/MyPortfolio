```tsx
import React from 'react';
import { projectsData, projectsNav } from './Data';
import WorkItems from './WorkItems';

interface Project {
  id: string | number;
  category: string;
  image: string;
  title: string;
  [key: string]: any;
}

const Works = () => {
  const [item, setItem] = React.useState({ name: 'all' });
  const [projects, setProjects] = React.useState<Project[]>([]);
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (item.name === 'all') {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category.toLowerCase() === item.name;
      });

      setProjects(newProjects);
    }
  }, [item]);

  const handleClick = (
    e: React.MouseEvent<HTMLSpanElement>,
    index: number
  ) => {
    setItem({
      name: e.currentTarget.textContent!.toLowerCase(),
    });

    setActive(index);
  };

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? 'active-work' : ''
              } work__item`}
              key={index}
            >
              {item.name}
            </span>
          );
        })}
      </div>

      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </div>
  );
};

export default Works;
```
