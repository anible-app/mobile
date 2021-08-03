# Fix gradle issue
sed -i '' -e 's/ArrayList<HashMap<String, String>>\[\] packages/ArrayList<HashMap<String, String>> packages/' ./node_modules/@react-native-community/cli-platform-android/native_modules.gradle

# replace jcenter with mavenCentral
cd node_modules
usages="$(grep -r 'jcenter()' | awk '{print $1}' | sed 's/://g')"
for usage in $usages; do
  sed -i '' -e 's/jcenter/mavenCentral/g' "$usage"
done
cd ..