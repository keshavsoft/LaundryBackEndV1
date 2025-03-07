#!/bin/bash

# Navigate to the FrontEndForUsers directory
cd ../FrontEndForUsers

# Run the Users npm script
npm run Users

# Copy the LoginUsers directory to the target directory in LaundryBackEndV1rsync -av --progress ./publicDir/LoginUsers/ ../CrudGenV4/public/LoginUsers

# Navigate to the CrudGenV4 directory
cd ../LaundryBackEndV1