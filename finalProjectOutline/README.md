### Project Name

Final Project

### Github Link

https://github.com/GarciaEy/N220/tree/main/finalProjectOutline

### Major Features

- Allow users to add & remove tasks to the list or mark them as complete
- Allow users to change the text of the task and add any additonal properties to said task
- user only sees tasks theyve created and make sure specific tasks are assigned to a specific user

**Login Form**

- DOM references: password and username inputs
- Logic:
  - username is empty => tell user to fill in username
  - Tell user to enter valid password
    - password is empty
    - password is less than 8 characters
    - password contains no capital letters
    - password contains no numbers
- Events:
  - on login button click check login
