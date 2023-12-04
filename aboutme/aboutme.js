
/*
Function expLabelFunction is used to show a list of items on the textbox when user clicks the images/ logos
Type 1: passing a value to a function and check show text depending on the value (image #)
*/

function expLabelFunction(value)
{
    var div = document.getElementById("div");
    if (value==1)
    {
        let text1 = 'Northwest Airlines - Passenger Revenue Accounting Division<br>' + 
         'Role: Junior Programmer<br>' + 
         'Covered Period: July 2007 to November 2008 <br>' +
         '●	Developing and running programs and scripts for the revenue accounting system of Northwest Airlines <br>' +
         '●	Providing production support to its daily operation involving analysis and resolution of job failures <br>' +
         '●	Delivering ad hoc client requests such as data extracts & reports for specific information queries <br>' +
         '●	Other PRA related tasks such as system database conversion, job investigation, and coding standardization <br>' +
         'Applications Covered: COBOL, DB2, VSAM, JCL, SQL, CICS, SAS, Quickjob <br>' +
         'Other Skills: Abend-aid, Chgman, Easytrieve, File Aid, Sort Tools <br>' +
         'Environment: TSO/ISPF MVS OS/390 Mainframe'
         div.innerHTML = text1;  
         // change the text (inner html)
    }
    else if (value==2)
    {
        let text1 = 'Wellpoint - Wellpoint Dental System (WDS)<br>' + 
         'Role: Software Engineer<br>' + 
         'Covered Period: November 2008 to August 2010 <br>' +
         '●	Develop batch jobs and programs for the Wellpoint Dental System. <br>' +
         '●	Involved in the whole software development life cycle including requirements analysis, design formulation, coding and testing. <br>' +
         '●	Provide configuration management work <br>' +
         '●	Team lead role in some ad-hoc projects managing onshore and offshore programmers <br>' +
         '●	Create technical design documents from the requirements gathered <br>' +
         'Applications Covered: COBOL, DB2, SQL, VSAM, JCL, CICS <br>' +
         'Other Skills: Abend-aid, Chgman, File Aid, Sort Tools <br>' +
         'Environment: TSO/ISPF MVS Mainframe'
         div.innerHTML = text1;  
    }
    else if (value==3)
    {
        let text1 = 'QBE Management Services (Australia and Asia) <br>' + 
        'Role: Developer/ Analyst<br>' + 
        'Covered Period: August 2010 - September 2014 <br>' +
        '●	Development and maintenance of programs and applications for QBE Insurance Group. <br>' +
        '●	Involved in the whole software development life cycle including requirements analysis, design formulation, coding and testing. <br>' +
        '●	Enhance, update and develop new insurance packages based from business requirements <br>' +
        '●	Analyze business requirements, identifying solutions and develop designs within Evolve Application Framework (Mainframe) for QBE Australia <br>' +
        '●	Analysis, development and maintenance of eBusiness platform for QBE Asian markets (Hong Kong and Singapore) in Polisy 400 environment. <br>' +
        '●	Turn-over of roles and responsibilities to CSC/ DXC teams upon business acquisition of QBE projects <br>' +
        'Applications Covered: COBOL, DB2, SQL, VSAM, JCL, CICS <br>' +
        'Other Skills: Endevor, Smart Tables, Evolve Framework <br>' +
        'Environment: TSO/ISPF MVS Mainframe, Polisy400, AS/400'
        div.innerHTML = text1; 
    }
    else if (value==4)
    {
        let text1 = 'Bank of the Philippine Islands - Outward Remittance Division <br>' + 
         'Role: Mainframe Analyst/ Developer<br>' + 
         'Covered Period: April 19, 2022 to April 17, 2023 <br>' +
         '●	Development and maintenance of programs and applications for BPI specifically Foreign Outward Remittance System <br>' +
         '●	Setup and configure MF test environments during System Integration and UAT Testing <br>' +
         '●	Perform analysis on FORS system applications and provide solutions to fix and enhance the system <br>' +
         '●	Delivering ad hoc client requests such as report generation, account inquiry, and data extracts <br>' +
         '●	Prepare, run, and support batch jobs <br>' +
         'Applications/Languages Covered: COBOL, VSAM, JCL, CICS <br>' +
         'Environment: TSO/ISPF MVS Mainframe'
         div.innerHTML = text1;  
    }
    else if (value==5)
    {
        let text1 = 'Lovestring Gift Avenue Collection (E-commerce Retail) <br>' + 
         'Role: Entrepreneur/ Self-employed Business Developer/Analyst<br>' + 
         'Covered Period: March 2014 - May 2019 <br>' +
         '●	Develop brands such as Gift Avenue, Lovestring, GA Mobile and My Pastry Hub <br>' +
         '●	Business development including marketing, client prospecting, and business strategizing <br>' +
         '●	Coordinates with Web programmer to develop the company website as well as API integration on different platforms and databases. <br>' +
         '● Trains the team with product and content development applications such as photoshop, fotofuze, and e-commerce seller platforms <br>' +
         '●	Provided business requirements analysis and system analysis for e-commerce internal projects such as API integration, database design, and website platform <br>' +
         '●	Enhanced online presence by performing search engine optimization, basic website layout design and digital marketing <br>' +
         'Applications covered: Photoshop, Fotofuze, E-commerce platform, database, MySQL, MS Office, MS Visio  <br>'
         div.innerHTML = text1;  
    }
    else if (value==6)
    {
        let text1 = 'Collaborative Avenue of Concepts Incorporated (Gift Avenue Concept Cafe) <br>' + 
         'Role: President/ IT and Business Developer<br>' + 
         'Covered Period: May 2017- December 2018 <br>' +
         '●	Handles major business decisions as well as business planning and model/ framework development including marketing, client prospecting, and business strategizing <br>' +
         '●	Collaborates with small and micro level entrepreneurs to provide a micro-store platform for them <br>' +
         '● Trains the team with IT related applications such as POS Retail, Food POS, Cloud POS, and third party seller platforms such as Food Panda, Grab, and Honest Bee. <br>' +
         '●	Provides business requirements analysis and system analysis on its POS system <br>' +
         '●	Handles day to day IT operations specifically POS database extraction, processing and analysis <br>' +
         '●	Conducts periodical board meetings to oversee and manage the business <br>' +
         'Applications covered: POS Retail, Food POS, Cloud POS, MS Office, MS Visio <br>' +
         'Environment: Windows/ POS System - Food and Retail'
         div.innerHTML = text1;  
    }
    else if (value==7)
    {
        let text1 = 'Shadow Ace Gaming Collection <br>' + 
         'Role: Entrepreneur/ Business Partner<br>' + 
         'Covered Period: 2019 - Present <br>' +
         '●	Business development including marketing, client prospecting, and business strategizing <br>' +
         '●	Oversee the daily operations of the business <br>' +
         '●	Conducts meeting with business partners to facilitate the development and growth of the business <br>' +
         '●	Enhanced online presence by performing search engine optimization, basic website layout design and digital marketing <br>' +
         'Applications covered: Photoshop, E-commerce platform, MS Office  <br>' +
         'Environment: Windows'
         div.innerHTML = text1;  
    }
}

/*
Function showone() is used to show a list of items on the textbox when user clicks the images/ logos
Type 2: do not pass a value to the function; show text depending on the function called
*Commented for now since we are passing value and evaluate the value via nested else if*

function showOne () { // click on the first image
    var div = document.getElementById("div"); // get the div
    div.innerHTML = "Image with id 1 was clicked"; // change the text (inner html)
}

function showTwo () { // click on the first image
    var div = document.getElementById("div"); // get the div
    div.innerHTML = "Image with id 2 was clicked"; // change the text (inner html)
}

function showThree () { // click on the first image
    var div = document.getElementById("div"); // get the div
    div.innerHTML = "Image with id 3 was clicked"; // change the text (inner html)
}

*/