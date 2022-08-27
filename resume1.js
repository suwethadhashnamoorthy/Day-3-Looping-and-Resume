var  person = {
  basics: {
    name: "Suwetha Dhashanamoorthy",
    // label: "",
    // picture: "",
    email: "suwedhashna23@gmail.com",
    phone: "(+91)1234567890",
    degree: "BCA",
    website: "Your website URL",
    summary: "A one-sentence to one-paragraph overview text. Do not include any line-breaks.",
    location: {
      address: "xxxx address",
      city: "Chennai",
      state: "Tamil Nadu",
      countryCode: "India",
    },
    profiles: [
      {
        network: "LinkedIn",
        username: "Suwetha Dhashna",
        url: "www.linkedin.com/in/suwetha-dhashna"
      }
    ]
  },
  
  project: [
    {
      name: "Responsive Website Design ",
      projectLevel: "Finished",
      website: "https://corporacompany.000webhostapp.com",
      summary: "Lanuched responsive website to present company webpage using HTML, CSS and Boostrap to presentation and layout. The, Jquery is used to respond when the user clicks or does mouseover in any division it will give some illusion to be there. There are logo, constact, services, design layout, members details, reviews modulus is presented.", 
      Technology: ["HTML","CSS","Bootstrap","Jquery"],
    }
  ],
  education: [
    {
      institution: "Shanmuga Industries Arts and Science College",
      area: "Tiruvannamalai, Tamil Nadu",
      startDate: "2019-07-05",
      endDate: "2022-07-08",
      percentage: "88% upto 5th sem",
      courses: ["BCA"]
    }
  ],
  skills: [
    {
      name: "Front End",
      level: "Intermediate",
      WebTechonology: [
        "HTML", "CSS", "Javascript", "Bootstrap"
      ],
      IDE: "Eclipse",
      Tools: [
        "Sublime Text 3", "Visual Studio", "JIRA"
      ],
      Database: "MySQL"
    }
  ],
  languages: [
    {
      language:"Tamil, English",
      fluency: "Tamil, English"
    }
  ],
}
console.log(person);
