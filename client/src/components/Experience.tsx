const PAST_ROLES = [
  {
    role: "Teaching Assistant",
    id: 0,
    company: "Oregon State University",
    startDate: "September 2024",
    endDate: "Now",
    description:
      "Helping students in Data Structures (CS 261) during their recitations and in office hours. Helping professor with grading exams and assignments",
  },
  {
    role: "Software Engineering Intern",
    id: 1,
    company: "Uber",
    startDate: "July 2024",
    endDate: "September 2024",
    description:
      "On the Kafka Team saved 200 engineering hours annually and decommissioned 15 server instances by developing a new Java service tomigrate Kafka topic, consumer, and lifecycle notifications which deprecated an unmaintained internal tool",
  },
  {
    role: "Software Engineering Fellow",
    id: 1,
    company: "Uber",
    startDate: "January 2023",
    endDate: "August 2023",
    description:
      "Selected as 1 of 52 from 1400+ applicants (4% acceptance) for an 8-month data structures and algorithms program. Participated in 15 mock interviews with Uber software engineers honing algorithm-style interview skills. Completed technical homework going from understanding how to use arrays, strings, and hashmaps to learninglinked lists, trees, graphs, heaps/priority queues, backtracking, greedy and dynamic programming",
  },
  {
    role: "Software Engineering Intern",
    id: 1,
    company: "CodePath",
    startDate: "June 2023",
    endDate: "July 2023",
    description:
      "Gained proficiency in HTML, CSS, React, Node, Express, and SQL by working on projects provided by CodePath such as implementing a post-sharing feature on a Twitter clone",
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
