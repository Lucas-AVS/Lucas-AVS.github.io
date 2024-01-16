import { useEffect, useState } from 'react'
import Contact from '../../components/Contact'
import Projects from '../../components/Projects'
import Summary from '../../components/Summary'
import {
  FirstSession,
  ArrowDownButton,
  ArrowUpButton,
  ArrowDownSession,
  ArrowUpSession,
  SecondSession,
  FlexBox,
} from './styles'
import Skills from '../../components/Skills'

const scrollToBottom = () => {
  const windowHeight = window.innerHeight
  window.scrollTo(0, windowHeight)
}

const scrollToTop = () => {
  window.scrollTo(0, 0)
}

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollPosition(position)
    console.log(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <FirstSession>
        <Summary />
      </FirstSession>
      {scrollPosition <= 500 ? (
        <ArrowDownSession>
          <ArrowDownButton onClick={scrollToBottom} />
        </ArrowDownSession>
      ) : (
        <ArrowUpSession>
          <ArrowUpButton onClick={scrollToTop} />
        </ArrowUpSession>
      )}
      <SecondSession>
        <Projects />
        <FlexBox>
          <Skills />
          <Contact />
        </FlexBox>
      </SecondSession>
    </>
  )
}
