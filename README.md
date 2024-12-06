# GIPHY Search Engine

A dynamic and visually engaging search engine for GIFs, created as part of a technical interview challenge for an AI assistant startup. This project was completed within a 60-minute timeframe, showcasing my ability to deliver efficient and creative solutions under time constraints.

### Required Features
- **Trending GIFs**: Displays the top 10 trending GIFs using GIPHY's `Trending` API endpoint when no search term is entered.
- **Search Functionality**: Fetches and displays the 10 most relevant GIFs based on the user’s input using GIPHY's `Search` API endpoint.
- **Dynamic Updates**: Automatically updates GIF results when the search term is modified or removed, reverting to trending GIFs.

### Additional Features 

- **Debounced Search**: Implements a `250ms` debounce to optimize API requests and reduce unnecessary network calls.
- **Interactive UI**: Displays GIFs in a circular halo around the search bar for a modern, sleek, and unique design.


### Technical Details
Framework: React.js (bootstrapped with Create React App).
API: GIPHY API endpoints for trending and search functionality.
Optimization: Debounced search for enhanced user experience and efficient network usage.
Styling: CSS animations and keyframes for a gradient background, combined with custom styling for the halo effect.


### Installation

1. Clone the repository:

```
git clone https://github.com/athom031/GIPHY_Search_Engine.git
cd GIPHY_Search_Engine
```

2. Install dependencies:

```
npm install
```

3. Create a `.env` file and add your GIPHY API key:

```
touch .env 
GIPHY_API_KEY = <your_api_key_here>
```

4. Start the development server:

```
npm start
```

### Scripts
- Start Development Server:
```
npm start  
```

Runs the app in development mode at http://localhost:3000.

- Build for Production:

```
npm run build  
```

Generates an optimized production build in the `build` folder.


### Key Learnings
- **Efficient State Management**: Leveraged debouncing to minimize redundant API requests while maintaining real-time responsiveness.
- **Creative UI Design**: Designed an engaging and user-friendly interface with circular GIF placement, enhancing the visual appeal.
- **Going Beyond Requirements**: Demonstrated initiative and creativity by adding features like debouncing and a unique styling approach that were not part of the original prompt.
- **Time-Bound Execution**: Successfully delivered a fully functional solution with aesthetic enhancements under a strict 60-minute deadline.


### Demo


### Future Improvements
- Expand GIF display options with pagination.
- Add categories for refined trending GIF searches.
- Enhance accessibility for screen readers and keyboard navigation.