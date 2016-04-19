# clean up previous remains, if any
rm -rf Contents/Resources
rm -rf Redux.docset
mkdir -p Contents/Resources/Documents

# create a fresh sqlite db
cd Contents/Resources
sqlite3 docSet.dsidx 'CREATE TABLE searchIndex(id INTEGER PRIMARY KEY, name TEXT, type TEXT, path TEXT)'
sqlite3 docSet.dsidx 'CREATE UNIQUE INDEX anchor ON searchIndex (name, type, path)'

# fetch the whole doc site
cd Documents
wget -m -p -E -k -np http://redux.js.org/

# change folder name to just redux
mv redux.js.org ./redux
cd ../../../

# create data file from base index page
node src/createSectionJSON.js

# change the documentation markup layout a bit to fit dash's small window
node src/modifyDocsHTML.js

# read the previously fetched doc site and parse it into sqlite
node src/index.js

# bundle up!
mkdir Redux.docset
cp -r Contents Redux.docset
cp src/icon* Redux.docset

# Create gzip bundle for Dash Contribution
tar --exclude='.DS_Store' -cvzf Redux.tgz Redux.docset
