Part 2 - Defenses

1. To prevent attacker from injesting script into html, we
- do not allow special characters in username input, only allow numbers, letters and underscore

2. To prevent CSRF attack, we 
- generate a secret token upon user login and user registration using generateRandomness()
- store this secret token in cookie session.token
- add hidden field with secret token in transfer form form.ejs
- unpon receiving transfer request, server verifies the form submission token parameter is the same as the session.token
Note that methods to prevent cookie tampering in part 3 and 4 work collaborately with this defense.
(for logout and close we delete session.token)

3. To ensure cookie integrity, we
- generate an hmac key at the start of the server using generateRandomness()
- upon any change of session data, i.e. register, login, transfer and set profile, we sign the new session data using hmac() and store the signature in session.hmac (for logout and close we delete session.hmac)
- upon receiving transfer requests, server recomputes the hmac on session data and verfies if it matches with session.hmac. If not, logout and display a friendly error message.

4. Same as 3.

5. To prevent attacker from injesting script into SQL, we
- do not allow special characters in input username, only allow numbers, letters and underscore.
- avoid casting user input into sql query, use prepared statements for all database queries.


6. To prevent from profile worm, we
- set up a black list for dangerous html tags,
- any attempt to input tags in the blacklist will be rejected.
