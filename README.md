<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">

</p>
 

# REST API with NEST JS
In this minor project, I have implemented REST API with the help of NestJS which is a Node.js framework for building scalable web applications with Typescript. 

## Objective
The objective of this minor project is to understand the NestJS framework, working with MVC and typescript, how to work with DTOs, and how to integrate ORM and handle data while working with real-world applications.

## Description
REST API using NEST.js and Prisma as ORM for Postgres SQL. There are two resources in this project:
- The first one is User in which CRUD operations are performed with the help of DTOs
- The second resource is employee in which the CRUD operations are performed with the help of database services along with Prisma


## Installation and Usage

- Clone the repo
```
$ git clone git@github.com:progbisht/nestjs-rest-api.git
```

- Open the project with any modern code editor and install the dependencies.
```
$ npm install
```

- Run the server
```
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

- Test out the endpoints using tools like Postman or Thunderclient.


## Endpoints

POST    /employee
- Creates a new employee
- Accepts data strictly in format
  ```
   {
    "name": "Andres Hejlsberg",
    "email": "andres@gmail.com",
    "role": "Admin"
  }
  ```
  
GET     /employee
- Fetches all employee
  
GET     /employee/:id
- Fetch a single employee with matching ID
  
PATCH   /employee/:id
- Update an existing user with a matching ID
- Accepts data in format
  ```
  {
    "name": "Andres Hejlsberg",
    "email": "andres@gmail.com",
    "role": "Admin"
  }
  ```
  
DELETE  /employee/:id
- Delete an existing employee with a matching ID

## Support

Nest is an MIT-licensed open-source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
