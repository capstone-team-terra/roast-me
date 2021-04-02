import pandas as pd
import numpy as np


def runTime(df_final):
    # convert date to date object & create new column "month_year" to show MM-YYYY
    df_final["Date"] = pd.to_datetime(df_final["Date"], format='%m/%d/%y')
    df_final['month_year'] = df_final['Date'].dt.to_period('M')
    df_runtime = df_final[['runtimeMinutes', 'month_year']]

    # convert string number to integer under runtimeMinutes
    df_runtime['runtimeMinutes'] = df_runtime['runtimeMinutes'].replace(
        '\\N', np.nan).astype(float)

    # calculate the sum of runtime of each month
    month_group = df_runtime.groupby(['month_year'])
    sum_per_month = month_group['runtimeMinutes'].sum()

    # generate score
    # Scaling based on 2 days worth of hours (your average view hour per year = 48hrs, gets full point)
    sumMin = sum_per_month.sum()
    sumHrs = sumMin / 60
    numMonths = sum_per_month.size
    avgViewHoursPerYear = sumHrs/numMonths
    score = int(25 * (avgViewHoursPerYear / (2 * 24)))

    # convert the series to dictionary
    dictionary = dict(zip(sum_per_month.index.format(), sum_per_month))

    # add data & score in the final dictionary to be returned
    final_dicationary = {"data": dictionary, "score": score}

    return final_dicationary
