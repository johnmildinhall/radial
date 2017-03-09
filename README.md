# radial

## Radial graph of justice datasets

This is a D3.js visualisation of UK Justice System Datasets.

## Getting started

Clone the repo.

Run a simple python server:
```
python -m SimpleHTTPServer 8000
```


## Updating the data

The raw data is held in .csv format in 'raw-data2.csv'. n.b. any spelling mistakes in the code for the dataset (e.g. laa.caseWorkGoblal rather than laa.caseWorkGlobal) will cause the visualisation to not run. Check your spelling!

To update the visualisation, you need to run a js script to generate a new json file. This is called 'radial3.json'. To do this:

```
npm update
```

```
npm install
```

```
node data-processing.js
```
