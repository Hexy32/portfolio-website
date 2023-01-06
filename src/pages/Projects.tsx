import React, { useState } from 'react'

import Fuse from 'fuse.js'
import ProjectCard from './fragments/ProjectCard'
import calculatorImg from '../assets/calculator.png'
import infiniteSpaceImg from '../assets/infinite-space.png'
import s from '../sass/pages/projects.module.sass'
import streamlineWebsiteImg from '../assets/streamline-website.png'

function Projects() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')

  const cards: CardProps[] = [
    {
      title: 'To do list',
      date: 'Jun 20, 2022 - Nov 18, 2022',
      details:
        'I developed a to-do list application using TypeScript, Electron, and Webpack. TypeScript, a strongly-typed superset of JavaScript, provided a stable and scalable foundation for the application. Electron allowed me to build the app as a cross-platform desktop application, while Webpack enabled me to bundle the application code in an efficient manner. The app allows users to create and manage their own to-do lists, with features such as adding and completing tasks and having several to-do lists in the form of tabs. Overall, the combination of TypeScript, Electron, and Webpack allowed me to create a reliable and user-friendly to-do list app that can be used on multiple desktop platforms.',
      image: infiniteSpaceImg,
      projectLink: 'https://hexy32.github.io/infinite-space/',
      repositoryLink: 'https://github.com/Hexy32/infinite-space',
      tags: ['TypeScript', 'Electron', 'Webpack'],
    },
    {
      title: 'Streamline Website',
      date: 'Mar 16, 2022 - Dec 5, 2022',
      details:
        'A friend and I developed a production-ready website for my Minecraft server, Streamline SMP, using Next.JS, React, Sass, and Vercel. Next.JS, a framework for building server-rendered React applications, provided a powerful and efficient platform for the website. React allowed me to build the website as a collection of reusable components, and Sass allowed me to write clean and organized CSS code. The website was deployed with Vercel, a cloud platform for static sites and serverless functions, which ensured a smooth and reliable experience for users. Overall, the combination of Next.JS, React, Sass, and Vercel allowed me to create a professional and user-friendly website for my Minecraft server. Working with somebody allowed me to get more experience with Git and helped me get better at collaboration.',
      image: streamlineWebsiteImg,
      projectLink: 'https://streamlinesmp.com/',
      repositoryLink: 'https://github.com/Streamline-Network/streamline-website',
      tags: ['React', 'Next.JS', 'Sass', 'TypeScript', 'ESLint'],
    },
    {
      title: 'Simple Calculator',
      date: 'Apr 24, 2022 - Apr 27, 2022',
      details:
        'This is my simple calculator with a clean design using TypeScript. TypeScript, a strongly-typed superset of JavaScript, provided a stable and scalable foundation for the application. The calculator features a basic set of arithmetic operations including addition, subtraction, multiplication, and division, as well as a clear button to reset the input fields. The user interface was designed with a minimalistic and intuitive approach, making it easy to use for people of all ages. Overall, the use of TypeScript allowed me to create a reliable and user-friendly calculator with a clean design.',
      image: calculatorImg,
      projectLink: 'https://calculator-crxvpyz4j-streamline-network.vercel.app/',
      repositoryLink: 'https://github.com/Hexy32/calculator',
      tags: ['TypeScript', 'Snowpack App'],
    },
  ]

  function generateCards() {
    let finalCards = cards

    if (filter) {
      finalCards = finalCards.filter(card => card.tags.includes(filter))
    }

    if (query) {
      const fuse = new Fuse(finalCards, {
        keys: ['title', 'details', 'tags'],
        findAllMatches: true,
      })

      finalCards = fuse.search(query).map(returnedObject => returnedObject.item)
    }

    return finalCards.map(card => {
      return <ProjectCard key={card.title} {...card} />
    })
  }

  function generateTags() {
    const usedTags: string[] = []

    cards.forEach(card => {
      card.tags.forEach(tag => {
        if (!usedTags.find(usedTag => usedTag === tag)) usedTags.push(tag)
      })
    })

    return (
      <>
        {usedTags.map(tag => (
          <option key={tag} value={tag}>
            {tag}
          </option>
        ))}
      </>
    )
  }

  function handleInput(e: React.KeyboardEvent) {
    const input = e.target as HTMLInputElement
    setQuery(input.value)
  }

  function handleTagFilter(e: React.ChangeEvent) {
    const select = e.target as HTMLSelectElement
    setFilter(select.value)
  }

  return (
    <div className={s.wrapper}>
      {/* Controls */}
      <div className={s.controlsWrapper}>
        <input onKeyUp={handleInput} type="text" name="Search" placeholder="search" />
        <div className={s.carouselControls}>
          <span className="material-symbols-rounded">arrow_back_ios</span>
          <p>Project Carousel</p>
          <span className="material-symbols-rounded">arrow_forward_ios</span>
        </div>
        <select onChange={handleTagFilter} name="Filter tags">
          <option value="">Filter tags</option>
          {generateTags()}
        </select>
      </div>
      {/* Carousel */}
      <div className={s.cardsWrapper}>{generateCards()}</div>
    </div>
  )
}

export default Projects

export interface CardProps {
  title: string
  date: string
  details: string
  image: string
  projectLink: string
  repositoryLink: string
  tags: string[]
}
