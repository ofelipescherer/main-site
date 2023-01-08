import React from 'react'
import * as S from 'styles/about_me'

export default function AboutMe() {
  const [experienceOpen, setExperienceOpen] = React.useState<boolean>(false)

  return (
    <S.Wrapper>
      <S.Container>
        <div>
          <S.Title>
            <span>
              Skills <S.TitleHighlight>&</S.TitleHighlight>
            </span>
            <span>Experience</span>
          </S.Title>
          <S.TitleDescription>
            Aqui você encontra minha tabela de skills
          </S.TitleDescription>
        </div>

        <S.SkillWrapper>
          <S.SkillTitle>Skills</S.SkillTitle>
          <S.SkillContainer>
            <div>Visual</div>
            <div>React</div>
            <div>Javascript</div>
            <div>Figma</div>
            <div>Angular</div>
          </S.SkillContainer>
        </S.SkillWrapper>
      </S.Container>

      <S.Container>
        <S.SkillTitle>Experience</S.SkillTitle>
        <hr />
        <S.ExperienceContainer
          onClick={() => setExperienceOpen((prev) => !prev)}
        >
          <S.ExperienceTitle>Central Informatica Itatiba</S.ExperienceTitle>
          <S.ExperienceSubtitle>
            <span>[ 2020-2021 ]</span>
            <span>Suporte técnico</span>
          </S.ExperienceSubtitle>

          {experienceOpen && (
            <div className="expansion">
              <span>Imagem no expansion panel</span>
              <span>Descrição da empresa</span>
            </div>
          )}
        </S.ExperienceContainer>
      </S.Container>
    </S.Wrapper>
  )
}
