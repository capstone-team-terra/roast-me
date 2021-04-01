import pandas as pd


def viewsCounter(data):
    df = pd.read_csv(data)
    df = df.dropna()
    dict = {}

    def countShow(title):

        if ':' in str(title):
            showName = str(title).split(':')[0]
        else:
            showName = title
        if showName != 'nan':
            if showName in dict:
                dict[showName] += 1
            else:
                dict[showName] = 1
    df['Title'] = df['Title'].astype('str')
    df['Title'].apply(lambda x: countShow(x))
    return dict
