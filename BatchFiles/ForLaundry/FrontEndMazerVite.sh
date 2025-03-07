#!/bin/bash

# Navigate to the FrontEndMazerVite directory
cd ../FrontEndMazerVite

# Run each npm script sequentially
npm run FromBranchVoucher
npm run FromBranchQrCodes
npm run WashingVoucher
npm run FromEntryQrCodes
npm run PressingQrCodes
npm run PressingVoucher
npm run CompletionVoucher
npm run CompletionQrCodes

# Copy the publicDir to the target directory in LaundryBackEndV1rsync -av --progress ./publicDir/ ../CrudGenV4/public/Laundry/Factory

# Navigate to the CrudGenV4 directory
cd ../LaundryBackEndV1