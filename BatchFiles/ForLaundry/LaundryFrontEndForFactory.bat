@echo off
cd ..\LaundryFrontEndForFactory
git pull

call npm run FromBranchVoucher
call npm run FromBranchQrCodes

call npm run WashingVoucher
call npm run FromEntryQrCodes

call npm run PressingVoucher
call npm run PressingQrCodes

call npm run CompletionVoucher
call npm run CompletionQrCodes

xcopy .\publicDir ..\CrudGenV4\public\Laundry\Factory /h /i /c /k /e /r /y

cd ..\CrudGenV4