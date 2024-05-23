import sys
import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification
from twikit import Client
import logging

logger = logging.getLogger("transformers")
logger.setLevel(logging.ERROR)  # Only log errors (or a higher level)

# Rest of your code for loading the model and making predictions



def main(input_string):
    # Your existing code here
    USERNAME = 'alucrad_2000'
# 'saeedansari24'
EMAIL = 'alucradsmith@gmail.com' 
# 'saeedansari24@gmail.com'
PASSWORD = 'Jondoe1999' 
# 'dgbwatnomd'

# Initialize client
client = Client('en-US')
# Login to the service with provided user credentials
# client.login(
#     auth_info_1=USERNAME ,
#     auth_info_2=EMAIL,
#     password=PASSWORD
# )

# client.save_cookies('alucrad_cookies.json')

client.load_cookies('C:/Users/Dilshad/Desktop/Major-Project/server/src/toram_cookies.json')
# print(sys.argv[1])
USER_SCREEN_NAME = sys.argv[1]
user = client.get_user_by_screen_name(USER_SCREEN_NAME)
# print('1')
user_tweets = user.get_tweets('Tweets')
# print('2')

tweets_string = ""

i = 0
while i < 100:
    for tweet in user_tweets:
        if (tweet.retweeted_tweet):
            continue
        if not(tweet.full_text):
            tweets_string += tweet.text
            i += 1
        else:
            tweets_string += tweet.full_text
            i += 1
        if i >= 100:
            break
    if i >= 100:
        break
    user_tweets = user_tweets.next()

# Now tweets are stored in the 'tweets_string' variable
# print(tweets_string)

# Load the trained model and tokenizer
model_path = 'C:/Users/Dilshad/Desktop/Major-Project/quality_data_model5ep'
model = LongformerForSequenceClassification.from_pretrained(model_path)
tokenizer = LongformerTokenizer.from_pretrained(model_path)



# Tokenize the input text
inputs = tokenizer(tweets_string, padding=True, truncation=True, max_length=512, return_tensors="pt")

# Create a PyTorch dataset from the tokenized input
input_ids = inputs["input_ids"]
attention_mask = inputs["attention_mask"]
dataset = torch.utils.data.TensorDataset(input_ids, attention_mask)

# Use the trained model to make predictions on the dataset
with torch.no_grad():
    outputs = model(input_ids, attention_mask=attention_mask)

# Extract predictions from the output
prediction = torch.argmax(outputs.logits, dim=1)
prediction=prediction.item()
print(prediction)

if __name__ == "__main__":
    if len(sys.argv) != 2:
        print("Usage: python script.py <input_string>")
        sys.exit(1)
    
    input_string = sys.argv[1]
    main(input_string)




