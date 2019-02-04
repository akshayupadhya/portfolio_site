npm run build
npm run generate
cp -r  out/ dist
mv dist/ ../
git checkout master
rm -rf ./* 
mv ../dist/* ./
git add . 
git commit -am "automated deployment "
git push files master
git checkout 2019