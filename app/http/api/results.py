import pandas as pd

def runThis():
  df = pd.read_csv ('uploads/NetflixViewingHistory.csv')
  dict = {}
  def countShow(title):
    #We Bare Bears is We Bare Bears regardless of whether I'm watching Season 4 Episode 19 or Season 3 Episode 2
    #so we will split the title by ":" so that we can just grab the title happening before the colon for episodic shows
    # "We Bare Bears: Season 3: Panda's Friend".split(:)[0] --> "We Bare Bears"
    if ':' in str(title): 
        showName = str(title).split(':')[0]
    # if it's a movie or not-episodic, probably not going to have a ":" so we just add it to our dictionary
    else:
        showName = title
    if showName in dict:
        dict[showName] += 1
    else:
        dict[showName] = 1
  #we can use .apply() which takes a callback function. it's like array.map(func) in JS
  #df['Title'].apply(lambda x: countShow(x))
  df['Title'] = df['Title'].astype('str')
  df['Title'].apply(lambda x: countShow(x))
  return dict
