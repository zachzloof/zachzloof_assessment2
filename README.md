Coverage: 87.9%
---------------
# Cloud Native Project
----------------------
## Introduction
---------------
I was tasked to complete a full stack CRUD application which covered all aspects of my recent training.
I planned this project using a Jira Board, followed by necessary documentation including UML's, and ERD, and a risk assessment for the project.
Within this project I have used a wide range of tools to achieve a functional application. The application includes a relational database for storing and manipulating data as well as a set of testing procedures for the application.
The front-end of the application is a fully functional website with and is integrated with the API created with Spring Boot.

## Prerequisite
----------------
For JDK 17 you will need: 
* Administrator access
* Windows: Operating system newer than Windows 7
* Mac: OS11+ or OS 10.14/10.15

For Eclipse you will need:
* Java downloaded and ready to use
* Operating Systems: Windows 10 or greater, Windows Server 2012 or greater 
* Processor: 1 GHz 
* Hard Disk Space: 16GB 
* Memory: 2 GB (32-bit), 4 GB (64-bit)
* Graphics: Support for DirectX 9 graphics 128MB RAM
  
For MySQL you will need:
* Administrator access
* Microsoft .NET Framework 4.5.2
* Microsoft Visual C++ 2015-2022 Redistributable
* Microsoft Windows 11+ or Windows Server 2022
 
For Git Bash you will need:
* A GitHub account
* Administrator access
* Command line access
  
For GitHub you will need:
* An Email
* Internet connection
  
For Apache Maven you will need:
* Java downloaded and ready to use
* Administrator access

For Spring Boot you will need: 
* Eclipse installed and ready to use
* Administrator access

## Installing
--------------
Java Development Kit download instructions: 
1. [Oracle link](https://www.oracle.com/java/technologies/downloads/#java17)
2. Click on the link from the "Oracle" website, make sure this is the official Oracle website to avoid issues/vulnerabilities.
3. I would recommend JDK 17, but any recent version will be fine.
4. Next you will need to navigate to your local install folder, and click on java, and you will find your JDK Windows x64.exe file, click on it and move on to install
5. Keep clicking next until you are finished and Java is installed.
6. Press the windows button and type "path", the best match should be an option to set up your environment variables for the system.
7. Once a window has opened, click on environment variables.
8. From here you will see two screens, the bottom screen is the system variables, ammend these as this will allow the applications to work on the whole system.
9. Add a new variable, and a window will pop up - the name of the new variable should be JAVA_HOME, with the path being set to your JDK folder.
10. Now you will need to ammend your path variable within your system variables, to do this find path and press edit.
11. From here, you will see a path (Second input), go to the very end of the path and add %JAVA_HOME%\bin, and make sure there is a semi colon (;) at the end.
12. To check that this is working, press the windows button, enter "command prompt" and from here enter "java -version", if you're JDK and version comes up, it has worked:

<img src="documentation\screenshots\tutorial\java.png" alt="Java check">
  
Maven download instructions: 
1. [Download](https://maven.apache.org/download.cgi) Download maven from this link
2. Once installed, use the search bar prompted when the home button is pressed to access the environment variables used to install java mentioned above.
3. Next you want to add a variable to the system variables, the name of this will be M2_HOME and the path will be set to the apache-maven folder.
4. Next you will want to ammend your path found in the system variables and add %M2_HOME%\bin to the end with a semi colon present (;).
5. To check that this has worked, type command prompt in the search bar and use the command: mvn -version
6. If the return is the similar to the screenshot below it is working:

<img src="documentation\screenshots\tutorial\maven.png" alt="Maven check">

SQL download instructions:
1. Download the installer from this [link](https://dev.mysql.com/downloads/windows/installer/8.0.html).
2. When you run the installer, it will prompt you to allow the application to make changes to your system, proceed and allow.
3. Next you will face a set of options for your setup type, click custom.
4. Now you need to select which software is going to be installed.
5. Choose the newest version of mySQL server, MySQL workbench and the samples and examples option.
6. Click next, and following that click execute.
7. Following this you will be on the installation page, follow this through and click execute.
8. From this keep pressing "next" until you reach the username and password setting stage, here you want to keep your username as root, and you can set any password, but it is recommended to vault this password as soon as you set it so you do not forget.
9. Now continue pressing "next" and "execute" until you reach a page which refers to connecting to a server, there should be only one which will be the "MySQL server", select this and connect to it.
10. From here keep clicking next until you hit finish, and SQL will be installed.
11. Next you will need to modify your system variables again.
12. Using the steps summarised before, get to your system variables window.
13. Add a new system variable with the name MYSQL_HOME with your SQL server folder as the path.
14. Next edit your path in your system variables.
15. From here you want to add %MYSQL_HOME%\bin and end it with a semi colon (;).
16. You now have SQL ready to use.

Eclipse download instructions: 
1. Download [Eclipse](http://www.eclipse.org/downloads).
2. Run the exe installer.
3. Select "eclipse IDE for developers".
4. Follow the application until eclipse is launching.
5. You now have eclipse installed on your system.

Git Bash download instructions: 
1. Here is the link for the [download](https://git-scm.com/download/win).
2. Run on the exe.
3. Allow git bash to make changes to your system.
4. Follow the installer through, clicking next and leaving all options as default, until you reach and complete installation.
5. You should now be able to access the git bash terminal from any folder by right clicking and clicking "git bash here".
6. If you now return back to "Getting Started" you will find information on how to initialise a git folder and clone a repo.

Spring Boot download instructions: 
1. Open Eclipse IDE.
2. Go to the "help" dropdown on the nav bar, and you should see "Eclipse marketplace", click this.
3. Search "Spring" in the searchbar, and the top result SHOULD be the right one, check below that the spring you are selecting is the correct one.

<img src="documentation\screenshots\tutorial\spring.png" alt="Spring download">

## Getting Everything Working
-------------------------------
These instructions will explain how to get the application working on your screen.

Go to [GitHub](https://github.com/) and make an account if you do not already, go to this link once completed - [Cloud Native Assessment](https://github.com/zachzloof/zachzloof_assessment2). From here you want to fork the repository down from github onto your own account, this means that when you clone the application to your computer, you can use github as if it were your own, as it will be your own copy.

From here you will want to go into the forked repository and there will be a green "Code" option in the centre under the navbar if you click on this it will provide you with an remote link for your forked repository, you want to copy the HTTPS link.

Now navigate to your eclipse workshop folder which should exist within your user files, in this file you want to decide where you want this repository to go, once you have decided you will right click and "git bash here". Once this is done you will be presented with a git bash terminal, from here you want to enter: git clone (HTTPS LINK) from here github will download you a fresh ammendable copy of everything from testing to code.

Now you want to open eclipse, you will be asked to start or import a project, you want to import a maven project. From here you will need to navigate to the repository you just cloned and click on the "pom.xml" file, this will add everything you need onto eclipse. Now you will want to navigate to your resources folder, which will be in src/main/resources the file you want to check is application-prod.properties - the password should match the password you used for your SQL root on application start up.

Next you will need to open MySQL, from here you will need to run these lines of code:
*CREATE DATABASE cloudnative
*USE cloudnative
*CREATE TABLE champ (id INTEGER NOT NULL AUTO_INCREMENT, age INTEGER NOT NULL, bonuses INTEGER, defences INTEGER, division VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, losses INTEGER NOT NULL, wins INTEGER NOT NULL, PRIMARY KEY (id));


Finally to run the application with the .jar file you will need to use GitBash within the 'cloud-native-project' folder which is found in the root. from here you will need to type 'java -jar cloud-native-project-0.0.1-SNAPSHOT.jar' upon pressing enter this will boot the Spring API and you will be able to use the application from Microsoft Edge. Once you have edge open you can go to 'http://localhost:8080/index.html' this will take you to the homepage and the application will be ready to use as long as the api is open (To close the api go into git bash and hit CTRL + C). I had some front end problems using Google Chrome due to accessibility(Very small aesthetical differences).

## Planning Resources and Version Control
-------------------------------------------
For the planning of my project I used a Jira Kanban board with the scrum feature. Within this I split up the work I intended to do into user stories and tasks to make the work flow more manageable. 

<img src="documentation\screenshots\tutorial\jira-usage.png" alt="Jira usage">

Jira was also very useful for prioritisation and time estimation, for prioritisation I used the MosCow principle (Must have, Should have, Could have, Would have). For the time estimation, I used the story point estimations that are built in with Jira.

As for version control I decided to use GitHub, regularly making feature branches for each aspect of the application, as well as regularly committing within these branches. This was done to maintain control of my work, as I could revert changes at any point or recover previous states of my work should something bad happen.

<img src="documentation\screenshots\tutorial\github-commits.png" alt="GitHub regular committing">

I linked my Jira board with git so that smart commits where possible, this makes it clear which commits relate to which user story or task.

<img src="documentation\screenshots\tutorial\smart-commits1.png" alt="GitHub and Jira linked using smart commits">
### Databases
This project needed databases to store and retrieve information, for testing a simple H2 in-memory database was used, this database interacted with the .sql files within src/main/resources to test the application.

<img src="documentation\screenshots\backend\h2-database.png" alt="H2 in-memory database configuration">

As for the main functionality of the application, a MySQL database was used, as this could be used with MySQL Server to allow the application to go live if need be. This ERD will show you how my table was structured to be stored: 

<img src="documentation\Diagrams\ERD.png" alt="ERD representing the only table in the database">

## Back-end
------------
The back-end of my application was made using SpringBoot, a java framework. Using this framework I started by importing a fresh Spring starter, and from here added my properties and java code.

First I made my domain for the application

<img src="documentation\screenshots\backend\changes-domain.png" alt="Champ.java domain being created with values">

This will be used throughout the classes made.

Next I made my repository for the application

<img src="documentation\screenshots\backend\repo-original.png" alt="Repository being made, which adds methods to the service">

This interface will add a whole load of methods for us to use in our service.
I had an issue with the application due to a problem with how "FName" and "LName" where being read, so this had to be changed to this: 

<img src="documentation\screenshots\backend\vital-changes-repo.png" alt="Vital changes to repository to make the application function">

Next I made my service for the application

<img src="documentation\screenshots\backend\champ-service-original.png" alt="ChampService.java service created ">

The service will be used in the controller.

Next I made my controller for the application

<img src="documentation\screenshots\backend\read-write-methods.png" alt="Read and write methods of the controller class">
<img src="documentation\screenshots\backend\update-delete-methods.png" alt="Update and delete methods of the controller class">

The controller is the class which maps out the HTML end points for communication to the API, I used Postman to test whether these worked when the SpringBoot application was running. 

Changes to the properties folders were also required for the application to incorporate databases, two different profiles had to be used, one for testing and one for everything else. The prod.properties contained SQL based spring.datasource properties whereas test.properties contained H2 based spring.datasource properties.

## Testing
--------------
Integration testing was used for the ChampController.java class, this was done using MockMvc to essentially mock the controller to test whether the endpoints are being used correctly and function as they should.

<img src="documentation\screenshots\testing\testing1.png" alt="Test class being created">

This integration test covered the majority of the back-end side of the application, however it didnt cover much for the domain Champ.java, so some unit testing was ideal.
To unit test the domain, I had to add the equals verifier to my pom.xml file, after this was done I proceeded to testing the domain.

<img src="documentation\screenshots\testing\testing3.png" alt="Test results with integratation testing">

I originally intended on unit testing every class, however after unit testing the domain, and achieving very high coverage it was clear that further unit testing was not necessary.

<img src="documentation\screenshots\testing\testing4.png" alt="Concluded test results with unit testing and integration testing">

## Running the tests
---------------------
To run the tests yourself, all you need to do is right click the root of the folder, bring your mouse over "Coverage As". You will see options come up, you will want to select "J-Unit Test", this will give you a set of test results as well as an overall test coverage for the application

## Front-End
-------------
For the front-end of the application, I used HTML, CSS and JavaScript. I also added bootstrap to make styling more consistent and professional.

<img src="documentation\screenshots\frontend\index6.png" alt="The first version of the main webpage">

This was the first version of my front end, this was the original set plan but as time was on my side I decided to spend more time configuring the HTML/CSS.

<img src="documentation\screenshots\frontend\index8.png" alt="The second version of the main webpage">

As you can see the page fits nicely, resulting in a better user experience. However the brightness and long hours was starting to hurt my eyes, so I decided to implement a darkmode button with a little help from JavaScript:

<img src="documentation\screenshots\frontend\index9.png" alt="The third version of the main webpage">

Once darkmode was implemented I was satisfied with the foundation of the page, Here is the final version of the page with the final changes added:

<img src="documentation\screenshots\frontend\final-crud.png" alt="The final version of the main webpage">

As you can see from this screenshot, there is now a link to another page. I decided that I wanted to implement the database onto another page, meaning that one page interacts with the database (CRUD), whereas the other just reads the database and outputs it to the page.

<img src="documentation\screenshots\frontend\index10.png" alt="The phone version of the main webpage">

I made sure to make the page react to the size of the window, meaning that laptops and phone users will still have a user friendly experience.

<img src="documentation\screenshots\frontend\index11.png" alt="The first version of the second webpage">

This was the first version of the second page, I was just trying to get the functionality working originally with some basic styling.

<img src="documentation\screenshots\frontend\page2.png" alt="The final version of the second webpage">

This is the final version of the second page, it is not visible from the screenshot but It works fluently, and is styled in a user friendly way.

JavaScript was fundamental to the functionality of the application as it was used to integrate the front end with the API, this was done using axios. Without JavaScript there would be no communication or link from the front-end to the bank-end.

<img src="documentation\screenshots\javascript\basic-methods.png" alt="The basic methods finished">

These basic methods were first created in the script.js file, the addChamp method along with the refresh method will be used throughout the script.

<img src="documentation\screenshots\javascript\read-methods.png" alt="The read methods finished">

These read methods were next created, there are more but they are very similar.

<img src="documentation\screenshots\javascript\UD-methods.png" alt="The update and delete methods finished">

These methods were created next, these are my remove and replace methods, which are essential for the udate and remove functionality of the CRUD.
As you can see originally I made a small error, forgetting to add the "http://localhost:8080/" to these methods, resulting in them creating errors.

<img src="documentation\screenshots\javascript\darkmode.png" alt="Darkmode added to the application">

This was something I later added when I was styling my HTML further, as the brightness of the page was beginning to hurt my eyes.

As I decided to implement a second webpage, this also meant I had to implement more JavaScript to the program as the second page would need to communicate with the database.
Now looking back at the way I went at this, it could have been done a much more efficient way using the request "getByDivision" rather than getting all of the information and checking the division manually.


<img src="documentation\screenshots\javascript\script2-method-structure.png" alt="script2.js method structure for the axios.get methods">
<img src="documentation\screenshots\javascript\DOM-extra.png" alt="Extra DOM's required for the second webpage">

This would be the one thing I would change, as the amount of code used could have been chopped down significantly if I attempted it a different way, however it was a learning process.
  
## Authors
-----------

* **Zachary Zloof** - [zachzloof](https://github.com/zachzloof)


