/*As a user:

-When the app starts, I can see all listings.
    -When the page loads, listings should be loaded.
        -useState in App 
        -Fetch the data from the server using useEffect
        -Make a copy of the data and make a ListingCard for each 
-I can "favorite" and "unfavorite" a listing on the frontend by clicking the star icon. This feature doesn't need backend persistence.
    -When I click on the star, it should fill and unfill
        -useState in ListingCard for favoriting the star
        -add a click event to the button
        -write a function to handle the click
-I can remove a listing from the page by clicking the trash can icon. This change should be persisted in the backend.
    -When i click on the trash icon, the post should delete off the page.
        -Add a click event to the trash icon in ListingCard
        -In App, create a delete fetch
            -pass this into ListingContainer -> ListingCard inside the click func
-I can search for listings by their name.
    -When I type in the search bar, i should be able to filter through the array and find what I need.
        -Make the searchbar in Search comp a controlled form with useState
        -In App, create a function that would filter through the listings to match what is being typed
*/
