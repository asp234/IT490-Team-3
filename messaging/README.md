# How to use RabbitMQ Management

## What do I need in docker-compose.yml?

''' messaging:
    image: "rabbitmq:3.8.8-management" environment: 
    ports: 
        - 15672:15672

''' 

You have to specify that you're using the management version as well as specifying the forward port you are using in this case port 15672. 

## How do I get to the Web Interface?

You can get to the web interface by going to http://localhost:15672.

## What does it show me?
