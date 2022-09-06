# Copy core dist
rm -rf node_modules/@loveless/core/dist node_modules/@loveless/core/components
cp -a ../../core/dist node_modules/@loveless/core/dist
cp -a ../../core/components node_modules/@loveless/core/components
cp -a ../../core/package.json node_modules/@loveless/core/package.json

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../core/node_modules/ionicons node_modules/ionicons
