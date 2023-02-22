import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

const AboutMe = () => {
  return (
    <Container>
      <Fade
        triggerOnce
        direction={"down"}
      >
        <Title>
          À propos de moi
        </Title>
      </Fade>
      <Fade triggerOnce>
        <Description>
          <Sentence>
            Je suis spécialisé dans le développement <span>Web Front-end et Back-end</span> ainsi que dans le développement <span>Mobile</span>.
          </Sentence>
          <Sentence>
            Dans ces domaines, je peux intervenir sur tous types de missions : de la simple maintenance à la création complète de votre <span>application web et/ou mobile</span>, jusqu'à leur déploiement.
          </Sentence>
          <Sentence>
            Grâce à mon expérience professionnelle, mes multiples projets personnels et ma formation à l'école Epitech, je fais aujourd'hui preuve d'une autonomie et d'une productivité me permettant de répondre à tous vos besoins en développement.
          </Sentence>
          <Sentence>
            J'ai acquis l'habitude de travailler sur des petits projets et d'autres d'une plus grande complexité, d'implémenter des petites fonctionnalités, comme de plus importantes.
          </Sentence>
          <Sentence>
            <span>Afin de donner vie à votre projet</span>, je vous accompagnerai pour trouver avec vous les meilleures réponses techniques et ergonomiques.
          </Sentence>
          <Sentence>
            Impatient de travailler avec vous, <span>n'hésitez pas à me contacter !</span>
          </Sentence>
        </Description>
      </Fade>
    </Container>
  );
};

export default AboutMe;

const Container = styled.div`
  flex: 3.15;
  display: flex;
  flex-direction: column;
  gap: 1.8vw;
`;

const Title = styled.div`
  width: fit-content;
  background: ${p => p.theme.gradients.textGradient};
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  font-weight: bold;
  font-size: 3vw;
`;

const Description = styled.div`
  font-weight: 500;
  color: rgba(255, 255, 255, .6);
  font-size: 1.07vw;
`;

const Sentence = styled.div`
  margin-bottom: .8vw;

  span {
    color: white;
    font-weight: 600;
  }
`;