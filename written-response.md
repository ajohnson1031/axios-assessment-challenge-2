So the first item I needed to understand was matches. I needed to know what was happening there, and to do that, I broke it apart and created a variable for the initial filter clause.

Breaking it down this way helped me to understand how matches was running its checks. It became apparent that by attempting to filter the data in one pass, the filter wasn't exactly parsing each field correctly. My approach then became to parse the fields individually, checking for fields that are not within the search parameters, and pushing each result as a boolean value to a temporary container array. 

The final check was to make sure to return true or false conditional upon whether or not all of the container array values were true. Fixing the matches method this way allowed for the final result upon search to match the expectation.