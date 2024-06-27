import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([
        { id: 1, title: 'Frontend Development', duration: 'More than a year', items: ['CSS', 'HTML', 'JavaScript'], open: true },
        { id: 2, title: 'Backend Development', duration: 'Around 3 months', items: ['PHP', 'NODE JS', 'SQL'], open: false },
        { id: 3, title: 'Miscellaneous Skills', duration: 'Time varies by skill', items: ['GIT', 'Bash', 'React'], open: false },
    ]);

    const handleClick = (id) => {
        setSkills(skills.map(skill => (skill.id === id ? { ...skill, open: !skill.open } : skill)));
    };

    return (
        <main class="main">
            <section className="skills section" id="skills">
                <h2 className="section__title">Skills</h2>
                <span className="section__subtitle">My technical level</span>
                <div className="skills__container container grid">
                    {skills.map(skill => (
                        <div key={skill.id} className={`skills__content ${skill.open ? 'skills__open' : 'skills__close'}`}>
                            <div className="skills__header" onClick={() => handleClick(skill.id)}>
                                <i className={`uil ${skill.title === 'Frontend Development' ? 'uil-brackets-curly' : skill.title === 'Backend Development' ? 'uil-database' : 'uil-code-branch'} skills__icon ${skill.open ? '' : ''}`} />
                                <div>
                                    <h1 className="skills__title">{skill.title}</h1>
                                    <span className="skills__subtitle">{skill.duration}</span>
                                </div>
                                <i className="uil uil-angle-down skills__arrow" />
                            </div>
                            <div className="skills__list grid">
                                {skill.items.map(item => (
                                    <div className="skills__data" key={item}>
                                        <div className="skills__titles">
                                            <h3 className="skills__name">{item}</h3>
                                        </div>
                                        <div className="skills__bar">
                                            <span className={`skills__percentage skills__${item.toLowerCase()}`} />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
};

export default Skills;