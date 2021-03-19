# https://www.thamizhchelvan.com/python/simple-file-upload-python-flask/

import os
from flask import Flask, request, render_template, url_for, redirect, send_from_directory
from flask_cors import CORS
from werkzeug.utils import secure_filename
from results import runThis
from pickleData import pickleThis
from charts.TopGenres import genresCounter
from charts.WatchTime import watchFrequency
from charts.MostPopular import popularityCounter

UPLOAD_FOLDER = '.'
ALLOWED_EXTENSIONS = {'csv'}

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
CORS(app)


def allowed_file(filename):
    return '.' in filename and \
        filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# @app.route("/")
# def fileFrontPage():
#  return render_template('fileform.html')


@app.route("/done")
def results():
    pickleThis()
    dictionary1 = runThis()
    dictionary2 = genresCounter()
    dictionary3 = popularityCounter()
    dictionary4 = watchFrequency()
    return {'genres': dictionary2,
            'views': dictionary1,
            'popularity': dictionary3,
            'viewcount': dictionary4}


@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    print(request.files)
    if 'submission' in request.files:
        file = request.files['submission']
        if file.filename != '' and allowed_file(file.filename):
            print('ran the if statement')
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            # return redirect(url_for('fileFrontPage'))
            # return redirect(url_for('uploaded_file', filename=filename))
            return redirect(url_for('results'))
    return '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''


@app.route('/uploads/<filename>')
def uploaded_file(filename):
    return send_from_directory(app.config['UPLOAD_FOLDER'], filename)


if __name__ == '__main__':
    app.run(debug=True, port=3145)
