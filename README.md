# etch-a-sketch
This project waas an assignment from the Odin Project. I used JS DOM manipulation to generate the grids and color schemes, along with simple event listeners and logic to swap modes/colors/reset the grid. I made the minimum size 8x8 as I'm a huge fan of bit art. the maximum size is 100x100, as this was the largest size on my machine that didn't noticeably lag. I tested larger sizes but scrapped them as the apps performance takes a heavy hit, exponentially consuming resources as the size of the grid increases. 1000x1000 was a cool grid though, if you have the hardware for it, change the max slider value in the HTML and give it a try! 
# FEATURES
    1. Precision Sketching: Select a grid size and draw single square by square on the grid. Alternating colors is supported.
    2. Pen Flow: Select any color and the grid elements will change color following your mouse.
    3. Rainbow Flow: Similar to Pen Flow, except that the rgb values of the colors are randomized.
    4. Precision Charcoal: WIP use the charcoal color on individual passes over a grid element. When the element is passed over again, incremenet the darkness of the element to be slightly darker.
    5. Color Picking: In any mode (other than charcoal) you can select a new color using the color picker element. The element is from mozilla webkit and also includes a color picker lens so you can sample colors from elsewhere on your screen and match it for drawing. 
    6. Clear: Clears the grid, saves the current mode and grid size. 
    7. Reset: Clears the grid, resets the settings to DEFAULTs.

Notes: When switching between grid sizes the grid is cleared in order to preserve system resources.
-------------------------------------------------------------------------------------------------------------------------------------------

Removed features:
Erase: I removed it because I felt that the functionality was redundant as you can just pick a new color and overwrite a previous grid element at any time.