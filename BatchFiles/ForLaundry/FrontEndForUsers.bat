@echo off
cd ..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\CrudGenV4\public\LoginUsers /h /i /c /k /e /r /y

cd ..\CrudGenV4
