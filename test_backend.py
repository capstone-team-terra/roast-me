import pytest
from charts.MostViewed import viewsCounter
from charts.MostPopular import popularityCounter
from pickleData import pickleThis
import pandas as pd

@pytest.fixture
def data():
  return pickleThis('testNetflixViewingHistory.csv')

@pytest.fixture
def views():
  return viewsCounter('testNetflixViewingHistory.csv')

@pytest.fixture
def popularity(data):
  return popularityCounter(data)

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

def test_mostPopular(popularity):
  assert type(popularity) is dict
  assert type(popularity['percents']) is list, "Popularity should have percents list."
  assert len(popularity['percents']) == 3, "Popularity should have percents list of length 3."
  assert 'Jumanji' in popularity['topShow'], "Jumanji should be in the topShow list."
  assert 'High School Musical' in popularity['topShow'], "High School Musical should be in the topShow list."
  assert len(popularity['bottomShow']) == 0, "There should be no shows in the bottomShow list."