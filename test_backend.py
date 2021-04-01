import pytest
from charts.MostViewed import viewsCounter
from charts.MostPopular import popularityCounter
from charts.TopGenres import genresCounter
from charts.RunTime import runTime
from pickleData import pickleThis
import pandas as pd

@pytest.fixture
def data():
  return pickleThis('testNetflixViewingHistory.csv')

@pytest.fixture
def views():
  return viewsCounter('testNetflixViewingHistory.csv')

@pytest.fixture
def genres():
  return genresCounter(pickleThis('testNetflixViewingHistory.csv'))

@pytest.fixture
def time():
  return runTime(pickleThis('testNetflixViewingHistory.csv'))

def test_pickleData(data):
  #print(f"{bcolors.BOLD}Columns in the merged data file should be 'primaryTitle', 'averageRating', 'numVotes', 'Title', 'show_type', 'runtimeMinutes', 'genres', 'tconst', 'Date', 'country'")
  assert all([a == b for a, b in zip(data.columns.values, ['primaryTitle', 'averageRating', 'numVotes', 'Title', 'show_type', 'runtimeMinutes', 'genres', 'tconst', 'Date', 'country'])]), "Columns in dataframe are incorrect."
  assert len(data.index) == 21, "Number of rows in the dataframe should be 21."

def test_mostViewed(views):
  assert type(views) is dict
  assert len(views) == 18, "Dictionary should contain 18 key-value pairs"
  assert views['High School Musical 2'] == 3, "High School Musical 2 should have 3 view counts."
  assert views['High School Musical'] == 2, "High School Musical should have 2 view counts."
  assert views['Jumanji'] == 1, "Jumanji should have 1 view count."

def test_topGenres(genres):
  assert type(genres) is dict
  assert len(genres["data"]) == 14, "Dictionary should contain 14 key-value pairs, data and scores"
  assert genres["data"]["Adventure"] == 4, "Adventure genres should have 4 view counts."

def test_topGenres(genres):
  assert type(genres) is dict
  assert len(genres["data"]) == 14, "Dictionary data should contain 14 key-value pairs"
  assert genres["score"] == 19, "Run time score should be 4"
  assert genres["data"]["Adventure"] == 4, "Adventure genres should have 4 view counts."
  assert genres["data"]["Animation"] == 3, "Animation genres should have 3 view counts."
  assert genres["data"]["Biography"] == 2, "Animation genres should have 2 view counts."

def test_runTime(time):
  print(time)
  assert type(time) is dict
  assert len(time["data"]) == 4, "Dictionary data should contain 4 key-value pairs"
  assert time["score"] == 4, "Run time score should be 4"
  assert time["data"]["2014-12"] == 197.0, "2014-12 should have 197 view counts."
  assert time["data"]["2014-10"] == 85.0, "2014-12 should have 85 view counts."
