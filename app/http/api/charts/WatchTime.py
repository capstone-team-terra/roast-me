import pandas as pd


def watchFrequency():
    df = pd.read_csv('./NetflixViewingHistory.csv')
    df["Date"] = pd.to_datetime(df["Date"], format='%m/%d/%y')
    df['month_year'] = df['Date'].dt.to_period('M')
    countby_month = df['month_year'].value_counts().sort_index()
    # conver the series to dictionary
    dictionary = dict(zip(countby_month.index.format(), countby_month))
    return dictionary
