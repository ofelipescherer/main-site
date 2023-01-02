import styled from 'styled-components'

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 10%;
  margin-bottom: 5%;
`

export const Title = styled.h1`
  font-size: 30px;
  letter-spacing: 0.2rem;
  color: ${({ theme }) => theme.colors.typografy.title};
  margin-bottom: 3%;
`

export const Description = styled.p`
  font-size: 1rem;
  text-align: justify;
  text-indent: 2rem;
  line-height: 1.4;
  color: ${({ theme }) => theme.colors.typografy.text};
`

export const FiltersContainer = styled.div`
  margin-top: 5%;
  margin-bottom: 5%;
  display: flex;
  justify-content: space-between;
`

export const FilterContainer = styled.div`
  display: flex;
  gap: 1rem;
`

export const FilterByType = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.util.auxiliar_gray};
  border: 1px solid red;
  width: 200px;
  height: 50px;
`

export const FilterByName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.util.auxiliar_gray};
  border: 1px solid green;
  width: 200px;
  height: 50px;
`

export const FilterByDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.util.auxiliar_gray};
  border: 1px solid yellow;
  width: 200px;
  height: 50px;
`

export const Markdownh1 = styled.h1`
  font-size: 40px;
`
