cd ../LaundryFrontEndForFactory

npm run FromBranchVoucher
npm run FromBranchQrCodes

npm run WashingVoucher
npm run FromEntryQrCodes

npm run PressingVoucher
npm run PressingQrCodes

npm run CompletionVoucher
npm run CompletionQrCodes

cp -r ./publicDir/* ../CrudGenV4/public/Laundry/Factory

cd ../CrudGenV4