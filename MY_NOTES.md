# My Learning Notes – Bootcamp 2

## Main flow I wrote down
1. Someone creates a market and sets the resolve block
2. People bet YES or NO
3. Scheduler calls the contract at that block
4. Contract fetches data with HTTP precompile
5. jq pulls out the number
6. Contract decides YES / NO / Invalid
7. People claim if they won

## Things that surprised me
- Failed oracle reads don’t count as NO
- The contract pays for its own future execution in advance
- Each retry can use a different executor

## Questions I still have
- How expensive the HTTP calls will be on mainnet
- Whether we can use more complex jq filters later

Overall this was the most practical session so far.
