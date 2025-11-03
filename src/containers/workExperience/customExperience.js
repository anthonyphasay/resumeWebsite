import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard2 from "../../components/experienceCard/ExperienceCard2";
import {customWorkExperience} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CustomExperience() {
  const {isDark} = useContext(StyleContext);
  if (customWorkExperience.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {customWorkExperience.experience.map((card, i) => {
                  return (
                    <ExperienceCard2
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
