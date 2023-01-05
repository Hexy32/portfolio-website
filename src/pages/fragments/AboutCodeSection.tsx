function AboutCodeSection() {
  function generateNumbers() {
    const FINAL_LENGTH = 49
    let arrOfNumber = []

    for (let i = 1; i <= FINAL_LENGTH; i++) {
      arrOfNumber.push(<span key={i}>{i}</span>)
    }

    return arrOfNumber
  }

  function generateList(list?: string[], compoundList?: List[]) {
    if (list) {
      return (
        <ul>
          {list.map(item => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    } else if (compoundList) {
      return (
        <ul>
          {compoundList.map(listItem => (
            <li key={listItem.title}>
              {listItem.title}
              <ul>
                {listItem.children.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )
    } else {
      throw new Error('Expected list or compoundList!')
    }
  }

  return (
    <div>
      <div>{generateNumbers()}</div>
      <div>
        <span>about-me - src/info.txt</span>
        <div>
          <p>Programming languages I know:</p>
          {generateList(undefined, [
            {
              title: 'Development',
              children: ['TypeScript', 'JavaScript', 'node.JS', 'JSX & TSX'],
            },
            {
              title: 'Design',
              children: ['HTML', 'CSS', 'Node.JS', 'Sass'],
            },
            {
              title: 'Other',
              children: ['C#', 'Lua'],
            },
          ])}
          <p>Libraries I know:</p>
          {generateList([
            'React',
            'Vite',
            'WebPack',
            'TypeScript',
            'ESLint',
            'Prettier',
            'Many more...',
          ])}
        </div>
      </div>
    </div>
  )
}

export default AboutCodeSection

interface List {
  title: string
  children: string[]
}
