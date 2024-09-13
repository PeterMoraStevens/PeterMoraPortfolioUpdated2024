const PAST_ROLES = [
  {
    role: "Software Engineering Intern",
    id: 1,
    company: "Uber",
    startDate: "July 2024",
    endDate: "September 2024",
    description: "Kafka Team",
  },
  {
    role: "Teaching Assistant",
    id: 1,
    company: "Oregon State University",
    startDate: "September 2024",
    endDate: "Now",
    description:
      "Helping students in Data Structures (CS 261) during their recitations and in office hours, helping with grading",
  },
];

export default function Experience() {
  return (
    <div className="mb-16">
      <h2 className="mb-8 text-xl font-heading sm:text-2xl">Experience</h2>

      {PAST_ROLES.map((role, id) => {
        return (
          <div className="mb-8" key={id}>
            <h3 className="text-lg font-heading sm:text-xl">
              {role.role} @ {role.company}
            </h3>

            <p className="mb-4 mt-0.5 text-sm">
              {role.startDate} - {role.endDate}
            </p>
            <p>{role.description}</p>
          </div>
        );
      })}
    </div>
  );
}
