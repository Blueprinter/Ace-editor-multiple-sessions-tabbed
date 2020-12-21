# Ace-editor-multiple-sessions-tabbed
Example of loading multiple code editor sessions using the Ace Code editor - Implemented in a Google Apps Script Web App

This example shows the Ace code editor being used to load multiple files,
and create multiple editor sessions that the user can open and close
by using the tabs.

This example is set up in a Google Apps Script Web App.
It is a basic example.
The code editor is started, and then content is loaded into the code editor
by clicking a button, much the same way that you would load a file into the code editor.
When a second file is loaded, a second tab is created, but both sessions are still active
even though only one will be displayed at a time.

This example is basic.
It does not include a way to close tabs, and end a code editor session.
It does not include a way to upload files from a different Apps Script project file.
The focus is on how to create a new Ace code editor session and associate that session with a certain tab.

To create a working example from this code you need a Google account, and you must create an Apps Script file.
Then publish the Apps Script file as a Web App.
https://script.google.com/

The code for the Ace code editor is loaded from a JavaScript library from cloudflare CDN.
Note - to load the ace code editor code you can visit 
https://cdnjs.com/libraries/ace
