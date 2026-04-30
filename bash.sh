xcode-select -s /Applications/Xcode-beta.app
xcodebuild -runFirstLaunch
xcodebuild -importPlatform "~/Downloads/watchOS 9 beta Simulator Runtime.dmg"
uvicorn services.assistant.app.main:app --reload --host 127.0.0.1 --port 8000

$ echo $CR_PAT | docker login ghcr.io -u web4application --password 
Login Succeeded

mkdir actions-runner && cd actions-runner
curl -o actions-runner-linux-x64-2.328.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.328.0/actions-runner-linux-x64-2.328.0.tar.gz

$ echo "01066fad3a2893e63e6ca880ae3a1fad5bf9329d60e77ee15f2b97c148c3cd4e"  actions-runner-linux-x64-2.328.0.tar.gz" | shasum -a 256 -c

tar xzf ./actions-runner-linux-x64-2.328.0.tar.gz
npx wrangler deploy
4curl -X POST https://domain.com \
     -H "X-Api-Key: your-super-secret-random-string" \
     -d "user_id=123&event=login"
curl -X POST https://my.domain.com \
     -H "X-Api-Key: your-super-secret-random-string" \
     -H "Content-Type: application/json" \
     -d '{"user_id": 123, "event": "login"}'
