# BetShare
App for sharing betting tips and "Best bets" amongst amateur and professional bettors.

Find the live BetShare app here: [BetShare](https://betshare.herokuapp.com/)

## Technologies Used
### React
We used React to build-out our Front-end. React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications, as it is optimal for fetching rapidly changing data that needs to be recorded.

### Rails
Rails is a server-side web application framework. Rails is a model–view–controller framework, providing default structures for a database, a web service, and web pages.

### PostgreSQL
We used PostgreSQL as our database. It is a relational database management system emphasizing extensibility and technical standards compliance.

## Wireframes
#### Homepage
![Homepage](https://github.com/jvela924/Project-4/blob/master/app/assets/images/Screen%20Shot%202019-09-05%20at%208.22.23%20PM.png)

#### Bet When Clicked
![BetClicked](https://github.com/jvela924/Project-4/blob/master/app/assets/images/Screen%20Shot%202019-09-05%20at%208.23.36%20PM.png)


## User Stories

1. I, as a user, will be able to create betting tips that contain the following information:

* Id
* Name of person
* Side bet (which side bet on)
* Opponent
* Home Team
* Spread
* Odds
* Amount Wagered
* Rationale

2. I, as a user, will be able to read all betting tips in the database.

3. I, as a user, will be able to edit betting tips.

4. I, as a user, will be able to delete betting tips.

## Live Scoring and ESPN API
We used a free endpoint from ESPN to pull in live scores for NFL, MLB, and NCAA Football games. Every time a user reloads the page, they'll see the score and status of the game (i.e. what quarter or inning the game is in). We added buttons so users can easily toggle betwen scores for different sports.

#### NFL Scores
![NFL Scores](https://github.com/jvela924/Project-4/blob/master/app/assets/images/Screen%20Shot%202019-09-08%20at%203.50.49%20PM.png)

#### MLB Scores
![MLB Scores](https://github.com/jvela924/Project-4/blob/master/app/assets/images/Screen%20Shot%202019-09-08%20at%203.51.01%20PM.png)

## Unsolved Problems
Although our app is fully functional, we discovered an issue that could reduce the user's experience.  When a user clicks to edit a betting tip, the tip form populates with that tip's data.  If the user then clicks to go directly to the add form without submitting an edit or returning to the home page, the form title updates accordingly, but the form does not clear.  The problem is that the form's state persists unless the user navigates away from the form and then returns.  

The form resides at the third level in our program hierarchy, along with our functions that handle data changes and submits.  Our CRUD functions reside in our main component at the second level.  The view and the overall state is set at the top level in our app.  To prevent the form from using its own state, we need to pass it the state to use from a higher level.  Since we are setting the state at the top level, we need to move the data change and submit functions from the third level to the top level.  These functions have dependencies on the CRUD functions, so they must be moved to the top level as well.  

Therefore, in order to clear the form we would need to move all of our functions up to the top level and pass them down.  Given the minor impact on user experience and the fact that the issue would only be encountered through a specific navigation sequence, we decided against doing such an extensive refactor.

## Improvements
Additional features that we could add to improve our app include authentication, which would enable the app to automatically tag posts with the user's name and limit tip editing and deleting to only the original poster.  This would also enable users to save tips to their own "favorites" list for later reference.

Another improvement would be to enable comments on each tip.  Also, we could add a like button to each tip.  We could use the number of likes to order tips on the page.  We could also implement sorting based on parameters such as post date, game date, poster, and favorite team.
