xcode-select -s /Applications/Xcode-beta.app
xcodebuild -runFirstLaunch
xcodebuild -importPlatform "~/Downloads/watchOS 9 beta Simulator Runtime.dmg"
uvicorn services.assistant.app.main:app --reload --host 0.0.0.0 --port 8000
