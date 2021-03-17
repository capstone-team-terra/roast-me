# https://www.thamizhchelvan.com/python/simple-file-upload-python-flask/

import os
from flask import Flask, request, render_template, url_for, redirect
from results import runThis

app = Flask(__name__)

@app.route("/")
def fileFrontPage():
  return render_template('fileform.html')

@app.route("/done")
def results():
  dictionary = runThis()
  return render_template('results.html', value=dictionary)

@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    if 'submission' in request.files:
        file = request.files['submission']
        if file.filename != '':            
            file.save(os.path.join('./', file.filename))
    #return redirect(url_for('fileFrontPage'))
    return redirect(url_for('results'))

if __name__ == '__main__':
  app.run(debug=True, port=3145)