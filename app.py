from flask import Flask
from flask import render_template

app = Flask(__name__)

#ruteo la aplicación

@app.route('/')
def index():
    return render_template('prueba/index.html')

#arranco la aplicación
if __name__ == '__main__':
    app.run(debug=True)