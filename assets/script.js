// First, tell us your name
let yourName = "Fuad O. Jinadu" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb = 0      // Ginger bread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let myTotal = 0 //total order

// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`

//////////////////////////////// Start "+" /////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//-------------------------------------------------------------------------------------------------------
// Event listener for clicks on the "+" button for Ginger Bread cookies
document.getElementById('add-gb').addEventListener('click', function() {

    //add 1 to the current value 
    gb = gb+1
    //update qty
    document.getElementById('qty-gb').innerText = gb;

    //total qty ginger bread
    myTotal = gb + cc + sugar;
    // output
    document.getElementById('qty-total').innerText = myTotal;
})

// Event listener for clicks on the "+" button for Chocolate Chip cookies
document.getElementById('add-cc').addEventListener('click', function() {
    //add 1 to the current value 
    cc = cc +1;
    //update qty
    document.getElementById('qty-cc').innerText = cc;

    //total qty chocolate chip cookies
    myTotal = gb + cc + sugar;
    // output
    document.getElementById('qty-total').innerText = myTotal;
    
})

// Event listener for clicks on the "+" button for Sugar cookies
document.getElementById('add-sugar').addEventListener('click', function() {
    //add 1 to the current value 
    sugar = sugar +1;
    //update qty
    document.getElementById('qty-sugar').innerText = sugar;

    //total qty sugar cookies
    myTotal = gb + cc + sugar;
    // output
    document.getElementById('qty-total').innerText = myTotal;
})
////////////////////////////////////////////// End the "+" buttons/////////////////////////////////////////////////////
    
// Event listener for clicks on the "-" button for Ginger Bread cookies
document.getElementById('minus-gb').addEventListener('click', function() {

    //add 1 to the current value 
    gb = gb - 1

    if (gb <= 0)
    {
        gb = 0;
        //update qty
        document.getElementById('qty-gb').innerText = 0;

        myTotal = gb + cc + sugar;
        document.getElementById('qty-total').innerText = myTotal;
    }
    else
    {
        //update qty for gb
        document.getElementById('qty-gb').innerText = gb;

        //total qty
        myTotal = gb + cc + sugar;
        //output
        document.getElementById('qty-total').innerText = myTotal;
    }
    
})

// Event listener for clicks on the "-" button for Chocolate Chip cookies
document.getElementById('minus-cc').addEventListener('click', function() {
    //add 1 to the current value 
    cc = cc - 1;

    if (cc <= 0)
    {
        cc = 0;
        //update qty
        document.getElementById('qty-cc').innerText = 0;

        //total qty
        myTotal = gb + cc + sugar;
        // output
        document.getElementById('qty-total').innerText = myTotal;
    }
    else
    {
        //update qty
        document.getElementById('qty-cc').innerText = cc;

        //total qty
        myTotal = gb + cc + sugar;
        // output
        document.getElementById('qty-total').innerText = myTotal;
    }
    
})

// Event listener for clicks on the "-" button for Sugar cookies
document.getElementById('minus-sugar').addEventListener('click', function() {
    //add 1 to the current value 
    sugar = sugar - 1;

    if (sugar <= 0)
    {
        sugar = 0;
        //update qty
        document.getElementById('qty-sugar').innerText = 0;

        //total qty
        myTotal = gb + cc + sugar;
        // output
        document.getElementById('qty-total').innerText = myTotal;
    }
    else
    {
        //update qty
        document.getElementById('qty-sugar').innerText = sugar;

        //total qty
        myTotal = gb + cc + sugar;
        // output
        document.getElementById('qty-total').innerText = myTotal;
    }
})