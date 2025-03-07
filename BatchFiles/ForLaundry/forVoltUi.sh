cd ../VoltUI
git pull

gulp build:publicDir

cp -r  ./publicDir/* ../LaundryBackEndV1/public

cd ../LaundryBackEndV1