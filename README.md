RPS-7 
This is a website for a 7-way game of Rock Paper Scissors [made for homework]
===

File Structure is as such:

RPSWebsite/
|--- RPSLandingPage.html    # Main Landing Page
|--- RPSstyle.css           # Styling for layout
|--- RPSscript.js           # JavaScript to load and render data
|--- outcome.json           # Game outcomes of the RPS-7 in JSON


### 'RPSLandingPage.html'
- The main HTML file that loads the app
- Includes a search bar and a container for displaying results.
- Links to 'RPSstyle.css' for styling and RPSscript.js' for functionality

### 'RPSstyle.css'
- Defines the visual style of the page
- Includes layout rules for the header, style bar, and item cards.
- Uses a clean, responsive design with soft colours and shadows

### 'RPSscript.js'
- Loads 'outcome.json' using 'fetch()'
- Dynamically creates and displays cards for each item and its interactions.
- Adds live search functionality to filter items by name.

### 'outcome.json'
- Contains all the item interactions in structured JSON format.
- Each item has an array of actions it performs on other items.
- Example:
{
    "Rock": [
        { "action": "Pounds Out", "target": "Fire" },
        { "action": "Crushes", "target": "Scissors" },
        { "action": "Crushes", "target": "Sponge" }
    ]
}
