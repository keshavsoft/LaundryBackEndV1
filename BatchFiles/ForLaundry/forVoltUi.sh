mkdir public/Volt

cd ../VoltUI
git pull

gulp build:publicDir

cp -r  ./publicDir/* ../LaundryBackEndV1/public/Volt

cd ../LaundryBackEndV1