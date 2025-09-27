xcode-select -s /Applications/Xcode-beta.app
xcodebuild -runFirstLaunch
xcodebuild -importPlatform "~/Downloads/watchOS 9 beta Simulator Runtime.dmg"
uvicorn services.assistant.app.main:app --reload --host 0.0.0.0 --port 8000

$ echo $CR_PAT | docker login ghcr.io -u web4application --password-mMankind1$&@"
> Login Succeeded
