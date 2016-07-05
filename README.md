# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> MEAN Lab

## Prompt

This is an open-ended group lab! It is up to you and your teammates to come up with a project idea. It must, however, fulfill the following technical requirements...

## Technical Requirements

Your application must be MEAN. This includes...
* Using **MongoDB** as your database.
* Using **Mongoose** as your ORM (object-relational mapping).
* Using **Express** to handle HTTP requests and serve API endpoints.
* Using **AngularJS** as your front end framework.

Your app should have CRUD functionality for at least one model.

Your app should have at least two pages that are handled by Angular front end routing.

You must deploy your app to Heroku.

### Bonus I

Add a second model to your application, which is nested under the first.

### Bonus II

Write a custom directive for some piece of your app. For more guidance, refer to the [custom directive lesson notes](https://github.com/SF-WDI-LABS/shared_modules/tree/master/03-angular-mean/custom-directives/27).

### Bonus III

Replace `$http` work with `$resource`. For some more detail check out the [services class notes](https://github.com/SF-WDI-LABS/shared_modules/tree/master/03-angular-mean/services-promises-ngResource/27-28)

### Bonus IV

Create a service that abstracts some of the code away from the controllers. You particularly want to remove the `$http` and `$resource` work and logic from controllers. Servers shouldn't need to know where data comes from or how to get it - only who (what) to ask for the data. Controllers shouldn't need to specify how our front end interacts with the server-side. Abstract that work to a service! For more support on this bonus, [check out the service class notes](https://github.com/SF-WDI-LABS/shared_modules/tree/master/03-angular-mean/services-promises-ngResource/27-28)

### Bonus V

Create users and login.

### Bonu VI

Add more pages and properly handle their routes!

## Groups

You will be working in groups of **at least** 2 students and **at most** 4 students. We will leave the group selection up to you.

## Keep In Mind

KISS (Keep It Simple, Stupid), and don't re-invent the wheel!

You may have noticed by now that many of the apps we make in this class are very similar. Some have Artists and Songs, others have Posts and Comments, but they're more-or-less the same concept.

This isn't a WDI thing: it's a real-life thing! A tremendous number of apps follow the same structure.

If you keep this in mind it greatly simplifies the process of making something. You can take any of the walkthroughs and examples provided to you in class and turn them into something that *looks* completely different. A Honda and a Porsche are both pretty much the same thing inside.

The app you make today probably will not be the magnum opus that defines you as a developer for the rest of your life, so don't put that pressure on yourself. Have fun!

### Some ideas

- A Stack Overflow-style question/answer page
- Recipe / ingredients manager
- Competitive Cookie Clicker
- Image tagger
- Grocery list app
- Retail store inventory control platform
- An IMDB or Rotten Tomatoes-like movie reviews site

## Lab Submission

Each group please submit a pull request to this issue to this repo **by 9AM** tomorrow morning with...
* The names of the people in your group.
* A link to your lab repo.
* A link to your deployed application.
* An assessment of how you think your group performed on this mini-project.
