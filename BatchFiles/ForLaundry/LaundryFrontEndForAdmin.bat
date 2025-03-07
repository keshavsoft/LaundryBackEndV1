@echo off
cd ..\LaundryFrontEndForAdmin
git pull

call npm run Menu
call npm run AdminAllDays-CommonConfig-Menu
call npm run AdminAllDays-CommonConfig-QrCode-AsArray
call npm run AdminAllDays-CommonConfig-QrCode-BranchWise
call npm run AdminAllDays-CommonConfig-QrCode-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-AsArray
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchFilter
call npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchWise
call npm run Admin-Masters
call npm run Admin-Customers
call npm run Admin-Detailed-Masters
call npm run Accounts
call npm run Dcs
call npm run Orders

xcopy .\publicDir ..\CrudGenV4\public\Laundry\Admin /h /i /c /k /e /r /y

cd ..\CrudGenV4