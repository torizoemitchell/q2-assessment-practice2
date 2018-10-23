# Galvanize Message


## Read the entire README before beginning. Commit often.


## Important Note

This is a timed assessment.  You should be able to complete it in under 90 minutes.  Remember to commit and push to your forked repository. At the _very least_, you should commit after each test passes. We will use the timestamps to evaluate how long it took.

## Project Description

The app is a simple message board.

### Requirements

You are responsible for:

- [ ] Forking and cloning this GitHub Repo.
- [ ] Creating the test and development databases locally.
- [ ] Creating the database migration.
- [ ] Creating the database seed data.
- [ ] Creating a CRUD RESTful API to handle messages resource.
- [ ] Deployment of full stack app on Heroku.


### Tests

We have provided tests to help you build the database migrations, seeds and routes.  *Use them.* If you are unsure of what the test is asking for, open the test and read it. You can ask an instructor for test clarifications.

At the command line type `npm test` to run the tests.

**TIP: When testing your migrations you may need to drop and recreate your database before running the test so that your migration changes are reflected in the database.**

### Messages Object

You need to create routes, seed data and migrations for the following object.

```javascript
[{
	id:1,
  	name:'Criminal',
  	message:'What Are You?'
},{
	id:2,
    name:'Batman',
    message:'I\'m Batman'
}]
```

```text
┌──────────────────────────────────────────────────────────────────────────────────────────┐
│                                          messages                                        │
├─────────────┬─────────────────────────┬──────────────────────────────────────────────────┤
│id           │serial                   │primary key                                       │
|name         │varchar(255)             │not null                                          │
|message      │varchar(255)             │not null                                          │
│created_at   │timestamp with time zone │not null default CURRENT_TIMESTAMP                │
│updated_at   │timestamp with time zone │not null default CURRENT_TIMESTAMP                │
└─────────────┴─────────────────────────┴──────────────────────────────────────────────────┘
```
