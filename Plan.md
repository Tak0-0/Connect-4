<!-- 1) the array can remain as is,in CSS rotate the whole board so it loos as if gravity is pulling the chips to the bottom -->
    <!-- 1a) if not array then table, 7 rows by 6 columns,  -->
    <!-- nth child to advance the array in the grid? -->


2) starting out with the game board i need to have a simple array that is empty
    
    2a) with that empty array i take in input from two players.

3) players enter their names and one is chosen to first
        
        3a) one player clicks on gameBoard and it responds by dropping a chip into the array
4) Checker, i need some kind of for loop that makes it so whenever a chip is dropped into the array it runs "checker"
    4a) "checker" once a chip is detected right next to another in the same color, the loop needs to continue in the same direction that the chip was detected
        4b)"checker" will go checking in the same direction until it has either hit the end of the chips or until it has detected four in a row, declaring a winner
5) chips will have to be in a sequence of four for a player to win, if none are detected then the game resets the board
6)have the function read the id numbers and fill in the corresponding spot in the gameBoard array.
what syntax do i need to make the loop read the table's ids and look at my winningKey and check to see if any of the combinations match