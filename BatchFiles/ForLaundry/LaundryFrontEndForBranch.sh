cd ../LaundryFrontEndForBranch

npm run Today-Orders
npm run Today-QrCodes
npm run NewOrders
npm run CustomersToOrders
npm run Masters
npm run BranchToday
npm run TodayReports
npm run Dashboard-QrCodeWise-AsArray
npm run Branch-CommonConfig-Menu
npm run Dashboard-CommonConfig-AsArray
npm run FactoryMenu
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
call npm run Delivery


cp -r  ./publicDir/* ../CrudGenV4/public/Laundry/Branch

cd ../CrudGenV4