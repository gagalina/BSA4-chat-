# BSA4-chat-
Chat using node.js (express)


Description of routes

1) message.js - routing for instance of messages/message<br />
1.1 Create message : POST, url: '/messages/add '<br />
1.2 Read all messages : GET, url: '/messages/ '<br/>
1.2 Update message : PUT, url: '/messages/update/:id '<br/>
1.2 Delete message : DELETE, url: '/messages/delete/:id '<br/>

2) user.js - routing for instance of user <br />
1.1 Create user : POST, url: '/users/add '<br />
1.2 Read all users : GET, url: '/users/ '<br/>
1.2 Update user : PUT, url: '/users/update/:id '<br/>
1.2 Delete user : DELETE, url: '/users/delete/:id '<br/>

3) history.js - routing for instance of history <br />
 Get receivers of messages of particular user : GET, url: '/history/:id '<br/>


Run application: npm run dev <br/>
localhost:3000