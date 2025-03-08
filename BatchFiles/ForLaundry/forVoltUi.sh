cd ../VoltUI
git pull

gulp build:publicDir
mkdir LaundryBackEndV1/public/Volt

cp -r  ./publicDir/* ../LaundryBackEndV1/public/Volt

cd ../LaundryBackEndV1