import React, { useState } from 'react'

import Fuse from 'fuse.js'
import ProjectCard from './fragments/ProjectCard'
import infiniteSpaceImg from '../assets/infinite-space.png'
import streamlineWebsiteImg from '../assets/streamline-website.png'

function Projects() {
  const [query, setQuery] = useState('')
  const [filter, setFilter] = useState('')

  const cards: CardProps[] = [
    {
      title: 'To do list',
      date: 'Jun. 20, 2022 - Nov. 18, 2022',
      details: '',
      image: infiniteSpaceImg,
      projectLink: 'https://hexy32.github.io/infinite-space/',
      repositoryLink: 'https://github.com/Hexy32/infinite-space',
      tags: ['TypeScript', 'Electron', 'WebPack'],
    },
    {
      title: 'Streamline Website',
      date: 'Mar. 16, 2022 - Dec. 5, 2022',
      details: '',
      image: streamlineWebsiteImg,
      projectLink: 'https://streamlinesmp.com/',
      repositoryLink: 'https://github.com/Streamline-Network/streamline-website',
      tags: ['React', 'Next.JS', 'Sass', 'TypeScript', 'ESLint'],
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
    <>
      {/* Controls */}
      <input onKeyUp={handleInput} type="text" name="Search" placeholder="search" />

      <div>
        <span className="material-symbols-rounded">arrow_back_ios</span>
        <p>Project Carousel</p>
        <span className="material-symbols-rounded">arrow_forward_ios</span>
      </div>

      <select style={{ margin: 'auto' }} onChange={handleTagFilter} name="Filter tags">
        <option value="">Filter tags</option>
        {generateTags()}
      </select>
      {/* Carousel */}
      {generateCards()}
    </>
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
