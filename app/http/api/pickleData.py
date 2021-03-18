import pickle
import pandas as pd


def pickleThis():
    df_origin_history = pd.read_csv('./NetflixViewingHistory.csv')
    df_origin_ratings = pd.read_csv('./ratings.csv')

    df_origin_history['rootName'] = df_origin_history['Title'].apply(
        lambda q: q.split(":")[0] if type(q) == str else q)
    df_origin_history['rootName_lower'] = df_origin_history['rootName'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_origin_ratings['title_lower'] = df_origin_ratings['primaryTitle'].apply(
        lambda s: s.lower() if type(s) == str else s)
    df_merged = df_origin_history.merge(
        df_origin_ratings, how="left", left_on="rootName_lower", right_on="title_lower")
    del df_merged['title_lower']
    del df_merged['rootName']

    mergedData_file = 'merged_data.pkl'
    pickle.dump(df_merged, open(mergedData_file, 'wb'))
