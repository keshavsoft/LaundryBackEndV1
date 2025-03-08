mkdir public/Laundry/Branch

cd ../LaundryFrontEndForBranch
git pull

npm run Today-Orders
npm run Today-QrCodes
npm run NewOrders
npm run CustomersToOrders
npm run Masters
npm run BranchToday
npm run AllDays
npm run TodayReports
npm run Dashboard-QrCodeWise-AsArray
npm run Branch-CommonConfig-Menu
npm run Dashboard-CommonConfig-AsArray
npm run Factory-ToFactory
npm run FromFactory-Completion
npm run FromFactory-EntryReturn
npm run FromFactory-WashingReturn
npm run FromFactory-PressingReturn
npm run FromFactory-EntryReturnQrCodes
npm run FromFactory-WashingReturnQrCodes
npm run FromFactory-PressingReturnQrCodes
npm run FromFactory-CompletionQrCodes
npm run Dashboard-QrCodeAtStage-BranchFilter
npm run Delivery
npm run Orders
npm run Payments
npm run QrCodes
npm run All-Dcs

cp -r  ./publicDir/* ../LaundryBackEndV1/public/Laundry/Branch

cd ../LaundryBackEndV1