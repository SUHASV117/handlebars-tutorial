const Handlebars = require("handlebars");

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
            },
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
          ],
          reference: [
            {
              label: "Reference 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Reference 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            },
            {
              label: "Reference 3",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            },
            {
              label: "Reference 4",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            },
          ],
        },
        {
          cpgSection: [
            {
              label: "Section 3",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            }
          ],
          cqlCode: [
            {
              label: "hypertension-cpg.cql#L8",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
            },
            {
              label: "hypertension-cpg.cql#L413",
              url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
            },
            {
                label: "hypertension-cpg.cql#L4769",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L4781",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              }
          ],
          description: [
            {
              text: "Contains Blood pressure measurement instructions, diagnosis and data requirement"
            },
          ],
          reference: [
            {
              label: "Reference 1",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
            },
            {
              label: "Reference 2",
              url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
            }
          ],
        },
        {
            cpgSection: [
              {
                label: "Section 4",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
               }
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L8",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L413",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              },
              {
                label: "hypertension-cpg.cql#L814",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L1217",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              },
              {
                label: "hypertension-cpg.cql#L1678",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              }
            ],
            description: [
              {
                  text: "Contains Clinical Tests for Essential and Optimal settings"
              },              
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
            
          },
          {
            cpgSection: [
              {
                label: "Section 5",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Section 6",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              },
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L1678",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
            ],
            description: [
              {
                  text: "Contains Cardiovascular risks along with HMOD"
              }
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
          },
          {
            cpgSection: [
              {
                label: "Section 7",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              }
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L1809",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
            ],
            description: [
              {
                text: "Exacerbators and Inducers of Hypertension"
              },
              
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
          },
          {
            cpgSection: [
              {
                label: "Section 8",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L8",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L413",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              }
            ],
            description: [
              {
                text: "Treatment of Hypertension"
              },
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
            
          },
          {
            cpgSection: [
              {
                label: "Section 9",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              }
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L8",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L413",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              }
            ],
            description: [
              {
                text: "Common and Other Comorbidities and Complications of Hypertension"
              }
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
            
          },
          {
            cpgSection: [
              {
                label: "Section 10",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
            ],
            cqlCode: [
              {
                label: "hypertension-cpg.cql#L8",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L8"
              },
              {
                label: "hypertension-cpg.cql#L413",
                url: "https://github.com/wellopathy/fhir-india-core/blob/main/scripts/generate-aliases.ts#L45"
              }
            ],
            description: [
              {
                text: "Specific Circumstances"
              }
            ],
            reference: [
              {
                label: "Reference 1",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=1"
              },
              {
                label: "Reference 2",
                url: "https://www.ahajournals.org/doi/pdf/10.1161/HYPERTENSIONAHA.120.15026#page=3"
              }
            ],
            
          },
      ]
    }
  }

  fs = require('fs');
  const templatestr = fs.readFileSync('./summary-template.md', 'utf-8');
  const template = Handlebars.compile(templatestr);
  targetstr = template(summaryData);
  fs.writeFileSync('summary.md', targetstr);





