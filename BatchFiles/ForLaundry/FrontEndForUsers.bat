@echo off
cd ..\FrontEndForUsers

call npm run Users

xcopy .\publicDir\LoginUsers ..\LaundryBackEndV1\public\LoginUsers /h /i /c /k /e /r /y

cd ..\LaundryBackEndV1