console.log('testing')

// makes a variable called cursor and links the new variable to the cursor ID in the html
const cursor = document.getElementById('cursor');

// creates a gps tracker so that mouse cursor is followed
document.body.onpointermove = event => {
    const {clientX, clientY} = event;

    // animates the new variable to follow the mouse cursor
    cursor.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
        // slows the animation so it lags behind the cursor
    }, {duration: 2000, fill: "forwards"});

    // blob.style.left = `${clientX}px`;
    // blob.style.top = `${clientY}px`;
}