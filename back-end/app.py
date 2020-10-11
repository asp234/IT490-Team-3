import pika
import time

time.sleep(10)

print("Back End is Running Now!")

credentials = pika.PlainCredentials('guest', 'guest')
connection = pika.BlockingConnection(
       pika.ConnectionParameters(
           host='messaging',
           credentials=credentials
        )
)
