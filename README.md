Coverage: 87.9%
# Cloud Native Project
## Introduction
I was tasked to complete a full stack CRUD application which covered all aspects of my recent training.
I planned this project using a Jira Board, followed by necessary documentation including UML's, and ERD, and a risk assessment for the project.
Within this project I have used a wide range of tools to achieve a functional application. The application includes a relational database for storing and manipulating data as well as a set of testing procedures for the application.
The front-end of the application is a fully functional website with and is integrated with the API created with Spring Boot.

### Prerequisite

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

### Installing

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

IMAGE HERE
  
Maven download instructions: 
1. [Download](https://maven.apache.org/download.cgi) Download maven from this link
2. Once installed, use the search bar prompted when the home button is pressed to access the environment variables used to install java mentioned above.
3. Next you want to add a variable to the system variables, the name of this will be M2_HOME and the path will be set to the apache-maven folder.
4. Next you will want to ammend your path found in the system variables and add %M2_HOME%\bin to the end with a semi colon present (;).
5. To check that this has worked, type command prompt in the search bar and use the command: mvn -version
6. If the return is the similar to the screenshot below it is working:

IMAGE HERE

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

<img>

### Getting Everything Working
These instructions will explain how to get the application working on your screen.

Go to [GitHub](https://github.com/) and make an account if you do not already, go to this link once completed - [Inventory Management System](https://github.com/zachzloof/zachzloof_assessment2). From here you want to fork the repository down from github onto your own account, this means that when you clone the application to your computer, you can use github as if it were your own, as it will be your own copy.

From here you will want to go into the forked repository and there will be a green "Code" option in the centre under the navbar if you click on this it will provide you with an remote link for your forked repository, you want to copy the HTTPS link.

Now navigate to your eclipse workshop folder which should exist within your user files, in this file you want to decide where you want this repository to go, once you have decided you will right click and "git bash here". Once this is done you will be presented with a git bash terminal, from here you want to enter: git clone (HTTPS LINK) from here github will download you a fresh ammendable copy of everything from testing to code.

Now you want to open eclipse, you will be asked to start or import a project, you want to import a maven project. From here you will need to navigate to the repository you just cloned and click on the "pom.xml" file, this will add everything you need onto eclipse. Now you will want to navigate to your resources folder, which will be in src/main/resources the file you want to check is application-prod.properties - the password should match the password you used for your SQL root on application start up.

Next you will need to open MySQL, from here you will need to run these lines of code:
*CREATE DATABASE cloudnative
*USE cloudnative
*CREATE TABLE champ (id INTEGER NOT NULL AUTO_INCREMENT, age INTEGER NOT NULL, bonuses INTEGER, defences INTEGER, division VARCHAR(255) NOT NULL, first_name VARCHAR(255) NOT NULL, last_name VARCHAR(255) NOT NULL, losses INTEGER NOT NULL, wins INTEGER NOT NULL, PRIMARY KEY (id));


Finally to run the application you will need to - TO DO LIST

MORE TO ADD
### Planning Resources

### Databases

## Running the tests

### Back-end:

#### Testing:
Integration testing was used for the ChampController.java class, this was done using MockMvc to essentially mock the controller to test whether the endpoints are being used correctly and function as they should.

IMAGE - me doing it

This integration test covered the majority of the back-end side of the application, however it didnt cover much for the domain Champ.java, so some unit testing was ideal.

IMAGE - coverage of the integration test

As for the unit testing that was done, I originally intended on unit testing every class, however after unit testing just the domain, and achieving very high coverage it was clear that further unit testing was not necessary.

IMAGE - me doing it
IMAGE - coverage of the tests being done together

### Front-End:
For the front-end of the application, I used HTML, CSS and JavaScript. I added bootstrap to make styling more consistent and professional.

IMAGES OF FRONT END AND EXPLANATIONS

JavaScript was fundamental to the functionality of the application as it was used to integrate the front end with the API, this was done using axios

IMAGE OF AXIOS
EXPLANATION
IMAGE OF FUNCTIONALITY
EXPLANATION
  
## Authors

* **Zachary Zloof** - *From initial work - finished project* - [zachzloof](https://github.com/zachzloof)


