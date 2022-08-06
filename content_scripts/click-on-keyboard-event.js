console.info("click-on-keyboard-event.js running...");

function getSelectedElement() {
    const selection = window.getSelection();
    if (selection === null || selection === undefined) {
        console.warn("no element selected");
        return null;
    }
    const anchorNode = selection.anchorNode;
    // If the anchorNode is an element node, then that is the element selected
    // Otherwise, the anchorNode's parentElement is the selected element
    const selectedElement = (anchorNode.nodeType === 1) ?
        anchorNode : anchorNode.parentElement;
    console.warn("Here is the selected element: ");
    console.warn(selectedElement);
    return selectedElement;
}

function clickElement(element) {
    const clickEvent = new MouseEvent("click");
    element.dispatchEvent(clickEvent);
}

function clickSelectedElement() {
    const selectedElement = getSelectedElement();
    clickElement(selectedElement);
}

function clickSelectedElementOnKeyPress(key) {
    /* key will be just a string with a single key's name */
    checkType(key, "string");
    window.addEventListener("keydown", keyDownEvent => {
        if (keyDownEvent.key === key || keyDownEvent.code === key) {
            console.log("clicking on selected element...");
            clickSelectedElement();
            console.log("clicked on selected element...");
        }
    });
}

clickSelectedElementOnKeyPress("ControlRight");
console.info("click-on-keyboard-event.js finished running...");
