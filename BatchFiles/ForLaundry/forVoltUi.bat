@echo off
cd ..\VoltUI
git pull

rmdir /s /q .\publicDir\*

call gulp build:publicDir

xcopy .\publicDir ..\LAUNDRYBACKENDV1\public\Volt /h /i /c /k /e /r /y

cd ..\LAUNDRYBACKENDV1