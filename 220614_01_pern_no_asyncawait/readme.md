
Here we experiment with the previous project:

`220611_02_postgres`

Here we were following a youtube tutorial for building a note keeping 
application using the PERN stack.

In the previous project we are using the async await feature of node.
When we call the mock client, the response come in a different order.
Due to the asynchronous feature of async await.
The requests are triggered almost all at the same time,
but the response can take its time to return.

Without the async await feature I expect that the application will
not be able receive many requests together.
The backend app will need to receive then it needs to make the IO task
of getting/posting the data. And the responding to the client.
Hence, the client will receive the response in the order that they
were requested.

Next step:
Already made things work the way they were in the previous project, 
installed and started the database, and ran the creation of the table. 
Now, we want to exclude the async await to see
what happens in the order of executio of queries in the mockClient.js.
I expect that the execution will happen in the order that they are written the in script.

```
root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# node mockClient.js 
>>> 2. GET request get all todos
[
  { todo_id: 1, description: 'I need to clean my room.' },
  { todo_id: 4, description: 'I need to clean my room.' },
  { todo_id: 2, description: 'This is a changed description' }
]
>>> 3. GET request get just one todo item with specific id
[ { todo_id: 2, description: 'This is a changed description' } ]
>>> 1. POST request
{ todo_id: 5, description: 'I need to clean my room.' }
>>> 5. DELETE request
Todo was deleted
>>> 4. PUT request to change just 1 object
Todo was updated


root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# node mockClient.js 
>>> 2. GET request get all todos
[
  { todo_id: 1, description: 'I need to clean my room.' },
  { todo_id: 4, description: 'I need to clean my room.' },
  { todo_id: 5, description: 'I need to clean my room.' },
  { todo_id: 2, description: 'This is a changed description' }
]
>>> 3. GET request get just one todo item with specific id
[ { todo_id: 2, description: 'This is a changed description' } ]
>>> 5. DELETE request
Todo was deleted
>>> 1. POST request
{ todo_id: 6, description: 'I need to clean my room.' }
>>> 4. PUT request to change just 1 object
Todo was updated
root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# 
```

This is an example of race condition.
Which in the case of HTTP request it is ok.
This is what we expect in a situation of asynchronous program.
We can see that the order of execution can change in each different run of the program.


My hypothesis is, when we exclude the async await feature of the code
it will run in the order that it is called.
But I believe that we loose in performance.
This is something that we could try to measure later.

Idea: Build a Go client using http package.
Instead of using a javascript client we can use a Go client in its place.

```
root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# node mockClient.js 
>>> 2. GET request get all todos

>>> 3. GET request get just one todo item with specific id

>>> 4. PUT request to change just 1 object
Todo was updated
>>> 5. DELETE request
Todo was deleted
^C
root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# node mockClient.js 
>>> 2. GET request get all todos

>>> 3. GET request get just one todo item with specific id

>>> 4. PUT request to change just 1 object
Todo was updated
>>> 5. DELETE request
Todo was deleted
^C
```
There is something strange happening.
The request does't end...
And it does't come in the expected order.

Strange maybe I should spend sometime studying async await in javascript.

Install go in ubuntu.
```
apt update
apt search golang-go
apt install golang-go
```

```
root@96bf7c14a933:~/webdev_study/220614_01_pern_no_asyncawait/server/tests# go run mockClient.go 
2022/06/18 14:27:04 [{"todo_id":1,"description":"I need to clean my room."},{"todo_id":4,"description":"I need to clean my room."},{"todo_id":5,"description":"I need to clean my room."},{"todo_id":6,"description":"I need to clean my room."},{"todo_id":7,"description":"I need to clean my room."},{"todo_id":8,"description":"I need to clean my room."},{"todo_id":2,"description":"This is a changed description"}]
```

This is the output just for the get of all todos using a Go client.






