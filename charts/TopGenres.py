import pandas as pd
import pickle
from collections import Counter


def genresCounter(df):
    #df = pd.read_pickle(
    #    './merged_data.pkl')
    list_of_genres = df['genres'].to_list()
    df['genre_ls'] = df['genres'].apply(
        lambda s: s.split(",") if type(s) == str else s)
    tags_ls = [tags.split(",") if type(tags) == str else []
               for tags in list_of_genres]
    flattened_ls = [item for ls in tags_ls for item in ls]
    counterDist = Counter(flattened_ls)
    dictionary = {}
    total = (len(flattened_ls))
    # these are the genres we deemed basic
    basic_genres = {'Drama', 'Comedy', 'Action', 'Adventure', 'Romance', 'Family', 'Animation'}
    basic_count = 0
    for key, value in counterDist.items():
        dictionary[key] = value
        # add up all shows/movies that fall under basic genres
        if key in basic_genres:
            basic_count = basic_count + value
    # score is based on percentage of basic things watched out of total things watched
    score = int(basic_count / total * 25)
    return {'data': dictionary, 'score': score}
