import pandas as pd

def regionsCounter(df):
  df_merged = df.drop_duplicates(subset='primaryTitle', keep='first')
  countries = df_merged['country']
  countries = countries.dropna()

  region_count = {}
  def countRegions(region):
    # split shows with multiple regions into array of single regions
    if ',' in region:
      regions = region.split(', ')
    else:
      regions = [region]
    # add each occurrence of each region to dict region_count
    for singleRegion in regions:
      if singleRegion in region_count:
        region_count[singleRegion] += 1
      else:
        region_count[singleRegion] = 1

  countries.apply(lambda x: countRegions(x))
  # find region with max count in region_count
  max_region = max(region_count, key=lambda key: region_count[key])
  # find total region occurrences for percentage calculation
  sum_regions = sum(region_count.values())
  region_percents = {}
  # find percents of shows watched for each region
  for region in region_count:
      region_percents[region] = region_count[region] / sum_regions
  # calculate score based on percentage of most watched region out of total watched regions
  score = int(region_percents[max_region] * 25)
  return {'regions': region_count, 'score': score}

