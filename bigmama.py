from flask import Flask, render_template
from flask_bootstrap import Bootstrap

app = Flask(__name__)

@app.route("/")
def home():
	title = "Spark SC &middot; Student Innovation at USC"
	return render_template("index.html", title = title)

if __name__ == "__main__":
    app.run(debug = True, host = 'localhost', port = 8080)