# ChatApp

This app is a compact social network that allows for real-time chat between users and the exchange of friend requests. Also allows for users to post comments and to reply to comments. 

Employs Spring Boot and MySQL for the backend and Angular 9 in the front end, which communicate via a set of REST endpoints. 

The app supports creating a new user account, login in with said account and creating posts or replying to posts made by another user. Exchanging friend requests is also supported. Includes a global real-time chat that can be used by any registered user.

In order to run this application, first run the "chat-app-schema.sql" script in the "src/main/resources" folder contained within the Spring Boot backend files (which is contained in a another repository). 
Run the Spring Boot files using your IDE of choice and then run the frontend files by using the "ng serve" command. Make sure you have the Angular CLI and Node.js installed. Visit http://localhost:4200/ to view the site.
Make sure ports 4200 and 8080 are not being used before compiling the files.

## Home page

![image](https://user-images.githubusercontent.com/61985975/84664069-e6d34180-af15-11ea-8371-b062821efddf.png)


