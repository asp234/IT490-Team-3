#FROM python
#COPY . /app
#WORKDIR /app
#RUN pip install -r requirements.txt
#ENV FLASK_APP=app.py
#CMD ["./wait-for-it.sh", "messaging:5672", "--","flask", "run", "--host=localhost"]

FROM python

WORKDIR /app

COPY . /app

RUN pip --no-cache-dir install -r requirements.txt

EXPOSE 5000

ENTRYPOINT  ["python"]

CMD ["app.py"]