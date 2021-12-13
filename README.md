# Alche-Meet-Me!

## Learning Objectives

- Use `useContext` to manage global application state
- Be able to spread props into children components
- Use functions to expose API calls to components
- Use custom hooks to share application logic
- Use props.children to pass child components into a component

## Live Example

https://alchemeetme.netlify.app/

### Description

For this deliverable, we'll be refactoring our Alche-meet-me app to use the `useContext` hook. Currently we're making a call to our `supabase` `users` table to get user data back in our `App.jsx`. We're then prop drilling that user data down to other components that need our user data.

Your responsibility is to take our app from prop drilling the user data to sharing that user data between those same components using the `useContext` hook and custom hooks. You won't need to change any of the css or add new elements to complete this assignment.

Use the [template](https://github.com/alchemycodelab/adv-react-alchemeetme) to start your project.

### Acceptance Criteria

- User should see the profile data being displayed

### Rubric

| Tasks                                                                    | Points |
| :----------------------------------------------------------------------- | -----: |
| Share the user profile through context                                   |      2 |
| Use a custom hook to expose our context state                            |      2 |
| Throw an error if the custom hook is used outside of the proper Provider |      2 |
| Use the children prop to provide context data to child components        |      2 |
| Use the user context state in at least 2 components                      |      2 |
