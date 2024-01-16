# Netflix GPT

- Create React App
- Configured TailWind CSS
- Header
- Routing
- Sign up Form
- Login Form
- Form Validation
- Use Ref Hook
- Firebase setup
- Deploying our app to production
- Steps   
    - setup cli
         - Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
         - firebase login
    - firebase init
    - npm run build
    - firebase deploy
- Implement Sign In User API
- Created Redux Store with UserSlice
- Implemented Sign Out
- Update Profile
- BugFix - Sign up User displayName and profile picture update
- BugFix - if the user is not logged in Redirect /browse to login page and vice versa
- BugFix - Unsubscribe to the onAuthStateChanged Callback
- Add Hard Coded Values to the constants files
- Register TMDB API and create an app and get access token
- get data from tmdb now playing movies list api
- Fetch Data From TMDB Movies

# Features

- Login Sign Up
    - Sign In / Sign up Form
    - Redirect to Browse Page
- Browse (After authentication)
    - Header
    - Main Movie
        - Trailer in background
        - Title & description
        - Movie Suggestions
            - MovieLists * N
- NetFlix GPT 
    - Search Bar
    - Movie Suggestions