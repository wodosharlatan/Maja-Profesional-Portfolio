import React, { useState, useEffect } from 'react';

const Skills = () => {
    const [skills, setSkills] = useState([
        { id: 1, title: 'Humanitárni vědy', duration: '3 roky praxe', items: ['Český Jazyk', 'Dějepis', 'Hudební výchova'], open: true },
        { id: 2, title: 'Přírodní vědy', duration: '4 roky praxe', items: ['Fyzika', 'Chemie', 'Biologie'], open: false },
    ]);

    const handleClick = (id) => {
        setSkills(skills.map(skill => (skill.id === id ? { ...skill, open: !skill.open } : skill)));
    };

    return (
        <main class="main">
            <section className="skills section" id="skills">
                <h2 className="section__title">Dovednosti</h2>
                <span className="section__subtitle">Co umím</span>
                <div className="skills__container container grid">
                    {skills.map(skill => (
                        <div key={skill.id} className={`skills__content ${skill.open ? 'skills__open' : 'skills__close'}`}>
                            <div className="skills__header" onClick={() => handleClick(skill.id)}>
                                <i className={`uil ${skill.title === 'Humanitárni vědy' ? 'uil uil-music-note' : skill.title === 'Přírodní vědy' ? 'uil uil-calculator' : 'uil-code-branch'} skills__icon ${skill.open ? '' : ''}`} />
                                <div>
                                    <h1 className="skills__title">{skill.title}</h1>
                                    <span className="skills__subtitle">{skill.duration}</span>
                                </div>
                                <i className="uil uil-angle-down skills__arrow" />
                            </div>
                            <div className="skills__list grid">
                                {skill.items.map((item,itemClassName) => (  itemClassName = item.replace(/\s/g, '').toLocaleLowerCase(),
                                    <div className="skills__data" key={item}>
                                        <div className="skills__titles">
                                            <h3 className="skills__name">{item}</h3>
                                        </div>
                                        <div className="skills__bar">
                                            <span className={`skills__percentage skills__${itemClassName}`} />
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