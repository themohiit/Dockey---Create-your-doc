export const templates = [
  {
    id: "blank",
    label: "Blank Document",
    imageUrl: "/blank-document.svg",
    initialContent: `<p><strong>Start typing your document here...</strong></p>`,
  },
  {
    id: "software-proposal",
    label: "Software Development Proposal",
    imageUrl: "/software-proposal.svg",
    initialContent: `
      <h1>Software Development Proposal</h1>
      <p><strong>Prepared for:</strong> [Client Name]</p>
      <p><strong>Prepared by:</strong> [Your Name / Company]</p>
      <h2>Project Overview</h2>
      <p>Provide a brief summary of the project goals, scope, and objectives.</p>
      <h2>Scope of Work</h2>
      <ul>
        <li>Requirement Analysis</li>
        <li>Design & Prototyping</li>
        <li>Development</li>
        <li>Testing & Deployment</li>
      </ul>
      <h2>Timeline</h2>
      <p>Expected project completion time: [X weeks/months]</p>
      <h2>Pricing</h2>
      <p>Estimated cost: [Enter details]</p>
      <h2>Signatures</h2>
      <p>_______________________<br/>Client Signature</p>
      <p>_______________________<br/>Company Representative</p>
    `,
  },
  {
    id: "project-proposal",
    label: "Project Proposal",
    imageUrl: "/project-proposal.svg",
    initialContent: `
      <h1>Project Proposal</h1>
      <p><strong>Project Title:</strong> [Enter Title]</p>
      <p><strong>Prepared by:</strong> [Your Name]</p>
      <h2>Objective</h2>
      <p>Outline the key goals and expected outcomes of this project.</p>
      <h2>Methodology</h2>
      <p>Describe the approach, tools, and resources needed for completion.</p>
      <h2>Budget & Timeline</h2>
      <p>Provide an estimated cost and project schedule.</p>
    `,
  },
  {
    id: "business-letter",
    label: "Business Letter",
    imageUrl: "/business-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Company]</p>
      <p>[Address]</p>
      <p>[Date]</p>
      <br/>
      <p>[Recipient's Name]</p>
      <p>[Recipient's Company]</p>
      <p>[Address]</p>
      <br/>
      <p>Dear [Recipient Name],</p>
      <p>I am writing to [state purpose of letter]. Please find the details enclosed below.</p>
      <p>Sincerely,<br/>[Your Name]</p>
    `,
  },
  {
    id: "resume",
    label: "Resume",
    imageUrl: "/resume.svg",
    initialContent: `
      <h1>[Your Full Name]</h1>
      <p>[Your Email] | [Your Phone] | [LinkedIn / Portfolio]</p>
      <h2>Professional Summary</h2>
      <p>A highly motivated and detail-oriented professional with experience in [industry/field].</p>
      <h2>Experience</h2>
      <p><strong>[Job Title]</strong> - [Company Name] ([Years])</p>
      <ul>
        <li>Key responsibility or achievement</li>
        <li>Key responsibility or achievement</li>
      </ul>
      <h2>Education</h2>
      <p>[Degree], [Institution], [Year]</p>
      <h2>Skills</h2>
      <ul>
        <li>Skill 1</li>
        <li>Skill 2</li>
        <li>Skill 3</li>
      </ul>
    `,
  },
  {
    id: "cover-letter",
    label: "Cover Letter",
    imageUrl: "/cover-letter.svg",
    initialContent: `
      <p>[Your Name]</p>
      <p>[Your Address]</p>
      <p>[Date]</p>
      <br/>
      <p>[Hiring Manager’s Name]</p>
      <p>[Company Name]</p>
      <p>[Company Address]</p>
      <br/>
      <p>Dear [Hiring Manager’s Name],</p>
      <p>I am excited to apply for the position of [Job Title] at [Company Name]. With my background in [relevant field], I am confident in my ability to contribute effectively to your team.</p>
      <p>Thank you for considering my application. I look forward to discussing how my skills align with your needs.</p>
      <p>Sincerely,<br/>[Your Name]</p>
    `,
  },
  {
    id: "letter",
    label: "Letter",
    imageUrl: "/letter.svg",
    initialContent: `
      <p>[Your Address]</p>
      <p>[Date]</p>
      <br/>
      <p>Dear [Recipient Name],</p>
      <p>I hope this letter finds you well. I am writing to [state purpose].</p>
      <p>Thank you for your time and consideration.</p>
      <p>Sincerely,<br/>[Your Name]</p>
    `,
  },
];
