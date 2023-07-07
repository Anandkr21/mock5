# mock5

# Freelance Portal

## `**Instructions**`

- Read the entire question carefully for at least 15 mins, understand it, and then code it.
- Don’t jump directly into the code.
- You should use **JSON-server** for this.
- Use **HTML, CSS, and JS DOM** to solve this question.
- You will have to also **deploy both the JSON server and the app**.

---

## `**Problem Statement**`

- You need to create a web application for an online marketplace that connects freelancers with clients.
- The application should have two sections
    - Admin Section
    - User Section
- Create a navigation bar with two buttons labeled "**Admin**" and "**User**." When a button is clicked, it should redirect the user to the corresponding section.
- Details of each section is provided below

---

# **`User Section`**

- Create a registration form with the following fields:
    - Name
    - Profile Picture
    - Email
    - Password
    - Profession (Should be a select tag with Student, Web Developer, Graphic Designer as options)
    - Skills (Can be Multiple Skills)
    - Hourly Rate
- On form submission, post the data to the JSON server on the route “**/freelancers**”.
- Use a JSON server to manage the data (using local storage or dummy object data will lead to disqualification).
- After submitting the form, show an alert or popup saying "Successfully registered." Also, post this information to the JSON server for the admin to access it.
- The **`db.json`** file should look something like this:

```json

{
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password",
      "profession": "Web Developer",
      "skills": ["HTML", "CSS", "JavaScript"],
      "hourly_rate": 25,
      "profile_picture": "profile1.jpg",
			"isBooked" : false
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "password": "password",
      "profession": "Graphic Designer",
      "skills": ["Photoshop", "Illustrator"],
      "hourly_rate": 30,
      "profile_picture": "profile2.jpg",
			"isBooked" : true
    }
  ]
}
```

---

# `````Admin **section**`

- This section will have a navbar with three different pages:
    - Login Page (**`login.html`**)
    - Freelancers Page (**`freelancers.html`**)
    - Reports Page (**`reports.html`**)
- The Freelancers and Reports pages should be private routes (accessible only if the admin is logged in).

## `````Login **Page**`

- Please utilize the **reqres API** (**https://reqres.in/**) to successfully log in as an admin. Refer to the documentation for the specific steps and parameters required for a successful login.
- After a successful login, move the admin to the Freelancers page.
- Show loaders and error messages.

## ```````````Freelancers **Page**`

- This route should be private only the admin with **reqres** login can access it.
- Display all the freelancers' information from the JSON server in the form of cards with **pagination** of 4 cards per page.
- Each card should display the freelancer's name, email, profession, skills, hourly rate, profile picture and booking status.
- **Sample UI**
    
    ![                                                         Reference UI](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00561075-1e16-4cad-991d-5a810c4827f9/UI_Reference.png)
    
                                                             Reference UI
    
- The page should also have sort, filter, and search functionality:
    - **Sort** freelancers by hourly rate.
    - **Filter** freelancers by profession.
    - **Search** freelancers by name (on change event).
- Each card should have a "**Hire**" button.
- When the admin clicks on the "**Hire**" button, the booking status should be changed to true, and the button should be disabled (Changes should be reflected in the JSON server as well as in the UI card).
- Each card should also have a "**Delete**" icon.
- The admin should be able to delete any freelancer (their entry in the JSON server should also get deleted).
- Each card should also have an "**Edit**" icon.
- When the admin clicks on the "**Edit**" icon, the admin should be able to edit the freelancer's information (profession, skills, hourly rate) and display the updated data. (This entry should be updated to the JSON server too)

---

## ```````Reports **Page**`

- This route should be private only the admin with **reqres** login can access it.
- Display an overall report of the freelancers in the form of a table.
- The report should include:
    - A total number of registered freelancers.
    - Number of freelancers per profession.
    - Average hourly rate of the freelancers.
    - No. of Booked and Available freelancers.
