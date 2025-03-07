#!/bin/bash

# Navigate to the crudFrontEnd directory
cd ../crudFrontEnd

# Run the Dashboard npm script
npm run Dashboard

# Copy the AllTables directory to the target directory in CrudGenV4
rsync -av --progress ./publicDir/AllTables/ ../CrudGenV4/public/crudFrontEnd/AllTables

# Navigate to the CrudGenV4 directory
cd ../CrudGenV4

