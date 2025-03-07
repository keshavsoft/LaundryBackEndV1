@echo off
cd ..\crudFrontEnd

call npm run Dashboard

xcopy .\publicDir\AllTables ..\LaundryBackEndV1\public\crudFrontEnd\AllTables /h /i /c /k /e /r /y

cd ..\LaundryBackEndV1