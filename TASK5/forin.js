let json = [{
    "name"         : "Karthick", 
    "age"          : "23",
    "qualification": "BE",
    "department"   : "CSE"
},
{
    "name"         : "Ramesh", 
    "age"          : "22",
    "qualification": "BE",
    "department"   : "Mech"
}];


for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(json[key]);
    }
    }

