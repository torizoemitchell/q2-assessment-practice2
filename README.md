# Galvanize Message

## Important Note

This is a timed assessment.  It should be able to be completed in under 3 hours.  Remember to commit and push to your forked repository.  We will use the timestamps to evaluate how long it took.

## Project Description

The app is a simple message board.

### Requirements

You are responsible for creating

- [ ] Forking and cloning this GitHub Repo.
- [ ] Database Migration.
- [ ] Database Seed Data.
- [ ] RESTful API to handle messages resource.
- [ ] Client website that enables all CRUD functionality for messages resource. *You can decide what form the client website takes.*
- [ ] Deployment of full stack app on Heroku.

### Tests

We have provided you tests to help you build the database migrations, seeds and routes.  *Use them.*

At the command line type `npm test` to run the tests.

### Messages Object

You need to create routes, seed data and migrations for the following object.
**Note from Kristen:** We should specify data types and optional parameters (e.g., "not nullable") for table columns to help students pass the tests.

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
