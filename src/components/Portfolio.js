import React from 'react';
import Project from './Project';

const Portfolio = () => (
    <section>
        <h2>Portfolio</h2>
        <Project 
            title="Project 1" 
            imageUrl="path_to_project1_image" 
            deployedUrl="https://project1.com" 
            githubUrl="https://github.com/user/project1" 
        />
        <Project 
            title="Project 2" 
            imageUrl="path_to_project2_image" 
            deployedUrl="https://project2.com" 
            githubUrl="https://github.com/user/project2" 
        />
        {/* Add more Project components for each of your projects */}
    </section>
);
export default Portfolio;
