import pandas as pd
import pickle
from collections import Counter


def genresCounter():
    df = pd.read_pickle(
        './merged_data.pkl')
    # change the path when testing
    list_of_genres = df['genres'].to_list()
    df['genre_ls'] = df['genres'].apply(
        lambda s: s.split(",") if type(s) == str else s)
    tags_ls = [tags.split(",") if type(tags) == str else []
               for tags in list_of_genres]
    flattened_ls = [item for ls in tags_ls for item in ls]
    counterDist = Counter(flattened_ls)
    dictionary = {}
    for key, value in counterDist.items():
        dictionary[key] = value
    return dictionary