// web/flutter_bootstrap.js
{{flutter_js}}
{{flutter_build_config}}

_flutter.loader.load({
  onEntrypointLoaded: async function(engineInitializer) {
    const appRunner = await engineInitializer.initializeEngine({
      renderer: "canvaskit", // Critical for 3D/AI graphics performance
    });
    await appRunner.runApp();
  }
});
