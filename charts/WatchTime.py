import pandas as pd


def watchFrequency(data):
    df = pd.read_csv(data)
    df["Date"] = pd.to_datetime(df["Date"], format='%m/%d/%y')
    df['month_year'] = df['Date'].dt.to_period('M')
    countby_month = df['month_year'].value_counts().sort_index()
    dictionary = dict(zip(countby_month.index.format(), countby_month))
    return dictionary
