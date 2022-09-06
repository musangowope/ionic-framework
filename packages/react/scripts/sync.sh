# Copy core dist
rm -rf node_modules/@monorepo-starter/core/dist node_modules/@monorepo-starter/core/components
cp -a ../../core/dist node_modules/@monorepo-starter/core/dist
cp -a ../../core/components node_modules/@monorepo-starter/core/components
cp -a ../../core/package.json node_modules/@monorepo-starter/core/package.json

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../core/node_modules/ionicons node_modules/ionicons
