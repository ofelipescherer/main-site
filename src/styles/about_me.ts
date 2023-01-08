import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  max-width: 750px;
  margin: auto;
  margin-top: 5rem;
`

export const Container = styled.div`
  width: 50%;
`

export const Title = styled.h1`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  font-size: 250%;
`

export const TitleHighlight = styled.span`
  font-size: 120%;
`

export const TitleDescription = styled.div`
  padding: 1rem;
  margin-left: 1rem;
  margin-top: 1rem;
  border-left: 2px solid red;
`

export const SkillWrapper = styled.div`
  padding: 1rem;
`

export const SkillTitle = styled.h2`
  font-size: 150%;
`

export const SkillContainer = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`

export const ExperienceContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  cursor: pointer;
`

export const ExperienceTitle = styled.h3`
  font-size: 120%;
`
export const ExperienceSubtitle = styled.h3`
  font-size: 80%;
  display: flex;
  gap: 0.5rem;
`
