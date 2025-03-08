mkdir public/Laundry/Factory

cd ../LaundryFrontEndForFactory
git pull

if [ ! -d "node_modules" ]; then
  npm i
fi

npm run FromBranchVoucher
npm run FromBranchQrCodes

npm run WashingVoucher
npm run FromEntryQrCodes

npm run PressingVoucher
npm run PressingQrCodes

npm run CompletionVoucher
npm run CompletionQrCodes

cp -r ./publicDir/* ../LaundryBackEndV1/public/Laundry/Factory

cd ../LaundryBackEndV1