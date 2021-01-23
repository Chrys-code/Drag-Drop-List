# Vanilla JS Drag-Drop-List

Components:

 - Create list button: Create HTML el with event listener to create Modal for input
 - Create Modal: Input for list title, options: create / discard, calls Create List button again to display
 - List Instance: accepts 1 argument: data. (data object contains list title & items) Creates HTML list, append to container/wrapper
   - Remove List Button: Remove parent node from DOM
 - List Item Instance: accepts 2 arguments data, parent. Create list item instance for each data.items, append to list instance
   - Remove List Item from List: Remove parent node from DOM
   - Add To List Button: Add List Item Instance to List, access to list Input in DOM
