from flask import Flask
from flask import render_template
from os import path

app = Flask(__name__)

@app.get("/")
def editorPage():
    return render_template("editorPage.html")
