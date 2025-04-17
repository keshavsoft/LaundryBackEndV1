@echo off
cd ..\LaundryUIAdminMasters
git pull

call npm run Admin-Masters
@REM call npm run Admin-Customers
@REM call npm run Admin-Detailed-Masters

xcopy .\publicDir ..\LaundryBackEndV1\public\Laundry\V1\AdminMasters /h /i /c /k /e /r /y

cd ..\LaundryBackEndV1