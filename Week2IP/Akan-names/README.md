# This project is about the Akan age calculator, Version Date: 25th Oct 2022

#### By David Muthui

#### Description This is my Indepedent Week 2 Project.
I have built a web application that takes a user's birthday and calculates the day of the week they were born and then depending on their gender outputs their Akan Name.
#### For example, if a user is male and the result of the calculation is Sunday, then the application matches that with Kwasi since Kwasi corresponds to Sunday which has an index 0. Hence the output the user will see should be something like “Your Akan name is Kwasi”. Below are the Ghanian's male and female names with their corresponding days of the week:

#### | DayOfWeek       | MaleName | FemaleName |
#### | ---------       | -------- | ---------- |
#### | Sunday          | Kwasi    | Akosua     |
#### | Monday          | Kwadwo   | Adwoa      |
#### | Tuesday         | Kwabeno  | Abenaa     |
#### | Wednesday       | Kwaku    | Akua       |
#### | Thursday        | Yaw      | Yaa        |
#### | Friday          | Kofi     | Afua       |
#### | Saturday        | Kwame    | Ama        |

#### I have been built this web page using visual studio code, Javascript, git bash and then uploading on Github.

#### BDD -The behavior that we'll need to write code to handle. -A sample of input that would demonstrate the behavior. -The expected output we would get when the code is working correctly. Day of the week (d) = ( ( (CC/4) -2CC-1) + ((5YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7 where; var century, yearDigit, monthDigit, monthDay, dayOfWeek, dayValue; 
// century - is the century digits. For example 1989 has CC = 19 
// yearDigit - is the Year digits (1989 has YY = 89) 
// monthDigit - is the Month // monthDay - is the Day of the month 
// dayOfWeek - Day of the week (d) = ( ( (CC/4) -2CC-1) + ((5YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7 
// dayValue - the number that represent day of week in java eg Sunday is 0

## Setup/Installation Requirements

#### Input the date of birth.
#### Input the month of birth. 
#### Input the year of birth. 
#### Select Gender Male or Female Get your Akan name. 
#### The output results then display.

#### To access for code for learning: Go to Git clone https://github.com/dmuthui/Akan-name.git Open cloned code on VS code Run on live server

## Known Bugs There are no known bugs on this project.

## Technologies Used Languages used include HTML, javascript and CSS (bootstrap). I have used editor Visual Studio Code for creating the app and Git & Git Bash terminal and browser console for coding.

## Support and contact details If you need any assistance on any issues or have questions, ideas or concerns. Kindly contact me through email: vyda2002us@gmail.com to make a contribution to the code or for any assistance on the app/project.

#### Github URL Link To be able to view the project click on https://dmuthui.github.io/Akan-name/

## License The License used is GPL

#### Copyright (c) 2022 David Muthui
