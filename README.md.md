# Chrome Extension For Linkedin
## Task Overview
 Develop a Chrome extension for LinkedIn using HTML, CSS, and JavaScript. Main objectives include implementing save functionality to bookmark posts, creating shortcut keys for easy access to saved posts, and integrating voice assistance for hands-free navigation. Design a user-friendly interface for efficient interaction with saved content. Test extensively to ensure seamless functionality across different browser environments. Document features and deployment procedures, then publish the extension on the Chrome Web Store.

 ## Description
 Create a Chrome extension for LinkedIn with HTML, CSS, and JavaScript, featuring save functionality, shortcut keys, and voice assistance for accessing saved posts effortlessly. Streamline browsing by bookmarking posts, navigating with shortcuts, and using voice commands for hands-free interaction. Here's a summary of the main components:

 ## Manifest.json:

 - The manifest.json file serves as a configuration file for Chrome extensions.
- It includes essential metadata such as the extension's name, version, and description.
- Permissions are declared in the manifest.json, specifying which features and data the extension can access.
- Manifest.json defines the extension's structure, including background scripts, content scripts, and web accessible resources.
- Additionally, it specifies browser actions, page actions, and options pages, allowing customization and interaction within the browser environment.
# JavaScript Functionalities:
- Use the addEventListener method to bind a function to the keydown event, capturing key presses.
- Within the event handler, check the event.key or event.code properties to identify the pressed key.
- Execute the desired action when the specified key is pressed, such as opening a saved post.
- Utilizes the Web Speech API, specifically the SpeechRecognition interface, to convert spoken language into text.
- Implement a speech recognition event handler to capture spoken commands.
- Once recognized, process the speech input and execute corresponding actions, like opening a saved post.

## Acknowledgement

We express our heartfelt appreciation to Geekster for organizing the Geekathon event, offering us a platform to exhibit our talents. A special shoutout goes to our mentor Jinu Vijayan Sir, whose unwavering guidance and support were instrumental throughout the project's journey.










