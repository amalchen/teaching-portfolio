$targetDomain = "www.amalchen.com"


#my attempt to emulate: set -e
#goal: stop script on first error
$ErrorActionPreference = "Stop"

#rebuild site
npm run build

#create nojekyll file to stop github from breaking things~
#-> this is supposed to emulate the `touch` cmd; see: https://superuser.com/a/540935
cd dist
ni -i file .nojekyll

#create CNAME record for dns (in same dir as nojekyll file)
$targetDomain > "CNAME"



