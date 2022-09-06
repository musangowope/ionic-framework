# Copy ionic vue dist
rm -rf node_modules/@monorepo-starter/vue/dist node_modules/@monorepo-starter/vue/css
cp -a ../../../dist node_modules/@monorepo-starter/vue/dist
cp -a ../../../css node_modules/@monorepo-starter/vue/css
cp -a ../../../package.json node_modules/@monorepo-starter/vue/package.json

# Copy ionic vue router dist
rm -rf node_modules/@monorepo-starter/vue-router/dist
cp -a ../../../../vue-router/dist node_modules/@monorepo-starter/vue-router/dist
cp -a ../../../../vue-router/package.json node_modules/@monorepo-starter/vue-router/package.json

# Copy core dist and components
rm -rf node_modules/@monorepo-starter/core/dist node_modules/@monorepo-starter/core/components
cp -a ../../../../../core/package.json node_modules/@monorepo-starter/core/package.json
cp -a ../../../../../core/dist node_modules/@monorepo-starter/core/dist
cp -a ../../../../../core/components node_modules/@monorepo-starter/core/components

# Copy stencil
rm -rf node_modules/@stencil/core
cp -a ../../../../../core/node_modules/@stencil/core node_modules/@stencil/core

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../../../../core/node_modules/ionicons node_modules/ionicons
