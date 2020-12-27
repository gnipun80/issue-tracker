function searchbytag()
{
  document.getElementById('issuesList').innerHTML = "";
  var issues=JSON.parse(localStorage.getItem('issues'));
  var inputi=document.getElementById("searching").value;
  var conf=0;
  for(i=0;i<issues.length;i++)
    {
      var id=issues[i].tagline;
      if(inputi==id)
        {
          conf=1;
    var id=issues[i].id;
    var description=issues[i].description;
    var severity=issues[i].severity;
    var assignto=issues[i].assignto;
    var status=issues[i].status;
    var deadline=issues[i].deadline;
    var started=issues[i].started;
    var closedDate=issues[i].closedDate;
    var tagline=issues[i].tagline;
    if(status=="Open")
      {
    document.getElementById('issuesList').innerHTML+='<div class="well">'+'<h5> Issue ID : '+ id+'</h5>' + '<h4><span class="label label-info">'+ status +'</span></h4>'+'<h3><span class="glyphicon glyphicon-paste"></span>'+"     "+  description + '</h3>'+ '<p><span class="glyphicon glyphicon-bell"></span>'+'     '+ severity+'         '+'<span class="glyphicon glyphicon-user"></span>'+'     '+ assignto + '</p>'+'   '+'<p><span class="glyphicon glyphicon-calendar"></span>'+'  '+'Issued on :'+' '+started+'</p>'
 +'<p><span class="glyphicon glyphicon-time"></span>'+'  '+'Deadline :'+' '+deadline+'</p>' 
 +'<button type="button" class="btn btn-success" onclick="Closed(\''+i+'\')">Close</button>'+'  '+'<button type="button" class="btn btn-danger" onclick="Deleted(\''+i+'\')">Delete</button>'+'  '+'<button type="button" class="btn btn-primary" onclick="Reassigned(\''+i+'\')">Reassign</button>'+'<br></br>'+'<p><span class="glyphicon glyphicon-tag"></span>'+' '+'Tag : '+'<span class="label label-info">'+ tagline +'</span></h4></p>';;
      }
    else
      {
         document.getElementById('issuesList').innerHTML+='<div class="well">'+'<h5> Issue ID : '+ id+'</h5>' + '<h4><span class="label label-warning">'+ status +'</span></h4>'+'<h3><span class="glyphicon glyphicon-paste"></span>'+"     "+  description + '</h3>'+ '<p><span class="glyphicon glyphicon-time"></span>'+'     '+ severity+'         '+'<span class="glyphicon glyphicon-user"></span>'+'     '+ assignto + '</p>'+'   '+'<p><span class="glyphicon glyphicon-calendar"></span>'+' '
 +'Issued on :'+' '+started+'</p>'
 +'<p><span class="glyphicon glyphicon-inbox"></span>'+'  '+'Closed on :'+' '+ closedDate +'</p>'
 +'<p><span class="glyphicon glyphicon-time"></span>'+'  '+'Deadline :'+' '+deadline+'</p>'  +'</p>'+'<button type="button" class="btn btn-info" onclick="Reopened(\''+i+'\')">Reopen</button>'+'  '+'<button type="button" class="btn btn-danger" onclick="Deleted(\''+i+'\')">Delete</button>'+'<br></br>'+'<p><span class="glyphicon glyphicon-tag"></span>'+' '+'Tag : '+'<span class="label label-info">'+ tagline +'</span></h4></p>';
        }
    }
}
  if(conf==0)
    {
       document.getElementById('issuesList').innerHTML+='<div class="well">'+'<h5> No Issue found '+'</h5>'
    }
}

function Reassigned(i)
{
  var assignto=prompt("Reassign to:");
  var issues=JSON.parse(localStorage.getItem('issues'));
      issues[i].assignto = assignto;
  localStorage.setItem('issues', JSON.stringify(issues));
  alert("The Issue has been Reassigned.");
  var k= document.getElementById("searching").value;
  var n = k.length;
  if(n==36)  searchbyId();
  else searchbytag()
}

function Reopened(i) {
  var issues=JSON.parse(localStorage.getItem('issues'));
      issues[i].status = "Open";
  localStorage.setItem('issues', JSON.stringify(issues));
  var k= document.getElementById("searching").value;
  var n = k.length;
  if(n==36)  searchbyId();
  else searchbytag()
}

function Closed(i) {
  var issues=JSON.parse(localStorage.getItem('issues'));
      issues[i].status = "Closed";
    var currentDate=new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1 // January is Month 0, so we add one
    var currentDay = currentDate.getDay();
    if(currentMonth<10 && currentDay<10)
      {
    var closedDate = currentYear + "-0" + currentMonth + "-0" + currentDay;
      }
    else if(currentMonth>9 && currentDay<10)
      {
    var closedDate = currentYear + "-" + currentMonth + "-0" + currentDay;
      }
    else if(currentMonth<9 && currentDay>9)
      {
    var closedDate = currentYear + "-0" + currentMonth + "-" + currentDay;
      }
   else
     {
    var closedDate = currentYear + "-" + currentMonth + "-" + currentDay;
     }
  issues[i].closedDate = closedDate;
  localStorage.setItem('issues', JSON.stringify(issues));
  var k= document.getElementById("searching").value;
  var n = k.length;
  if(n==36)  searchbyId();
  else searchbytag()
}

function Deleted(i) {
  var issues=JSON.parse(localStorage.getItem('issues'));
  issues.splice(i, i+1);
  localStorage.setItem('issues', JSON.stringify(issues));
  var k= document.getElementById("searching").value;
  var n = k.length;
  if(n==36)  searchbyId();
  else searchbytag()
}

function searchbyId()
{
  document.getElementById('issuesList').innerHTML = "";
  var issues=JSON.parse(localStorage.getItem('issues'));
  var inputi=document.getElementById("searching").value;
  var i;
  var conf=0;
  for(i=0;i<issues.length;i++)
    {
      var id=issues[i].id;
      if(inputi==id)
        {
          conf=1;
    var id=issues[i].id;
    var description=issues[i].description;
    var severity=issues[i].severity;
    var assignto=issues[i].assignto;
    var status=issues[i].status;
    var deadline=issues[i].deadline;
    var started=issues[i].started;
    var closedDate=issues[i].closedDate;
    if(status=="Open")
      {
    document.getElementById('issuesList').innerHTML='<div class="well">'+'<h5> Issue ID : '+ id+'</h5>' + '<h4><span class="label label-info">'+ status +'</span></h4>'+'<h3><span class="glyphicon glyphicon-paste"></span>'+"     "+  description + '</h3>'+ '<p><span class="glyphicon glyphicon-bell"></span>'+'     '+ severity+'         '+'<span class="glyphicon glyphicon-user"></span>'+'     '+ assignto + '</p>'+'   '+'<p><span class="glyphicon glyphicon-calendar"></span>'+'  '+'Issued on :'+' '+started+'</p>'
 +'<p><span class="glyphicon glyphicon-time"></span>'+'  '+'Deadline :'+' '+deadline+'</p>' 
 +'<button type="button" class="btn btn-success" onclick="Closed(\''+i+'\')">Close</button>'+'  '+'<button type="button" class="btn btn-danger" onclick="Deleted(\''+i+'\')">Delete</button>'+'  '+'<button type="button" class="btn btn-primary" onclick="Reassigned(\''+i+'\')">Reassign</button>';
      }
    else
      {
         document.getElementById('issuesList').innerHTML='<div class="well">'+'<h5> Issue ID : '+ id+'</h5>' + '<h4><span class="label label-warning">'+ status +'</span></h4>'+'<h3><span class="glyphicon glyphicon-paste"></span>'+"     "+  description + '</h3>'+ '<p><span class="glyphicon glyphicon-time"></span>'+'     '+ severity+'         '+'<span class="glyphicon glyphicon-user"></span>'+'     '+ assignto + '</p>'+'   '+'<p><span class="glyphicon glyphicon-calendar"></span>'+' '
 +'Issued on :'+' '+started+'</p>'
 +'<p><span class="glyphicon glyphicon-inbox"></span>'+'  '+'Closed on :'+' '+ closedDate +'</p>'
 +'<p><span class="glyphicon glyphicon-time"></span>'+'  '+'Deadline :'+' '+deadline+'</p>'  +'</p>'+'<button type="button" class="btn btn-info" onclick="Reopened(\''+i+'\')">Reopen</button>'+'  '+'<button type="button" class="btn btn-danger" onclick="Deleted(\''+i+'\')">Delete</button>';
        }
    }
}
  if(conf==0)
    {
       document.getElementById('issuesList').innerHTML+='<div class="well">'+'<h5> No Issue found '+'</h5>'
    }
}