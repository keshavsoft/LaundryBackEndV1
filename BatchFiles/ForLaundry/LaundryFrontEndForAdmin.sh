
cd ../LaundryFrontEndForAdmin

npm run Menu

npm run AdminAllDays-CommonConfig-Menu

npm run AdminAllDays-CommonConfig-QrCode-AsArray
npm run AdminAllDays-CommonConfig-QrCode-BranchWise
npm run AdminAllDays-CommonConfig-QrCode-BranchFilter
npm run AdminAllDays-CommonConfig-QrCodeAtStage-AsArray
npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchFilter
npm run AdminAllDays-CommonConfig-QrCodeAtStage-BranchWise
npm run Admin-Masters
npm run Accounts
npm run Dcs
npm run Orders

cp -r  ./publicDir/* ../LAUNDRYBACKENDV1/public/Laundry/Admin

cd ../LAUNDRYBACKENDV1