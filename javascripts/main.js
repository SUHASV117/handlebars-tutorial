$(function() {

  // The List of annotation table data

  var summaryData = {
    tableSummary: {
      rows:[
        {
          cpgSection: [
            {
              label: "Section 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Section 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            }
          ],
          cqlCode: [
            {
              label: "hypertension-cpg.cql#L8",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
            },
            {
              label: "hypertension-cpg.cql#L45",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
            }
          ],
          description: [
            {
              text: "Contains definitions and related actions for Grade 1 and 2 Hypertensions"
            },
            {
              text: "Contains definitions and related actions for Grade 1 and 2 Hypertensions"
            }
          ],
          reference: [
            {
              label: "Section 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Section 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            }
          ],
          
        },
        {
          cpgSection: [
            {
              label: "Section 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Section 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            }
          ],
          cqlCode: [
            {
              label: "hypertension-cpg.cql#L8",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
            },
            {
              label: "hypertension-cpg.cql#L45",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
            }
          ],
          description: [
            {
              text: "Contains definitions and related actions for Grade 1 and 2 Hypertensions"
            },
            {
              text: "Contains definitions and related actions for Grade 1 and 2 Hypertensions"
            }
          ],
          reference: [
            {
              label: "Section 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Section 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            }
          ],
          
        }
      ]
    }

    
  }


  const Handlebars = require("handlebars");
  const template = Handlebars.compile("Name: {{name}}");
  console.log(template({ name: "Nils" }));




  var annotationData = {
    allGuidelines: [
      {
        cpg: "Section 1",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=1",
        cql: "hypertension-cpg.cql#L8",
        cql_link: ["https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8","https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L213"],
        description: "Contains definitions and related actions for Grade 1 and 2 Hypertensions",
        reference: ["Reference 1"],
        reference_link: ["https://pubmed.ncbi.nlm.nih.gov/30165516/", "https://pubmed.ncbi.nlm.nih.gov/29133354/", "https://pubmed.ncbi.nlm.nih.gov/30496105/", "https://pubmed.ncbi.nlm.nih.gov/27502908/"]
      },

      {
        cpg: "Section 2",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=3",
        cql: ["hypertension-cpg.cql#L41"],
        // cql: ["hypertension-cpg.cql#L8", "hypertension-cpg.cql#L413", "hypertension-cpg.cql#L4769", "hypertension-cpg.cql#L4781"],
        cql_link: "",
        description: "Contains definitions and related actions for Grade 1 and 2 Hypertensions",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 3",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=3",
        cql: "hypertension-cpg.cql#L8",
        cql_link: "",
        description: "Contains Blood pressure measurement instructions, diagnosis and data requirement",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 4",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=5",
        cql: "hypertension-cpg.cql#L8",
        cql_link: "",
        description: "Contanis Clinical Tests for Essential and Optimal settings",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 5",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=6",
        description: "Contains Cardiovascular Risks along with HMOD",
        cql: "hypertension-cpg.cql#L8",
        cql_link: "",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 6",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=7",
        description: "Contains Cardiovascular Risks along with HMOD",
        cql: "hypertension-cpg.cql#L8",
        cql_link:"",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 7",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=8",
        description: "Exacerbators and Inducers of Hypertension",
        cql: "hypertension-cpg.cql#L8",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 8",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=8",
        description: "Treatment of Hypertension",
        cql: "hypertension-cpg.cql#L8",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 9",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=11",
        description: "Common and Other Comorbidities and Complications of Hypertension",
        cql: "hypertension-cpg.cql#L8",
        reference: "Reference 1",
        reference_link: ""
      },
      {
        cpg: "Section 10",
        pdf_link: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026?cookieSet=1#page=13",
        description: "Specific circumstances",
        cql: "hypertension-cpg.cql#L8",
        reference: "Reference 1",
        reference_link: ""
      }
    ]
  };

  var templateScript = $('#annotation-table').html();
  var template = Handlebars.compile(templateScript);

  Handlebars.registerPartial("description", $("#annotation-table").html());

  $(".annotation-display").append(template(summaryData));



  // The List of Shoes
  var shoesData = {
    allShoes: [
      {
        name: "Nike",
        price: 199.00,
        color: "black",
        size: 10
      },
      {
        name: "Loafers",
        price: 59.00,
        color: "blue",
        size: 9
      },
      {
        name: "Wing Tip",
        price: 259.00,
        color: "brown",
        size: 11
      }
    ]
  };

  var templateScript = $('#shoe-template').html();
  var template = Handlebars.compile(templateScript);

  Handlebars.registerPartial("description", $("#shoe-description").html());

  $(".shoesNav").append(template(shoesData));

  // The List of Celebrities
  var people = {
    groupName: "celebrities",
    users: [
      {
        name: {
          firstName: "Michael",
          lastName: "Jordan"
        }
      },
      {
        name: {
          firstName: "Betty",
          lastName: "White"
        }
      }
    ]
  };

  var templateScriptTwo = $('#people-list').html();
  var templateTwo = Handlebars.compile(templateScriptTwo);

  $('.people').append(templateTwo(people));

  // Custom Function Helper - Grader
  var user = {
    name: "Betty",
    score: 85
  };

  Handlebars.registerHelper("grader", function(score) {
    console.log("Grade: " + score);

    if(score >= 90) {
      return "A";
    } else if (score >= 80 && score < 90) {
      return "B";
    } else if (score >= 70 && score <80) {
      return "C";
    } else {
      return "D";
    }
  });

  var templateScriptThree = $('#student').html();
  var templateThree = Handlebars.compile(templateScriptThree);

  $('.grader-results').append(templateThree(user));

  // Custom Block Helper
  var students = [
    {
      firstName: "Betty",
      lastName: "White",
      score: [22, 34, 45, 67]
    },
    {
      firstName: "Michael",
      lastName: "Jackson",
      score: [10, 34, 67, 90]
    }
  ];

  Handlebars.registerHelper("studentScore", function(students, options) {
    var templateWithData = "";

    for (var i = students.length - 1; i >= 0; i--) {
      students[i].score = students[i].score.reduce(function(prev, cur, index, array) {return prev + cur;});
      templateWithData += options.fn(students[i]);
    }
    return templateWithData;
  });

  var templateScriptFour = $('#student-scores').html();
  var templateFour = Handlebars.compile(templateScriptFour);

  $('.student-score-results').append(templateFour(students));



  // Handlebars.registerHelper("makeLink", function(text, url) {
  //   text = Handlebars.Utils.escapeExpression(text);
  //   url = Handlebars.Utils.escapeExpression(url);

  //   var theLink = <a href=""
  // });

});
