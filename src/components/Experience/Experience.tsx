import React, { useState } from "react";
import { experienceType } from "../../interface/interface";
import Heading1, { Paragraph0, Paragraph2, Paragraph3 } from "../Heading/Heading";
import { Spacing2 } from "../Spacing/Spacing";

interface expProps {
  experiences: experienceType[];
}

const Experience: React.FC<expProps> = (props) => {
  const { experiences } = props;
  const myCompanies: string[] = [];
  experiences.map((exp) => {
    myCompanies.push(exp.companies);
  });
  const [choices, setChoices] = useState(String(myCompanies[0]));
  return (
    <Spacing2>
      <Heading1 content="Experience" />
      <div className="mt-10 flex flex-col overflow-hidden">
        <NavBar
          company={myCompanies}
          setChoices={setChoices}
          choices={choices}
        />
        <section className="mt-3 mx-10 flex">
          {experiences.map((experience) => {
            return (
              <div className="text-white-400" key={experience.id}>
                <Container
                  companies={experience.companies}
                  choices={choices}
                  role={experience.role}
                  date={experience.date}
                  description={experience.description}
                />
              </div>
            );
          })}
        </section>
      </div>
    </Spacing2>
  );
};

interface navProps {
  company: string[];
  choices: string;
  setChoices: React.Dispatch<React.SetStateAction<string>>;
}

const NavBar: React.FC<navProps> = (props) => {
  const { company, setChoices, choices } = props;
  return (
    <nav className="w-[calc(100vw_-_30px)] mx-10 flex overflow-x-scroll">
      {company.map((comp, id) => {
        return (
          <button
            key={id}
            className={
              comp === choices
                ? "border-b-2 border-blue-500 text-blue-500 transition-colors duration-300 font-semibold mr-10 min-w-max flex"
                : "mr-10 min-w-max flex"
            }
          >
            <span
              className="text-16"
              onClick={(e) => setChoices(String(e.currentTarget.textContent))}
            >
              {comp}
            </span>
          </button>
        );
      })}
    </nav>
  );
};

interface containerProps {
  companies: string;
  role: string;
  date: string;
  description: string[];
  choices: string;
}

const Container: React.FC<containerProps> = (props) => {
  const { companies, role, date, choices, description } = props;
  const companiesTag = (
    <> 
    {`${role}`} <span className="text-14 text-blue-500 font-semibold"> {`@${companies}`} </span>
    </>
  )
  return (
    <>
      {companies === choices && (
        <div className="flex flex-col items-start">
          <Paragraph0 content={companiesTag} />
          <Paragraph3 content={date} />
          {description.map((desc,id)=>{
            return (
              <div key={id}>
                <Paragraph2 content={desc}/>
              </div>
            )
          })}
        </div>
      )}
    </>
  );
};

export default Experience;
