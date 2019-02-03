npm run generate
cp -r  out dist
mv dist/ ../
git checkout master
rm -rf ./* 
mv ../dist/* ./
timestamp=$(date \"+%s\") 
git commit -m \"automated deployment $timestamp\";
git push files master
git checkout 2019