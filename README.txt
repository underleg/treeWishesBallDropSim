To run, open command window and localhost - eg
"python -m http.server 8080"

open "localhost:8080" in browser

'ctrl-c' to kill it

Updates:
- the recorded ball paths:
-- land near the middle of each target
-- do not bounce against the left or right walls
-- touch at least 3 pegs
-- don't bounce too many times on any 1 peg
- visually:
-- each ball has a particle trail
-- Each prize landing has 3 particle emitters that fire (one instance only) 
-- the screen darkens as the ball nears the hole (if only 1 ball if falling)
-- the ball speed is halved as the ball nears the hole (if only 1 ball if falling)

