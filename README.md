# Stress Meter #

A mobile app that helps people to understand their stress level.

## Project details ##

This is a cross-platform mobile app developed with TypeScript and React Native, using Expo for building and testing.

It follows Folder by Feature convention for code organization, and Conventional Commits for traceable messages.

#### Components ####

All components are generated under `src/pages/` directory. Each one of them represents a specific part of the application's flow. Their state are managed with React Hooks, and their navigation are controlled through a StackNavigator declared in `App.tsx` file.

- Home →     Component for displaying a home screen, containing a short introduction asking for the user to start the test.
- Question → Component for displaying a question, showing information to the user and listening to their responses.
- Result →   Component for displaying the test results, including a brief explanation and a suggestion for the user.

## Backlog ##
- [x] [Figma design](https://www.figma.com/design/aOsrD5NB7P7fk4PW4yx3GI/Stress-App?node-id=0-1&t=sJkJps9i1wrpGhrA-1)
- [ ] Code refactoring:
    - [ ] Separate stylesheet code from component file (all)
    - [ ] Analyze ways to improve readability of calculus logic
- [ ] UI redesign
- [ ] Component tests
- [ ] Installation guide
- [ ] Create LICENSE file
- [ ] Search tools to work with accessibility
- [ ] Internationalization
- [ ] Web version (React.js)
