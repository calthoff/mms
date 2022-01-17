## A sample app that sends a meme to anyone that texts it.

## Setup
1. Sign up for a free Vonage account. 
2. Download the Vonage CLI
<code> npm install -g @vonage/cli </code> 
3. Configure the CLI with your info
<code> vonage config:set --apiKey=XXXXXX --apiSecret=XXXXXX </code> 
4. Create a Vonage app (make sure to select the messages API)
<code> mkdir my_project
CD my_project </code> 
vonage apps:create "Test Application 1"
5. Find and buy a number. Make sure it has MMS. If not, the app will not work <b>(A number with MMS in your might not be available)</b>.
<code> vonage numbers:search US
vonage numbers:buy [NUMBER] [COUNTRYCODE] </code>
6. Link the number to your app
vonage apps:link --number=VONAGE_NUMBER APP_ID
7. Install all dependencies
<code> npm install </code>
