import pandas as pd


def watchFrequency():
    df = pd.read_csv('./NetflixViewingHistory.csv')
    # get all the count for all unique dates
    frequency = df['Date'].value_counts()
    # conver the series to dictionary
    dict = frequency.to_dict()
    return dict
