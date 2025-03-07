#!/bin/bash

# Navigate to the crudFrontEnd directory
cd ../crudFrontEnd

# Run the Dashboard npm script
npm run Dashboard

# Copy the AllTables directory to the target directory in LaundryBackEndV1rsync -av --progress ./publicDir/AllTables/ ../CrudGenV4/public/crudFrontEnd/AllTables

# Navigate to the CrudGenV4 directory
cd ../LaundryBackEndV1
