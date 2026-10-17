## Architecture

* Compare and contrast the types of frontend development you used in your full stack project, including Express HTML, JavaScript, and the single-page application (SPA).


* Why did the backend use a NoSQL MongoDB database?

MongoDB have a flexible schema that allows for easy adoption. Unlike a standard SQL schema, each document does not need to have every field. MongoDB also easily integrates with Javascript to define models 


## Functionality
* How is JSON different from Javascript and how does JSON tie together the frontend and backend development pieces?

JSON is a structured file format where Javascript is a programming language. JSON is a plain text based structured with sets of key/value pairs. 

JSON ties these together by way of RESTful API's. The frontend can request data from the database and typically returns a JSON response. The front end can also
send JSON requests to update the database. 

* Provide instances in the full stack process when you refactored code to improve functionality and efficiencies, and name the benefits that come from reusable user interface (UI) components.

Reusable interface components allow for portability and scalable applications. That also improve the look and feel by using the same styles across all pages / new web applications.

## Testing

* Methods for request and retrieval necessitate various types of API testing of endpoints, in addition to the difficulties of testing with added layers of security. Explain your understanding of methods, endpoints, and security in a full stack application.

I have personal experience with OAuth2 and using bearer tokens. I have developed servlets and applications that will use two endpoints to access an API. One that will generate the bearer token and the other that uses the token to access the API. This is usually done with a client_id and client_secret used to get the token. Most tokens are short lived and would need to be requested for each API usage. If there are query limits via SLA tiers, adding that token request every time can consume more requests. saving the bearer token in a safe o

## Reflection

* How has this course helped you in reaching your professional goals? What skills have you learned, developed, or mastered in this course to help you become a more marketable candidate in your career field?

This course opened my eyes to the web side of the field. Where most newer applications, even at the enterprise level, are web based and understanding how they are all tied together gives me a leg up.

The authentication portion of this class / project is something that I plan to use. I also develop in MuleSoft where I handle authentication, but that process lacks the token piece. All that is handled by Anypoint and MuleSoft.
