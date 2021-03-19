import pandas as pd

# threshold ---> 33000

def popularityCounter():
  df = pd.read_pickle(
        './merged_data.pkl')
  popularCount = len(df[(df['numVotes'] > 30000) & (df['averageRating'] > 5)].index)
  unpopularCount = len(df[(df['averageRating'] < 5) & (df['numVotes'] < 500)].index)
  mediocre = len(df.index) - popularCount - unpopularCount
  popPercent = (popularCount / len(df.index)) * 100.0
  unpopPercent = (unpopularCount / len(df.index)) * 100.0
  medPercent = (mediocre / len(df.index)) * 100.0
  return [popPercent, unpopPercent, medPercent]

#GOAL --> return an array with percentages