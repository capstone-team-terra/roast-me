# [START gae_flex_quickstart]
import logging

from flask import Flask, request, render_template, url_for, redirect
from pickleData import pickleThis
from charts.MostViewed import viewsCounter
from charts.TopGenres import genresCounter
from charts.WatchTime import watchFrequency
from charts.MostPopular import popularityCounter
from charts.RunTime import runTime
from charts.TopRegions import regionsCounter

app = Flask(__name__)


@app.route('/')
def index():
    url = url_for('static', filename='bundle.js')
    return render_template('index.html', bundle=url)

@app.route('/results/<user>')
def resultsForUser(user):
    url = url_for('static', filename='bundle.js')
    return render_template('index.html', bundle=url)


@app.route("/handleUpload", methods=['POST'])
def handleFileUpload():
    print('REQUEST ----> ', request.data)
    data = request.data.decode("utf-8")
    df = pickleThis(data)
    mostViewed = viewsCounter(data)
    topGenres = genresCounter(df)
    mostPopular = popularityCounter(df)
    watchFreq = watchFrequency(data)
    watchTime = runTime(df)
    topRegions = regionsCounter(df)

    return {'genres': topGenres,
            'views': mostViewed,
            'popularity': mostPopular,
            'viewcount': watchFreq,
            'runtime': watchTime,
            'regions': topRegions
            }


@app.errorhandler(500)
def server_error(e):
    logging.exception('An error occurred during a request.')
    return """
    An internal error occurred: <pre>{}</pre>
    See logs for full stacktrace.
    """.format(e), 500


if __name__ == '__main__':
    # This is used when running locally. Gunicorn is used to run the
    # application on Google App Engine. See entrypoint in app.yaml.
    app.run(host='127.0.0.1', port=8080, debug=True)
# [END gae_flex_quickstart]
