require('irisjs')({ 
  "port": 4000, 
  "https": false, 
  "https_key": "", 
  "https_cert": "", 
  "db_server": "localhost", 
  "db_port": 27017, 
  "db_name": "mysite", 
  "max_file_size": 10, 
  "path": "/sites/mysite" });