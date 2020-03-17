# Create our application:
npx create-react-app my-app

# Add Storybook:
cd my-app
npx -p @storybook/cli sb init
yarn add -D @storybook/addon-storyshots react-test-renderer
if error, run npm install

# Run the test runner (Jest) in a terminal:
yarn test --watchAll

# Start the component explorer on port 9009:
yarn storybook

# Run the frontend app proper on port 3000:
yarn start